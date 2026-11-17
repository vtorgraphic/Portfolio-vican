import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  BackLink,
  Button,
  CaseHeading,
  CaseTitle,
  Container,
  Eyebrow,
  FeatureCard,
  H2,
  H3,
  Lead,
  NextProject,
  Section,
  SectionPill,
  Shot,
  Tag,
  Tags,
} from "@/components/ui";
import vigia from "@/content/vigia";
import { enlaces } from "@/data/site";
import { resolveLang, type LangParams } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params);
  return { title: "Vigia", description: vigia[lang].meta };
}

function Phase({
  n,
  label,
  title,
  text,
  active,
  children,
  last,
}: {
  n: number;
  label: string;
  title: string;
  text: string;
  active?: boolean;
  children?: ReactNode;
  last?: boolean;
}) {
  return (
    <li className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8 lg:gap-12">
      {!last && <span aria-hidden className="absolute top-14 bottom-0 left-6 w-px bg-line sm:top-16 sm:left-8" />}
      <span
        className={`relative flex size-12 items-center justify-center rounded-full border text-xl font-bold sm:size-16 sm:text-2xl ${
          active ? "border-accent bg-accent" : "border-accent bg-bg text-accent"
        }`}
      >
        {n}
      </span>
      <div className="flex min-w-0 flex-col gap-4 pb-14 lg:gap-5 lg:pb-20">
        <Eyebrow>
          {label} {n}
        </Eyebrow>
        <H3>{title}</H3>
        <p className="max-w-[820px] text-lg leading-[1.6] text-muted lg:text-xl">{text}</p>
        {children}
      </div>
    </li>
  );
}

export default async function Vigia({ params }: LangParams) {
  const lang = await resolveLang(params);
  const t = vigia[lang];
  const f = t.proceso.fases;

  return (
    <>
      {/* Portada a sangre */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-bg">
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute top-12 -right-24 w-[760px] rotate-[-4deg] opacity-60">
            <Shot src="/images/vigia-portada-gestion.webp" alt="" width={760} height={480} className="rounded-2xl" sizes="760px" />
          </div>
          <div className="absolute top-56 right-24 w-[620px] xl:w-[820px]">
            <Shot src="/images/vigia-portada-gps.webp" alt="" width={916} height={616} sizes="820px" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
        </div>
        <Container className="relative flex flex-col gap-8 pt-10 pb-16 md:pt-16 lg:min-h-[826px] lg:justify-between lg:gap-12 lg:pt-20 lg:pb-24">
          <BackLink lang={lang} />
          <div className="flex max-w-[900px] flex-col gap-6 lg:gap-8">
            <Tags items={t.tags} />
            <CaseTitle>Vigia</CaseTitle>
            <p className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">{t.intro}</p>
            {enlaces.vigiaPrototipo && (
              <div>
                <Button href={enlaces.vigiaPrototipo} external>
                  {t.probar}
                </Button>
              </div>
            )}
          </div>
          <div className="lg:hidden">
            <Shot src="/images/vigia-portada-gps.webp" alt={t.alts.gps} width={916} height={616} priority />
          </div>
        </Container>
      </section>

      {/* Datos */}
      <section className="border-y border-line">
        <Container>
          <dl className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
            {t.datos.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1">
                <dt className="text-sm text-muted lg:text-base">{k}</dt>
                <dd className="text-base font-medium lg:text-lg">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 01 Contexto */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <CaseHeading eyebrow={t.contexto.eyebrow} title={t.contexto.titulo} />
          <div className="flex flex-col gap-6">
            <Lead>{t.contexto.p1}</Lead>
            <Lead>{t.contexto.p2}</Lead>
          </div>
        </div>
      </Section>

      {/* Problema y solución */}
      <Section className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16 xl:grid-cols-[minmax(0,1fr)_640px]">
          <div className="flex flex-col gap-5">
            <SectionPill>{t.problema.etiqueta}</SectionPill>
            <H2>{t.problema.titulo}</H2>
          </div>
          <div className="flex flex-col gap-2 rounded-3xl bg-wine p-6 lg:p-8">
            <span className="text-base font-semibold text-pink lg:text-lg">{t.problema.reto}</span>
            <p className="text-lg leading-[1.5] lg:text-xl">{t.problema.retoTexto}</p>
          </div>
        </div>

        <div className="mt-12 hidden grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] gap-6 md:grid lg:mt-16">
          <span className="text-base font-semibold text-muted lg:text-lg">{t.problema.encontramos}</span>
          <span />
          <span className="text-base font-semibold text-accent lg:text-lg">{t.problema.hicimos}</span>
        </div>
        <div className="mt-8 flex flex-col gap-6 md:mt-4 md:gap-4">
          {t.problema.matriz.map(([area, problema, solucion], i) => (
            <div key={i} className="grid gap-3 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:items-center md:gap-6">
              <div className="flex h-full flex-col gap-4 rounded-[20px] bg-surface p-6">
                <Tag>{area}</Tag>
                <p className="text-base leading-[1.5] lg:text-lg">{problema}</p>
              </div>
              <span
                aria-hidden
                className="mx-auto flex size-10 rotate-90 items-center justify-center rounded-full bg-accent text-xl md:size-14 md:rotate-0"
              >
                →
              </span>
              <div className="flex h-full flex-col gap-3 rounded-[20px] bg-gradient-to-b from-surface to-surface-2 p-6 ring-1 ring-accent/40">
                <span className="text-sm font-semibold text-pink lg:text-base">{t.problema.solucion}</span>
                <p className="text-base leading-[1.5] lg:text-lg">{solucion}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Insights */}
      <Section className="bg-gradient-to-b from-bg to-surface">
        <div className="flex flex-col gap-5">
          <SectionPill>{t.insights.etiqueta}</SectionPill>
          <H2>{t.insights.titulo}</H2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-16 lg:gap-6">
          <div className="flex flex-col gap-8 rounded-[32px] bg-gradient-to-br from-accent-dark to-accent-deep p-8 lg:min-h-[430px] lg:p-12">
            <Tag>{t.insights.webApp}</Tag>
            <p className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">{t.insights.webAppTexto}</p>
          </div>
          <div className="flex flex-col gap-8 rounded-[32px] bg-surface p-8 lg:min-h-[430px] lg:p-12">
            <Tag tone="red">{t.insights.software}</Tag>
            <p className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">{t.insights.softwareTexto}</p>
          </div>
        </div>
      </Section>

      {/* Proceso */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionPill>{t.proceso.etiqueta}</SectionPill>
            <H2>{t.proceso.titulo}</H2>
          </div>
          <Lead className="text-muted">{t.proceso.lead}</Lead>
        </div>
        <ol className="mt-12 lg:mt-20">
          <Phase n={1} label={t.proceso.fase} title={f[0][0]} text={f[0][1]}>
            <div className="flex flex-wrap gap-2">
              {t.proceso.ejesBenchmark.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Phase>
          <Phase n={2} label={t.proceso.fase} title={f[1][0]} text={f[1][1]}>
            <div className="mt-2 overflow-hidden rounded-3xl bg-white">
              <Shot src="/images/vigia-userflow.webp" alt={t.alts.userflow} width={1200} height={420} sizes="(max-width: 1024px) 100vw, 1200px" />
            </div>
          </Phase>
          <Phase n={3} label={t.proceso.fase} title={f[2][0]} text={f[2][1]}>
            <div className="flex flex-wrap gap-2">
              {t.proceso.ejesWireframes.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="mt-2 rounded-3xl bg-chip p-4 lg:p-8">
              <Shot src="/images/vigia-wireframes.webp" alt={t.alts.wireframes} width={1136} height={561} sizes="(max-width: 1024px) 100vw, 1136px" />
            </div>
          </Phase>
          <Phase n={4} label={t.proceso.fase} title={f[3][0]} text={f[3][1]} active last>
            <div className="flex max-w-[820px] flex-col gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent-dark p-5 lg:p-6">
              <span className="text-base font-bold lg:text-lg">{t.proceso.giro}</span>
              <p className="text-base leading-[1.5] lg:text-lg">{t.proceso.giroTexto}</p>
            </div>
            <Shot
              src="/images/vigia-prototipo.webp"
              alt={t.alts.prototipo}
              width={1200}
              height={889}
              className="mt-2 rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </Phase>
        </ol>
      </Section>

      {/* Plataformas */}
      <Section className="bg-surface">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionPill>{t.plataformas.etiqueta}</SectionPill>
            <H2>{t.plataformas.titulo}</H2>
          </div>
          <Lead className="text-muted">{t.plataformas.lead}</Lead>
        </div>

        <div className="mt-12 flex flex-col gap-8 lg:mt-20">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
            <Tag tone="red">{t.plataformas.gpsTag}</Tag>
            <H3>{t.plataformas.gpsTitulo}</H3>
          </div>
          <Shot src="/images/vigia-gps.webp" alt={t.alts.gps} width={1312} height={700} className="rounded-2xl" sizes="(max-width: 1440px) 100vw, 1312px" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {t.plataformas.gpsCards.map(([title, text]) => (
              <FeatureCard key={title} title={title}>
                {text}
              </FeatureCard>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 lg:mt-24">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
            <Tag tone="red">{t.plataformas.gestionTag}</Tag>
            <H3>{t.plataformas.gestionTitulo}</H3>
          </div>
          <Shot src="/images/vigia-gestion.webp" alt={t.alts.gestion} width={1312} height={757} className="rounded-2xl" sizes="(max-width: 1440px) 100vw, 1312px" />
          <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
            {t.plataformas.gestionCards.map(([title, text]) => (
              <FeatureCard key={title} title={title}>
                {text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Resultados */}
      <Section>
        <div className="grid gap-8 rounded-[32px] bg-gradient-to-r from-accent to-accent-dark p-6 sm:p-10 md:grid-cols-2 md:items-center lg:rounded-[40px] lg:p-16">
          <div className="flex flex-col gap-3">
            <span className="font-display text-[clamp(80px,10.4vw,150px)] font-bold leading-none tracking-[-0.03em]">+40%</span>
            <span className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">{t.resultados.cifraTexto}</span>
          </div>
          <div className="flex flex-col gap-8">
            {t.resultados.items.map(([title, text]) => (
              <div key={title} className="flex flex-col gap-2">
                <h4 className="text-xl font-bold lg:text-2xl">{title}</h4>
                <p className="text-base leading-[1.5] lg:text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 lg:mt-24">
          <NextProject label={ui[lang].siguiente} title="Mi cultura" href={`/${lang}/proyectos/mi-cultura`} />
        </div>
      </Section>
    </>
  );
}
