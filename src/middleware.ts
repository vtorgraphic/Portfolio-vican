import { NextResponse, type NextRequest } from "next/server";
import { defaultLang, isLang, LANG_COOKIE, type Lang } from "@/i18n/config";

/**
 * Las rutas sin idioma (/, /proyectos/repe…) se redirigen a /es o /en.
 * Prioridad: idioma elegido antes (cookie) → idioma del navegador → español.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split("/")[1];
  if (isLang(first)) return NextResponse.next();

  const cookie = req.cookies.get(LANG_COOKIE)?.value;
  let lang: Lang = defaultLang;
  if (isLang(cookie)) lang = cookie;
  else if (/^en\b/i.test(req.headers.get("accept-language") ?? "")) lang = "en";

  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Ignora archivos estáticos, imágenes y rutas internas de Next
  matcher: ["/((?!_next|images|icon\\.svg|favicon\\.ico|.*\\..*).*)"],
};
