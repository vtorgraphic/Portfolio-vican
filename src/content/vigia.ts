const es = {
  meta: "Rediseño de un ecosistema de tres plataformas de monitoreo GPS bajo un mismo universo visual. Caso de estudio.",
  tags: ["UX Research", "UX/UI", "Diseño gráfico", "Ecosistema de 3 plataformas"],
  intro:
    "Rediseño de un ecosistema de tres plataformas: una web app de monitoreo GPS, un software de gestión de usuarios y su app, bajo un mismo universo visual.",
  probar: "Probar prototipo",
  datos: [
    ["Rol", "UX research, UX/UI y diseño gráfico"],
    ["Plataformas", "Web app GPS · Gestión de usuarios · App"],
    ["Proceso", "Benchmark → User flow → Wireframes → Prototipos"],
    ["Entregas", "Cambios semanales al cliente"],
  ],
  alts: {
    gps: "Vigia: web app de monitoreo GPS",
    userflow: "Vigia: user flow de la plataforma de usuarios",
    wireframes: "Vigia: wireframes de la plataforma de usuarios",
    prototipo: "Vigia: prototipo funcional de monitoreo",
    gestion: "Vigia: software de gestión de usuarios con dashboard",
  },
  contexto: {
    eyebrow: "01 · Contexto",
    titulo: "Crear un ecosistema para una web app, una app móvil y un software de gestión",
    p1: "Vigia es una empresa de monitoreo por GPS. Su servicio permite llevar el control y vigilar flotas vehiculares, ya sea de empresas o de personas independientes. El usuario puede colocar alarmas, rutas, geocercas, registros, etc. para monitorear de manera estandarizada sus flotas.",
    p2: "La empresa quería que su web app fuera más intuitiva: los usuarios comentaban que la notaban muy compleja y que no tenía ciertas funciones que sí tenía la app. Otro objetivo era terminar y mejorar su software de gestión, que se pondría a la venta próximamente para franquiciar el servicio de monitoreo, permitiendo que algunos clientes pudieran administrar a los suyos.",
  },
  problema: {
    etiqueta: "El problema",
    titulo: "Producto anticuado y poco intuitivo",
    reto: "El mayor reto",
    retoTexto:
      "El tiempo: entender las necesidades del proyecto y todas las funciones de sus softwares lo más rápido posible para avanzar a wireframes y prototipos.",
    encontramos: "Lo que encontramos",
    hicimos: "Lo que hicimos",
    solucion: "Solución",
    matriz: [
      ["Ecosistema", "Los usuarios sentían desconexión con la web app y no entendían su alcance: no había ninguna explicación previa.", "Unifiqué el estilo de todo el ecosistema con un mismo design system, para que todo se sintiera del mismo universo."],
      ["Web app GPS", "En la web app de monitoreo, el menú con todas las opciones abrumaba y las funciones de interés no se encontraban.", "Reduje el ruido visual de los menús principales y usé iconos y espacios para aliviar la sobrecarga."],
      ["Gestión de usuarios", "El software de gestión no estaba completo y tenía muchos pasos extra que saturaban la experiencia y hacían perder tiempo.", "Depuré las pantallas principales y añadí atajos para optimizar el tiempo de los usuarios."],
      ["Gestión de usuarios", "Los usuarios querían un resumen mensual de sus clientes y poder filtrarlos.", "Propuse y añadí un dashboard que muestra de forma gráfica y sencilla la data más importante."],
    ],
  },
  insights: {
    etiqueta: "Insights",
    titulo: "Lo que nos dijo la investigación",
    webApp: "Web app",
    webAppTexto:
      "Los usuarios se sentían confundidos, no usaban las funciones que les interesaban porque no las encontraban, y algunos se sentían abrumados por el menú.",
    software: "Software de gestión",
    softwareTexto:
      "Los usuarios querían encontrar un resumen de sus clientes, pagos, clientes nuevos, desertados, etc. y poder filtrarlos.",
  },
  proceso: {
    etiqueta: "Proceso",
    titulo: "Fases del proyecto",
    lead: "Al ser un ecosistema de tres softwares, implementé soluciones distintas para el reto de cada uno, avanzando por fases y con entregas semanales al cliente.",
    fase: "Fase",
    fases: [
      ["Benchmark", "Investigué a fondo a la competencia en tres ejes. Al ser una aplicación tan grande, era clave que los usuarios la percibieran intuitiva y fácil de entender."],
      ["User flow", "Hice un user flow de cada plataforma. El reto fue reorganizar las opciones que ya existían y luego sumar las nuevas funciones."],
      ["Wireframes", "Con los flujos aprobados por el cliente, empecé por la gestión de usuarios, en dos versiones: una para la empresa y otra para usuarios que manejan sus propios clientes. Ahí sumamos el dashboard. Luego seguí con el monitoreo y la app, alternándolos semana a semana por ser los más complejos."],
      ["Prototipos funcionales", "Empecé por la plataforma de gestión y luego las demás. Fue el tramo más largo por los cambios y ajustes."],
    ],
    ejesBenchmark: ["Estilos visuales", "Funciones", "Usabilidad"],
    ejesWireframes: ["Gestión · empresa", "Gestión · usuarios", "Monitoreo GPS", "App"],
    giro: "El giro",
    giroTexto:
      "Al cierre, el cliente pidió usar un sistema de diseño, lo que cambió gran parte del trabajo. Ese mismo design system es el que hoy unifica el ecosistema.",
  },
  plataformas: {
    etiqueta: "El ecosistema",
    titulo: "3 plataformas",
    lead: "Unifiqué el estilo visual de los proyectos con el mismo design system para que todo se sintiera parte del universo visual de la empresa.",
    gpsTag: "Web app de monitoreo GPS",
    gpsTitulo: "El mayor reto del ecosistema",
    gpsCards: [
      ["01 · Menos ruido", "Saqué de los menús principales las opciones que no eran esenciales."],
      ["02 · Iconos y espacio", "Iconos para cada función y espacios para reducir la sobrecarga visual."],
      ["03 · Menos pantallas", "Recorrido más corto para crear solicitudes."],
      ["04 · Nuevas funciones", "Añadidas según las solicitudes de los usuarios a la empresa."],
    ],
    gestionTag: "Gestión de usuarios",
    gestionTitulo: "Lo importante, a primera vista",
    gestionCards: [
      ["01 · Pantallas depuradas", "Menos información poco relevante en las pantallas principales."],
      ["02 · Atajos", "Accesos directos que optimizan el tiempo de los usuarios."],
      ["03 · Dashboard", "Un resumen gráfico y sencillo de la data más importante de los clientes."],
    ],
  },
  resultados: {
    cifraTexto: "de retención de usuarios en ambos proyectos",
    items: [
      ["Un solo universo visual", "Se unificó el estilo del ecosistema, eliminando la desconexión entre sus productos."],
      ["Tareas más rápidas", "Al optimizar el contenido de las pantallas, los usuarios comunicaron que realizaban sus tareas más rápido."],
    ],
  },
};

const en: typeof es = {
  meta: "Redesign of a three-platform GPS monitoring ecosystem under one visual universe. Case study.",
  tags: ["UX Research", "UX/UI", "Graphic design", "3-platform ecosystem"],
  intro:
    "Redesign of a three-platform ecosystem: a GPS monitoring web app, user management software and its app, all under one visual universe.",
  probar: "Try prototype",
  datos: [
    ["Role", "UX research, UX/UI & graphic design"],
    ["Platforms", "GPS web app · User management · App"],
    ["Process", "Benchmark → User flow → Wireframes → Prototypes"],
    ["Deliveries", "Weekly updates to the client"],
  ],
  alts: {
    gps: "Vigia: GPS monitoring web app",
    userflow: "Vigia: user flow of the user platform",
    wireframes: "Vigia: wireframes of the user platform",
    prototipo: "Vigia: functional monitoring prototype",
    gestion: "Vigia: user management software with dashboard",
  },
  contexto: {
    eyebrow: "01 · Context",
    titulo: "Creating an ecosystem for a web app, mobile app and management software",
    p1: "Vigia is a GPS monitoring company. Its service lets businesses and individuals track and oversee their vehicle fleets. Users can set up alarms, routes, geofences, logs and more to monitor their fleets in a standardized way.",
    p2: "The company wanted its web app to be more intuitive: users said they found it very complex and that it lacked certain features the app did have. Another goal was to finish and improve its management software, which would soon go on sale to franchise the monitoring service, allowing some clients to manage their own clients.",
  },
  problema: {
    etiqueta: "The problem",
    titulo: "An outdated, unintuitive product",
    reto: "The biggest challenge",
    retoTexto:
      "Time: understanding the project's needs and every feature of its software as quickly as possible to move on to wireframes and prototypes.",
    encontramos: "What we found",
    hicimos: "What we did",
    solucion: "Solution",
    matriz: [
      ["Ecosystem", "Users felt disconnected from the web app and didn't understand its scope: there was no prior explanation.", "I unified the style of the whole ecosystem with a single design system, so everything felt part of the same universe."],
      ["GPS web app", "In the monitoring web app, the menu with every option was overwhelming and the features people wanted couldn't be found.", "I reduced the visual noise in the main menus and used icons and spacing to ease the overload."],
      ["User management", "The management software was incomplete and had many extra steps that cluttered the experience and wasted time.", "I streamlined the main screens and added shortcuts to save users time."],
      ["User management", "Users wanted a monthly summary of their clients and the ability to filter them.", "I proposed and added a dashboard that shows the most important data in a simple, visual way."],
    ],
  },
  insights: {
    etiqueta: "Insights",
    titulo: "What the research told us",
    webApp: "Web app",
    webAppTexto:
      "Users felt confused, didn't use the features they cared about because they couldn't find them, and some felt overwhelmed by the menu.",
    software: "Management software",
    softwareTexto:
      "Users wanted a summary of their clients, payments, new and churned clients, etc., and the ability to filter them.",
  },
  proceso: {
    etiqueta: "Process",
    titulo: "Project phases",
    lead: "Since it was an ecosystem of three products, I implemented a different solution for each one's challenge, working in phases with weekly deliveries to the client.",
    fase: "Phase",
    fases: [
      ["Benchmark", "I researched the competition in depth across three areas. Being such a large application, it was key for users to perceive it as intuitive and easy to understand."],
      ["User flow", "I mapped a user flow for each platform. The challenge was reorganizing the existing options and then adding the new features."],
      ["Wireframes", "With the flows approved by the client, I started with user management in two versions: one for the company and another for users who manage their own clients. That's where we added the dashboard. Then I moved on to monitoring and the app, alternating them week by week since they were the most complex."],
      ["Functional prototypes", "I started with the management platform and then the others. It was the longest stretch because of all the changes and adjustments."],
    ],
    ejesBenchmark: ["Visual styles", "Features", "Usability"],
    ejesWireframes: ["Management · company", "Management · users", "GPS monitoring", "App"],
    giro: "The twist",
    giroTexto:
      "Near the end, the client asked to use a design system, which changed much of the work. That same design system is what unifies the ecosystem today.",
  },
  plataformas: {
    etiqueta: "The ecosystem",
    titulo: "3 platforms",
    lead: "I unified the visual style of the projects with the same design system so everything felt part of the company's visual universe.",
    gpsTag: "GPS monitoring web app",
    gpsTitulo: "The ecosystem's biggest challenge",
    gpsCards: [
      ["01 · Less noise", "I removed non-essential options from the main menus."],
      ["02 · Icons & spacing", "Icons for each feature and spacing to reduce visual overload."],
      ["03 · Fewer screens", "A shorter path to create requests."],
      ["04 · New features", "Added based on users' requests to the company."],
    ],
    gestionTag: "User management",
    gestionTitulo: "What matters, at first glance",
    gestionCards: [
      ["01 · Streamlined screens", "Less irrelevant information on the main screens."],
      ["02 · Shortcuts", "Shortcuts that save users time."],
      ["03 · Dashboard", "A simple, visual summary of the most important client data."],
    ],
  },
  resultados: {
    cifraTexto: "user retention across both projects",
    items: [
      ["A single visual universe", "The ecosystem's style was unified, removing the disconnect between its products."],
      ["Faster tasks", "After we optimized screen content, users reported completing their tasks faster."],
    ],
  },
};

const vigia = { es, en };
export default vigia;
