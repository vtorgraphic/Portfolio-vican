"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LangSwitch from "@/components/LangSwitch";
import type { Lang } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export default function Header({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const t = ui[lang];
  const home = `/${lang}`;

  const nav = [
    { label: t.nav.proyectos, href: `${home}#proyectos` },
    { label: t.nav.galeria, href: `${home}#galeria` },
    { label: t.nav.quienSoy, href: `${home}#quien-soy` },
    { label: t.nav.contacto, href: `${home}#contacto` },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-3.5 sm:px-8 lg:px-16 lg:py-5">
        <Link href={home} aria-label={t.inicio} onClick={() => setOpen(false)} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="vican" width={121} height={35} className="h-7 w-auto lg:h-[35px]" />
        </Link>

        <nav aria-label={lang === "en" ? "Main" : "Principal"} className="hidden items-center md:flex md:gap-6 lg:gap-10">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group relative flex flex-col gap-1 whitespace-nowrap text-base font-semibold leading-[1.4] text-muted transition-colors hover:text-white lg:text-lg"
            >
              {n.label}
              <span className="h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch lang={lang} />
          <Link
            href={`${home}#contacto`}
            className="font-display hidden whitespace-nowrap rounded-full border border-surface-2 bg-accent px-6 py-2 text-lg font-semibold shadow-[0_3px_0_#1f1f1f] transition-transform hover:-translate-y-0.5 lg:inline-flex lg:px-8 lg:py-2.5 lg:text-2xl"
          >
            {t.hablemos}
          </Link>
          <button
            type="button"
            aria-label={open ? t.menuCerrar : t.menuAbrir}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
            className="relative flex size-11 items-center justify-center rounded-full border border-line md:hidden"
          >
            <span
              className={`absolute h-0.5 w-5 bg-white transition-transform duration-200 ${open ? "rotate-45" : "-translate-y-[5px]"}`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-white transition-transform duration-200 ${open ? "-rotate-45" : "translate-y-[5px]"}`}
            />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div id="menu-movil" hidden={!open} className="fixed inset-x-0 top-[73px] h-[calc(100dvh-73px)] bg-bg md:hidden">
        <nav aria-label={lang === "en" ? "Mobile" : "Móvil"} className="flex h-full flex-col gap-2 px-4 pt-8 pb-10 sm:px-8">
          {nav.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-line py-4 font-display text-4xl font-bold"
            >
              <span className="text-sm font-semibold text-muted">0{i + 1}</span>
              {n.label}
            </Link>
          ))}
          <Link
            href={`${home}#contacto`}
            onClick={() => setOpen(false)}
            className="font-display mt-auto inline-flex justify-center rounded-full border border-surface-2 bg-accent px-6 py-3 text-xl font-semibold shadow-[0_3px_0_#1f1f1f]"
          >
            {t.hablemos}
          </Link>
        </nav>
      </div>
    </header>
  );
}
