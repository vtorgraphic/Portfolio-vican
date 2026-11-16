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
import { enlaces } from "@/data/site";

export const metadata: Metadata = {
  title: "Mi cultura",
  description:
    "App para descubrir eventos culturales y el software con el que se gestionan, diseñados como un solo ecosistema. Caso de estudio.",
};

const brief = [
  ["Objetivo", "Aumentar el turismo dentro del país dando a conocer sus eventos, desde grandes productoras a pequeños emprendedores."],
  ["Usuarios", "Quienes usan la app para asistir a eventos, quienes los crean y los operadores del software de gestión."],
  ["Tiempo", "3 meses para crear 3 propuestas para los proyectos."],
  ["Limitación", "El tiempo: me enfoqué principalmente en saber quiénes son nuestros usuarios para avanzar directamente con las propuestas."],
  ["Reto", "Comprender las necesidades de tres usuarios distintos y diseñar una propuesta que conecte tanto con ellos como con el cliente."],
  ["Mi rol", "UX research, UX/UI y diseño gráfico."],
];

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
      className={`grid items-center gap-10 overflow-hidden rounded-[32px] p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[minmax(0,1fr)_700px] lg:rounded-[40px] lg:p-14 ${gradient}`}
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

export default function MiCultura() {
  const ctas = [
    { label: "Probar prototipo", href: enlaces.miculturaPrototipo },
    { label: "Ver UI Kit", href: enlaces.miculturaUiKit },
    { label: "Ver en Google Play", href: enlaces.miculturaPlayStore },
  ].filter((c) => c.href);

  return (
    <>
      {/* Hero centrado */}
      <section className="pt-10 pb-16 md:pt-16 lg:pt-20 lg:pb-[120px]">
        <Container className="flex flex-col gap-8 lg:gap-12">
          <BackLink />
          <div className="flex flex-col items-center gap-6 text-center lg:gap-8">
            <div className="flex justify-center">
              <Tags items={["UX Research", "UX/UI", "Diseño gráfico"]} />
            </div>
            <CaseTitle>Mi cultura</CaseTitle>
            <p className="max-w-[1100px] text-2xl font-semibold leading-[1.3] lg:text-[32px]">
              Una app para descubrir los eventos culturales del país y el software con el que se gestionan, diseñados
              como un solo ecosistema para tres tipos de usuario.
            </p>
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
            <span className="inline-flex w-fit rounded-full bg-chip px-4 py-2 text-base lg:text-lg">El ecosistema</span>
            <div className="grid gap-3 md:grid-cols-3 lg:gap-6">
              {[
                ["Asistentes", "Descubren y asisten a eventos."],
                ["Organizadores", "Productoras y emprendedores que publican eventos."],
                ["Operadores", "Gestionan eventos y cuentas."],
              ].map(([t, d]) => (
                <div key={t} className="flex flex-col gap-1.5 rounded-[20px] bg-bg p-5 lg:p-6">
                  <span className="text-sm text-muted lg:text-base">Usuario</span>
                  <span className="text-xl font-bold lg:text-2xl">{t}</span>
                  <span className="text-base text-muted lg:text-lg">{d}</span>
                </div>
              ))}
            </div>
            <span aria-hidden className="mx-auto h-8 w-px bg-accent/60" />
            <div className="grid gap-3 md:grid-cols-3 lg:gap-6">
              <div className="flex flex-col gap-1.5 rounded-[20px] bg-wine p-5 md:col-span-2 lg:p-6">
                <span className="text-sm text-pink lg:text-base">Producto</span>
                <span className="text-xl font-bold lg:text-2xl">App móvil</span>
                <span className="text-base lg:text-lg">
                  Descubrir eventos por fecha y categoría, y publicarlos en pocos pasos.
                </span>
              </div>
              <div className="flex flex-col gap-1.5 rounded-[20px] bg-wine p-5 lg:p-6">
                <span className="text-sm text-pink lg:text-base">Producto</span>
                <span className="text-xl font-bold lg:text-2xl">Software de gestión</span>
                <span className="text-base lg:text-lg">Tareas, eventos, cuentas y estadísticas.</span>
              </div>
            </div>
            <span aria-hidden className="mx-auto h-8 w-px bg-accent/60" />
            <div className="flex flex-col gap-1 rounded-[20px] bg-gradient-to-r from-accent to-accent-dark p-5 md:flex-row md:items-center md:gap-4 lg:p-6">
              <span className="text-xl font-bold lg:text-2xl">UI Kit compartido</span>
              <span className="text-base lg:text-lg">Un mismo lenguaje visual para todo el ecosistema.</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Brief */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_836px]">
          <div className="flex flex-col gap-5">
            <SectionPill>El brief</SectionPill>
            <h2 className="font-display text-[clamp(44px,6.7vw,96px)] font-bold leading-none tracking-[-0.02em]">
              Ficha del proyecto
            </h2>
          </div>
          <dl className="flex flex-col">
            {brief.map(([k, v]) => (
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
            <SectionPill>Investigación</SectionPill>
            <H2>Benchmark y operadores</H2>
            <Lead className="text-muted">
              Analicé a la competencia en un benchmark y estudié cómo trabajan los operadores del software de gestión.
            </Lead>
          </div>
          <div className="flex flex-col gap-10">
            <Quote
              text="Categorizar bien los eventos es clave para que la gente encuentre lo que busca."
              source="— Benchmark de competidores"
            />
            <Quote
              text="Necesitaban tener sus tareas organizadas dentro del mismo software de gestión."
              source="— Operadores del software"
            />
          </div>
        </div>
      </Section>

      {/* La solución */}
      <Section>
        <div className="flex flex-col gap-5">
          <SectionPill>La solución</SectionPill>
          <H2>Un producto, una necesidad</H2>
        </div>
        <div className="mt-10 flex flex-col gap-6 lg:mt-16 lg:gap-8">
          <Panel
            gradient="bg-gradient-to-br from-[#011932] to-[#0a3e76]"
            tag="App móvil"
            title="Crea, edita y publica eventos"
            items={[
              "Un modelo intuitivo de pocos pasos para crear eventos.",
              "Apartado para editar los eventos y corregir errores o cambios en la organización.",
            ]}
            media={<Phones prefix="micultura-crear" alts={["crear evento, paso 1", "crear evento, paso 2", "crear evento, paso 3"]} />}
          />
          <Panel
            reverse
            gradient="bg-gradient-to-br from-[#310c61] to-[#7229d2]"
            tag="App móvil"
            title="Descubrir y compartir eventos"
            items={[
              "Eventos próximos claros, ordenados por fecha y con filtros de búsqueda.",
              "Eventos promocionados como método de monetización.",
            ]}
            media={<Phones prefix="micultura-descubrir" alts={["inicio", "búsqueda", "notificaciones"]} />}
          />
          <Panel
            gradient="bg-gradient-to-br from-[#0b4a4f] to-[#11797a]"
            tag="Software de gestión"
            title="Las tareas del operador, en un solo lugar"
            items={[
              "Un dashboard con tareas y estadísticas de productividad.",
              "Eventos organizados por categorías y subcategorías en la base de datos.",
            ]}
            media={
              <Shot src="/images/micultura-software.webp" alt="Mi cultura: dashboard del software de gestión" width={698} height={500} className="rounded-2xl" sizes="(max-width: 1024px) 100vw, 700px" />
            }
          />
          <Panel
            reverse
            gradient="bg-gradient-to-br from-[#510743] to-[#ae3698]"
            tag="Website"
            title="Accede desde cualquier plataforma"
            items={["Un website para buscar, filtrar y compartir eventos.", "Sitio conectado con tu cuenta en la app móvil."]}
            media={
              <Shot src="/images/micultura-website.webp" alt="Mi cultura: website de eventos" width={698} height={500} className="rounded-2xl" sizes="(max-width: 1024px) 100vw, 700px" />
            }
          />
        </div>
      </Section>

      {/* Impacto */}
      <Section className="bg-gradient-to-b from-bg to-surface">
        <div className="flex flex-col gap-5">
          <SectionPill>Resultados</SectionPill>
          <H2>Impacto en ambos proyectos</H2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
          <StatCard value="+40%" bg="bg-gradient-to-br from-accent-dark to-accent-deep">
            de retención de usuarios en ambos proyectos al reducir la fricción.
          </StatCard>
          <StatCard value="1" valueClass="text-accent">
            lenguaje visual para todo el ecosistema, sin desconexión entre sus productos.
          </StatCard>
          <StatCard value="Más ágil" valueClass="text-accent">
            así describieron los usuarios sus tareas tras optimizar el contenido de las pantallas.
          </StatCard>
        </div>

        <div className="mt-16 flex flex-col gap-8 lg:mt-20">
          <h3 className="text-xl font-bold lg:text-2xl">Hoja de ruta propuesta</h3>
          <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
            {[
              ["Hecho", "MVP", "App, software de gestión y UI Kit.", true],
              ["Propuesta", "Gamificación", "Dinámicas para motivar a descubrir y asistir a más eventos.", false],
              ["Propuesta", "Eventos promocionados", "Espacios destacados como fuente de ingresos.", false],
            ].map(([estado, t, d, hecho]) => (
              <li key={t as string} className="flex flex-col gap-2 border-t-2 pt-5" style={{ borderColor: hecho ? "#eb0045" : "rgb(255 255 255 / 0.15)" }}>
                <span className={`text-sm font-semibold lg:text-base ${hecho ? "text-accent" : "text-muted"}`}>
                  {estado}
                </span>
                <span className="text-xl font-bold lg:text-2xl">{t}</span>
                <span className="text-base text-muted lg:text-lg">{d}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 lg:mt-24">
          <NextProject label="¿Quieres ver más?" title="Ver todos los proyectos" href="/#proyectos" />
        </div>
      </Section>
    </>
  );
}
