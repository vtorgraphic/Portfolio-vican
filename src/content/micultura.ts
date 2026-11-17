const es = {
  meta: "App para descubrir eventos culturales y el software con el que se gestionan, diseñados como un solo ecosistema. Caso de estudio.",
  tags: ["UX Research", "UX/UI", "Diseño gráfico"],
  intro:
    "Una app para descubrir los eventos culturales del país y el software con el que se gestionan, diseñados como un solo ecosistema para tres tipos de usuario.",
  ctas: { prototipo: "Probar prototipo", uiKit: "Ver UI Kit", playStore: "Ver en Google Play" },
  ecosistema: {
    etiqueta: "El ecosistema",
    usuario: "Usuario",
    producto: "Producto",
    usuarios: [
      ["Asistentes", "Descubren y asisten a eventos."],
      ["Organizadores", "Productoras y emprendedores que publican eventos."],
      ["Operadores", "Gestionan eventos y cuentas."],
    ],
    app: ["App móvil", "Descubrir eventos por fecha y categoría, y publicarlos en pocos pasos."],
    software: ["Software de gestión", "Tareas, eventos, cuentas y estadísticas."],
    uiKit: ["UI Kit compartido", "Un mismo lenguaje visual para todo el ecosistema."],
  },
  brief: {
    etiqueta: "El brief",
    titulo: "Ficha del proyecto",
    filas: [
      ["Objetivo", "Aumentar el turismo dentro del país dando a conocer sus eventos, desde grandes productoras a pequeños emprendedores."],
      ["Usuarios", "Quienes usan la app para asistir a eventos, quienes los crean y los operadores del software de gestión."],
      ["Tiempo", "3 meses para crear 3 propuestas para los proyectos."],
      ["Limitación", "El tiempo: me enfoqué principalmente en saber quiénes son nuestros usuarios para avanzar directamente con las propuestas."],
      ["Reto", "Comprender las necesidades de tres usuarios distintos y diseñar una propuesta que conecte tanto con ellos como con el cliente."],
      ["Mi rol", "UX research, UX/UI y diseño gráfico."],
    ],
  },
  investigacion: {
    etiqueta: "Investigación",
    titulo: "Benchmark y operadores",
    lead: "Analicé a la competencia en un benchmark y estudié cómo trabajan los operadores del software de gestión.",
    citas: [
      ["Categorizar bien los eventos es clave para que la gente encuentre lo que busca.", "— Benchmark de competidores"],
      ["Necesitaban tener sus tareas organizadas dentro del mismo software de gestión.", "— Operadores del software"],
    ],
  },
  solucion: {
    etiqueta: "La solución",
    titulo: "Un producto, una necesidad",
    paneles: [
      { tag: "App móvil", titulo: "Crea, edita y publica eventos", items: ["Un modelo intuitivo de pocos pasos para crear eventos.", "Apartado para editar los eventos y corregir errores o cambios en la organización."] },
      { tag: "App móvil", titulo: "Descubrir y compartir eventos", items: ["Eventos próximos claros, ordenados por fecha y con filtros de búsqueda.", "Eventos promocionados como método de monetización."] },
      { tag: "Software de gestión", titulo: "Las tareas del operador, en un solo lugar", items: ["Un dashboard con tareas y estadísticas de productividad.", "Eventos organizados por categorías y subcategorías en la base de datos."] },
      { tag: "Website", titulo: "Accede desde cualquier plataforma", items: ["Un website para buscar, filtrar y compartir eventos.", "Sitio conectado con tu cuenta en la app móvil."] },
    ],
    altsCrear: ["crear evento, paso 1", "crear evento, paso 2", "crear evento, paso 3"],
    altsDescubrir: ["inicio", "búsqueda", "notificaciones"],
    altSoftware: "dashboard del software de gestión",
    altWebsite: "website de eventos",
  },
  impacto: {
    etiqueta: "Resultados",
    titulo: "Impacto en ambos proyectos",
    stats: [
      ["+40%", "de retención de usuarios en ambos proyectos al reducir la fricción."],
      ["1", "lenguaje visual para todo el ecosistema, sin desconexión entre sus productos."],
      ["Más ágil", "así describieron los usuarios sus tareas tras optimizar el contenido de las pantallas."],
    ],
    hojaRuta: "Hoja de ruta propuesta",
    hitos: [
      ["Hecho", "MVP", "App, software de gestión y UI Kit."],
      ["Propuesta", "Gamificación", "Dinámicas para motivar a descubrir y asistir a más eventos."],
      ["Propuesta", "Eventos promocionados", "Espacios destacados como fuente de ingresos."],
    ],
    verMas: "¿Quieres ver más?",
    verTodos: "Ver todos los proyectos",
  },
};

const en: typeof es = {
  meta: "An app to discover cultural events and the software used to manage them, designed as a single ecosystem. Case study.",
  tags: ["UX Research", "UX/UI", "Graphic design"],
  intro:
    "An app to discover the country's cultural events and the software used to manage them, designed as a single ecosystem for three types of users.",
  ctas: { prototipo: "Try prototype", uiKit: "View UI Kit", playStore: "View on Google Play" },
  ecosistema: {
    etiqueta: "The ecosystem",
    usuario: "User",
    producto: "Product",
    usuarios: [
      ["Attendees", "Discover and attend events."],
      ["Organizers", "Production companies and entrepreneurs who publish events."],
      ["Operators", "Manage events and accounts."],
    ],
    app: ["Mobile app", "Discover events by date and category, and publish them in just a few steps."],
    software: ["Management software", "Tasks, events, accounts and statistics."],
    uiKit: ["Shared UI Kit", "One visual language for the whole ecosystem."],
  },
  brief: {
    etiqueta: "The brief",
    titulo: "Project overview",
    filas: [
      ["Goal", "Boost domestic tourism by promoting the country's events, from large production companies to small entrepreneurs."],
      ["Users", "People who use the app to attend events, those who create them, and the operators of the management software."],
      ["Timeline", "3 months to create 3 proposals for the projects."],
      ["Constraint", "Time: I focused mainly on understanding who our users were so we could move straight into the proposals."],
      ["Challenge", "Understand the needs of three different users and design a proposal that connects with both them and the client."],
      ["My role", "UX research, UX/UI & graphic design."],
    ],
  },
  investigacion: {
    etiqueta: "Research",
    titulo: "Benchmark & operators",
    lead: "I analyzed the competition in a benchmark and studied how the management software operators work.",
    citas: [
      ["Categorizing events well is key for people to find what they're looking for.", "— Competitor benchmark"],
      ["They needed their tasks organized within the management software itself.", "— Software operators"],
    ],
  },
  solucion: {
    etiqueta: "The solution",
    titulo: "One product, one need",
    paneles: [
      { tag: "Mobile app", titulo: "Create, edit and publish events", items: ["An intuitive, few-step flow to create events.", "A section to edit events and fix errors or organizational changes."] },
      { tag: "Mobile app", titulo: "Discover and share events", items: ["Clear upcoming events, sorted by date and with search filters.", "Promoted events as a monetization method."] },
      { tag: "Management software", titulo: "The operator's tasks, all in one place", items: ["A dashboard with tasks and productivity statistics.", "Events organized by categories and subcategories in the database."] },
      { tag: "Website", titulo: "Access from any platform", items: ["A website to search, filter and share events.", "A site connected to your account in the mobile app."] },
    ],
    altsCrear: ["create event, step 1", "create event, step 2", "create event, step 3"],
    altsDescubrir: ["home", "search", "notifications"],
    altSoftware: "management software dashboard",
    altWebsite: "events website",
  },
  impacto: {
    etiqueta: "Results",
    titulo: "Impact on both projects",
    stats: [
      ["+40%", "user retention across both projects by reducing friction."],
      ["1", "visual language for the whole ecosystem, with no disconnect between its products."],
      ["Faster", "is how users described their tasks after we optimized screen content."],
    ],
    hojaRuta: "Proposed roadmap",
    hitos: [
      ["Done", "MVP", "App, management software and UI Kit."],
      ["Proposal", "Gamification", "Mechanics that motivate people to discover and attend more events."],
      ["Proposal", "Promoted events", "Featured spots as a revenue stream."],
    ],
    verMas: "Want to see more?",
    verTodos: "View all projects",
  },
};

const micultura = { es, en };
export default micultura;
