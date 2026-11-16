/**
 * Datos editables del portafolio.
 * Los enlaces vacíos ("") no se muestran en la web: rellénalos cuando los tengas.
 */

export const contacto = {
  correo: "hellovican@gmail.com",
  telefono: "+58 4120930581",
  whatsapp: "https://wa.me/584120930581",
};

export const enlaces = {
  haditasWeb: "https://haditascore.framer.website",
  vigiaPrototipo:
    "https://www.figma.com/proto/EDotvlGM5tDniCCAQEk7m1/Vigia?node-id=13-26404&page-id=13%3A26401&starting-point-node-id=13%3A26404&t=JDVE1mptqPLQ0HlV-1",
  repeBenchmark:
    "https://docs.google.com/spreadsheets/d/1Aiho_XLlW-ouUxQRc7bA9lJX_pSDJgu24YLyh0sdJck/edit?usp=sharing",
  repeFlujos: "https://www.figma.com/board/6ijmXXRaZeTNR99Ugnltu6/Flujos---Repe?node-id=0-1",
  repePrototipo: "https://repe-app-seven.vercel.app",
  miculturaPrototipo:
    "https://www.figma.com/proto/C8TNtx2jpDmEFRQB4fondy/Prototipo-Mi-Cultura?node-id=1-2609&viewport=241%2C-2895%2C0.37&t=k9KmCiRvyLBJKB0s-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2609&page-id=0%3A1",
  miculturaUiKit:
    "https://www.figma.com/proto/4UucdWAN7g8FY1G9LNX2p8/UI-kit---micultura?node-id=7-636&viewport=518%2C192%2C0.1&t=FSTBhiAsvecGFuXL-1&scaling=min-zoom&content-scaling=fixed&page-id=7%3A635",
  miculturaPlayStore: "https://play.google.com/store/apps/details?id=com.uvilor.app_eventos_micu&hl=es",
  silviaMoyaLinkedin: "https://www.linkedin.com/in/silviamoyac/",
};

export type Proyecto = {
  slug: string;
  nombre: string;
  tags: string[];
};

export const proyectos: Proyecto[] = [
  { slug: "repe", nombre: "Repe", tags: ["UX/UI", "App móvil"] },
  { slug: "haditas", nombre: "Haditas", tags: ["Diseño gráfico", "Sitio web"] },
  { slug: "vigia", nombre: "Vigia", tags: ["UX Research", "Web app y software"] },
  { slug: "mi-cultura", nombre: "Mi cultura", tags: ["UX Research", "App y software"] },
];

export const colaboraciones = [
  { nombre: "Unidigital", url: "https://www.unidigital.global/", color: "#f2711d" },
  { nombre: "Spoonity", url: "https://www.spoonity.com/es/", color: "#630d71" },
  { nombre: "ABC Fluency", url: "https://www.fluencyabc.com/es/", color: "#1b5593" },
];
