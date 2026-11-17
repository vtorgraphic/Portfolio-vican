"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANG_COOKIE, locales, switchLangPath, type Lang } from "@/i18n/config";
import { ui } from "@/i18n/ui";

const nombres: Record<Lang, string> = { es: "Español", en: "English" };

/** Selector ES / EN: mantiene la página actual y recuerda la elección. */
export default function LangSwitch({
  lang,
  className = "",
  onNavigate,
}: {
  lang: Lang;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname() || `/${lang}`;
  const t = ui[lang];

  return (
    <nav aria-label={t.idioma} className={`flex items-center rounded-full border border-line p-1 ${className}`}>
      {locales.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            href={switchLangPath(pathname, l)}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            aria-label={active ? nombres[l] : `${t.cambiarA} ${nombres[l]}`}
            scroll={false}
            onClick={() => {
              document.cookie = `${LANG_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
              onNavigate?.();
            }}
            className={`flex h-8 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold uppercase transition-colors lg:h-9 lg:text-base ${
              active ? "bg-white text-bg" : "text-muted hover:text-white"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </nav>
  );
}
