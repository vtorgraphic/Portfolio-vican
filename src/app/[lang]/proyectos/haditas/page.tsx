import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  BackLink,
  BulletList,
  Button,
  CaseTitle,
  Container,
  Eyebrow,
  H2,
  H3,
  Lead,
  NextProject,
  Section,
  Shot,
  Tags,
} from "@/components/ui";
import haditas from "@/content/haditas";
import { enlaces } from "@/data/site";
import { resolveLang, type LangParams } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params);
  return { title: "Haditas", description: haditas[lang].meta };
}

function Step({
  n,
  title,
  text,
  media,
  reverse,
  children,
}: {
  n: string;
  title: string;
  text: string;
  media: ReactNode;
  reverse?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12 xl:grid-cols-[700px_minmax(0,1fr)] xl:gap-16">
      <div className={reverse ? "md:order-2" : ""}>{media}</div>
      <div className={`flex flex-col gap-4 lg:gap-5 ${reverse ? "md:order-1" : ""}`}>
        <span className="font-display text-[clamp(56px,6vw,88px)] font-bold leading-none text-accent">{n}</span>
        <H3>{title}</H3>
        <p className="text-lg leading-[1.6] text-muted lg:text-xl">{text}</p>
        {children}
      </div>
    </div>
  );
}

export default async function Haditas({ params }: LangParams) {
  const lang = await resolveLang(params);
  const t = haditas[lang];
  const [paso1, paso2, paso3] = t.solucion.pasos;

  return (
    <>
      {/* Hero dividido */}
      <section className="pt-10 pb-16 md:pt-16 lg:pt-20 lg:pb-[120px]">
        <Container className="flex flex-col gap-12 lg:gap-20">
          <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_560px] xl:gap-16">
            <div className="flex flex-col gap-6 lg:gap-8">
              <BackLink lang={lang} />
              <Tags items={t.tags} />
              <CaseTitle className="!text-[clamp(64px,10.4vw,150px)]">Haditas</CaseTitle>
              <p className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">{t.intro}</p>
              <dl className="grid grid-cols-2 gap-6 border-t border-line pt-6">
                {t.datos.map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1">
                    <dt className="text-sm text-muted lg:text-base">{k}</dt>
                    <dd className="text-base font-medium lg:text-lg">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative mx-auto w-full max-w-[600px] pb-10 pl-10 sm:pl-16 lg:pb-12">
              <Shot src="/images/haditas-hero-web.webp" alt={t.alts.portada} width={600} height={640} className="rounded-2xl" priority />
              <div className="absolute bottom-0 left-0 w-[30%] max-w-[186px]">
                <Shot src="/images/haditas-hero-movil.webp" alt={t.alts.portadaMovil} width={290} height={428} priority sizes="186px" />
              </div>
              {enlaces.haditasWeb && (
                <div className="absolute right-4 bottom-0 lg:right-auto lg:left-1/2 lg:-translate-x-1/2">
                  <Button href={enlaces.haditasWeb} external>
                    {t.irWeb}
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-6 rounded-[28px] bg-gradient-to-r from-accent to-accent-dark p-6 sm:grid-cols-3 sm:gap-0 lg:rounded-[32px] lg:p-0">
            {t.claves.map(([v, text], i) => (
              <div
                key={v}
                className={`flex flex-col gap-2 sm:px-6 lg:px-10 lg:py-12 ${i > 0 ? "border-t border-white/25 pt-6 sm:border-t-0 sm:border-l sm:pt-0" : ""}`}
              >
                <span className="font-display text-[clamp(36px,3.9vw,56px)] font-bold leading-none">{v}</span>
                <span className="text-base lg:text-lg">{text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 01 El reto */}
      <Section>
        <div className="mx-auto flex max-w-[1104px] flex-col items-center gap-6 text-center lg:gap-8">
          <Eyebrow>{t.reto.eyebrow}</Eyebrow>
          <H2>
            {t.reto.titulo[0]}
            <span className="text-accent">{t.reto.titulo[1]}</span>
            {t.reto.titulo[2]}
          </H2>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1104px] gap-8 md:grid-cols-2 lg:mt-16 lg:gap-16">
          <div className="flex flex-col gap-3">
            <Eyebrow>{t.reto.contexto}</Eyebrow>
            <p className="text-lg leading-[1.6] text-muted lg:text-xl">{t.reto.contextoTexto}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Eyebrow>{t.reto.limitacion}</Eyebrow>
            <p className="text-lg leading-[1.6] text-muted lg:text-xl">{t.reto.limitacionTexto}</p>
          </div>
        </div>
      </Section>

      {/* 02 Solución */}
      <Section className="bg-gradient-to-b from-bg to-surface">
        <div className="flex flex-col gap-3">
          <Eyebrow>{t.solucion.eyebrow}</Eyebrow>
          <H2>{t.solucion.titulo}</H2>
        </div>
        <div className="mt-12 flex flex-col gap-16 lg:mt-20 lg:gap-24">
          <Step
            n="01"
            title={paso1[0]}
            text={paso1[1]}
            media={<Shot src="/images/haditas-inicio.webp" alt={t.alts.inicio} width={700} height={460} className="rounded-2xl" />}
          />
          <Step
            n="02"
            title={paso2[0]}
            text={paso2[1]}
            reverse
            media={<Shot src="/images/haditas-catalogo.webp" alt={t.alts.catalogo} width={700} height={460} className="rounded-2xl" />}
          >
            <div className="mt-2 flex flex-col gap-2 rounded-2xl bg-wine p-5 lg:p-6">
              <span className="text-base font-semibold text-pink lg:text-lg">{t.solucion.insight}</span>
              <p className="text-base leading-[1.5] lg:text-lg">{t.solucion.insightTexto}</p>
            </div>
          </Step>
          <Step
            n="03"
            title={paso3[0]}
            text={paso3[1]}
            media={<Shot src="/images/haditas-piezas.webp" alt={t.alts.piezas} width={700} height={396} className="rounded-3xl" />}
          />
        </div>
      </Section>

      {/* Banda móvil */}
      <section className="bg-gradient-to-b from-accent-dark to-accent-deep py-16 md:py-24 lg:py-[120px]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-base font-semibold lg:text-lg">{t.movil.eyebrow}</p>
              <H2>{t.movil.titulo}</H2>
            </div>
            <Lead className="text-white/85">{t.movil.lead}</Lead>
          </div>
        </Container>
        <div className="mx-auto mt-10 flex max-w-[1440px] snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:scroll-px-8 sm:px-8 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible lg:mt-16 lg:gap-[37px] lg:px-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-[64vw] max-w-[300px] shrink-0 snap-start md:w-auto md:max-w-none">
              <Shot
                src={`/images/haditas-movil-${i}.webp`}
                alt={`${t.alts.movil} ${i}`}
                width={408}
                height={760}
                sizes="(max-width: 768px) 64vw, 300px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 03 Resultados */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_460px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <Eyebrow>{t.resultados.eyebrow}</Eyebrow>
              <H2>{t.resultados.titulo}</H2>
            </div>
            <BulletList items={t.resultados.items} />
          </div>
          <div className="flex flex-col justify-center gap-3 rounded-[32px] bg-gradient-to-b from-surface to-surface-2 p-8 lg:rounded-[40px] lg:p-12">
            <span className="font-display text-[clamp(72px,8.3vw,120px)] font-bold leading-none text-accent">≈20%</span>
            <span className="text-2xl font-semibold lg:text-[32px]">{t.resultados.cifraTexto}</span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 rounded-[32px] bg-accent p-6 sm:p-10 md:grid-cols-2 md:items-center lg:mt-12 lg:rounded-[40px] lg:p-16">
          <div className="flex flex-col gap-3">
            <H2>{t.resultados.colaboradora}</H2>
            <p className="text-lg leading-[1.5] lg:text-xl">{t.resultados.colaboradoraTexto}</p>
          </div>
          <figure className="flex gap-4 rounded-3xl bg-bg/25 p-6 lg:p-8">
            <span aria-hidden className="font-display text-7xl font-bold leading-[0.8] text-white lg:text-8xl">
              “
            </span>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">{t.resultados.cargo}</p>
              <figcaption className="flex flex-wrap items-center gap-4">
                <span className="text-base">— Silvia Moya</span>
                {enlaces.silviaMoyaLinkedin && (
                  <a
                    href={enlaces.silviaMoyaLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-surface-2"
                  >
                    {t.resultados.linkedin}
                  </a>
                )}
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-16 lg:mt-24">
          <NextProject label={ui[lang].siguiente} title="Vigia" href={`/${lang}/proyectos/vigia`} />
        </div>
      </Section>
    </>
  );
}
