export const locales = ["es", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "es";
export const LANG_COOKIE = "lang";

export function isLang(value: string | undefined): value is Lang {
  return !!value && (locales as readonly string[]).includes(value);
}

export type LangParams = { params: Promise<{ lang: string }> };

/** Lee el idioma de los parámetros de la ruta (por defecto español). */
export async function resolveLang(params: LangParams["params"]): Promise<Lang> {
  const { lang } = await params;
  return isLang(lang) ? lang : defaultLang;
}

/** Cambia el prefijo de idioma de una ruta: /es/proyectos/repe → /en/proyectos/repe */
export function switchLangPath(pathname: string, to: Lang): string {
  const parts = pathname.split("/");
  if (isLang(parts[1])) parts[1] = to;
  else parts.splice(1, 0, to);
  return parts.join("/") || `/${to}`;
}
