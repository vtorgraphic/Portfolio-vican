import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Lang } from "@/i18n/config";
import { ui } from "@/i18n/ui";

/* ---------- Layout ---------- */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-16 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
  inner = "",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  inner?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-[120px] ${className}`}>
      <Container className={inner}>{children}</Container>
    </section>
  );
}

/* ---------- Tipografía ---------- */

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-base font-semibold leading-[1.4] text-accent lg:text-lg ${className}`}>{children}</p>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-[clamp(34px,4.4vw,64px)] font-bold leading-[1.08] tracking-[-0.01em] ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`font-display text-[clamp(30px,3.9vw,56px)] font-bold leading-[1.1] tracking-[-0.01em] ${className}`}>
      {children}
    </h3>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-lg leading-[1.6] lg:text-xl ${className}`}>{children}</p>;
}

/** Encabezado de caso: número + sección en rojo y título */
export function CaseHeading({
  eyebrow,
  title,
  className = "",
  size = "md",
}: {
  eyebrow: string;
  title: ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <div className={`flex flex-col gap-3 lg:gap-4 ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {size === "lg" ? <H2>{title}</H2> : <H3>{title}</H3>}
    </div>
  );
}

/** Hero de caso: título gigante con punto rojo */
export function CaseTitle({ children, className = "" }: { children: string; className?: string }) {
  return (
    <h1
      className={`font-display text-[clamp(64px,12.5vw,180px)] font-bold leading-[0.9] tracking-[-0.03em] ${className}`}
    >
      {children}
      <span className="text-accent">.</span>
    </h1>
  );
}

/* ---------- Etiquetas y botones ---------- */

export function SectionPill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full bg-accent px-6 py-2 text-lg font-bold leading-[1.3] lg:px-8 lg:py-2.5 lg:text-2xl ${className}`}
    >
      {children}
    </span>
  );
}

export function Tag({ children, tone = "gray" }: { children: ReactNode; tone?: "gray" | "red" }) {
  return (
    <span
      className={`inline-flex w-fit items-center whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium leading-[1.4] lg:px-4 lg:py-2 lg:text-base ${
        tone === "red" ? "bg-accent" : "bg-chip"
      }`}
    >
      {children}
    </span>
  );
}

export function Tags({ items, first = "red" }: { items: string[]; first?: "red" | "gray" }) {
  return (
    <div className="flex flex-wrap gap-2 lg:gap-3">
      {items.map((t, i) => (
        <Tag key={t} tone={i === 0 && first === "red" ? "red" : "gray"}>
          {t}
        </Tag>
      ))}
    </div>
  );
}

const btnBase =
  "font-display inline-flex items-center justify-center whitespace-nowrap rounded-full border border-surface-2 px-6 py-2 text-lg font-semibold shadow-[0_3px_0_#1f1f1f] transition-[transform,box-shadow,background-color] duration-150 hover:-translate-y-0.5 hover:shadow-[0_5px_0_#1f1f1f] active:translate-y-0.5 active:shadow-[0_1px_0_#1f1f1f] lg:px-8 lg:py-2.5 lg:text-2xl";

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light";
  external?: boolean;
  className?: string;
}) {
  const color = variant === "primary" ? "bg-accent text-white hover:bg-[#ff1a5c]" : "bg-white text-surface-2";
  const cls = `${btnBase} ${color} ${className}`;
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ArrowIcon({ className = "size-5 lg:size-6", rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/flecha.svg"
      alt=""
      aria-hidden
      className={className}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    />
  );
}

export function BackLink({ lang }: { lang: Lang }) {
  return (
    <Link
      href={`/${lang}#proyectos`}
      className="w-fit text-base font-semibold leading-[1.4] text-muted transition-colors hover:text-white lg:text-lg"
    >
      {ui[lang].volver}
    </Link>
  );
}

/* ---------- Tarjetas ---------- */

export function FeatureCard({
  title,
  children,
  bg = "bg-bg",
  className = "",
}: {
  title: string;
  children: ReactNode;
  bg?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 rounded-3xl p-6 lg:gap-4 lg:p-8 ${bg} ${className}`}>
      <h4 className="text-xl font-bold leading-[1.3] lg:text-2xl">{title}</h4>
      <p className="text-base leading-[1.5] text-muted lg:text-lg">{children}</p>
    </div>
  );
}

export function StatCard({
  value,
  children,
  bg = "bg-surface",
  valueClass = "",
}: {
  value: string;
  children: ReactNode;
  bg?: string;
  valueClass?: string;
}) {
  return (
    <div className={`flex flex-col justify-between gap-6 rounded-3xl p-6 lg:min-h-[260px] lg:p-8 ${bg}`}>
      <p className={`font-display text-[clamp(56px,6vw,88px)] font-bold leading-none tracking-[-0.02em] ${valueClass}`}>
        {value}
      </p>
      <p className="text-lg leading-[1.5] lg:text-xl">{children}</p>
    </div>
  );
}

export function BulletList({ items, className = "" }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3 lg:gap-4 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-4 text-base leading-[1.4] lg:text-lg">
          <span aria-hidden className="mt-[0.45em] size-2 shrink-0 rounded-full bg-accent" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function Quote({ text, source }: { text: string; source: string }) {
  return (
    <figure className="flex gap-4 lg:gap-6">
      <span aria-hidden className="font-display text-7xl font-bold leading-[0.8] text-accent lg:text-8xl">
        “
      </span>
      <div className="flex flex-col gap-3">
        <blockquote className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">{text}</blockquote>
        <figcaption className="text-base text-muted">{source}</figcaption>
      </div>
    </figure>
  );
}

/* ---------- Mockups ---------- */

export function Shot({
  src,
  alt,
  width,
  height,
  className = "",
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={`h-auto w-full ${className}`}
    />
  );
}

/** Pantalla de móvil con título y descripción */
export function PhoneCard({
  src,
  alt,
  title,
  text,
  width = 300,
  height = 652,
}: {
  src: string;
  alt: string;
  title?: string;
  text?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="flex flex-col gap-4 lg:gap-5">
      <Shot
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-3xl"
        sizes="(max-width: 768px) 70vw, 300px"
      />
      {title && (
        <figcaption className="flex flex-col gap-1.5">
          <span className="text-xl font-bold leading-[1.3] lg:text-2xl">{title}</span>
          {text && <span className="text-base leading-[1.5] text-muted lg:text-lg">{text}</span>}
        </figcaption>
      )}
    </figure>
  );
}

/* ---------- Siguiente proyecto ---------- */

export function NextProject({ label, title, href }: { label: string; title: string; href: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-6 border-t border-line pt-10 lg:pt-14"
    >
      <span className="flex flex-col gap-2">
        <span className="text-base font-semibold text-muted lg:text-lg">{label}</span>
        <span className="font-display text-[clamp(40px,4.4vw,64px)] font-bold leading-none transition-colors group-hover:text-accent">
          {title}
        </span>
      </span>
      <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent transition-transform duration-200 group-hover:translate-x-1 lg:size-24">
        <ArrowIcon className="size-6 lg:size-9" rotate={45} />
      </span>
    </Link>
  );
}
