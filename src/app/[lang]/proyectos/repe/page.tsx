import type { Metadata } from "next";
import {
  ArrowIcon,
  BackLink,
  BulletList,
  CaseHeading,
  CaseTitle,
  Container,
  Eyebrow,
  FeatureCard,
  H2,
  Lead,
  NextProject,
  PhoneCard,
  Section,
  Shot,
  StatCard,
  Tag,
  Tags,
} from "@/components/ui";
import repe from "@/content/repe";
import { enlaces } from "@/data/site";
import { resolveLang, type LangParams } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await resolveLang(params);
  return { title: "Repe", description: repe[lang].meta };
}

const porcentajes = [27, 22, 14, 12, 10];
const imgPantallas = ["repe-inicio", "repe-marketplace", "repe-agenda", "repe-progreso"];
const imgFlujo = ["repe-flujo-1", "repe-flujo-2", "repe-flujo-3"];
const urlsRecursos = [enlaces.repeBenchmark, enlaces.repeFlujos, enlaces.repePrototipo];

export default async function Repe({ params }: LangParams) {
  const lang = await resolveLang(params);
  const t = repe[lang];

  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-16 md:pt-16 lg:pt-20 lg:pb-[120px]">
        <Container className="flex flex-col gap-8 lg:gap-12">
          <BackLink lang={lang} />
          <Tags items={t.tags} />
          <CaseTitle>Repe</CaseTitle>
          <p className="max-w-[1100px] text-2xl font-semibold leading-[1.3] lg:text-[32px]">{t.intro}</p>
          <dl className="grid grid-cols-2 gap-6 border-y border-line py-6 lg:grid-cols-4">
            {t.datos.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1">
                <dt className="text-sm text-muted lg:text-base">{k}</dt>
                <dd className="text-base font-medium lg:text-lg">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="flex items-end justify-center gap-3 overflow-hidden rounded-[28px] bg-gradient-to-b from-[#18330f] to-[#72f54a] px-4 pt-10 sm:gap-6 lg:rounded-[40px] lg:pt-20">
            <div className="w-[28%] max-w-[258px] translate-y-6">
              <Shot src="/images/repe-hero-marketplace.webp" alt={t.alts.marketplace} width={258} height={561} className="rounded-2xl lg:rounded-3xl" priority />
            </div>
            <div className="w-[33%] max-w-[300px]">
              <Shot src="/images/repe-hero-dashboard.webp" alt={t.alts.dashboard} width={300} height={652} className="rounded-2xl lg:rounded-[32px]" priority />
            </div>
            <div className="w-[28%] max-w-[258px] translate-y-6">
              <Shot src="/images/repe-hero-progreso.webp" alt={t.alts.progreso} width={258} height={561} className="rounded-2xl lg:rounded-3xl" priority />
            </div>
          </div>
        </Container>
      </section>

      {/* 01 Contexto */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <CaseHeading eyebrow={t.contexto.eyebrow} title={t.contexto.titulo} />
          <div className="flex flex-col gap-6 lg:gap-8">
            <Lead>{t.contexto.p1}</Lead>
            <Lead>{t.contexto.p2}</Lead>
            <blockquote className="flex flex-col gap-3 border-l-4 border-accent pl-6">
              <p className="font-display text-[28px] font-bold leading-[1.2] lg:text-[40px]">{t.contexto.cita}</p>
              <cite className="text-base not-italic text-muted">{t.contexto.citaFuente}</cite>
            </blockquote>
          </div>
        </div>
      </Section>

      {/* 02 Objetivos */}
      <Section className="bg-gradient-to-b from-bg to-surface">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow={t.objetivos.eyebrow} title={t.objetivos.titulo} />
          <Lead>{t.objetivos.lead}</Lead>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {t.objetivos.cards.map(([title, text]) => (
            <FeatureCard key={title} title={title}>
              {text}
            </FeatureCard>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2 lg:gap-3">
          <span className="mr-2 text-base text-muted lg:text-lg">{t.objetivos.queHice}</span>
          {t.objetivos.queHiceTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Section>

      {/* 03 Investigación */}
      <Section className="bg-gradient-to-b from-surface to-bg">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow={t.investigacion.eyebrow} title={t.investigacion.titulo} />
          <Lead>{t.investigacion.lead}</Lead>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {t.investigacion.stats.map(([value, text]) => (
            <StatCard key={value} value={value}>
              {text}
            </StatCard>
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:mt-6 lg:grid-cols-[2fr_1fr] lg:gap-6">
          <div className="flex flex-col gap-6 rounded-3xl bg-surface p-6 lg:p-10">
            <h4 className="text-xl font-bold lg:text-2xl">{t.investigacion.graficoTitulo}</h4>
            <ul className="flex flex-col gap-4">
              {t.investigacion.rasgos.map((r, i) => (
                <li key={r} className="flex flex-col gap-2">
                  <div className="flex justify-between text-base lg:text-lg">
                    <span>{r}</span>
                    <span className="font-semibold">{porcentajes[i]}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-chip">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${(porcentajes[i] / 30) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted lg:text-base">{t.investigacion.fuente}</p>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-accent p-6 lg:p-10">
            <p className="text-base font-semibold lg:text-lg">{t.investigacion.oportunidad}</p>
            <p className="text-xl font-semibold leading-[1.35] lg:text-2xl">{t.investigacion.oportunidadTexto}</p>
          </div>
        </div>
      </Section>

      {/* 04 Usuarios */}
      <Section className="bg-surface">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow={t.usuarios.eyebrow} title={t.usuarios.titulo} />
          <Lead>{t.usuarios.lead}</Lead>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {t.usuarios.personas.map((p) => (
            <article key={p.nombre} className="flex flex-col gap-5 rounded-3xl bg-bg p-6 lg:p-8">
              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-2xl font-bold lg:size-16">
                  {p.inicial}
                </span>
                <div>
                  <h4 className="text-xl font-bold lg:text-2xl">{p.nombre}</h4>
                  <p className="text-sm text-muted lg:text-base">{p.meta}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <p className="text-base leading-[1.5] lg:text-lg">{p.texto}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:mt-6 lg:gap-6">
          <div className="flex flex-col gap-6 rounded-3xl bg-bg p-6 lg:p-10">
            <h4 className="text-xl font-bold lg:text-2xl">{t.usuarios.dolorClientes}</h4>
            <BulletList items={t.usuarios.dolorClientesItems} />
          </div>
          <div className="flex flex-col gap-6 rounded-3xl bg-bg p-6 lg:p-10">
            <h4 className="text-xl font-bold lg:text-2xl">{t.usuarios.dolorEntrenadores}</h4>
            <BulletList items={t.usuarios.dolorEntrenadoresItems} />
          </div>
        </div>
      </Section>

      {/* 05 Propuesta de valor */}
      <Section>
        <CaseHeading eyebrow={t.propuesta.eyebrow} title={t.propuesta.titulo} />
        <p className="mt-6 max-w-[1000px] font-display text-[clamp(24px,2.8vw,40px)] font-bold leading-[1.25] text-muted lg:mt-10">
          {t.propuesta.destacado}
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {t.propuesta.cards.map(([title, text]) => (
            <FeatureCard key={title} title={title} bg="bg-surface">
              {text}
            </FeatureCard>
          ))}
        </div>
      </Section>

      {/* 06 Proceso */}
      <Section className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow={t.proceso.eyebrow} title={t.proceso.titulo} />
          <Lead>{t.proceso.lead}</Lead>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          {t.proceso.pasos.map(([title, text], i) => (
            <li key={title} className="flex flex-col gap-3 border-t border-line pt-6">
              <span className="flex size-12 items-center justify-center rounded-full border border-accent text-lg font-semibold text-accent">
                {i + 1}
              </span>
              <span className="text-xl font-bold lg:text-2xl">{title}</span>
              <span className="text-base leading-[1.5] text-muted">{text}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* 07 MVP */}
      <Section className="bg-surface">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow={t.mvp.eyebrow} title={t.mvp.titulo} />
          <Lead>{t.mvp.lead}</Lead>
        </div>
        <div className="mt-10 flex flex-col gap-6 lg:mt-16">
          <Tag tone="red">{t.mvp.clientes}</Tag>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {t.mvp.clientesCards.map(([title, text]) => (
              <FeatureCard key={title} title={title}>
                {text}
              </FeatureCard>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-6 lg:mt-16">
          <Tag tone="red">{t.mvp.entrenadores}</Tag>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {t.mvp.entrenadoresCards.slice(0, 4).map(([title, text]) => (
              <FeatureCard key={title} title={title}>
                {text}
              </FeatureCard>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {t.mvp.entrenadoresCards.slice(4).map(([title, text], i) => (
              <FeatureCard key={title} title={title} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
                {text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </Section>

      {/* 08 Pantallas */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow={t.pantallas.eyebrow} title={t.pantallas.titulo} />
          <Lead>{t.pantallas.lead}</Lead>
        </div>
        <div className="-mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 lg:mt-16 lg:gap-[37px]">
          {t.pantallas.items.map(([title, text], i) => (
            <div key={imgPantallas[i]} className="w-[68vw] max-w-[300px] shrink-0 snap-start md:w-auto">
              <PhoneCard src={`/images/${imgPantallas[i]}.webp`} alt={`${t.alts.pantalla} ${title}`} title={title} text={text} />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[32px] bg-surface p-6 sm:p-10 lg:mt-16 lg:rounded-[40px] lg:p-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div className="flex flex-col gap-3">
              <Eyebrow>{t.pantallas.flujoEyebrow}</Eyebrow>
              <H2>{t.pantallas.flujoTitulo}</H2>
            </div>
            <Lead>{t.pantallas.flujoLead}</Lead>
          </div>
          <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4 lg:mt-16 lg:gap-8">
            {t.pantallas.flujo.flatMap(([title, text], i) => {
              const card = (
                <div key={imgFlujo[i]} className="mx-auto w-full max-w-[300px] self-start">
                  <PhoneCard src={`/images/${imgFlujo[i]}.webp`} alt={`Repe: ${title}`} title={title} text={text} />
                </div>
              );
              if (i === t.pantallas.flujo.length - 1) return [card];
              return [
                card,
                <span
                  key={`c${i}`}
                  aria-hidden
                  className="mx-auto flex size-12 rotate-90 items-center justify-center self-center rounded-full bg-accent md:mb-24 md:rotate-0 lg:size-14"
                >
                  <ArrowIcon className="size-5" rotate={45} />
                </span>,
              ];
            })}
          </div>
        </div>
      </Section>

      {/* 09 Sistema de diseño */}
      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="flex flex-col gap-6 lg:gap-8 lg:pr-8">
            <CaseHeading eyebrow={t.sistema.eyebrow} title={t.sistema.titulo} />
            <Lead>{t.sistema.lead}</Lead>
            <BulletList items={t.sistema.items} />
          </div>
          <Shot src="/images/repe-paleta.webp" alt={t.alts.paleta} width={642} height={572} className="rounded-3xl bg-white" />
        </div>
      </Section>

      {/* 10 Cierre */}
      <Section>
        <CaseHeading eyebrow={t.cierre.eyebrow} title={t.cierre.titulo} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-16 lg:gap-6">
          {t.cierre.cards.map(([title, text]) => (
            <FeatureCard key={title} title={title} bg="bg-surface">
              {text}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 lg:mt-24">
          <h3 className="text-xl font-bold lg:text-2xl">{t.cierre.recursos}</h3>
          <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
            {t.cierre.recursosItems.map(([tipo, titulo], i) => {
              const url = urlsRecursos[i];
              const inner = (
                <>
                  <span className="flex flex-col gap-1">
                    <span className="text-sm text-muted lg:text-base">{tipo}</span>
                    <span className="text-xl font-bold lg:text-2xl">{titulo}</span>
                  </span>
                  {url && (
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:bg-accent">
                      <ArrowIcon />
                    </span>
                  )}
                </>
              );
              return url ? (
                <a
                  key={titulo}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-3xl bg-surface p-6 lg:p-8"
                >
                  {inner}
                </a>
              ) : (
                <div key={titulo} className="flex items-center justify-between gap-4 rounded-3xl bg-surface p-6 lg:p-8">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <NextProject label={ui[lang].siguiente} title="Haditas" href={`/${lang}/proyectos/haditas`} />
        </div>
      </Section>
    </>
  );
}
