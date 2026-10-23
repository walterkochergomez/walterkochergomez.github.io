// =====================================================================
// Página de proyecto: Optimización de listas de espera quirúrgicas
// - Añade los textos de esta página al sistema de idiomas de script.js
// - Dibuja el gráfico de barras y formatea las cifras según el idioma
// =====================================================================

(function () {
    // ---------- 1. TEXTOS (ES / DE / EN) ----------
    const pageTexts = {
        es: {
            pj_title: "Optimización de listas de espera quirúrgicas",
            pj_place: "Universidad de La Frontera (Temuco, Chile)",
            pj_date: "Abr – Jul 2026",
            pj_subtitle: "Un modelo para decidir quién se opera, dónde y cuándo",
            pj_intro: "En la red pública de La Araucanía, casi 4.000 personas esperaban una cirugía en solo cuatro especialidades. Desarrollé un modelo de optimización que planifica semana a semana las cirugías de tres hospitales públicos y decide qué pacientes conviene derivar a una clínica privada, con un objetivo claro: reducir la espera dando prioridad a quienes más lo necesitan, sin dejar a ningún grupo atrás.",
            pj_tag1: "Optimización",
            pj_tag2: "Análisis de datos",
            pj_tag3: "Salud pública",
            pj_fig_a: "pacientes en lista de espera",
            pj_fig_b: "cirugías planificadas en 12 semanas",
            pj_fig_c: "menos pacientes en espera",
            pj_s1_title: "El desafío",
            pj_s1_p1: "Los pabellones son limitados, derivar pacientes a clínicas privadas cuesta dinero y no todos los casos son igual de urgentes. Si simplemente se atiende por orden de llegada, un caso grave puede esperar lo mismo que uno leve, y los pacientes más vulnerables pueden quedar postergados.",
            pj_s1_p2: "¿Cómo operar a más personas, usando bien los recursos y de forma justa?",
            pj_s2_title: "La solución",
            pj_s2_p1: "Construí un modelo de optimización: un programa que evalúa miles de combinaciones posibles y elige el mejor plan de cirugías. Para cuatro tipos de cirugía y tres hospitales, el modelo busca equilibrar tres metas al mismo tiempo:",
            pj_g1_t: "Gastar mejor",
            pj_g1_d: "Usar el presupuesto de derivación y las horas extra solo donde más rinden.",
            pj_g2_t: "Reducir la espera",
            pj_g2_d: "Dar prioridad a los casos más graves y a los pacientes más vulnerables.",
            pj_g3_t: "Ser justo",
            pj_g3_d: "Que ningún grupo de pacientes quede sistemáticamente atrás.",
            pj_s2_p2: "Como en la realidad la demanda y las inasistencias cambian, el plan se pone a prueba en un escenario pesimista, uno normal y uno optimista, para que funcione en cualquiera de ellos.",
            pj_s3_title: "Resultados",
            pj_s3_p1: "En 12 semanas, el plan permite realizar 708 cirugías y reducir la lista de espera en un 15 %, respetando el presupuesto y sin dejar atrás a ningún grupo de pacientes.",
            pj_chart1_title: "Reducción de la lista de espera en 12 semanas, por tipo de cirugía",
            pj_s3_p2: "Las cirugías más cortas, como el pterigión, avanzan mucho más rápido; las más largas, como la prótesis de rodilla, son el principal cuello de botella.",
            pj_cmp_title: "¿Qué cambia frente a atender por orden de llegada?",
            pj_cmp_a_t: "Por orden de llegada",
            pj_cmp_a1: "Atiende según quién llegó primero.",
            pj_cmp_a2: "No distingue entre casos graves y leves.",
            pj_cmp_a3: "No considera la situación social del paciente.",
            pj_cmp_a4: "No controla el gasto ni la desigualdad.",
            pj_cmp_b_t: "Con el modelo",
            pj_cmp_b1: "Prioriza los casos más graves.",
            pj_cmp_b2: "Considera a los pacientes más vulnerables.",
            pj_cmp_b3: "Respeta el presupuesto y las metas del sistema de salud.",
            pj_cmp_b4: "Reduce la desigualdad entre grupos.",
            pj_s3_p3: "También comparé más de 100 planes con distintas prioridades. Una conclusión clave: si el plan no considera la equidad, la desigualdad entre grupos se duplica; al incluirla, se mantiene controlada sin sacrificar casi nada de la reducción de la espera.",
            pj_s4_title: "Lo que desarrollé",
            pj_s4_p1: "Desarrollé el proyecto completo, desde la idea hasta herramientas listas para usarse:",
            pj_s4_l1: "Diseñé el modelo matemático y lo programé en Python con IBM CPLEX, un optimizador usado en la industria.",
            pj_s4_l2: "Preparé los datos a partir de información histórica de listas de espera de la región.",
            pj_s4_l3: "Comparé distintos escenarios y prioridades para entender qué se gana y qué se pierde en cada caso.",
            pj_s4_l4: "Creé una aplicación web para registrar pacientes y un panel para seguir los resultados.",
            pj_s5_title: "De la teoría a la práctica",
            pj_s5_p1: "Para que el modelo pueda usarse en el día a día, lo acompañé de dos herramientas: una aplicación para registrar a los pacientes en espera y un panel que muestra la planificación y sus resultados.",
            pj_fig1: "Panel de planificación con los resultados principales.",
            pj_fig2: "Aplicación para registrar a los pacientes en lista de espera.",
            pj_tools_label: "Herramientas",
            pj_cta: "¿Conversamos sobre este proyecto?",
            // Textos usados solo por el gráfico
            js_c0: "Colecistectomía", js_c1: "Hernia abdominal", js_c2: "Prótesis de rodilla", js_c3: "Pterigión",
            js_ini: "En lista al inicio", js_pub: "Operados en hospital público", js_priv: "Derivados a clínica privada", js_fin: "En lista tras 12 semanas"
        },
        de: {
            pj_title: "Optimierung von OP-Wartelisten",
            pj_place: "Universidad de La Frontera (Temuco, Chile)",
            pj_date: "Apr. – Jul. 2026",
            pj_subtitle: "Ein Modell, das entscheidet, wer wann und wo operiert wird",
            pj_intro: "Im öffentlichen Gesundheitsnetz der Region Araucanía warteten fast 4.000 Menschen auf eine Operation – in nur vier Fachbereichen. Ich habe ein Optimierungsmodell entwickelt, das die Operationen von drei öffentlichen Krankenhäusern Woche für Woche plant und entscheidet, welche Patienten an eine Privatklinik überwiesen werden sollten. Das Ziel: kürzere Wartezeiten, mit Vorrang für diejenigen, die es am dringendsten brauchen – ohne eine Gruppe zurückzulassen.",
            pj_tag1: "Optimierung",
            pj_tag2: "Datenanalyse",
            pj_tag3: "Öffentliche Gesundheit",
            pj_fig_a: "Patienten auf der Warteliste",
            pj_fig_b: "geplante Operationen in 12 Wochen",
            pj_fig_c: "weniger Patienten auf der Warteliste",
            pj_s1_title: "Die Herausforderung",
            pj_s1_p1: "OP-Säle sind begrenzt, Überweisungen an Privatkliniken kosten Geld, und nicht jeder Fall ist gleich dringend. Wird einfach nach Eingangsreihenfolge behandelt, kann ein schwerer Fall genauso lange warten wie ein leichter, und besonders verletzliche Patienten werden womöglich zurückgestellt.",
            pj_s1_p2: "Wie kann man mehr Menschen operieren, die Ressourcen gut nutzen und dabei gerecht bleiben?",
            pj_s2_title: "Die Lösung",
            pj_s2_p1: "Ich habe ein Optimierungsmodell gebaut: ein Programm, das Tausende möglicher Kombinationen bewertet und den besten OP-Plan auswählt. Für vier Eingriffsarten und drei Krankenhäuser bringt das Modell drei Ziele gleichzeitig ins Gleichgewicht:",
            pj_g1_t: "Besser haushalten",
            pj_g1_d: "Überweisungsbudget und Überstunden nur dort einsetzen, wo sie am meisten bewirken.",
            pj_g2_t: "Wartezeit verkürzen",
            pj_g2_d: "Schweren Fällen und besonders verletzlichen Patienten Vorrang geben.",
            pj_g3_t: "Gerecht sein",
            pj_g3_d: "Keine Patientengruppe soll systematisch zurückbleiben.",
            pj_s2_p2: "Da sich Nachfrage und Terminausfälle in der Realität ändern, wird der Plan in einem pessimistischen, einem normalen und einem optimistischen Szenario getestet, damit er in jedem Fall funktioniert.",
            pj_s3_title: "Ergebnisse",
            pj_s3_p1: "In 12 Wochen ermöglicht der Plan 708 Operationen und verkürzt die Warteliste um 15 % – im Rahmen des Budgets und ohne eine Patientengruppe zurückzulassen.",
            pj_chart1_title: "Reduktion der Warteliste in 12 Wochen, je Eingriff",
            pj_s3_p2: "Kürzere Eingriffe wie das Pterygium kommen deutlich schneller voran; längere wie die Knieprothese sind der größte Engpass.",
            pj_cmp_title: "Was ändert sich gegenüber der Behandlung nach Eingangsreihenfolge?",
            pj_cmp_a_t: "Nach Eingangsreihenfolge",
            pj_cmp_a1: "Behandelt, wer zuerst kam.",
            pj_cmp_a2: "Unterscheidet nicht zwischen schweren und leichten Fällen.",
            pj_cmp_a3: "Berücksichtigt nicht die soziale Lage der Patienten.",
            pj_cmp_a4: "Kontrolliert weder Kosten noch Ungleichheit.",
            pj_cmp_b_t: "Mit dem Modell",
            pj_cmp_b1: "Priorisiert die schwersten Fälle.",
            pj_cmp_b2: "Berücksichtigt besonders verletzliche Patienten.",
            pj_cmp_b3: "Hält Budget und Ziele des Gesundheitssystems ein.",
            pj_cmp_b4: "Verringert die Ungleichheit zwischen Gruppen.",
            pj_s3_p3: "Außerdem habe ich über 100 Pläne mit unterschiedlichen Prioritäten verglichen. Eine zentrale Erkenntnis: Ohne Berücksichtigung der Gerechtigkeit verdoppelt sich die Ungleichheit zwischen Gruppen; mit ihr bleibt sie unter Kontrolle, ohne dass die Wartezeitverkürzung nennenswert leidet.",
            pj_s4_title: "Was ich entwickelt habe",
            pj_s4_p1: "Ich habe das gesamte Projekt umgesetzt – von der Idee bis zu einsatzbereiten Werkzeugen:",
            pj_s4_l1: "Das mathematische Modell entworfen und in Python mit IBM CPLEX, einem in der Industrie eingesetzten Optimierer, programmiert.",
            pj_s4_l2: "Die Daten auf Basis historischer Wartelisten der Region aufbereitet.",
            pj_s4_l3: "Verschiedene Szenarien und Prioritäten verglichen, um zu verstehen, was man jeweils gewinnt und verliert.",
            pj_s4_l4: "Eine Webanwendung zur Patientenerfassung und ein Dashboard zur Verfolgung der Ergebnisse erstellt.",
            pj_s5_title: "Von der Theorie zur Praxis",
            pj_s5_p1: "Damit das Modell im Alltag genutzt werden kann, habe ich zwei Werkzeuge ergänzt: eine Anwendung zur Erfassung der wartenden Patienten und ein Dashboard, das die Planung und ihre Ergebnisse zeigt.",
            pj_fig1: "Planungs-Dashboard mit den wichtigsten Ergebnissen.",
            pj_fig2: "Anwendung zur Erfassung der Patienten auf der Warteliste.",
            pj_tools_label: "Werkzeuge",
            pj_cta: "Sprechen wir über dieses Projekt?",
            js_c0: "Cholezystektomie", js_c1: "Bauchwandhernie", js_c2: "Knieprothese", js_c3: "Pterygium",
            js_ini: "Zu Beginn auf der Liste", js_pub: "Im öffentlichen Krankenhaus operiert", js_priv: "An Privatklinik überwiesen", js_fin: "Nach 12 Wochen auf der Liste"
        },
        en: {
            pj_title: "Optimizing Surgical Waiting Lists",
            pj_place: "Universidad de La Frontera (Temuco, Chile)",
            pj_date: "Apr – Jul 2026",
            pj_subtitle: "A model that decides who gets surgery, where and when",
            pj_intro: "In La Araucanía's public health network, almost 4,000 people were waiting for surgery in just four specialties. I developed an optimization model that plans the surgeries of three public hospitals week by week and decides which patients should be referred to a private clinic, with one clear goal: shorten waiting times by putting those who need it most first, without leaving any group behind.",
            pj_tag1: "Optimization",
            pj_tag2: "Data analysis",
            pj_tag3: "Public health",
            pj_fig_a: "patients on the waiting list",
            pj_fig_b: "surgeries planned in 12 weeks",
            pj_fig_c: "fewer patients waiting",
            pj_s1_title: "The challenge",
            pj_s1_p1: "Operating rooms are limited, referring patients to private clinics costs money, and not every case is equally urgent. If patients are simply treated in order of arrival, a severe case may wait as long as a mild one, and the most vulnerable patients can be left behind.",
            pj_s1_p2: "How can we operate on more people, use resources wisely and stay fair?",
            pj_s2_title: "The solution",
            pj_s2_p1: "I built an optimization model: a program that evaluates thousands of possible combinations and picks the best surgical plan. For four types of surgery and three hospitals, the model balances three goals at once:",
            pj_g1_t: "Spend wisely",
            pj_g1_d: "Use the referral budget and overtime only where they make the biggest difference.",
            pj_g2_t: "Shorten the wait",
            pj_g2_d: "Give priority to the most severe cases and the most vulnerable patients.",
            pj_g3_t: "Be fair",
            pj_g3_d: "Make sure no group of patients is systematically left behind.",
            pj_s2_p2: "Because demand and no-shows change in real life, the plan is tested in a pessimistic, a normal and an optimistic scenario, so it works in any of them.",
            pj_s3_title: "Results",
            pj_s3_p1: "In 12 weeks, the plan makes 708 surgeries possible and cuts the waiting list by 15%, within budget and without leaving any group of patients behind.",
            pj_chart1_title: "Waiting-list reduction in 12 weeks, by type of surgery",
            pj_s3_p2: "Shorter surgeries, such as pterygium, move much faster; longer ones, such as knee replacement, are the main bottleneck.",
            pj_cmp_title: "What changes compared with first-come, first-served?",
            pj_cmp_a_t: "First-come, first-served",
            pj_cmp_a1: "Treats whoever arrived first.",
            pj_cmp_a2: "Doesn't distinguish between severe and mild cases.",
            pj_cmp_a3: "Doesn't consider the patient's social situation.",
            pj_cmp_a4: "Controls neither spending nor inequality.",
            pj_cmp_b_t: "With the model",
            pj_cmp_b1: "Prioritizes the most severe cases.",
            pj_cmp_b2: "Takes the most vulnerable patients into account.",
            pj_cmp_b3: "Respects the budget and the health system's targets.",
            pj_cmp_b4: "Reduces inequality between groups.",
            pj_s3_p3: "I also compared more than 100 plans with different priorities. One key finding: if the plan ignores fairness, inequality between groups doubles; when fairness is included, it stays under control while giving up almost none of the waiting-time reduction.",
            pj_s4_title: "What I built",
            pj_s4_p1: "I developed the whole project, from the initial idea to ready-to-use tools:",
            pj_s4_l1: "Designed the mathematical model and programmed it in Python with IBM CPLEX, an optimizer used in industry.",
            pj_s4_l2: "Prepared the data from the region's historical waiting-list records.",
            pj_s4_l3: "Compared different scenarios and priorities to understand what is gained and lost in each case.",
            pj_s4_l4: "Built a web app to register patients and a dashboard to follow the results.",
            pj_s5_title: "From theory to practice",
            pj_s5_p1: "So the model can be used day to day, I added two tools: an app to register waiting patients and a dashboard that shows the plan and its results.",
            pj_fig1: "Planning dashboard with the main results.",
            pj_fig2: "App for registering patients on the waiting list.",
            pj_tools_label: "Tools",
            pj_cta: "Want to talk about this project?",
            js_c0: "Cholecystectomy", js_c1: "Abdominal hernia", js_c2: "Knee replacement", js_c3: "Pterygium",
            js_ini: "On the list at the start", js_pub: "Operated in public hospital", js_priv: "Referred to private clinic", js_fin: "On the list after 12 weeks"
        }
    };

    // Se suman a las traducciones globales de script.js
    if (typeof translations !== 'undefined') {
        Object.keys(pageTexts).forEach(lang => {
            translations[lang] = Object.assign(translations[lang] || {}, pageTexts[lang]);
        });
    }

    // ---------- 2. DATOS (corrida principal del modelo) ----------
    const LOCALES = { es: 'es-CL', de: 'de-DE', en: 'en-US' };
    const SURGERIES = [
        { key: 'js_c3', ini: 318,  pub: 176, priv: 4,  fin: 156,  red: 0.511 },
        { key: 'js_c1', ini: 664,  pub: 136, priv: 45, fin: 502,  red: 0.244 },
        { key: 'js_c0', ini: 1051, pub: 136, priv: 57, fin: 872,  red: 0.171 },
        { key: 'js_c2', ini: 1833, pub: 132, priv: 22, fin: 1757, red: 0.041 }
    ];

    // ---------- 3. UTILIDADES ----------
    const getLang = () => {
        try { return localStorage.getItem('preferredLanguage') || 'es'; } catch (e) { return 'es'; }
    };
    const T = (lang, key) => (pageTexts[lang] && pageTexts[lang][key]) || pageTexts.es[key];
    const fmt = (lang, value, opts) => new Intl.NumberFormat(LOCALES[lang] || 'es-CL', opts).format(value);
    const num = (lang, v, d = 0) => fmt(lang, v, { minimumFractionDigits: d, maximumFractionDigits: d });
    const pct = (lang, v, d = 1) => fmt(lang, v, { style: 'percent', minimumFractionDigits: d, maximumFractionDigits: d });

    function placeTip(tip, container, x, y) {
        const cw = container.clientWidth;
        tip.style.left = '0px';
        tip.style.top = '0px';
        const tw = tip.offsetWidth, th = tip.offsetHeight;
        let left = x + 14;
        if (left + tw > cw) left = x - tw - 14;
        if (left < 0) left = Math.max(0, Math.min(cw - tw, x - tw / 2));
        let top = y - th - 12;
        if (top < 0) top = y + 14;
        tip.style.left = left + 'px';
        tip.style.top = top + 'px';
    }

    // ---------- 4. CIFRAS ----------
    function renderNumbers(lang) {
        document.querySelectorAll('[data-num]').forEach(node => {
            const v = parseFloat(node.getAttribute('data-num'));
            const f = node.getAttribute('data-fmt');
            node.textContent = f === 'pct0' ? pct(lang, v, 0) : num(lang, v);
        });
    }

    // ---------- 5. GRÁFICO DE BARRAS ----------
    let barsAnimated = false;
    function renderBars(lang) {
        const wrap = document.getElementById('pj-bars');
        const tip = document.getElementById('pj-bars-tip');
        const container = document.getElementById('pj-bars-chart');
        if (!wrap) return;
        const max = 0.6;
        wrap.innerHTML = '';
        SURGERIES.forEach(s => {
            const row = document.createElement('div');
            row.className = 'pj-bar-row';
            row.tabIndex = 0;
            row.innerHTML =
                '<span class="pj-bar-label"></span>' +
                '<div class="pj-bar-track"><div class="pj-bar-fill"></div></div>' +
                '<span class="pj-bar-value"></span>';
            row.querySelector('.pj-bar-label').textContent = T(lang, s.key);
            row.querySelector('.pj-bar-value').textContent = pct(lang, s.red, 0);
            const fill = row.querySelector('.pj-bar-fill');
            fill.dataset.w = (s.red / max * 100).toFixed(1) + '%';
            if (barsAnimated) fill.style.width = fill.dataset.w;

            const show = (evt) => {
                tip.innerHTML =
                    '<b>' + T(lang, s.key) + '</b><br>' +
                    '<span class="muted">' + T(lang, 'js_ini') + ':</span> ' + num(lang, s.ini) + '<br>' +
                    '<span class="muted">' + T(lang, 'js_pub') + ':</span> ' + num(lang, s.pub) + '<br>' +
                    '<span class="muted">' + T(lang, 'js_priv') + ':</span> ' + num(lang, s.priv) + '<br>' +
                    '<span class="muted">' + T(lang, 'js_fin') + ':</span> ' + num(lang, s.fin);
                const cr = container.getBoundingClientRect();
                const fr = fill.getBoundingClientRect();
                const x = evt && evt.clientX ? evt.clientX - cr.left : fr.right - cr.left;
                const y = fr.top - cr.top;
                tip.classList.add('is-on');
                placeTip(tip, container, x, y);
            };
            const hide = () => tip.classList.remove('is-on');
            row.addEventListener('mousemove', show);
            row.addEventListener('focus', () => show(null));
            row.addEventListener('mouseleave', hide);
            row.addEventListener('blur', hide);
            wrap.appendChild(row);
        });
    }

    function animateBars() {
        barsAnimated = true;
        document.querySelectorAll('#pj-bars .pj-bar-fill').forEach(f => { f.style.width = f.dataset.w; });
    }

    function renderAll(lang) {
        renderNumbers(lang);
        renderBars(lang);
    }

    // ---------- 6. CONEXIÓN CON EL SELECTOR DE IDIOMA ----------
    if (typeof changeLanguage === 'function') {
        const baseChangeLanguage = changeLanguage;
        changeLanguage = function (lang) {
            baseChangeLanguage(lang);
            document.documentElement.lang = lang;
            renderAll(lang);
        };
    }

    document.addEventListener('DOMContentLoaded', () => {
        renderAll(getLang());
        const barsChart = document.getElementById('pj-bars-chart');
        if (barsChart && 'IntersectionObserver' in window) {
            new IntersectionObserver((entries, obs) => {
                if (entries.some(e => e.isIntersecting)) { animateBars(); obs.disconnect(); }
            }, { threshold: 0.3 }).observe(barsChart);
        } else {
            animateBars();
        }
    });
})();
