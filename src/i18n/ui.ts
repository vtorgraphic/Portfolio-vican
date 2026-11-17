import type { Lang } from "./config";

/** Textos compartidos de la interfaz (header, footer, navegación). */
export const ui = {
  es: {
    nav: { proyectos: "Proyectos", galeria: "Galería", quienSoy: "Quién soy", contacto: "Contacto" },
    hablemos: "Hablemos",
    volver: "← Volver a proyectos",
    siguiente: "Siguiente proyecto",
    volverArriba: "Volver arriba ↑",
    rol: "Diseñador UX/UI y gráfico",
    menuAbrir: "Abrir menú",
    menuCerrar: "Cerrar menú",
    idioma: "Idioma",
    cambiarA: "Cambiar a",
    inicio: "Vican, inicio",
    metaTitulo: "Victor Figueroa · Diseñador UX/UI y gráfico",
    metaDescripcion:
      "Portafolio de Victor Figueroa (Vican), diseñador UX/UI y gráfico. Casos de estudio de apps, web apps, software y sitios web.",
  },
  en: {
    nav: { proyectos: "Projects", galeria: "Gallery", quienSoy: "About me", contacto: "Contact" },
    hablemos: "Let's talk",
    volver: "← Back to projects",
    siguiente: "Next project",
    volverArriba: "Back to top ↑",
    rol: "UX/UI & graphic designer",
    menuAbrir: "Open menu",
    menuCerrar: "Close menu",
    idioma: "Language",
    cambiarA: "Switch to",
    inicio: "Vican, home",
    metaTitulo: "Victor Figueroa · UX/UI & graphic designer",
    metaDescripcion:
      "Portfolio of Victor Figueroa (Vican), UX/UI and graphic designer. Case studies of apps, web apps, software and websites.",
  },
} satisfies Record<Lang, unknown>;

export type UI = (typeof ui)["es"];
