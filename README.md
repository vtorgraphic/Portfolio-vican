# Portafolio Vican · Victor Figueroa

Portafolio de diseño UX/UI y gráfico, construido a partir del prototipo en Figma
("Portafolio Vican.2026"). Responsive para móvil, tablet y escritorio, en español e inglés.

**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · TypeScript

## Páginas

Cada página existe en `/es/...` y `/en/...`. Las rutas sin idioma (`/`, `/proyectos/repe`…)
redirigen al idioma elegido antes (cookie `lang`), al del navegador o, por defecto, a español.

| Ruta | Contenido |
| --- | --- |
| `/es`, `/en` | Hero, proyectos, galería, colaboraciones, quién soy y contacto |
| `/{idioma}/proyectos/repe` | Caso de estudio Repe |
| `/{idioma}/proyectos/haditas` | Caso de estudio Haditas |
| `/{idioma}/proyectos/vigia` | Caso de estudio Vigia |
| `/{idioma}/proyectos/mi-cultura` | Caso de estudio Mi cultura |

## Idiomas

- **Textos de cada página:** `src/content/` (`home.ts`, `repe.ts`, `haditas.ts`, `vigia.ts`, `micultura.ts`).
  Cada archivo tiene un bloque `es` y otro `en` con la misma estructura.
- **Textos compartidos** (menú, footer, botones): `src/i18n/ui.ts`.
- **Selector ES / EN** del header: `src/components/LangSwitch.tsx`.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Editar contenido

- **Enlaces externos** (prototipos, UI Kit, App Store, LinkedIn, recursos): `src/data/site.ts`.
  Los enlaces vacíos no se muestran en la web; en cuanto añadas la URL aparece el botón.
- **Correo / WhatsApp / proyectos / colaboraciones:** también en `src/data/site.ts`.
- **Colores y tipografías** (tokens del manual de identidad): `src/app/globals.css`.
- **Componentes reutilizables** (etiquetas, botones, tarjetas…): `src/components/ui.tsx`.
- **Imágenes:** `public/images/` (WebP optimizado).

## Despliegue en Vercel

1. Sube este repo a GitHub.
2. En [vercel.com/new](https://vercel.com/new) importa el repositorio.
3. Vercel detecta Next.js automáticamente: pulsa **Deploy**.

Cada `git push` a `main` vuelve a publicar la web.
