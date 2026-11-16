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
  haditasWeb: "",
  vigiaPrototipo: "",
  repeBenchmark: "",
  repeFlujos: "",
  repePrototipo: "",
  miculturaPrototipo: "",
  miculturaUiKit: "",
  miculturaAppStore: "",
  silviaMoyaLinkedin: "",
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
