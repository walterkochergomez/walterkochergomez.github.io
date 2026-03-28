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
            observer.unobserve(entry.target); 
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

// Formulario de Contacto Funcional con Formspree
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        const data = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            
            const currentLang = localStorage.getItem('preferredLanguage') || 'es';
            const successMsg = {
                es: "¡Mensaje enviado con éxito!",
                de: "Nachricht erfolgreich gesendet!",
                en: "Message sent successfully!"
            };
            const errorMsg = {
                es: "Hubo un problema. Intenta de nuevo.",
                de: "Es gab ein Problem. Bitte versuchen Sie es erneut.",
                en: "There was a problem. Please try again."
            };

            if (response.ok) {
                formStatus.textContent = successMsg[currentLang];
                formStatus.style.display = "block";
                contactForm.reset();
            } else {
                formStatus.textContent = errorMsg[currentLang];
                formStatus.style.display = "block";
            }
        } catch (error) {
            formStatus.textContent = "Error de conexión.";
            formStatus.style.display = "block";
        }
    });
}

// Año actual dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();


// --- SISTEMA MULTI-IDIOMA (ES / DE / EN) ---
const translations = {
    es: {
        "nav_about": "Sobre Mí",
        "nav_exp": "Experiencia",
        "nav_skills": "Habilidades",
        "nav_edu": "Formación",
        "nav_other": "Otras Experiencias",
        "nav_contact": "Contacto",
        "header_subtitle": "ESTUDIANTE DE INGENIERÍA CIVIL INDUSTRIAL",
        "about_title": "Sobre Mí",
        "about_text": "Ingeniero Civil Industrial, con un fuerte enfoque en la optimización de procesos y el análisis de datos. Busco aplicar metodologías ágiles y soluciones tecnológicas para resolver problemas organizacionales complejos. Cuento con capacidad para trabajar en equipos multidisciplinarios y adaptarme a distintos entornos, con el objetivo actual de proyectar mi carrera a nivel internacional y aplicar mis conocimientos profesionales.",
        "btn_cv": "Descargar CV en PDF",
        "exp_title": "Experiencia Laboral",
        "date_actual": "Agosto 2024 - Actual",
        "exp_role1": "Ayudante de Investigación y Operaciones",
        "exp_desc1": "Desarrollo de Talleres y realización de clases practicas",
        "exp_role2": "Ayudante de Termodinámica",
        "exp_desc2": "Desarrollo de material complementario",
        "exp_role3": "Práctica de estudios",
        "exp_desc3_1": "Implementación de un banco de pruebas.",
        "exp_desc3_2": "Desarrollo de laboratorio de electrónica.",
        "exp_role4": "Práctica de estudios",
        "exp_desc4": "Desarrollo de un banco de pruebas.",
        "exp_role5": "Práctica de estudios",
        "exp_desc5": "Programación PLC de sistema semi-automático de llenado de gases.",
        "skills_title": "Habilidades Técnicas y Herramientas",
        "skill1": "Mejora Continua (Lean Six Sigma)",
        "skill2": "Análisis de Datos",
        "skill3": "Automatización y PLC",
        "skill4": "Programación (Java, Python)",
        "skill5": "Diseño 3D (Catia v5, SolidWorks)",
        "skill6": "Comunicación Visual (Adobe Photoshop)",
        "lang_title": "Idiomas",
        "lang_de": "Alemán",
        "lang_en": "Inglés",
        "lang_level_high": "Nivel Alto",
        "lang_level_med": "Nivel Medio",
        "edu_title": "Datos Académicos",
        "edu_degree": "Licenciatura en Ciencias de la Ingeniería",
        "edu_highschool": "Enseñanza media",
        "btn_cert": "Ver Certificado",
        "other_title": "Otras Experiencias",
        "other_desc1": "Participación en taller de optimización de rutas de despacho para vehículos de reparto.",
        "other_desc_cig": "Asistencia al Congreso de Ingeniería Global 2024.",
        "other_desc2": "Participación en Congreso Latinoamericano de Estudiantes e Ingenieros Industriales y Afines (México).",
        "other_desc3": "Participación en taller de Lean Six Sigma White Belt y Lean Six Sigma Yellow Belt.",
        "contact_title": "Contacto",
        "contact_name_ph": "Tu nombre",
        "contact_email_ph": "Tu email",
        "contact_msg_ph": "Tu mensaje",
        "contact_btn": "Enviar Mensaje",
        "footer_rights": "Todos los derechos reservados.",
        "btn_more_info": "Más información"
    },
    de: {
        "nav_about": "Über mich",
        "nav_exp": "Erfahrung",
        "nav_skills": "Fähigkeiten",
        "nav_edu": "Ausbildung",
        "nav_other": "Weitere Erfahrungen",
        "nav_contact": "Kontakt",
        "header_subtitle": "STUDENT DER WIRTSCHAFTSINGENIEURWESEN",
        "about_title": "Über mich",
        "about_text": "Wirtschaftsingenieur mit starkem Fokus auf Prozessoptimierung und Datenanalyse. Ich setze agile Methoden und technologische Lösungen ein, um komplexe organisatorische Herausforderungen zu bewältigen. Ich bin teamfähig, arbeite gerne in interdisziplinären Umgebungen und passe mich schnell an. Mein aktuelles Ziel ist es, meine Karriere international auszurichten und meine Fachkenntnisse gezielt einzubringen.",
        "btn_cv": "Lebenslauf als PDF herunterladen",
        "exp_title": "Berufserfahrung",
        "date_actual": "August 2024 - Heute",
        "exp_role1": "Wissenschaftlicher Mitarbeiter für Forschung und Operations",
        "exp_desc1": "Entwicklung von Workshops und Durchführung von praktischem Unterricht",
        "exp_role2": "Tutor für Thermodynamik",
        "exp_desc2": "Entwicklung von ergänzenden Lehrmaterialien",
        "exp_role3": "Praktikum",
        "exp_desc3_1": "Implementierung eines Prüfstands.",
        "exp_desc3_2": "Entwicklung eines Elektroniklabors.",
        "exp_role4": "Praktikum",
        "exp_desc4": "Entwicklung eines Prüfstands.",
        "exp_role5": "Praktikum",
        "exp_desc5": "SPS-Programmierung eines halbautomatischen Gasabfüllsystems.",
        "skills_title": "Technische Fähigkeiten und Werkzeuge",
        "skill1": "Kontinuierliche Verbesserung (Lean Six Sigma)",
        "skill2": "Datenanalyse",
        "skill3": "Automatisierung und SPS",
        "skill4": "Programmierung (Java, Python)",
        "skill5": "3D-Design (Catia v5, SolidWorks)",
        "skill6": "Visuelle Kommunikation (Adobe Photoshop)",
        "lang_title": "Sprachen",
        "lang_de": "Deutsch",
        "lang_en": "Englisch",
        "lang_level_high": "Hohes Niveau",
        "lang_level_med": "Mittleres Niveau",
        "edu_title": "Ausbildung",
        "edu_degree": "Bachelor of Science in den Ingenieurwissenschaften",
        "edu_highschool": "Abitur / Sekundarstufe",
        "btn_cert": "Zertifikat ansehen",
        "other_title": "Weitere Erfahrungen",
        "other_desc1": "Teilnahme an einem Workshop zur Routenoptimierung für Lieferfahrzeuge.",
        "other_desc_cig": "Teilnahme am Global Engineering Congress 2024.",
        "other_desc2": "Teilnahme am lateinamerikanischen Kongress für Studenten und Ingenieure im Wirtschaftsingenieurwesen (Mexiko).",
        "other_desc3": "Teilnahme am Lean Six Sigma White Belt und Yellow Belt Workshop.",
        "contact_title": "Kontakt",
        "contact_name_ph": "Ihr Name",
        "contact_email_ph": "Ihre E-Mail",
        "contact_msg_ph": "Ihre Nachricht",
        "contact_btn": "Nachricht senden",
        "footer_rights": "Alle Rechte vorbehalten.",
        "btn_more_info": "Weitere Informationen"
    },
    en: {
        "nav_about": "About Me",
        "nav_exp": "Experience",
        "nav_skills": "Skills",
        "nav_edu": "Education",
        "nav_other": "Other Experiences",
        "nav_contact": "Contact",
        "header_subtitle": "INDUSTRIAL CIVIL ENGINEERING STUDENT",
        "about_title": "About Me",
        "about_text": "Industrial Civil Engineer with a strong focus on process optimization and data analysis. I seek to apply agile methodologies and technological solutions to solve complex organizational problems. I have the ability to work in multidisciplinary teams and adapt to different environments, with the current goal of projecting my career internationally and applying my professional knowledge.",
        "btn_cv": "Download CV in PDF",
        "exp_title": "Work Experience",
        "date_actual": "August 2024 - Present",
        "exp_role1": "Research and Operations Assistant",
        "exp_desc1": "Development of workshops and conducting practical classes",
        "exp_role2": "Thermodynamics Teaching Assistant",
        "exp_desc2": "Development of supplementary materials",
        "exp_role3": "Internship",
        "exp_desc3_1": "Implementation of a test bench.",
        "exp_desc3_2": "Development of an electronics laboratory.",
        "exp_role4": "Internship",
        "exp_desc4": "Development of a test bench.",
        "exp_role5": "Internship",
        "exp_desc5": "PLC programming of a semi-automatic gas filling system.",
        "skills_title": "Technical Skills and Tools",
        "skill1": "Continuous Improvement (Lean Six Sigma)",
        "skill2": "Data Analysis",
        "skill3": "Automation and PLC",
        "skill4": "Programming (Java, Python)",
        "skill5": "3D Design (Catia v5, SolidWorks)",
        "skill6": "Visual Communication (Adobe Photoshop)",
        "lang_title": "Languages",
        "lang_de": "German",
        "lang_en": "English",
        "lang_level_high": "Advanced",
        "lang_level_med": "Intermediate",
        "edu_title": "Education",
        "edu_degree": "Bachelor of Science in Engineering",
        "edu_highschool": "High School Diploma",
        "btn_cert": "View Certificate",
        "other_title": "Other Experiences",
        "other_desc1": "Participation in a dispatch route optimization workshop for delivery vehicles.",
        "other_desc_cig": "Attendance at the Global Engineering Congress 2024.",
        "other_desc2": "Participation in the Latin American Congress of Industrial Engineering Students and Professionals (Mexico).",
        "other_desc3": "Participation in Lean Six Sigma White Belt and Yellow Belt workshop.",
        "contact_title": "Contact",
        "contact_name_ph": "Your name",
        "contact_email_ph": "Your email",
        "contact_msg_ph": "Your message",
        "contact_btn": "Send Message",
        "footer_rights": "All rights reserved.",
        "btn_more_info": "More information"
    }
};

// Archivos de CV correspondientes a cada idioma
const cvFiles = {
    es: "curriculum_walter_kocher_es.pdf",
    de: "curriculum_walter_kocher_de.pdf",
    en: "curriculum_walter_kocher_en.pdf"
};

function changeLanguage(lang) {
    // 1. Cambiar los textos normales
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if(element.children.length === 0) {
                element.textContent = translations[lang][key];
            } else {
                 element.innerHTML = element.innerHTML.replace(element.textContent.trim(), translations[lang][key]);
            }
        }
    });

    // 2. Cambiar los placeholders del formulario
    const placeholders = document.querySelectorAll('[data-placeholder-key]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-placeholder-key');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // 3. Cambiar el archivo del CV a descargar
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        cvLink.href = cvFiles[lang];
    }

    // 4. Actualizar la clase "active" en los botones
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');

    // 5. Guardar preferencia en el navegador
    localStorage.setItem('preferredLanguage', lang);
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLang);
});
