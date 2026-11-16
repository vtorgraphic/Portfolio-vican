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
import { enlaces } from "@/data/site";

export const metadata: Metadata = {
  title: "Vigia",
  description:
    "Rediseño de un ecosistema de tres plataformas de monitoreo GPS bajo un mismo universo visual. Caso de estudio.",
};

const datos = [
  ["Rol", "UX research, UX/UI y diseño gráfico"],
  ["Plataformas", "Web app GPS · Gestión de usuarios · App"],
  ["Proceso", "Benchmark → User flow → Wireframes → Prototipos"],
  ["Entregas", "Cambios semanales al cliente"],
];

const matriz = [
  {
    area: "Ecosistema",
    problema:
      "Los usuarios sentían desconexión con la web app y no entendían su alcance: no había ninguna explicación previa.",
    solucion:
      "Unifiqué el estilo de todo el ecosistema con un mismo design system, para que todo se sintiera del mismo universo.",
  },
  {
    area: "Web app GPS",
    problema:
      "En la web app de monitoreo, el menú con todas las opciones abrumaba y las funciones de interés no se encontraban.",
    solucion: "Reduje el ruido visual de los menús principales y usé iconos y espacios para aliviar la sobrecarga.",
  },
  {
    area: "Gestión de usuarios",
    problema:
      "El software de gestión no estaba completo y tenía muchos pasos extra que saturaban la experiencia y hacían perder tiempo.",
    solucion: "Depuré las pantallas principales y añadí atajos para optimizar el tiempo de los usuarios.",
  },
  {
    area: "Gestión de usuarios",
    problema: "Los usuarios querían un resumen mensual de sus clientes y poder filtrarlos.",
    solucion: "Propuse y añadí un dashboard que muestra de forma gráfica y sencilla la data más importante.",
  },
];

function Phase({
  n,
  title,
  text,
  active,
  children,
  last,
}: {
  n: number;
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
        <Eyebrow>Fase {n}</Eyebrow>
        <H3>{title}</H3>
        <p className="max-w-[820px] text-lg leading-[1.6] text-muted lg:text-xl">{text}</p>
        {children}
      </div>
    </li>
  );
}

export default function Vigia() {
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
          <BackLink />
          <div className="flex max-w-[900px] flex-col gap-6 lg:gap-8">
            <Tags items={["UX Research", "UX/UI", "Diseño gráfico", "Ecosistema de 3 plataformas"]} />
            <CaseTitle>Vigia</CaseTitle>
            <p className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">
              Rediseño de un ecosistema de tres plataformas: una web app de monitoreo GPS, un software de gestión de
              usuarios y su app, bajo un mismo universo visual.
            </p>
            {enlaces.vigiaPrototipo && (
              <div>
                <Button href={enlaces.vigiaPrototipo} external>
                  Probar prototipo
                </Button>
              </div>
            )}
          </div>
          <div className="lg:hidden">
            <Shot src="/images/vigia-portada-gps.webp" alt="Vigia: web app de monitoreo GPS" width={916} height={616} priority />
          </div>
        </Container>
      </section>

      {/* Datos */}
      <section className="border-y border-line">
        <Container>
          <dl className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
            {datos.map(([k, v]) => (
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
          <CaseHeading
            eyebrow="01 · Contexto"
            title="Crear un ecosistema para una web app, una app móvil y un software de gestión"
          />
          <div className="flex flex-col gap-6">
            <Lead>
              Vigia es una empresa de monitoreo por GPS. Su servicio permite llevar el control y vigilar flotas
              vehiculares, ya sea de empresas o de personas independientes. El usuario puede colocar alarmas, rutas,
              geocercas, registros, etc. para monitorear de manera estandarizada sus flotas.
            </Lead>
            <Lead>
              La empresa quería que su web app fuera más intuitiva: los usuarios comentaban que la notaban muy compleja
              y que no tenía ciertas funciones que sí tenía la app. Otro objetivo era terminar y mejorar su software de
              gestión, que se pondría a la venta próximamente para franquiciar el servicio de monitoreo, permitiendo que
              algunos clientes pudieran administrar a los suyos.
            </Lead>
          </div>
        </div>
      </Section>

      {/* Problema y solución */}
      <Section className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16 xl:grid-cols-[minmax(0,1fr)_640px]">
          <div className="flex flex-col gap-5">
            <SectionPill>El problema</SectionPill>
            <H2>Producto anticuado y poco intuitivo</H2>
          </div>
          <div className="flex flex-col gap-2 rounded-3xl bg-wine p-6 lg:p-8">
            <span className="text-base font-semibold text-pink lg:text-lg">El mayor reto</span>
            <p className="text-lg leading-[1.5] lg:text-xl">
              El tiempo: entender las necesidades del proyecto y todas las funciones de sus softwares lo más rápido
              posible para avanzar a wireframes y prototipos.
            </p>
          </div>
        </div>

        <div className="mt-12 hidden grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] gap-6 md:grid lg:mt-16">
          <span className="text-base font-semibold text-muted lg:text-lg">Lo que encontramos</span>
          <span />
          <span className="text-base font-semibold text-accent lg:text-lg">Lo que hicimos</span>
        </div>
        <div className="mt-8 flex flex-col gap-6 md:mt-4 md:gap-4">
          {matriz.map((m, i) => (
            <div
              key={i}
              className="grid gap-3 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:items-center md:gap-6"
            >
              <div className="flex h-full flex-col gap-4 rounded-[20px] bg-surface p-6">
                <Tag>{m.area}</Tag>
                <p className="text-base leading-[1.5] lg:text-lg">{m.problema}</p>
              </div>
              <span
                aria-hidden
                className="mx-auto flex size-10 rotate-90 items-center justify-center rounded-full bg-accent text-xl md:size-14 md:rotate-0"
              >
                →
              </span>
              <div className="flex h-full flex-col gap-3 rounded-[20px] bg-gradient-to-b from-surface to-surface-2 p-6 ring-1 ring-accent/40">
                <span className="text-sm font-semibold text-pink lg:text-base">Solución</span>
                <p className="text-base leading-[1.5] lg:text-lg">{m.solucion}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Insights */}
      <Section className="bg-gradient-to-b from-bg to-surface">
        <div className="flex flex-col gap-5">
          <SectionPill>Insights</SectionPill>
          <H2>Lo que nos dijo la investigación</H2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-16 lg:gap-6">
          <div className="flex flex-col gap-8 rounded-[32px] bg-gradient-to-br from-accent-dark to-accent-deep p-8 lg:min-h-[430px] lg:p-12">
            <Tag>Web app</Tag>
            <p className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">
              Los usuarios se sentían confundidos, no usaban las funciones que les interesaban porque no las
              encontraban, y algunos se sentían abrumados por el menú.
            </p>
          </div>
          <div className="flex flex-col gap-8 rounded-[32px] bg-surface p-8 lg:min-h-[430px] lg:p-12">
            <Tag tone="red">Software de gestión</Tag>
            <p className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">
              Los usuarios querían encontrar un resumen de sus clientes, pagos, clientes nuevos, desertados, etc. y
              poder filtrarlos.
            </p>
          </div>
        </div>
      </Section>

      {/* Proceso */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionPill>Proceso</SectionPill>
            <H2>Fases del proyecto</H2>
          </div>
          <Lead className="text-muted">
            Al ser un ecosistema de tres softwares, implementé soluciones distintas para el reto de cada uno, avanzando
            por fases y con entregas semanales al cliente.
          </Lead>
        </div>
        <ol className="mt-12 lg:mt-20">
          <Phase
            n={1}
            title="Benchmark"
            text="Investigué a fondo a la competencia en tres ejes. Al ser una aplicación tan grande, era clave que los usuarios la percibieran intuitiva y fácil de entender."
          >
            <div className="flex flex-wrap gap-2">
              {["Estilos visuales", "Funciones", "Usabilidad"].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Phase>
          <Phase
            n={2}
            title="User flow"
            text="Hice un user flow de cada plataforma. El reto fue reorganizar las opciones que ya existían y luego sumar las nuevas funciones."
          >
            <div className="mt-2 overflow-hidden rounded-3xl bg-white">
              <Shot src="/images/vigia-userflow.webp" alt="Vigia: user flow de la plataforma de usuarios" width={1200} height={420} sizes="(max-width: 1024px) 100vw, 1200px" />
            </div>
          </Phase>
          <Phase
            n={3}
            title="Wireframes"
            text="Con los flujos aprobados por el cliente, empecé por la gestión de usuarios, en dos versiones: una para la empresa y otra para usuarios que manejan sus propios clientes. Ahí sumamos el dashboard. Luego seguí con el monitoreo y la app, alternándolos semana a semana por ser los más complejos."
          >
            <div className="flex flex-wrap gap-2">
              {["Gestión · empresa", "Gestión · usuarios", "Monitoreo GPS", "App"].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="mt-2 rounded-3xl bg-chip p-4 lg:p-8">
              <Shot src="/images/vigia-wireframes.webp" alt="Vigia: wireframes de la plataforma de usuarios" width={1136} height={561} sizes="(max-width: 1024px) 100vw, 1136px" />
            </div>
          </Phase>
          <Phase
            n={4}
            active
            last
            title="Prototipos funcionales"
            text="Empecé por la plataforma de gestión y luego las demás. Fue el tramo más largo por los cambios y ajustes."
          >
            <div className="flex max-w-[820px] flex-col gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent-dark p-5 lg:p-6">
              <span className="text-base font-bold lg:text-lg">El giro</span>
              <p className="text-base leading-[1.5] lg:text-lg">
                Al cierre, el cliente pidió usar un sistema de diseño, lo que cambió gran parte del trabajo. Ese mismo
                design system es el que hoy unifica el ecosistema.
              </p>
            </div>
            <Shot
              src="/images/vigia-prototipo.webp"
              alt="Vigia: prototipo funcional de monitoreo"
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
            <SectionPill>El ecosistema</SectionPill>
            <H2>3 plataformas</H2>
          </div>
          <Lead className="text-muted">
            Unifiqué el estilo visual de los proyectos con el mismo design system para que todo se sintiera parte del
            universo visual de la empresa.
          </Lead>
        </div>

        <div className="mt-12 flex flex-col gap-8 lg:mt-20">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
            <Tag tone="red">Web app de monitoreo GPS</Tag>
            <H3>El mayor reto del ecosistema</H3>
          </div>
          <Shot src="/images/vigia-gps.webp" alt="Vigia: web app de monitoreo GPS" width={1312} height={700} className="rounded-2xl" sizes="(max-width: 1440px) 100vw, 1312px" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <FeatureCard title="01 · Menos ruido">Saqué de los menús principales las opciones que no eran esenciales.</FeatureCard>
            <FeatureCard title="02 · Iconos y espacio">
              Iconos para cada función y espacios para reducir la sobrecarga visual.
            </FeatureCard>
            <FeatureCard title="03 · Menos pantallas">Recorrido más corto para crear solicitudes.</FeatureCard>
            <FeatureCard title="04 · Nuevas funciones">
              Añadidas según las solicitudes de los usuarios a la empresa.
            </FeatureCard>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 lg:mt-24">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
            <Tag tone="red">Gestión de usuarios</Tag>
            <H3>Lo importante, a primera vista</H3>
          </div>
          <Shot src="/images/vigia-gestion.webp" alt="Vigia: software de gestión de usuarios con dashboard" width={1312} height={757} className="rounded-2xl" sizes="(max-width: 1440px) 100vw, 1312px" />
          <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
            <FeatureCard title="01 · Pantallas depuradas">
              Menos información poco relevante en las pantallas principales.
            </FeatureCard>
            <FeatureCard title="02 · Atajos">Accesos directos que optimizan el tiempo de los usuarios.</FeatureCard>
            <FeatureCard title="03 · Dashboard">
              Un resumen gráfico y sencillo de la data más importante de los clientes.
            </FeatureCard>
          </div>
        </div>
      </Section>

      {/* Resultados */}
      <Section>
        <div className="grid gap-8 rounded-[32px] bg-gradient-to-r from-accent to-accent-dark p-6 sm:p-10 md:grid-cols-2 md:items-center lg:rounded-[40px] lg:p-16">
          <div className="flex flex-col gap-3">
            <span className="font-display text-[clamp(80px,10.4vw,150px)] font-bold leading-none tracking-[-0.03em]">
              +40%
            </span>
            <span className="text-2xl font-semibold leading-[1.3] lg:text-[32px]">
              de retención de usuarios en ambos proyectos
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold lg:text-2xl">Un solo universo visual</h4>
              <p className="text-base leading-[1.5] lg:text-lg">
                Se unificó el estilo del ecosistema, eliminando la desconexión entre sus productos.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold lg:text-2xl">Tareas más rápidas</h4>
              <p className="text-base leading-[1.5] lg:text-lg">
                Al optimizar el contenido de las pantallas, los usuarios comunicaron que realizaban sus tareas más
                rápido.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-24">
          <NextProject label="Siguiente proyecto" title="Mi cultura" href="/proyectos/mi-cultura" />
        </div>
      </Section>
    </>
  );
}
