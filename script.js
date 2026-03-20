// Menú Hamburguesa para móviles
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al clickear enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Animaciones al hacer scroll (Aparecer suavemente)
const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target); // Solo anima la primera vez
        }
    });
}, { threshold: 0.1 });

// Seleccionar elementos para animar
document.querySelectorAll('h3, #sobre-mi p, .timeline-item, .skill-card, .lang-item, .academic-item, .other-exp-card, .contact-form form').forEach(el => {
    fadeInObserver.observe(el);
});

// Animación específica para las barras de idiomas
const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.lang-bar-fill');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const languagesSection = document.querySelector('.languages');
if (languagesSection) {
    skillObserver.observe(languagesSection);
}

// Efecto del Navbar al hacer Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.nav-logo');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(217, 224, 229, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        if (logo) logo.style.display = 'block';
    } else {
        navbar.style.background = 'var(--bg-header)';
        navbar.style.boxShadow = 'none';
        if (window.innerWidth > 768 && logo) logo.style.display = 'none';
    }
});

// Formulario de Contacto Funcional con Formspree (Sin recargar la página)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evitamos que la página recargue
        
        const data = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.textContent = "¡Mensaje enviado con éxito! Te contactaré pronto.";
                formStatus.style.display = "block";
                contactForm.reset();
            } else {
                formStatus.textContent = "Hubo un problema al enviar el mensaje. Intenta de nuevo.";
                formStatus.style.display = "block";
            }
        } catch (error) {
            formStatus.textContent = "Error de conexión. Revisa tu internet.";
            formStatus.style.display = "block";
        }
    });
}

// Año actual dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();
