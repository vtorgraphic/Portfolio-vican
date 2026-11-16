# Portafolio Vican · Victor Figueroa

Portafolio de diseño UX/UI y gráfico, construido a partir del prototipo en Figma
("Portafolio Vican.2026"). Responsive para móvil, tablet y escritorio.

**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · TypeScript

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Hero, proyectos, galería, colaboraciones, quién soy y contacto |
| `/proyectos/repe` | Caso de estudio Repe |
| `/proyectos/haditas` | Caso de estudio Haditas |
| `/proyectos/vigia` | Caso de estudio Vigia |
| `/proyectos/mi-cultura` | Caso de estudio Mi cultura |

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
