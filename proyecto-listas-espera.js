// =====================================================================
// Página de proyecto: Optimización estocástica de listas de espera
// - Añade los textos de esta página al sistema de idiomas de script.js
// - Dibuja el gráfico de barras, la frontera de Pareto y la tabla
// =====================================================================

(function () {
    // ---------- 1. TEXTOS (ES / DE / EN) ----------
    const pageTexts = {
        es: {
            pj_title: "Optimización estocástica de listas de espera quirúrgicas",
            pj_kicker: "Investigación de Operaciones · Salud pública · Chile",
            pj_lead: "Un modelo de optimización que no solo decide cuántos pacientes se operan, sino quiénes: planifica la agenda de pabellón y la derivación al sector privado bajo incertidumbre, con la equidad incorporada como criterio explícito del modelo.",
            pj_course: "Taller de Modelado y Toma de Decisiones",
            pj_date: "Abr – Jul 2026",
            pj_team_size: "Proyecto de curso · grupo de 4",
            pj_tag_pareto: "Frontera de Pareto",
            pj_stat1: "pacientes en lista de espera inicial",
            pj_stat2: "cirugías agendadas en 12 semanas, 128 vía privado",
            pj_stat3: "menos pacientes en lista tras 12 semanas",
            pj_stat4: "variables de decisión en 576 subgrupos",
            pj_s1_title: "El problema",
            pj_s1_p1: "En la red pública chilena, el tiempo que un paciente espera una cirugía depende de la capacidad de pabellón, del presupuesto para derivar al sector privado y de las reglas de priorización. Optimizar solo el número total de cirugías puede esconder a grupos que quedan sistemáticamente postergados.",
            pj_gap1_t: "Brecha territorial",
            pj_gap1_d: "Hospitales con capacidad de pabellón desigual y bajo presión sostenida.",
            pj_gap2_t: "Brecha social y clínica",
            pj_gap2_d: "Un caso grave de un grupo vulnerable puede esperar lo mismo que un caso leve.",
            pj_gap3_t: "Derivación acotada",
            pj_gap3_d: "El presupuesto para el sector privado es limitado: cada peso debe asignarse con criterio.",
            pj_s1_p2: "El proyecto modela tres hospitales públicos de La Araucanía (Hospital Dr. Hernán Henríquez Aravena, Hospital Intercultural de Nueva Imperial y Complejo Asistencial Padre Las Casas) más un prestador privado, para cuatro cirugías trazadoras: colecistectomía, hernia, endoprótesis de rodilla y pterigión.",
            pj_s2_title: "El modelo",
            pj_s2_p1: "Se formuló un programa lineal entero mixto (MILP) estocástico de dos etapas y multiobjetivo. Cada paciente se sigue dentro de un subgrupo definido por hospital, tipo de cirugía, perfil socioeconómico (FONASA A–B, C, D y SENAME), gravedad clínica y rango etario: 576 subgrupos seguidos semana a semana durante 12 semanas.",
            pj_z1_t: "Costo económico",
            pj_z1_d: "Gasto esperado en derivaciones privadas y horas extra de pabellón.",
            pj_z2_t: "Espera ponderada",
            pj_z2_d: "Tiempo en lista ponderado por prioridad social y gravedad clínica, más una penalización por incumplir las metas COMGES.",
            pj_z3_t: "Inequidad (minimax)",
            pj_z3_d: "La peor fracción de demanda no resuelta entre todos los subgrupos: protege al grupo más rezagado.",
            pj_flow1_t: "1ª etapa · aquí y ahora",
            pj_flow1_d: "Agenda quirúrgica y derivaciones: una sola agenda, válida para cualquier escenario.",
            pj_flow2_t: "Tres escenarios",
            pj_sc1: "Pesimista",
            pj_sc2: "Central",
            pj_sc3: "Optimista",
            pj_flow2_d: "Demanda, inasistencias y duración quirúrgica inciertas.",
            pj_flow3_t: "2ª etapa · recurso",
            pj_flow3_d: "Horas extra, evolución de la lista y brechas de metas, según el escenario que ocurra.",
            pj_s2_p2: "Los tres objetivos se normalizan y se combinan con pesos, y siete restricciones aseguran que la solución sea operable: conservación de flujo de la lista, capacidad de pabellón, presupuesto de derivación, equidad minimax, tope legal de horas extra, capacidad del privado y metas COMGES como restricción blanda.",
            pj_s3_title: "Resultados",
            pj_s3_p1: "En la corrida principal, con prioridad deliberada a reducir la espera (pesos 0,05 / 0,80 / 0,15), el modelo agenda 708 cirugías en 12 semanas, 128 de ellas derivadas al privado (≈18 %). La lista total baja de 3.866 a 3.287 pacientes, con un costo financiero de 57,2 millones de pesos chilenos y un índice de inequidad U = 1,045.",
            pj_chart1_title: "Reducción de la lista de espera a 12 semanas, por cirugía",
            pj_s3_p2: "El pterigión, la cirugía más corta, reduce su lista a la mitad; la endoprótesis de rodilla apenas baja por su larga duración en pabellón y la capacidad privada limitada.",
            pj_s4_title: "Análisis de compromisos",
            pj_s4_p1: "No existe una única solución óptima, sino una frontera de compromisos. El modelo se resolvió 105 veces recorriendo todas las combinaciones de pesos entre costo, espera y equidad. Cada punto es una política de gestión distinta; pasa el cursor sobre ellos para ver el detalle.",
            pj_chart2_title: "Frontera de Pareto: costo financiero vs. costo social de la espera",
            pj_lg1: "Inequidad mínima (U ≈ 1,00)",
            pj_lg2: "Inequidad intermedia (U 1,01–1,10)",
            pj_lg3: "Sin peso de equidad (U = 2,00)",
            pj_lg4: "Política elegida",
            pj_axis_y: "↑ Costo social de la espera (miles de millones CLP)",
            pj_axis_x: "Costo financiero (millones CLP) →",
            pj_th1: "Política (pesos w₁ ; w₂ ; w₃)",
            pj_th2: "Costo financiero (mill. CLP)",
            pj_th3: "Costo social de espera (miles de mill. CLP)",
            pj_th4: "Inequidad U",
            pj_s4_p2: "La política elegida logra casi la misma reducción de espera que la política pura de espera, gasta menos y mantiene la inequidad cerca de su mínimo. Sin peso de equidad, la inequidad se duplica: el 15 % asignado a la equidad compra casi toda esa protección a un costo marginal.",
            pj_s5_title: "Del modelo a la operación",
            pj_s5_p1: "El optimizador trabaja con subgrupos, no con personas. Para que el resultado sea utilizable, el modelo se acompaña de un flujo completo, desde el ingreso de pacientes hasta el seguimiento de resultados:",
            pj_st1_t: "Ingreso de pacientes",
            pj_st1_d: "Aplicación web que registra la lista de espera, valida el RUT y genera el Excel que alimenta el modelo.",
            pj_st2_t: "Agenda por paciente",
            pj_st2_d: "Resuelto el modelo, los cupos de cada subgrupo se asignan por antigüedad en lista y se reparten en días hábiles según las horas de pabellón.",
            pj_st3_t: "Dashboard de planificación",
            pj_st3_d: "Tablero con lista inicial y final, reducción, cirugías, inequidad y costo, filtrable por cirugía y hospital.",
            pj_s6_title: "Herramientas y equipo",
            pj_tools_label: "Herramientas",
            pj_sources_label: "Datos",
            pj_sources: "Instancia basada en datos históricos de listas de espera (Control de Gestión Araucanía Sur). Las llegadas semanales se estimaron como la incidencia anual regional dividida en 52 semanas.",
            pj_team_label: "Grupo del curso",
            pj_next_label: "Recomendaciones",
            pj_next: "Trabajar con más y mejores datos, implementar la metodología de forma gradual y actualizar periódicamente costos, capacidades y metas COMGES.",
            pj_fifo_title: "Frente a la atención por orden de llegada (FIFO)",
            pj_fifo_a_t: "Política FIFO",
            pj_fifo_a1: "Atiende por orden de llegada o antigüedad.",
            pj_fifo_a2: "No pondera prioridad social ni gravedad clínica.",
            pj_fifo_a3: "No optimiza el costo ni controla la inequidad.",
            pj_fifo_a4: "La derivación no se liga al presupuesto.",
            pj_fifo_b_t: "Modelo propuesto",
            pj_fifo_b1: "Prioriza por perfil social y gravedad clínica.",
            pj_fifo_b2: "Respeta las metas COMGES por tipo de cirugía.",
            pj_fifo_b3: "Deriva al privado bajo un tope presupuestario.",
            pj_fifo_b4: "Minimiza la inequidad de acceso.",
            pj_fig1: "Dashboard de planificación: indicadores de la corrida principal.",
            pj_fig2: "Aplicación de ingreso de pacientes que genera el Excel del modelo.",
            pj_role_label: "Mi rol:",
            pj_role: "desarrollé el proyecto de principio a fin: formulación matemática, implementación en Python + CPLEX, análisis de Pareto, app de ingreso de pacientes y dashboard de planificación.",
            pj_cta: "¿Conversamos sobre este proyecto?",
            // Textos usados solo por los gráficos
            js_c0: "Colecistectomía", js_c1: "Hernia inguinal", js_c2: "Endoprótesis de rodilla", js_c3: "Pterigión",
            js_ini: "Lista inicial", js_pub: "Operados en público", js_priv: "Derivados al privado", js_fin: "Lista a 12 semanas",
            js_weights: "Pesos (costo ; espera ; equidad)", js_cost: "Costo financiero", js_wait: "Costo social de espera",
            js_ineq: "Inequidad U", js_mill: "mill. CLP", js_bill: "miles de mill. CLP",
            js_chosen: "Política elegida",
            js_p_cost: "Solo costo", js_p_wait: "Solo espera", js_p_eq: "Solo equidad", js_p_chosen: "Elegida"
        },
        de: {
            pj_title: "Stochastische Optimierung von OP-Wartelisten",
            pj_kicker: "Operations Research · Öffentliche Gesundheit · Chile",
            pj_lead: "Ein Optimierungsmodell, das nicht nur entscheidet, wie viele Patienten operiert werden, sondern wer: Es plant OP-Kapazitäten und Überweisungen an den privaten Sektor unter Unsicherheit und berücksichtigt Gerechtigkeit als explizites Kriterium des Modells.",
            pj_course: "Workshop Modellierung und Entscheidungsfindung",
            pj_date: "Apr. – Jul. 2026",
            pj_team_size: "Kursprojekt · Gruppe von 4",
            pj_tag_pareto: "Pareto-Front",
            pj_stat1: "Patienten auf der anfänglichen Warteliste",
            pj_stat2: "geplante Operationen in 12 Wochen, davon 128 privat",
            pj_stat3: "weniger Patienten auf der Warteliste nach 12 Wochen",
            pj_stat4: "Entscheidungsvariablen in 576 Untergruppen",
            pj_s1_title: "Das Problem",
            pj_s1_p1: "Im öffentlichen Gesundheitssystem Chiles hängt die Wartezeit auf eine Operation von der OP-Kapazität, dem Budget für Überweisungen an private Anbieter und den Priorisierungsregeln ab. Wer nur die Gesamtzahl der Operationen optimiert, übersieht leicht Gruppen, die systematisch zurückgestellt werden.",
            pj_gap1_t: "Regionale Lücke",
            pj_gap1_d: "Krankenhäuser mit ungleicher OP-Kapazität unter anhaltendem Druck.",
            pj_gap2_t: "Soziale und klinische Lücke",
            pj_gap2_d: "Ein schwerer Fall aus einer vulnerablen Gruppe kann genauso lange warten wie ein leichter Fall.",
            pj_gap3_t: "Begrenzte Überweisung",
            pj_gap3_d: "Das Budget für den privaten Sektor ist begrenzt: Jeder Peso muss gezielt eingesetzt werden.",
            pj_s1_p2: "Das Projekt bildet drei öffentliche Krankenhäuser der Region Araucanía (Hospital Dr. Hernán Henríquez Aravena, Hospital Intercultural de Nueva Imperial und Complejo Asistencial Padre Las Casas) sowie einen privaten Anbieter ab – für vier Tracer-Eingriffe: Cholezystektomie, Hernie, Knieendoprothese und Pterygium.",
            pj_s2_title: "Das Modell",
            pj_s2_p1: "Formuliert wurde ein zweistufiges, stochastisches gemischt-ganzzahliges lineares Programm (MILP) mit mehreren Zielen. Jeder Patient gehört zu einer Untergruppe aus Krankenhaus, Eingriff, sozioökonomischem Profil (FONASA A–B, C, D und SENAME), klinischem Schweregrad und Altersgruppe: 576 Untergruppen, die Woche für Woche über 12 Wochen verfolgt werden.",
            pj_z1_t: "Wirtschaftliche Kosten",
            pj_z1_d: "Erwartete Ausgaben für private Überweisungen und OP-Überstunden.",
            pj_z2_t: "Gewichtete Wartezeit",
            pj_z2_d: "Wartezeit, gewichtet nach sozialer Priorität und klinischem Schweregrad, plus Strafkosten bei Verfehlung der COMGES-Ziele.",
            pj_z3_t: "Ungleichheit (Minimax)",
            pj_z3_d: "Der größte ungelöste Nachfrageanteil über alle Untergruppen: schützt die am stärksten benachteiligte Gruppe.",
            pj_flow1_t: "1. Stufe · hier und jetzt",
            pj_flow1_d: "OP-Plan und Überweisungen: ein einziger Plan, gültig für jedes Szenario.",
            pj_flow2_t: "Drei Szenarien",
            pj_sc1: "Pessimistisch",
            pj_sc2: "Basis",
            pj_sc3: "Optimistisch",
            pj_flow2_d: "Unsichere Nachfrage, Ausfallquoten und OP-Dauern.",
            pj_flow3_t: "2. Stufe · Anpassung",
            pj_flow3_d: "Überstunden, Entwicklung der Warteliste und Zielabweichungen je nach eingetretenem Szenario.",
            pj_s2_p2: "Die drei Ziele werden normiert und gewichtet kombiniert; sieben Nebenbedingungen sichern eine umsetzbare Lösung: Flusserhaltung der Warteliste, OP-Kapazität, Überweisungsbudget, Minimax-Gerechtigkeit, gesetzliche Überstundengrenze, Kapazität des privaten Anbieters und COMGES-Ziele als weiche Restriktion.",
            pj_s3_title: "Ergebnisse",
            pj_s3_p1: "Im Hauptlauf – mit bewusster Priorität auf kürzere Wartezeiten (Gewichte 0,05 / 0,80 / 0,15) – plant das Modell 708 Operationen in 12 Wochen, davon 128 über private Anbieter (≈18 %). Die Warteliste sinkt von 3.866 auf 3.287 Patienten, bei finanziellen Kosten von 57,2 Mio. chilenischen Pesos und einem Ungleichheitsindex U = 1,045.",
            pj_chart1_title: "Reduktion der Warteliste nach 12 Wochen, je Eingriff",
            pj_s3_p2: "Pterygium, der kürzeste Eingriff, halbiert seine Warteliste; die Knieendoprothese sinkt wegen langer OP-Dauer und begrenzter privater Kapazität kaum.",
            pj_s4_title: "Zielkonflikte",
            pj_s4_p1: "Es gibt nicht die eine optimale Lösung, sondern eine Front von Kompromissen. Das Modell wurde 105-mal über alle Gewichtskombinationen von Kosten, Wartezeit und Gerechtigkeit gelöst. Jeder Punkt ist eine andere Steuerungsstrategie; fahren Sie mit dem Cursor darüber, um Details zu sehen.",
            pj_chart2_title: "Pareto-Front: finanzielle Kosten vs. soziale Wartekosten",
            pj_lg1: "Minimale Ungleichheit (U ≈ 1,00)",
            pj_lg2: "Mittlere Ungleichheit (U 1,01–1,10)",
            pj_lg3: "Ohne Gerechtigkeitsgewicht (U = 2,00)",
            pj_lg4: "Gewählte Strategie",
            pj_axis_y: "↑ Soziale Wartekosten (Mrd. CLP)",
            pj_axis_x: "Finanzielle Kosten (Mio. CLP) →",
            pj_th1: "Strategie (Gewichte w₁ ; w₂ ; w₃)",
            pj_th2: "Finanzielle Kosten (Mio. CLP)",
            pj_th3: "Soziale Wartekosten (Mrd. CLP)",
            pj_th4: "Ungleichheit U",
            pj_s4_p2: "Die gewählte Strategie erreicht fast die gleiche Verkürzung der Wartezeit wie die reine Wartezeit-Strategie, gibt weniger aus und hält die Ungleichheit nahe ihrem Minimum. Ohne Gerechtigkeitsgewicht verdoppelt sich die Ungleichheit: Die 15 % Gewicht für Gerechtigkeit erkaufen fast den gesamten Schutz zu marginalen Kosten.",
            pj_s5_title: "Vom Modell zum Betrieb",
            pj_s5_p1: "Der Optimierer arbeitet mit Untergruppen, nicht mit Personen. Damit das Ergebnis nutzbar ist, wird das Modell von einem durchgängigen Ablauf begleitet – von der Patientenerfassung bis zur Ergebnisverfolgung:",
            pj_st1_t: "Patientenerfassung",
            pj_st1_d: "Webanwendung, die die Warteliste erfasst, die RUT prüft und die Excel-Datei für das Modell erzeugt.",
            pj_st2_t: "Plan pro Patient",
            pj_st2_d: "Nach der Lösung werden die Kapazitäten jeder Untergruppe nach Wartezeit vergeben und gemäß OP-Stunden auf Werktage verteilt.",
            pj_st3_t: "Planungs-Dashboard",
            pj_st3_d: "Dashboard mit Anfangs- und Endliste, Reduktion, Operationen, Ungleichheit und Kosten, filterbar nach Eingriff und Krankenhaus.",
            pj_s6_title: "Werkzeuge und Team",
            pj_tools_label: "Werkzeuge",
            pj_sources_label: "Daten",
            pj_sources: "Instanz auf Basis historischer Wartelistendaten (Control de Gestión Araucanía Sur). Die wöchentlichen Zugänge wurden als regionale Jahresinzidenz geteilt durch 52 Wochen geschätzt.",
            pj_team_label: "Kursgruppe",
            pj_next_label: "Empfehlungen",
            pj_next: "Mit mehr und besseren Daten arbeiten, die Methodik schrittweise einführen und Kosten, Kapazitäten und COMGES-Ziele regelmäßig aktualisieren.",
            pj_fifo_title: "Im Vergleich zur Behandlung nach Eingangsreihenfolge (FIFO)",
            pj_fifo_a_t: "FIFO-Strategie",
            pj_fifo_a1: "Behandelt nach Eingangsreihenfolge bzw. Wartezeit.",
            pj_fifo_a2: "Berücksichtigt weder soziale Priorität noch klinischen Schweregrad.",
            pj_fifo_a3: "Optimiert weder Kosten noch kontrolliert sie Ungleichheit.",
            pj_fifo_a4: "Überweisungen sind nicht an das Budget gekoppelt.",
            pj_fifo_b_t: "Vorgeschlagenes Modell",
            pj_fifo_b1: "Priorisiert nach sozialem Profil und klinischem Schweregrad.",
            pj_fifo_b2: "Hält die COMGES-Ziele je Eingriff ein.",
            pj_fifo_b3: "Überweist an private Anbieter innerhalb eines Budgets.",
            pj_fifo_b4: "Minimiert die Ungleichheit beim Zugang.",
            pj_fig1: "Planungs-Dashboard: Kennzahlen des Hauptlaufs.",
            pj_fig2: "Anwendung zur Patientenerfassung, die die Excel-Datei für das Modell erzeugt.",
            pj_role_label: "Meine Rolle:",
            pj_role: "Ich habe das Projekt von Anfang bis Ende umgesetzt: mathematische Formulierung, Implementierung in Python + CPLEX, Pareto-Analyse, App zur Patientenerfassung und Planungs-Dashboard.",
            pj_cta: "Sprechen wir über dieses Projekt?",
            js_c0: "Cholezystektomie", js_c1: "Leistenhernie", js_c2: "Knieendoprothese", js_c3: "Pterygium",
            js_ini: "Anfängliche Liste", js_pub: "Öffentlich operiert", js_priv: "Privat überwiesen", js_fin: "Liste nach 12 Wochen",
            js_weights: "Gewichte (Kosten ; Wartezeit ; Gerechtigkeit)", js_cost: "Finanzielle Kosten", js_wait: "Soziale Wartekosten",
            js_ineq: "Ungleichheit U", js_mill: "Mio. CLP", js_bill: "Mrd. CLP",
            js_chosen: "Gewählte Strategie",
            js_p_cost: "Nur Kosten", js_p_wait: "Nur Wartezeit", js_p_eq: "Nur Gerechtigkeit", js_p_chosen: "Gewählt"
        },
        en: {
            pj_title: "Stochastic Optimization of Surgical Waiting Lists",
            pj_kicker: "Operations Research · Public Health · Chile",
            pj_lead: "An optimization model that decides not only how many patients get surgery, but who: it plans operating-room schedules and referrals to the private sector under uncertainty, with equity built in as an explicit criterion of the model.",
            pj_course: "Modeling and Decision-Making Workshop",
            pj_date: "Apr – Jul 2026",
            pj_team_size: "Course project · group of 4",
            pj_tag_pareto: "Pareto front",
            pj_stat1: "patients on the initial waiting list",
            pj_stat2: "surgeries scheduled in 12 weeks, 128 via private providers",
            pj_stat3: "fewer patients on the list after 12 weeks",
            pj_stat4: "decision variables across 576 subgroups",
            pj_s1_title: "The problem",
            pj_s1_p1: "In Chile's public health system, how long a patient waits for surgery depends on operating-room capacity, the budget for referrals to private providers, and prioritization rules. Optimizing only the total number of surgeries can hide groups that are systematically left behind.",
            pj_gap1_t: "Territorial gap",
            pj_gap1_d: "Hospitals with unequal operating-room capacity under sustained pressure.",
            pj_gap2_t: "Social and clinical gap",
            pj_gap2_d: "A severe case from a vulnerable group may wait as long as a mild case.",
            pj_gap3_t: "Limited referrals",
            pj_gap3_d: "The private-sector budget is limited: every peso has to be allocated deliberately.",
            pj_s1_p2: "The project models three public hospitals in La Araucanía (Hospital Dr. Hernán Henríquez Aravena, Hospital Intercultural de Nueva Imperial and Complejo Asistencial Padre Las Casas) plus one private provider, for four tracer surgeries: cholecystectomy, hernia, knee replacement and pterygium.",
            pj_s2_title: "The model",
            pj_s2_p1: "We formulated a two-stage, multi-objective stochastic mixed-integer linear program (MILP). Each patient belongs to a subgroup defined by hospital, surgery type, socioeconomic profile (FONASA A–B, C, D and SENAME), clinical severity and age group: 576 subgroups tracked week by week over 12 weeks.",
            pj_z1_t: "Economic cost",
            pj_z1_d: "Expected spending on private referrals and operating-room overtime.",
            pj_z2_t: "Weighted waiting",
            pj_z2_d: "Time on the list weighted by social priority and clinical severity, plus a penalty for missing COMGES targets.",
            pj_z3_t: "Inequity (minimax)",
            pj_z3_d: "The worst unmet-demand share across all subgroups: protects the group that is furthest behind.",
            pj_flow1_t: "Stage 1 · here and now",
            pj_flow1_d: "Surgical schedule and referrals: a single schedule that works for any scenario.",
            pj_flow2_t: "Three scenarios",
            pj_sc1: "Pessimistic",
            pj_sc2: "Baseline",
            pj_sc3: "Optimistic",
            pj_flow2_d: "Uncertain demand, no-show rates and surgery durations.",
            pj_flow3_t: "Stage 2 · recourse",
            pj_flow3_d: "Overtime, waiting-list evolution and target gaps, depending on which scenario occurs.",
            pj_s2_p2: "The three objectives are normalized and combined with weights, and seven constraints keep the solution operable: waiting-list flow conservation, operating-room capacity, referral budget, minimax equity, the legal overtime cap, private-provider capacity, and COMGES targets as a soft constraint.",
            pj_s3_title: "Results",
            pj_s3_p1: "In the main run, deliberately prioritizing shorter waits (weights 0.05 / 0.80 / 0.15), the model schedules 708 surgeries in 12 weeks, 128 of them referred to private providers (≈18%). The total list drops from 3,866 to 3,287 patients, at a financial cost of 57.2 million Chilean pesos and an inequity index of U = 1.045.",
            pj_chart1_title: "Waiting-list reduction after 12 weeks, by surgery",
            pj_s3_p2: "Pterygium, the shortest surgery, cuts its list in half; knee replacement barely moves because of its long operating-room time and limited private capacity.",
            pj_s4_title: "Trade-off analysis",
            pj_s4_p1: "There is no single optimal solution, but a frontier of trade-offs. The model was solved 105 times across every combination of weights on cost, waiting and equity. Each point is a different management policy; hover over them for details.",
            pj_chart2_title: "Pareto front: financial cost vs. social cost of waiting",
            pj_lg1: "Minimum inequity (U ≈ 1.00)",
            pj_lg2: "Intermediate inequity (U 1.01–1.10)",
            pj_lg3: "No equity weight (U = 2.00)",
            pj_lg4: "Chosen policy",
            pj_axis_y: "↑ Social cost of waiting (CLP billions)",
            pj_axis_x: "Financial cost (CLP millions) →",
            pj_th1: "Policy (weights w₁ ; w₂ ; w₃)",
            pj_th2: "Financial cost (CLP M)",
            pj_th3: "Social cost of waiting (CLP B)",
            pj_th4: "Inequity U",
            pj_s4_p2: "The chosen policy achieves almost the same waiting reduction as the pure waiting policy, spends less, and keeps inequity close to its minimum. Without an equity weight, inequity doubles: the 15% assigned to equity buys almost all of that protection at a marginal cost.",
            pj_s5_title: "From model to operations",
            pj_s5_p1: "The optimizer works with subgroups, not individuals. To make the result usable, the model comes with an end-to-end workflow, from patient intake to tracking results:",
            pj_st1_t: "Patient intake",
            pj_st1_d: "Web app that records the waiting list, validates the RUT (Chilean ID) and generates the Excel file that feeds the model.",
            pj_st2_t: "Per-patient schedule",
            pj_st2_d: "Once solved, each subgroup's slots go to patients by time on the list and are spread over working days within operating-room hours.",
            pj_st3_t: "Planning dashboard",
            pj_st3_d: "Dashboard with initial and final list, reduction, surgeries, inequity and cost, filterable by surgery and hospital.",
            pj_s6_title: "Tools and team",
            pj_tools_label: "Tools",
            pj_sources_label: "Data",
            pj_sources: "Instance based on historical waiting-list data (Control de Gestión Araucanía Sur). Weekly arrivals were estimated as the regional annual incidence divided by 52 weeks.",
            pj_team_label: "Course group",
            pj_next_label: "Recommendations",
            pj_next: "Work with more and better data, roll out the methodology gradually, and update costs, capacities and COMGES targets periodically.",
            pj_fifo_title: "Compared with first-come, first-served (FIFO)",
            pj_fifo_a_t: "FIFO policy",
            pj_fifo_a1: "Serves patients by arrival order or time on the list.",
            pj_fifo_a2: "Does not weigh social priority or clinical severity.",
            pj_fifo_a3: "Neither optimizes cost nor controls inequity.",
            pj_fifo_a4: "Referrals are not tied to the budget.",
            pj_fifo_b_t: "Proposed model",
            pj_fifo_b1: "Prioritizes by social profile and clinical severity.",
            pj_fifo_b2: "Meets COMGES targets by surgery type.",
            pj_fifo_b3: "Refers to private providers under a budget cap.",
            pj_fifo_b4: "Minimizes inequity of access.",
            pj_fig1: "Planning dashboard: key indicators from the main run.",
            pj_fig2: "Patient intake app that generates the model's Excel input.",
            pj_role_label: "My role:",
            pj_role: "I developed the project end to end: mathematical formulation, implementation in Python + CPLEX, Pareto analysis, patient intake app and planning dashboard.",
            pj_cta: "Want to talk about this project?",
            js_c0: "Cholecystectomy", js_c1: "Inguinal hernia", js_c2: "Knee replacement", js_c3: "Pterygium",
            js_ini: "Initial list", js_pub: "Operated (public)", js_priv: "Referred (private)", js_fin: "List after 12 weeks",
            js_weights: "Weights (cost ; waiting ; equity)", js_cost: "Financial cost", js_wait: "Social cost of waiting",
            js_ineq: "Inequity U", js_mill: "CLP M", js_bill: "CLP B",
            js_chosen: "Chosen policy",
            js_p_cost: "Cost only", js_p_wait: "Waiting only", js_p_eq: "Equity only", js_p_chosen: "Chosen"
        }
    };

    // Se suman a las traducciones globales de script.js
    if (typeof translations !== 'undefined') {
        Object.keys(pageTexts).forEach(lang => {
            translations[lang] = Object.assign(translations[lang] || {}, pageTexts[lang]);
        });
    }

    // ---------- 2. DATOS ----------
    const LOCALES = { es: 'es-CL', de: 'de-DE', en: 'en-US' };

    // Reducción por cirugía (corrida principal), ordenado de mayor a menor
    const SURGERIES = [
        { key: 'js_c3', ini: 318,  pub: 176, priv: 4,  fin: 156,  red: 0.511 },
        { key: 'js_c1', ini: 664,  pub: 136, priv: 45, fin: 502,  red: 0.244 },
        { key: 'js_c0', ini: 1051, pub: 136, priv: 57, fin: 872,  red: 0.171 },
        { key: 'js_c2', ini: 1833, pub: 132, priv: 22, fin: 1757, red: 0.041 }
    ];

    // Barrido de pesos: [w1*13, w2*13, w3*13, costo (mill. CLP), espera (miles de mill. CLP), U]
    const PARETO = [[0,0,13,60.46,107.33,1.0],[0,1,12,60.56,62.02,1.0],[0,2,11,60.52,62.4,1.0],[0,3,10,60.55,62.18,1.0],[0,4,9,60.56,62.17,1.0],[0,5,8,60.47,62.08,1.0],[0,6,7,60.53,62.6,1.0],[0,7,6,60.5,62.82,1.0],[0,8,5,60.49,62.38,1.006],[0,9,4,60.5,61.67,1.017],[0,10,3,60.5,61.33,1.03],[0,11,2,60.45,60.99,1.039],[0,12,1,60.53,60.82,1.05],[0,13,0,60.54,60.33,2.0],[1,0,12,0.0,132.31,1.0],[1,1,11,0.46,79.48,1.0],[1,2,10,1.49,78.17,1.0],[1,3,9,4.26,77.39,1.0],[1,4,8,5.35,76.09,1.006],[1,5,7,5.57,75.27,1.009],[1,6,6,10.19,73.64,1.006],[1,7,5,17.83,70.99,1.008],[1,8,4,21.83,69.56,1.014],[1,9,3,26.67,67.83,1.03],[1,10,2,48.89,62.64,1.053],[1,11,1,51.47,61.94,1.065],[1,12,0,57.37,60.36,2.0],[2,0,11,0.0,126.89,1.0],[2,1,10,0.07,80.64,1.0],[2,2,9,0.72,79.4,1.0],[2,3,8,0.81,79.43,1.008],[2,4,7,1.86,77.8,1.009],[2,5,6,2.49,77.51,1.009],[2,6,5,3.24,76.31,1.014],[2,7,4,4.15,75.43,1.025],[2,8,3,5.8,73.37,1.045],[2,9,2,6.67,72.8,1.056],[2,10,1,6.37,72.52,1.083],[2,11,0,7.15,71.86,2.0],[3,0,10,0.0,131.92,1.0],[3,1,9,0.02,80.76,1.0],[3,2,8,0.26,81.08,1.0],[3,3,7,0.59,79.4,1.009],[3,4,6,0.83,79.0,1.009],[3,5,5,0.95,78.56,1.009],[3,6,4,1.35,77.76,1.018],[3,7,3,2.12,76.54,1.026],[3,8,2,2.08,75.62,1.056],[3,9,1,2.49,74.77,1.083],[3,10,0,4.11,73.37,2.0],[4,0,9,0.0,125.8,1.0],[4,1,8,0.03,80.98,1.0],[4,2,7,0.14,81.35,1.0],[4,3,6,0.57,79.67,1.0],[4,4,5,0.53,79.29,1.009],[4,5,4,0.55,78.55,1.014],[4,6,3,1.13,77.25,1.029],[4,7,2,0.69,77.11,1.045],[4,8,1,1.24,75.67,1.083],[4,9,0,1.68,74.91,2.0],[5,0,8,0.0,130.22,1.0],[5,1,7,0.01,80.96,1.0],[5,2,6,0.15,80.89,1.006],[5,3,5,0.39,79.44,1.006],[5,4,4,0.71,78.9,1.007],[5,5,3,0.62,77.95,1.018],[5,6,2,0.59,76.94,1.041],[5,7,1,0.71,76.36,1.083],[5,8,0,1.03,75.25,2.0],[6,0,7,0.0,129.85,1.0],[6,1,6,0.01,81.4,1.0],[6,2,5,0.27,80.57,1.0],[6,3,4,0.25,79.75,1.009],[6,4,3,0.31,79.16,1.017],[6,5,2,0.36,77.71,1.045],[6,6,1,0.57,76.39,1.077],[6,7,0,0.79,75.45,2.0],[7,0,6,0.0,129.86,1.0],[7,1,5,0.0,81.26,1.0],[7,2,4,0.14,80.54,1.0],[7,3,3,0.09,79.74,1.012],[7,4,2,0.2,78.58,1.029],[7,5,1,0.39,77.21,1.056],[7,6,0,0.51,75.96,2.0],[8,0,5,0.0,130.4,1.0],[8,1,4,0.08,80.71,1.0],[8,2,3,0.19,80.06,1.006],[8,3,2,0.14,78.78,1.025],[8,4,1,0.14,77.96,1.046],[8,5,0,0.24,76.59,2.0],[9,0,4,0.0,131.13,1.0],[9,1,3,0.02,82.96,1.0],[9,2,2,0.16,79.49,1.009],[9,3,1,0.06,78.01,1.046],[9,4,0,0.1,76.66,2.0],[10,0,3,0.0,124.1,1.0],[10,1,2,0.07,80.67,1.0],[10,2,1,0.07,78.56,1.03],[10,3,0,0.08,76.6,2.0],[11,0,2,0.0,129.55,1.0],[11,1,1,0.02,80.0,1.014],[11,2,0,0.03,76.74,2.0],[12,0,1,0.0,130.59,1.0],[12,1,0,0.02,76.75,2.0],[13,0,0,0.0,137.04,2.0]];

    // Política elegida en la corrida principal
    const CHOSEN = { w: [0.05, 0.80, 0.15], cost: 57.2, wait: 61.1, u: 1.05 };

    // Políticas de referencia para la tabla
    const POLICIES = [
        { name: 'js_p_cost',   w: [1, 0, 0],          cost: 0,    wait: 137.0, u: 2.00 },
        { name: 'js_p_wait',   w: [0, 1, 0],          cost: 60.5, wait: 60.3,  u: 2.00 },
        { name: 'js_p_eq',     w: [0, 0, 1],          cost: 60.5, wait: 107.3, u: 1.00 },
        { name: 'js_p_chosen', w: CHOSEN.w,           cost: CHOSEN.cost, wait: CHOSEN.wait, u: CHOSEN.u, chosen: true }
    ];

    const COLORS = { low: '#199e70', mid: '#2a78d6', high: '#eb6834' };
    const uClass = u => (u <= 1.0001 ? 'low' : (u < 1.5 ? 'mid' : 'high'));

    // ---------- 3. UTILIDADES ----------
    const getLang = () => {
        try { return localStorage.getItem('preferredLanguage') || 'es'; } catch (e) { return 'es'; }
    };
    const T = (lang, key) => (pageTexts[lang] && pageTexts[lang][key]) || pageTexts.es[key];
    const fmt = (lang, value, opts) => new Intl.NumberFormat(LOCALES[lang] || 'es-CL', opts).format(value);
    const num = (lang, v, d = 0) => fmt(lang, v, { minimumFractionDigits: d, maximumFractionDigits: d });
    const pct = (lang, v, d = 1) => fmt(lang, v, { style: 'percent', minimumFractionDigits: d, maximumFractionDigits: d });
    const weights = (lang, w) => '(' + w.map(x => num(lang, x, 2)).join(' ; ') + ')';
    const SVGNS = 'http://www.w3.org/2000/svg';
    const el = (name, attrs) => {
        const n = document.createElementNS(SVGNS, name);
        Object.entries(attrs || {}).forEach(([k, v]) => n.setAttribute(k, v));
        return n;
    };

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

    // ---------- 4. NÚMEROS DE LAS TARJETAS ----------
    function renderNumbers(lang) {
        document.querySelectorAll('[data-num]').forEach(node => {
            const v = parseFloat(node.getAttribute('data-num'));
            const f = node.getAttribute('data-fmt');
            node.textContent = f === 'pct2' ? pct(lang, v, 2) : f === 'pct0' ? pct(lang, v, 0) : num(lang, v);
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
            row.querySelector('.pj-bar-value').textContent = pct(lang, s.red, 1);
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

    // ---------- 6. FRONTERA DE PARETO ----------
    function renderPareto(lang) {
        const svg = document.getElementById('pj-pareto');
        const tip = document.getElementById('pj-pareto-tip');
        const container = document.getElementById('pj-pareto-chart');
        if (!svg) return;
        while (svg.firstChild) svg.removeChild(svg.firstChild);

        // El gráfico se dibuja al ancho real del contenedor para que el texto no se achique en móvil
        const W = Math.max(300, Math.round(container.clientWidth || 640));
        const H = W < 560 ? Math.round(W * 0.78) : 340;
        const m = { l: 40, r: 12, t: 12, b: 30 };
        svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
        const xMax = 65, yMin = 50, yMax = 140;
        const sx = v => m.l + (v / xMax) * (W - m.l - m.r);
        const sy = v => H - m.b - ((v - yMin) / (yMax - yMin)) * (H - m.t - m.b);

        // Rejilla y ejes
        const grid = el('g');
        for (let y = 60; y <= 140; y += 20) {
            grid.appendChild(el('line', { x1: m.l, x2: W - m.r, y1: sy(y), y2: sy(y), stroke: '#e1e0d9', 'stroke-width': 1 }));
            const t = el('text', { x: m.l - 8, y: sy(y) + 4, 'text-anchor': 'end', 'font-size': 11, fill: '#898781' });
            t.textContent = num(lang, y);
            grid.appendChild(t);
        }
        for (let x = 0; x <= 60; x += 10) {
            const t = el('text', { x: sx(x), y: H - m.b + 18, 'text-anchor': 'middle', 'font-size': 11, fill: '#898781' });
            t.textContent = num(lang, x);
            grid.appendChild(t);
        }
        grid.appendChild(el('line', { x1: m.l, x2: W - m.r, y1: H - m.b, y2: H - m.b, stroke: '#c3c2b7', 'stroke-width': 1 }));
        svg.appendChild(grid);

        // Puntos (los de mayor inequidad primero, para que los equitativos queden encima)
        const order = { high: 0, mid: 1, low: 2 };
        const pts = PARETO.map(r => ({
            w: [r[0] / 13, r[1] / 13, r[2] / 13], cost: r[3], wait: r[4], u: r[5], cls: uClass(r[5])
        })).sort((a, b) => order[a.cls] - order[b.cls]);

        const dots = el('g');
        pts.forEach(p => {
            p.cx = sx(p.cost); p.cy = sy(p.wait);
            p.node = el('circle', { cx: p.cx, cy: p.cy, r: 5, fill: COLORS[p.cls], stroke: '#ffffff', 'stroke-width': 1.5 });
            dots.appendChild(p.node);
        });
        svg.appendChild(dots);

        // Política elegida
        const chosen = { ...CHOSEN, chosen: true, cx: sx(CHOSEN.cost), cy: sy(CHOSEN.wait) };
        svg.appendChild(el('circle', { cx: chosen.cx, cy: chosen.cy, r: 8, fill: '#ffffff', stroke: '#1a1a1a', 'stroke-width': 3 }));
        const lbl = el('text', { x: chosen.cx - 14, y: chosen.cy - 14, 'text-anchor': 'end', 'font-size': 12, 'font-weight': 700, fill: '#1a1a1a' });
        lbl.textContent = T(lang, 'js_chosen');
        svg.appendChild(lbl);
        const lead = el('line', { x1: chosen.cx - 12, y1: chosen.cy - 12, x2: chosen.cx - 6, y2: chosen.cy - 6, stroke: '#1a1a1a', 'stroke-width': 1.5 });
        svg.appendChild(lead);

        // Anillo de resaltado al pasar el cursor
        const ring = el('circle', { r: 9, fill: 'none', stroke: '#1a1a1a', 'stroke-width': 2, opacity: 0 });
        svg.appendChild(ring);

        const all = pts.concat([chosen]);
        const toSvg = (evt) => {
            const pt = svg.createSVGPoint();
            pt.x = evt.clientX; pt.y = evt.clientY;
            return pt.matrixTransform(svg.getScreenCTM().inverse());
        };
        const hide = () => { tip.classList.remove('is-on'); ring.setAttribute('opacity', 0); };
        const onMove = (evt) => {
            const p = toSvg(evt);
            let best = null, bd = Infinity;
            all.forEach(q => {
                const d = Math.hypot(q.cx - p.x, q.cy - p.y);
                if (d < bd) { bd = d; best = q; }
            });
            if (!best || bd > 18) { hide(); return; }
            ring.setAttribute('cx', best.cx); ring.setAttribute('cy', best.cy);
            ring.setAttribute('r', best.chosen ? 12 : 9);
            ring.setAttribute('opacity', 1);
            tip.innerHTML =
                (best.chosen ? '<b>' + T(lang, 'js_chosen') + '</b><br>' : '') +
                '<span class="muted">' + T(lang, 'js_weights') + ':</span> ' + weights(lang, best.w) + '<br>' +
                '<span class="muted">' + T(lang, 'js_cost') + ':</span> ' + num(lang, best.cost, 1) + ' ' + T(lang, 'js_mill') + '<br>' +
                '<span class="muted">' + T(lang, 'js_wait') + ':</span> ' + num(lang, best.wait, 1) + ' ' + T(lang, 'js_bill') + '<br>' +
                '<span class="muted">' + T(lang, 'js_ineq') + ':</span> ' + num(lang, best.u, 2);
            tip.classList.add('is-on');
            const cr = container.getBoundingClientRect();
            const sr = svg.getBoundingClientRect();
            const k = sr.width / W;
            placeTip(tip, container, sr.left - cr.left + best.cx * k, sr.top - cr.top + best.cy * k);
        };
        svg.onpointermove = onMove;
        svg.onpointerdown = onMove;
        svg.onpointerleave = hide;
    }

    // ---------- 7. TABLA DE POLÍTICAS ----------
    function renderTable(lang) {
        const tbody = document.querySelector('#pj-policy-table tbody');
        if (!tbody) return;
        tbody.innerHTML = '';
        POLICIES.forEach(p => {
            const tr = document.createElement('tr');
            if (p.chosen) tr.className = 'is-chosen';
            const cells = [
                T(lang, p.name) + '<small>' + weights(lang, p.w) + '</small>',
                num(lang, p.cost, 1),
                num(lang, p.wait, 1),
                num(lang, p.u, 2)
            ];
            cells.forEach(c => { const td = document.createElement('td'); td.innerHTML = c; tr.appendChild(td); });
            tbody.appendChild(tr);
        });
    }

    function renderAll(lang) {
        renderNumbers(lang);
        renderBars(lang);
        renderPareto(lang);
        renderTable(lang);
    }

    // ---------- 8. CONEXIÓN CON EL SELECTOR DE IDIOMA ----------
    if (typeof changeLanguage === 'function') {
        const baseChangeLanguage = changeLanguage;
        changeLanguage = function (lang) {
            baseChangeLanguage(lang);
            document.documentElement.lang = lang;
            renderAll(lang);
        };
    }

    let resizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => renderPareto(getLang()), 150);
    });

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
