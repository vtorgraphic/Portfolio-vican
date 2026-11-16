import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, Button, Container, Eyebrow, H2, H3, Section, SectionPill, Tag } from "@/components/ui";
import { colaboraciones, contacto, proyectos } from "@/data/site";

const galeria = [
  { src: "/images/gal-1.webp", w: 1440, h: 1024, nombre: "Vigia", slug: "vigia", tag: "Web app", pos: "object-center" },
  { src: "/images/gal-2.webp", w: 1312, h: 733, nombre: "Repe", slug: "repe", tag: "App móvil", pos: "object-center" },
  { src: "/images/gal-3.webp", w: 1600, h: 2579, nombre: "Haditas", slug: "haditas", tag: "Sitio web", pos: "object-top" },
  { src: "/images/gal-4.webp", w: 1440, h: 1024, nombre: "Vigia", slug: "vigia", tag: "Software", pos: "object-left" },
  { src: "/images/gal-5.webp", w: 1600, h: 3164, nombre: "Mi cultura", slug: "mi-cultura", tag: "Website", pos: "object-top" },
  { src: "/images/gal-6.webp", w: 1600, h: 1313, nombre: "Repe", slug: "repe", tag: "UX/UI", pos: "object-center" },
  { src: "/images/gal-7.webp", w: 1402, h: 4096, nombre: "Haditas", slug: "haditas", tag: "Identidad", pos: "object-top" },
];

function GalleryItem({ item, className = "" }: { item: (typeof galeria)[number]; className?: string }) {
  return (
    <Link
      href={`/proyectos/${item.slug}`}
      className={`group relative block overflow-hidden rounded-3xl bg-surface ${className}`}
    >
      <Image
        src={item.src}
        alt={`${item.nombre}: imagen del proyecto`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 660px"
        className={`object-cover ${item.pos} transition-transform duration-500 group-hover:scale-[1.03]`}
      />
      {/* Velo: visible siempre en móvil, en hover en desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent transition-opacity duration-300 lg:bg-bg/70 lg:bg-none lg:opacity-0 lg:group-hover:opacity-100" />
      <div className="absolute bottom-5 left-5 flex flex-col items-start gap-2 transition-all duration-300 lg:bottom-8 lg:left-8 lg:gap-3 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
        <span className="text-2xl font-semibold lg:text-[32px]">{item.nombre}</span>
        <Tag tone="red">{item.tag}</Tag>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <Container className="flex flex-col gap-10 pt-14 pb-16 md:flex-row md:items-end md:justify-between md:pt-24 md:pb-24 lg:py-[140px]">
          <div className="relative z-10 flex flex-col gap-8 lg:gap-12">
            <p className="flex items-center gap-3 text-base font-semibold text-muted lg:text-lg">
              <span aria-hidden className="size-2.5 rounded-full bg-accent" />
              Portafolio · 2026
            </p>
            <h1 className="font-display text-[clamp(68px,12.5vw,180px)] font-bold leading-[0.9] tracking-[-0.03em]">
              Victor
              <br />
              Figueroa<span className="text-accent">.</span>
            </h1>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:gap-12">
              <p className="text-2xl font-semibold lg:text-[32px]">
                Diseñador <span className="text-accent">UX/UI</span> y gráfico
              </p>
              <Button href="#proyectos" variant="light">
                Ver proyectos
              </Button>
            </div>
          </div>
          {/* Isotipo decorativo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/isotipo.svg"
            alt=""
            aria-hidden
            width={549}
            height={553}
            className="pointer-events-none absolute -right-16 top-8 w-[180px] opacity-90 sm:w-[240px] md:static md:mr-[-120px] md:w-[300px] md:shrink-0 md:opacity-100 lg:mr-[-148px] lg:w-[465px] xl:w-[549px]"
          />
        </Container>
      </section>

      {/* ---------- Proyectos ---------- */}
      <Section id="proyectos" className="!pt-0">
        <div className="flex flex-col gap-6 lg:gap-8">
          <SectionPill>Proyectos</SectionPill>
          <div className="flex items-end justify-between gap-4">
            <H2>Proyectos seleccionados</H2>
            <span className="text-xl font-semibold text-muted lg:text-2xl">(04)</span>
          </div>
        </div>
        <ul className="mt-10 lg:mt-16">
          {proyectos.map((p, i) => (
            <li key={p.slug} className="border-b border-line">
              <Link
                href={`/proyectos/${p.slug}`}
                className="group flex items-center gap-4 py-6 transition-colors sm:gap-6 lg:gap-10 lg:px-6 lg:py-9 lg:hover:bg-surface/50"
              >
                <span className="w-6 text-sm font-semibold text-muted lg:w-10 lg:text-base">0{i + 1}</span>
                <span className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <span className="text-[28px] font-semibold leading-tight transition-colors group-hover:text-accent lg:text-[32px]">
                    {p.nombre}
                  </span>
                  <span className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </span>
                </span>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent lg:size-16">
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- Galería ---------- */}
      <Section id="galeria" className="!pt-8 lg:!pt-0">
        <div className="flex flex-col gap-6 lg:gap-8">
          <SectionPill>Galería</SectionPill>
          <H2>Imágenes de proyectos</H2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          <GalleryItem item={galeria[0]} className="aspect-[4/3] lg:col-span-3 lg:aspect-auto lg:h-[426px]" />
          <GalleryItem item={galeria[1]} className="aspect-[4/3] lg:col-span-3 lg:aspect-auto lg:h-[426px]" />
          <GalleryItem item={galeria[2]} className="aspect-[4/3] lg:col-span-2 lg:aspect-auto lg:h-[400px]" />
          <GalleryItem item={galeria[3]} className="aspect-[4/3] lg:col-span-2 lg:aspect-auto lg:h-[400px]" />
          <GalleryItem item={galeria[4]} className="aspect-[4/3] md:col-span-2 md:aspect-[16/9] lg:col-span-2 lg:aspect-auto lg:h-[400px]" />
          <GalleryItem item={galeria[5]} className="aspect-[4/3] lg:col-span-3 lg:aspect-auto lg:h-[520px]" />
          <GalleryItem item={galeria[6]} className="aspect-[4/3] lg:col-span-3 lg:aspect-auto lg:h-[520px]" />
        </div>
      </Section>

      {/* ---------- Colaboraciones ---------- */}
      <section className="pb-16 md:pb-24 lg:pb-[120px]">
        <Container className="flex flex-col items-center gap-10 lg:gap-[77px]">
          <H2 className="text-center">Proyectos en los que he colaborado</H2>
          <div className="flex w-full flex-col items-center">
            <div className="flex w-full flex-col items-center gap-4 rounded-[40px] bg-[#343333] p-6 sm:flex-row sm:justify-around sm:gap-6 sm:rounded-full sm:px-8 md:py-10 lg:px-[8%] lg:py-12">
              {colaboraciones.map((c) => (
                <a
                  key={c.nombre}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: c.color }}
                  className="w-full max-w-[280px] rounded-full px-6 py-2.5 text-center text-xl font-medium transition-transform hover:-translate-y-0.5 sm:flex-1 lg:text-[25px]"
                >
                  {c.nombre}
                </a>
              ))}
            </div>
            {/* Indicador de scroll */}
            <div className="-mt-3 flex h-[120px] w-[100px] items-center justify-center rounded-full bg-white lg:-mt-4 lg:h-[203px] lg:w-[172px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/mouse.svg" alt="" aria-hidden width={103} height={103} className="size-[60px] lg:size-[103px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Quién soy ---------- */}
      <Section id="quien-soy">
        <div className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-24">
          <div className="flex flex-col gap-4">
            <Eyebrow>¿Quién soy?</Eyebrow>
            <H3>¿Cómo empecé en el diseño UX/UI y mi recorrido?</H3>
          </div>
          <div className="flex flex-col gap-6 text-lg font-light leading-[1.6] lg:gap-8 lg:text-xl">
            <p>
              ¡Hola, un placer! Soy Victor, diseñador UX/UI desde finales de 2022 y diseñador gráfico desde 2020.
            </p>
            <p>
              Empecé en el diseño gráfico trabajando con una imprenta. Luego, con un socio, creamos un emprendimiento
              de cócteles donde fui diseñador, investigador y bartender. En el proceso de hacer crecer el
              emprendimiento empezamos a aprender sobre investigación de usuarios, puntos de dolor, modelo Canvas, MVP,
              pitch, rondas de inversión, etc.
            </p>
            <p>
              Ahí descubrí que me gustaba juntar el diseño gráfico, el diseño centrado en los usuarios y la visión de
              negocio, y así llegué al diseño UX/UI.
            </p>
            <p>
              Desde entonces me he centrado en seguir mejorando como diseñador UX/UI y product designer. He trabajado
              en múltiples proyectos: websites, e-commerce, apps, web apps, ecosistemas de apps con múltiples
              productos para clientes, admins, software de gestión, etc. En mi recorrido he descubierto que me gusta
              trabajar en sistemas y apps grandes o complejas, donde tenga que entender a profundidad tanto las
              necesidades de mi cliente como las de su usuario final.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------- Contacto ---------- */}
      <Section id="contacto" className="!pt-0">
        <div className="flex flex-col gap-10 rounded-[32px] bg-accent p-5 sm:p-10 lg:gap-14 lg:rounded-[40px] lg:p-20">
          <p className="text-base font-semibold lg:text-lg">Contacto</p>
          <h2 className="font-display text-[clamp(44px,6.7vw,96px)] font-bold leading-none tracking-[-0.02em]">
            ¿Tienes un proyecto <br className="hidden md:block" />
            en mente? Hablemos.
          </h2>
          <div className="flex flex-col gap-2">
            {[
              { label: "Correo", value: contacto.correo, href: `mailto:${contacto.correo}` },
              { label: "Teléfono · WhatsApp", value: contacto.telefono, href: contacto.whatsapp },
            ].map((d) => (
              <a
                key={d.label}
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-3xl border-b border-white/40 py-5 transition-colors sm:px-4 lg:gap-6 lg:p-7 lg:hover:bg-white/10"
              >
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="text-sm font-medium lg:text-base">{d.label}</span>
                  <span className="font-display text-[clamp(19px,5.2vw,56px)] [overflow-wrap:anywhere] font-bold leading-[1.1] tracking-[-0.01em]">
                    {d.value}
                  </span>
                </span>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-white transition-colors group-hover:bg-white/15 lg:size-16">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
