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
import { enlaces } from "@/data/site";

export const metadata: Metadata = {
  title: "Haditas",
  description: "Sitio web y catálogo digital de una marca emprendedora en Framer. Caso de estudio.",
};

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
      <div className={reverse ? "md:order-2 lg:order-2" : ""}>{media}</div>
      <div className={`flex flex-col gap-4 lg:gap-5 ${reverse ? "md:order-1 lg:order-1" : ""}`}>
        <span className="font-display text-[clamp(56px,6vw,88px)] font-bold leading-none text-accent">{n}</span>
        <H3>{title}</H3>
        <p className="text-lg leading-[1.6] text-muted lg:text-xl">{text}</p>
        {children}
      </div>
    </div>
  );
}

export default function Haditas() {
  return (
    <>
      {/* Hero dividido */}
      <section className="pt-10 pb-16 md:pt-16 lg:pt-20 lg:pb-[120px]">
        <Container className="flex flex-col gap-12 lg:gap-20">
          <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_560px] xl:gap-16">
            <div className="flex flex-col gap-6 lg:gap-8">
              <BackLink />
              <Tags items={["Diseño gráfico", "UX/UI", "Sitio web · Framer"]} />
              <CaseTitle className="!text-[clamp(64px,10.4vw,150px)]">Haditas</CaseTitle>
              <p className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">
                El sitio web y catálogo digital de una marca emprendedora, con toda su personalidad y un presupuesto
                mínimo.
              </p>
              <dl className="grid grid-cols-2 gap-6 border-t border-line pt-6">
                <div className="flex flex-col gap-1">
                  <dt className="text-sm text-muted lg:text-base">Rol</dt>
                  <dd className="text-base font-medium lg:text-lg">Diseñador gráfico y UX/UI</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-sm text-muted lg:text-base">Herramientas</dt>
                  <dd className="text-base font-medium lg:text-lg">Figma · Framer</dd>
                </div>
              </dl>
            </div>
            <div className="relative mx-auto w-full max-w-[600px] pb-10 pl-10 sm:pl-16 lg:pb-12">
              <Shot
                src="/images/haditas-hero-web.webp"
                alt="Haditas: portada del sitio web"
                width={600}
                height={640}
                className="rounded-2xl"
                priority
              />
              <div className="absolute bottom-0 left-0 w-[30%] max-w-[186px]">
                <Shot
                  src="/images/haditas-hero-movil.webp"
                  alt="Haditas: portada en móvil"
                  width={290}
                  height={428}
                  priority
                  sizes="186px"
                />
              </div>
              {enlaces.haditasWeb && (
                <div className="absolute right-4 bottom-0 lg:right-auto lg:left-1/2 lg:-translate-x-1/2">
                  <Button href={enlaces.haditasWeb} external>
                    Ir a la web
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-6 rounded-[28px] bg-gradient-to-r from-accent to-accent-dark p-6 sm:grid-cols-3 sm:gap-0 lg:rounded-[32px] lg:p-0">
            {[
              ["≈20%", "más ventas dirigidas a WhatsApp"],
              ["Plan básico", "un sitio completo con presupuesto de emprendimiento"],
              ["Marca + web", "de la identidad visual al catálogo digital"],
            ].map(([v, t], i) => (
              <div
                key={v}
                className={`flex flex-col gap-2 sm:px-6 lg:px-10 lg:py-12 ${i > 0 ? "border-t border-white/25 pt-6 sm:border-t-0 sm:border-l sm:pt-0" : ""}`}
              >
                <span className="font-display text-[clamp(36px,3.9vw,56px)] font-bold leading-none">{v}</span>
                <span className="text-base lg:text-lg">{t}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 01 El reto */}
      <Section>
        <div className="mx-auto flex max-w-[1104px] flex-col items-center gap-6 text-center lg:gap-8">
          <Eyebrow>01 · El reto</Eyebrow>
          <H2>
            Plasmar la <span className="text-accent">personalidad</span> de la marca en su sitio web, con un
            presupuesto mínimo y un catálogo en crecimiento.
          </H2>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1104px] gap-8 md:grid-cols-2 lg:mt-16 lg:gap-16">
          <div className="flex flex-col gap-3">
            <Eyebrow>Contexto</Eyebrow>
            <p className="text-lg leading-[1.6] text-muted lg:text-xl">
              La marca quería su propio sitio para publicar su catálogo digital y, más adelante, cargar nuevas
              colecciones e implementar estrategias de marketing.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Eyebrow>Limitación</Eyebrow>
            <p className="text-lg leading-[1.6] text-muted lg:text-xl">
              Al ser un emprendimiento trabajamos con el plan básico de Framer. El reto fue una arquitectura de la
              información coherente con la identidad de la marca.
            </p>
          </div>
        </div>
      </Section>

      {/* 02 Solución */}
      <Section className="bg-gradient-to-b from-bg to-surface">
        <div className="flex flex-col gap-3">
          <Eyebrow>02 · Solución</Eyebrow>
          <H2>Objetivo</H2>
        </div>
        <div className="mt-12 flex flex-col gap-16 lg:mt-20 lg:gap-24">
          <Step
            n="01"
            title="Un catálogo estético y estratégico"
            text="Diseñé un catálogo que respetara los límites de páginas del plan de Framer sin sacrificar la experiencia ni la estética de la marca."
            media={
              <Shot src="/images/haditas-inicio.webp" alt="Haditas: catálogo en la web" width={700} height={460} className="rounded-2xl" />
            }
          />
          <Step
            n="02"
            title="Un tono y una voz para sus usuarios"
            text="Empleamos estratégicamente una voz comunicacional especializada en nuestros usuarios, cuidando cada texto y cada botón."
            reverse
            media={
              <Shot src="/images/haditas-catalogo.webp" alt="Haditas: textos y botones del sitio" width={700} height={460} className="rounded-2xl" />
            }
          >
            <div className="mt-2 flex flex-col gap-2 rounded-2xl bg-wine p-5 lg:p-6">
              <span className="text-base font-semibold text-pink lg:text-lg">Insight</span>
              <p className="text-base leading-[1.5] lg:text-lg">
                La tasa de conversión aumentó al mejorar el contenido y la forma de hablarle a los usuarios en botones y
                textos.
              </p>
            </div>
          </Step>
          <Step
            n="03"
            title="La identidad, intacta en la web"
            text="Me enfoqué en mantener el estilo de la marca y llevar toda su personalidad al sitio, desde las piezas gráficas hasta la interfaz."
            media={
              <Shot src="/images/haditas-piezas.webp" alt="Haditas: piezas gráficas de la marca" width={700} height={396} className="rounded-3xl" />
            }
          />
        </div>
      </Section>

      {/* Banda móvil */}
      <section className="bg-gradient-to-b from-accent-dark to-accent-deep py-16 md:py-24 lg:py-[120px]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-base font-semibold lg:text-lg">Versión móvil</p>
              <H2>Pensado para quien llega desde Instagram</H2>
            </div>
            <Lead className="text-white/85">
              Gran parte del público descubre la marca en Instagram, así que el sitio se pensó primero para el móvil:
              recorridos cortos, productos protagonistas y el pedido por WhatsApp siempre a mano.
            </Lead>
          </div>
        </Container>
        <div className="mx-auto mt-10 flex max-w-[1440px] snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:scroll-px-8 sm:px-8 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible lg:mt-16 lg:gap-[37px] lg:px-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-[64vw] max-w-[300px] shrink-0 snap-start md:w-auto md:max-w-none">
              <Shot
                src={`/images/haditas-movil-${i}.webp`}
                alt={`Haditas: pantalla móvil ${i}`}
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
              <Eyebrow>03 · Resultados</Eyebrow>
              <H2>Una web que hoy es parte del día a día de la marca</H2>
            </div>
            <BulletList
              items={[
                "Aumentamos aproximadamente un 20% las ventas dirigidas a WhatsApp.",
                "La web se volvió un recurso recurrente y cómodo para mostrar el catálogo.",
                "Lo que sigue: cargar nuevas colecciones y productos e impulsar estrategias de marketing desde el sitio.",
              ]}
            />
          </div>
          <div className="flex flex-col justify-center gap-3 rounded-[32px] bg-gradient-to-b from-surface to-surface-2 p-8 lg:rounded-[40px] lg:p-12">
            <span className="font-display text-[clamp(72px,8.3vw,120px)] font-bold leading-none text-accent">≈20%</span>
            <span className="text-2xl font-semibold lg:text-[32px]">más ventas dirigidas a WhatsApp</span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 rounded-[32px] bg-accent p-6 sm:p-10 md:grid-cols-2 md:items-center lg:mt-12 lg:rounded-[40px] lg:p-16">
          <div className="flex flex-col gap-3">
            <H2>Colaboradora</H2>
            <p className="text-lg leading-[1.5] lg:text-xl">
              Mi equipo de trabajo para alcanzar los objetivos de este proyecto.
            </p>
          </div>
          <figure className="flex gap-4 rounded-3xl bg-bg/25 p-6 lg:p-8">
            <span aria-hidden className="font-display text-7xl font-bold leading-[0.8] text-white lg:text-8xl">
              “
            </span>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">UX designer, UX writer y estratega</p>
              <figcaption className="flex flex-wrap items-center gap-4">
                <span className="text-base">— Silvia Moya</span>
                {enlaces.silviaMoyaLinkedin && (
                  <a
                    href={enlaces.silviaMoyaLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-surface-2"
                  >
                    Ver perfil de LinkedIn
                  </a>
                )}
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-16 lg:mt-24">
          <NextProject label="Siguiente proyecto" title="Vigia" href="/proyectos/vigia" />
        </div>
      </Section>
    </>
  );
}
