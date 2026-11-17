import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  BackLink,
  BulletList,
  Button,
  CaseTitle,
  Container,
  H2,
  H3,
  Lead,
  NextProject,
  Quote,
  Section,
  SectionPill,
  Shot,
  StatCard,
  Tag,
  Tags,
} from "@/components/ui";
import micultura from "@/content/micultura";
import { enlaces } from "@/data/site";
import { resolveLang, type LangParams } from "@/i18n/config";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params);
  return { title: "Mi cultura", description: micultura[lang].meta };
}

function Panel({
  gradient,
  tag,
  title,
  items,
  media,
  reverse,
}: {
  gradient: string;
  tag: string;
  title: string;
  items: string[];
  media: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-10 overflow-hidden rounded-[32px] p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:rounded-[40px] lg:p-14 xl:grid-cols-[minmax(0,1fr)_700px] ${gradient}`}
    >
      <div className={`flex flex-col gap-5 lg:gap-6 ${reverse ? "lg:order-2" : ""}`}>
        <Tag tone="red">{tag}</Tag>
        <H3>{title}</H3>
        <BulletList items={items} className="max-w-[420px]" />
      </div>
      <div className={reverse ? "lg:order-1" : ""}>{media}</div>
    </div>
  );
}

function Phones({ prefix, alts }: { prefix: string; alts: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
      {alts.map((a, i) => (
        <Shot
          key={a}
          src={`/images/${prefix}-${i + 1}.webp`}
          alt={`Mi cultura: ${a}`}
          width={296}
          height={550}
          sizes="(max-width: 1024px) 30vw, 216px"
        />
      ))}
    </div>
  );
}

const gradientes = [
  "bg-gradient-to-br from-[#011932] to-[#0a3e76]",
  "bg-gradient-to-br from-[#310c61] to-[#7229d2]",
  "bg-gradient-to-br from-[#0b4a4f] to-[#11797a]",
  "bg-gradient-to-br from-[#510743] to-[#ae3698]",
];

export default async function MiCultura({ params }: LangParams) {
  const lang = await resolveLang(params);
  const t = micultura[lang];
  const s = t.solucion;

  const ctas = [
    { label: t.ctas.prototipo, href: enlaces.miculturaPrototipo },
    { label: t.ctas.uiKit, href: enlaces.miculturaUiKit },
    { label: t.ctas.playStore, href: enlaces.miculturaPlayStore },
  ].filter((c) => c.href);

  const medios = [
    <Phones key="crear" prefix="micultura-crear" alts={s.altsCrear} />,
    <Phones key="descubrir" prefix="micultura-descubrir" alts={s.altsDescubrir} />,
    <Shot key="software" src="/images/micultura-software.webp" alt={`Mi cultura: ${s.altSoftware}`} width={698} height={500} className="rounded-2xl" sizes="(max-width: 1024px) 100vw, 700px" />,
    <Shot key="website" src="/images/micultura-website.webp" alt={`Mi cultura: ${s.altWebsite}`} width={698} height={500} className="rounded-2xl" sizes="(max-width: 1024px) 100vw, 700px" />,
  ];

  return (
    <>
      {/* Hero centrado */}
      <section className="pt-10 pb-16 md:pt-16 lg:pt-20 lg:pb-[120px]">
        <Container className="flex flex-col gap-8 lg:gap-12">
          <BackLink lang={lang} />
          <div className="flex flex-col items-center gap-6 text-center lg:gap-8">
            <div className="flex justify-center">
              <Tags items={t.tags} />
            </div>
            <CaseTitle>Mi cultura</CaseTitle>
            <p className="max-w-[1100px] text-2xl font-semibold leading-[1.3] lg:text-[32px]">{t.intro}</p>
            {ctas.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
                {ctas.map((c) => (
                  <Button key={c.label} href={c.href} external>
                    {c.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Mapa del ecosistema */}
          <div className="flex flex-col gap-6 rounded-[32px] bg-gradient-to-b from-surface to-surface-2 p-5 sm:p-8 lg:rounded-[40px] lg:p-14">
            <span className="inline-flex w-fit rounded-full bg-chip px-4 py-2 text-base lg:text-lg">{t.ecosistema.etiqueta}</span>
            <div className="grid gap-3 md:grid-cols-3 lg:gap-6">
              {t.ecosistema.usuarios.map(([title, text]) => (
                <div key={title} className="flex flex-col gap-1.5 rounded-[20px] bg-bg p-5 lg:p-6">
                  <span className="text-sm text-muted lg:text-base">{t.ecosistema.usuario}</span>
                  <span className="text-xl font-bold lg:text-2xl">{title}</span>
                  <span className="text-base text-muted lg:text-lg">{text}</span>
                </div>
              ))}
            </div>
            <span aria-hidden className="mx-auto h-8 w-px bg-accent/60" />
            <div className="grid gap-3 md:grid-cols-3 lg:gap-6">
              {[t.ecosistema.app, t.ecosistema.software].map(([title, text], i) => (
                <div key={title} className={`flex flex-col gap-1.5 rounded-[20px] bg-wine p-5 lg:p-6 ${i === 0 ? "md:col-span-2" : ""}`}>
                  <span className="text-sm text-pink lg:text-base">{t.ecosistema.producto}</span>
                  <span className="text-xl font-bold lg:text-2xl">{title}</span>
                  <span className="text-base lg:text-lg">{text}</span>
                </div>
              ))}
            </div>
            <span aria-hidden className="mx-auto h-8 w-px bg-accent/60" />
            <div className="flex flex-col gap-1 rounded-[20px] bg-gradient-to-r from-accent to-accent-dark p-5 md:flex-row md:items-center md:gap-4 lg:p-6">
              <span className="text-xl font-bold lg:text-2xl">{t.ecosistema.uiKit[0]}</span>
              <span className="text-base lg:text-lg">{t.ecosistema.uiKit[1]}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Brief */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_836px]">
          <div className="flex flex-col gap-5">
            <SectionPill>{t.brief.etiqueta}</SectionPill>
            <h2 className="font-display text-[clamp(44px,6.7vw,96px)] font-bold leading-none tracking-[-0.02em]">{t.brief.titulo}</h2>
          </div>
          <dl className="flex flex-col">
            {t.brief.filas.map(([k, v]) => (
              <div key={k} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6">
                <dt className="text-base font-semibold text-accent lg:text-lg">{k}</dt>
                <dd className="text-lg leading-[1.5] lg:text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Investigación */}
      <Section className="bg-gradient-to-b from-bg to-surface">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_796px]">
          <div className="flex flex-col gap-5">
            <SectionPill>{t.investigacion.etiqueta}</SectionPill>
            <H2>{t.investigacion.titulo}</H2>
            <Lead className="text-muted">{t.investigacion.lead}</Lead>
          </div>
          <div className="flex flex-col gap-10">
            {t.investigacion.citas.map(([text, source]) => (
              <Quote key={source} text={text} source={source} />
            ))}
          </div>
        </div>
      </Section>

      {/* La solución */}
      <Section>
        <div className="flex flex-col gap-5">
          <SectionPill>{s.etiqueta}</SectionPill>
          <H2>{s.titulo}</H2>
        </div>
        <div className="mt-10 flex flex-col gap-6 lg:mt-16 lg:gap-8">
          {s.paneles.map((p, i) => (
            <Panel
              key={p.titulo}
              gradient={gradientes[i]}
              tag={p.tag}
              title={p.titulo}
              items={p.items}
              media={medios[i]}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </Section>

      {/* Impacto */}
      <Section className="bg-gradient-to-b from-bg to-surface">
        <div className="flex flex-col gap-5">
          <SectionPill>{t.impacto.etiqueta}</SectionPill>
          <H2>{t.impacto.titulo}</H2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {t.impacto.stats.map(([value, text], i) => (
            <StatCard
              key={value}
              value={value}
              bg={i === 0 ? "bg-gradient-to-br from-accent-dark to-accent-deep" : undefined}
              valueClass={i === 0 ? "" : "text-accent"}
            >
              {text}
            </StatCard>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-8 lg:mt-20">
          <h3 className="text-xl font-bold lg:text-2xl">{t.impacto.hojaRuta}</h3>
          <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
            {t.impacto.hitos.map(([estado, title, text], i) => {
              const hecho = i === 0;
              return (
                <li
                  key={title}
                  className="flex flex-col gap-2 border-t-2 pt-5"
                  style={{ borderColor: hecho ? "#eb0045" : "rgb(255 255 255 / 0.15)" }}
                >
                  <span className={`text-sm font-semibold lg:text-base ${hecho ? "text-accent" : "text-muted"}`}>{estado}</span>
                  <span className="text-xl font-bold lg:text-2xl">{title}</span>
                  <span className="text-base text-muted lg:text-lg">{text}</span>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-16 lg:mt-24">
          <NextProject label={t.impacto.verMas} title={t.impacto.verTodos} href={`/${lang}#proyectos`} />
        </div>
      </Section>
    </>
  );
}
