// Menú Hamburguesa para móviles (a prueba de fallos)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al clickear enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
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
document.querySelectorAll('h3, #sobre-mi p, .timeline-item, .skill-card, .lang-item, .academic-item, .other-exp-card, .contact-form form, .detail-section').forEach(el => {
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
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(217, 224, 229, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            if (logo) logo.style.display = 'block';
        } else {
            navbar.style.background = 'var(--bg-header)';
            navbar.style.boxShadow = 'none';
            if (window.innerWidth > 768 && logo) logo.style.display = 'none';
        }
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
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

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
        "btn_more_info": "Más información",
        
        // --- TEXTOS PARA PÁGINAS DE DETALLE ---
        "nav_back": "Volver al Portafolio",
        "gallery_title": "Galería de Proyectos",
        
        "coax_title": "Práctica: CO-AX Válvulas S.L.",
        "coax_subtitle": "Implementación de banco de pruebas y laboratorio",
        "coax_detail_text": "Durante mi estancia en CO-AX Válvulas, lideré la implementación de un banco de pruebas para certificar la calidad de las válvulas. Además, estructuré un laboratorio de electrónica aplicando normativas internacionales en un entorno de alta exigencia.",
        
        "ufro_inv_title": "Ayudantía: Investigación y Operaciones",
        "ufro_inv_subtitle": "Apoyo en investigación y desarrollo de talleres",
        "ufro_inv_detail_text": "Para ponerlo en perspectiva empresarial: la Investigación de Operaciones es el motor analítico que permite a las industrias minimizar costos, optimizar recursos y tomar decisiones estratégicas para la gestión de sistemas complejos. Como Ayudante de la sección práctica de esta asignatura, mi objetivo fue conectar esta capacidad analítica con la realidad operativa. Fui responsable del diseño y evaluación de casos de estudio aplicados , guiando a los alumnos en la traducción de problemas industriales como la optimización de rutas de transporte o la mejora de procesos productivos —en modelos matemáticos. A través de la instrucción en software de optimización avanzado LINGO, AMPL/CPlex y Gurobi, lideré la resolución de estos desafíos. Esta experiencia no solo me permitió formar equipos de trabajo , sino que consolidó mi propia capacidad para transformar datos en soluciones concretas que impulsan la eficacia y eficiencia en las organizaciones.",
        
        "ufro_termo_title": "Ayudantía: Termodinámica",
        "ufro_termo_subtitle": "Desarrollo de material complementario",
        "ufro_termo_detail_text": "Desarrollo de material complementario y guías de estudio para el curso de Termodinámica, brindando apoyo directo a los estudiantes para facilitar su aprendizaje y comprensión de conceptos complejos.",
        
        "coax_ene_title": "Práctica: CO-AX Válvulas S.L. (Ene-Mar 2024)",
        "coax_ene_subtitle": "Desarrollo de banco de pruebas",
        "coax_ene_detail_text": "Diseño y desarrollo inicial de un banco de pruebas para válvulas. Realicé documentación técnica detallada y análisis de errores enfocados en la optimización de procesos industriales.",
        
        "mtech_title": "Práctica: m-tech gmbh (Alemania)",
        "mtech_subtitle": "Programación PLC y Automatización",
        "mtech_detail_text": "Programación de PLC (SPS) para un sistema semiautomático de llenado de gases. Esta experiencia me permitió aplicar directamente el idioma alemán en un entorno técnico y adquirir un profundo conocimiento de los estándares industriales alemanes."
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
        "btn_more_info": "Weitere Informationen",
        
        // --- TEXTOS PARA PÁGINAS DE DETALLE ---
        "nav_back": "Zurück zum Portfolio",
        "gallery_title": "Projektgalerie",
        
        "coax_title": "Praktikum: CO-AX Válvulas S.L.",
        "coax_subtitle": "Implementierung eines Prüfstands und Elektroniklabors",
        "coax_detail_text": "Während meiner Zeit bei CO-AX Válvulas leitete ich die Implementierung eines Prüfstands zur Qualitätszertifizierung von Ventilen. Darüber hinaus strukturierte ich ein Elektroniklabor unter Anwendung internationaler Standards in einem anspruchsvollen Umfeld.",
        
        "ufro_inv_title": "Wissenschaftliche Hilfskraft: Forschung & Betrieb",
        "ufro_inv_subtitle": "Unterstützung bei Forschung und Workshops",
        "ufro_inv_detail_text": "Unterstützung bei Forschungsprojekten und Durchführung von praktischen Workshops. Entwicklung von Lehrmaterialien und Analyse von Betriebsdaten zur kontinuierlichen Verbesserung akademischer Prozesse.",
        
        "ufro_termo_title": "Tutor: Thermodynamik",
        "ufro_termo_subtitle": "Entwicklung von Lehrmaterialien",
        "ufro_termo_detail_text": "Entwicklung von ergänzenden Lehrmaterialien und Studienleitfäden für den Kurs Thermodynamik, um Studenten direkt beim Lernen und Verstehen komplexer Konzepte zu unterstützen.",
        
        "coax_ene_title": "Praktikum: CO-AX Válvulas S.L. (Jan-Mär 2024)",
        "coax_ene_subtitle": "Entwicklung einer Prüfbank",
        "coax_ene_detail_text": "Design und Entwicklung einer Prüfbank für Ventile. Erstellung technischer Dokumentation und Durchführung von Fehleranalysen zur Prozessoptimierung.",
        
        "mtech_title": "Praktikum: m-tech gmbh (Deutschland)",
        "mtech_subtitle": "SPS-Programmierung und Automatisierung",
        "mtech_detail_text": "SPS-Programmierung (PLC) für ein halbautomatisches Gasfüllsystem. Direkte Anwendung von Deutsch im technischen Arbeitsumfeld und tiefer Einblick in deutsche Industriestandards."
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
        "btn_more_info": "More information",
        
        // --- TEXTOS PARA PÁGINAS DE DETALLE ---
        "nav_back": "Back to Portfolio",
        "gallery_title": "Project Gallery",
        
        "coax_title": "Internship: CO-AX Válvulas S.L.",
        "coax_subtitle": "Test bench and electronics laboratory implementation",
        "coax_detail_text": "During my time at CO-AX Válvulas, I led the implementation of a test bench to certify valve quality. In addition, I structured an electronics laboratory applying international standards in a highly demanding environment.",
        
        "ufro_inv_title": "Assistant: Research and Operations",
        "ufro_inv_subtitle": "Research support and workshop development",
        "ufro_inv_detail_text": "Ongoing support in research projects and execution of practical workshops. Development of teaching materials and operational data analysis for the continuous improvement of academic processes.",
        
        "ufro_termo_title": "Teaching Assistant: Thermodynamics",
        "ufro_termo_subtitle": "Development of supplementary materials",
        "ufro_termo_detail_text": "Development of supplementary materials and study guides for the Thermodynamics course, providing direct support to students to facilitate their learning and understanding of complex concepts.",
        
        "coax_ene_title": "Internship: CO-AX Válvulas S.L. (Jan-Mar 2024)",
        "coax_ene_subtitle": "Test bench development",
        "coax_ene_detail_text": "Design and development of a test bench for valves. Created technical documentation and performed error analysis focused on industrial process optimization.",
        
        "mtech_title": "Internship: m-tech gmbh (Germany)",
        "mtech_subtitle": "PLC Programming and Automation",
        "mtech_detail_text": "PLC programming for a semi-automatic gas filling system. This experience allowed me to directly apply the German language in a technical environment and gain a deep understanding of German industrial standards."
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

    // 3. Cambiar el archivo del CV a descargar (solo si existe el botón)
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        cvLink.href = cvFiles[lang];
    }

    // 4. Actualizar la clase "active" en los botones
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    
    // Solo intentar añadir la clase si el botón existe en la página actual
    const currentBtn = document.getElementById('btn-' + lang);
    if(currentBtn) {
        currentBtn.classList.add('active');
    }

    // 5. Guardar preferencia en el navegador
    localStorage.setItem('preferredLanguage', lang);
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLang);
});
