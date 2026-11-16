import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5 px-4 py-8 text-center sm:px-8 md:flex-row md:justify-between md:text-left lg:px-16 lg:py-10">
        <Link href="/" aria-label="Vican, inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="vican" width={101} height={29} className="h-[29px] w-auto" />
        </Link>
        <p className="text-sm text-muted lg:text-base">© 2026 Victor Figueroa · Diseñador UX/UI y gráfico</p>
        <a href="#top" className="text-base font-semibold text-muted transition-colors hover:text-white lg:text-lg">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
