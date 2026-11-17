const es = {
  antetitulo: "Portafolio · 2026",
  rol: { antes: "Diseñador ", acento: "UX/UI", despues: " y gráfico" },
  verProyectos: "Ver proyectos",
  proyectos: { etiqueta: "Proyectos", titulo: "Proyectos seleccionados" },
  galeria: {
    etiqueta: "Galería",
    titulo: "Imágenes de proyectos",
    alt: "imagen del proyecto",
    tags: ["Web app", "App móvil", "Sitio web", "Software", "Website", "UX/UI", "Identidad"],
  },
  colaboraciones: "Proyectos en los que he colaborado",
  quienSoy: {
    etiqueta: "¿Quién soy?",
    titulo: "¿Cómo empecé en el diseño UX/UI y mi recorrido?",
    parrafos: [
      "¡Hola, un placer! Soy Victor, diseñador UX/UI desde finales de 2022 y diseñador gráfico desde 2020.",
      "Empecé en el diseño gráfico trabajando con una imprenta. Luego, con un socio, creamos un emprendimiento de cócteles donde fui diseñador, investigador y bartender. En el proceso de hacer crecer el emprendimiento empezamos a aprender sobre investigación de usuarios, puntos de dolor, modelo Canvas, MVP, pitch, rondas de inversión, etc.",
      "Ahí descubrí que me gustaba juntar el diseño gráfico, el diseño centrado en los usuarios y la visión de negocio, y así llegué al diseño UX/UI.",
      "Desde entonces me he centrado en seguir mejorando como diseñador UX/UI y product designer. He trabajado en múltiples proyectos: websites, e-commerce, apps, web apps, ecosistemas de apps con múltiples productos para clientes, admins, software de gestión, etc. En mi recorrido he descubierto que me gusta trabajar en sistemas y apps grandes o complejas, donde tenga que entender a profundidad tanto las necesidades de mi cliente como las de su usuario final.",
    ],
  },
  contacto: {
    etiqueta: "Contacto",
    titulo: ["¿Tienes un proyecto", "en mente? Hablemos."],
    correo: "Correo",
    telefono: "Teléfono · WhatsApp",
  },
};

const en: typeof es = {
  antetitulo: "Portfolio · 2026",
  rol: { antes: "", acento: "UX/UI", despues: " & graphic designer" },
  verProyectos: "View projects",
  proyectos: { etiqueta: "Projects", titulo: "Selected projects" },
  galeria: {
    etiqueta: "Gallery",
    titulo: "Project images",
    alt: "project image",
    tags: ["Web app", "Mobile app", "Website", "Software", "Website", "UX/UI", "Identity"],
  },
  colaboraciones: "Projects I've collaborated on",
  quienSoy: {
    etiqueta: "Who am I?",
    titulo: "How did I get into UX/UI design, and what's my journey?",
    parrafos: [
      "Hi, nice to meet you! I'm Victor, a UX/UI designer since late 2022 and a graphic designer since 2020.",
      "I started in graphic design working with a print shop. Later, a partner and I launched a cocktail business where I was the designer, researcher and bartender. While growing the business, we started learning about user research, pain points, the business model canvas, MVPs, pitching, investment rounds and more.",
      "That's when I realized I loved combining graphic design, user-centered design and business vision — and discovered that UX/UI design existed.",
      "Since then I've focused mainly on growing as a UX/UI and product designer. I've worked on many projects, from websites, e-commerce, apps and web apps to app ecosystems with multiple products for clients and admins, management software and more. Along the way, I've found that I love working on large or complex systems and apps where I need to deeply understand both my client's needs and those of the end user.",
    ],
  },
  contacto: {
    etiqueta: "Contact",
    titulo: ["Got a project", "in mind? Let's talk."],
    correo: "Email",
    telefono: "Phone · WhatsApp",
  },
};

const home = { es, en };
export default home;
