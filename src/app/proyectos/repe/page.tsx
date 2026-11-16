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
import { enlaces } from "@/data/site";

export const metadata: Metadata = {
  title: "Repe",
  description: "App móvil que conecta a entrenadores personales con sus clientes. Caso de estudio UX/UI.",
};

const datos = [
  ["Rol", "Research, UX/UI y design system"],
  ["Plataforma", "App móvil · clientes y entrenadores"],
  ["Usuarios", "Hispanohablantes de 18 a 60 años"],
  ["Año", "2026"],
];

const rasgos = [
  ["Personalidad amigable", 27],
  ["Conocimiento de la industria", 22],
  ["Alta cualificación", 14],
  ["Paciencia", 12],
  ["Actitud positiva", 10],
] as const;

const personas = [
  {
    inicial: "J",
    nombre: "José, 20 años",
    meta: "Venezuela · Smartphone",
    tags: ["Cliente", "Novato"],
    texto:
      "Ingeniero mecánico. Va al gym de 3 a 5 días por semana y sabe poco de ejercicios, dietas y máquinas. Quiere mejorar su condición física y su autoestima con un entrenador que lo entienda y se adapte a sus horarios.",
  },
  {
    inicial: "C",
    nombre: "Carla, 35 años",
    meta: "Argentina · Smartphone",
    tags: ["Cliente", "Avanzada"],
    texto:
      "Entrena 5 días a la semana con intensidad. Le gusta tener entrenador porque la motiva a ser constante, y valora que le armen dietas y planes adaptados a su vida y a sus lesiones.",
  },
  {
    inicial: "R",
    nombre: "Ramiro, 44 años",
    meta: "Colombia · Smartphone y web",
    tags: ["Entrenador", "20 años de experiencia"],
    texto:
      "Trabaja 6 días a la semana de forma presencial y consigue clientes por redes sociales. Quiere gestionar más clientes a distancia sin perder calidad: rutinas, dietas y control del progreso.",
  },
];

const pasos = [
  ["Research", "Estudios de la industria y conversaciones en el gimnasio."],
  ["Benchmark", "Análisis de apps de coaching como Harbiz y ABC."],
  ["Personas", "Tres perfiles con sus necesidades y puntos de dolor."],
  ["Flujos", "Recorridos de cliente y entrenador en FigJam."],
  ["MVP", "Piezas mínimas para cada versión de la app."],
  ["UI y prototipo", "Sistema de diseño y prototipo navegable en Figma."],
];

const recursos = [
  { tipo: "Google Sheets", titulo: "Benchmark de competidores", url: enlaces.repeBenchmark },
  { tipo: "FigJam", titulo: "Flujos de la app", url: enlaces.repeFlujos },
  { tipo: "Prototipo web", titulo: "Prototipo de Repe", url: enlaces.repePrototipo },
];

export default function Repe() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 pb-16 md:pt-16 lg:pt-20 lg:pb-[120px]">
        <Container className="flex flex-col gap-8 lg:gap-12">
          <BackLink />
          <Tags items={["UX/UI", "App móvil", "Research", "Design system"]} />
          <CaseTitle>Repe</CaseTitle>
          <p className="max-w-[1100px] text-2xl font-semibold leading-[1.3] lg:text-[32px]">
            App móvil que conecta a entrenadores personales con sus clientes: rutinas, progreso y comunicación en un
            solo lugar, sin importar la distancia.
          </p>
          <dl className="grid grid-cols-2 gap-6 border-y border-line py-6 lg:grid-cols-4">
            {datos.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1">
                <dt className="text-sm text-muted lg:text-base">{k}</dt>
                <dd className="text-base font-medium lg:text-lg">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="flex items-end justify-center gap-3 overflow-hidden rounded-[28px] bg-gradient-to-b from-[#18330f] to-[#72f54a] px-4 pt-10 sm:gap-6 lg:rounded-[40px] lg:pt-20">
            <div className="w-[28%] max-w-[258px] translate-y-6">
              <Shot src="/images/repe-hero-marketplace.webp" alt="Repe: pantalla de marketplace" width={258} height={561} className="rounded-2xl lg:rounded-3xl" priority />
            </div>
            <div className="w-[33%] max-w-[300px]">
              <Shot src="/images/repe-hero-dashboard.webp" alt="Repe: dashboard del cliente" width={300} height={652} className="rounded-2xl lg:rounded-[32px]" priority />
            </div>
            <div className="w-[28%] max-w-[258px] translate-y-6">
              <Shot src="/images/repe-hero-progreso.webp" alt="Repe: pantalla de progreso" width={258} height={561} className="rounded-2xl lg:rounded-3xl" priority />
            </div>
          </div>
        </Container>
      </section>

      {/* 01 Contexto */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <CaseHeading eyebrow="01 · Contexto" title="Crear una app que mejore la interacción entre clientes y entrenadores" />
          <div className="flex flex-col gap-6 lg:gap-8">
            <Lead>
              Después de la pandemia, el uso de apps de fitness no ha dejado de crecer. En Latinoamérica cada vez más
              personas están dispuestas a entrenar con un coach a través de una app, siempre que la experiencia sea
              sencilla, útil y sientan que el entrenador está «presente».
            </Lead>
            <Lead>
              La idea nació en mi propio gimnasio. Mis compañeras con entrenador contaban que sus rutinas no siempre se
              adaptaban a sus objetivos y que las dietas solían ser genéricas. Del otro lado, los entrenadores no tenían
              herramientas para atender bien a más clientes sin estar presentes el 100% del tiempo.
            </Lead>
            <blockquote className="flex flex-col gap-3 border-l-4 border-accent pl-6">
              <p className="font-display text-[28px] font-bold leading-[1.2] lg:text-[40px]">
                «¿Cómo ayudar a los entrenadores a atender de manera personalizada a sus clientes?»
              </p>
              <cite className="text-base not-italic text-muted">La pregunta que dio origen a Repe.</cite>
            </blockquote>
          </div>
        </div>
      </Section>

      {/* 02 Objetivos */}
      <Section className="bg-gradient-to-b from-bg to-surface">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow="02 · El reto" title="Objetivos del proyecto" />
          <Lead>
            Crear un espacio donde el entrenador pueda orientar de forma rápida y eficaz a más clientes, y donde el
            cliente reciba la atención que contrató, aprovechando el auge de las apps de ejercicio.
          </Lead>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
          <FeatureCard title="Iniciativa">
            Mejorar la interacción entre clientes y entrenadores: más clientes por entrenador, con las herramientas
            correctas y una atención estandarizada.
          </FeatureCard>
          <FeatureCard title="Negocio">
            Detectar oportunidades a partir del research, plantear el modelo de negocio y llevarlo a un prototipo.
          </FeatureCard>
          <FeatureCard title="Experiencia">
            Entender necesidades y dolores de ambos perfiles, y lograr que se sientan cómodos trabajando a distancia con
            un estándar mínimo de calidad.
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2 lg:gap-3">
          <span className="mr-2 text-base text-muted lg:text-lg">Qué hice:</span>
          {["Identidad", "Modelo de negocio", "Flujos de usuario", "Piezas del MVP", "Sistema de diseño", "Prototipo"].map(
            (t) => (
              <Tag key={t}>{t}</Tag>
            ),
          )}
        </div>
      </Section>

      {/* 03 Investigación */}
      <Section className="bg-gradient-to-b from-surface to-bg">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow="03 · Investigación" title="Lo que dicen los datos" />
          <Lead>
            Revisé estudios de la industria del fitness (MINDBODY y reportes globales sobre el cierre de gimnasios) y
            analicé apps de la competencia en un benchmark, para entender cómo se relacionan hoy clientes y
            entrenadores.
          </Lead>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          <StatCard value="20%">dice que el entrenador es el factor más importante para mantener una nueva rutina.</StatCard>
          <StatCard value="4%">afirma haber encontrado a su entrenador perfecto.</StatCard>
          <StatCard value="27%">considera la personalidad amigable el rasgo más importante de un entrenador.</StatCard>
          <StatCard value="36%">
            de los entrenadores usó apps para enviar entrenamientos y dar seguimiento durante el cierre de gimnasios.
          </StatCard>
          <StatCard value="40%">de gimnasios y entrenadores personales usó apps para ofrecer entrenamiento virtual.</StatCard>
          <StatCard value="51%">de los gimnasios usó wearables para ayudar a sus clientes a cumplir objetivos.</StatCard>
        </div>
        <div className="mt-4 grid gap-4 lg:mt-6 lg:grid-cols-[2fr_1fr] lg:gap-6">
          <div className="flex flex-col gap-6 rounded-3xl bg-surface p-6 lg:p-10">
            <h4 className="text-xl font-bold lg:text-2xl">¿Qué rasgo valoran más en un entrenador?</h4>
            <ul className="flex flex-col gap-4">
              {rasgos.map(([r, v]) => (
                <li key={r} className="flex flex-col gap-2">
                  <div className="flex justify-between text-base lg:text-lg">
                    <span>{r}</span>
                    <span className="font-semibold">{v}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-chip">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${(v / 30) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted lg:text-base">Fuente: encuesta de MINDBODY sobre entrenadores personales.</p>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-accent p-6 lg:p-10">
            <p className="text-base font-semibold lg:text-lg">Oportunidad</p>
            <p className="text-xl font-semibold leading-[1.35] lg:text-2xl">
              El entrenador es clave para no abandonar, pero casi nadie encuentra al adecuado. Repe debía ayudar a
              encontrarlo y a sostener la relación a distancia.
            </p>
          </div>
        </div>
      </Section>

      {/* 04 Usuarios */}
      <Section className="bg-surface">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow="04 · Usuarios" title="Para quién diseñé" />
          <Lead>
            Definí tres perfiles a partir de conversaciones en el gimnasio y del research: dos clientes con niveles de
            experiencia opuestos y un entrenador que quiere crecer en lo digital.
          </Lead>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {personas.map((p) => (
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
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <p className="text-base leading-[1.5] lg:text-lg">{p.texto}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:mt-6 lg:gap-6">
          <div className="flex flex-col gap-6 rounded-3xl bg-bg p-6 lg:p-10">
            <h4 className="text-xl font-bold lg:text-2xl">Puntos de dolor · Clientes</h4>
            <BulletList
              items={[
                "No saben crear rutinas personalizadas ni planes alimenticios.",
                "Desconocen ejercicios, máquinas y términos que ven en internet.",
                "No saben cómo seguir progresando ni cómo llevar el control.",
                "Desmotivación y mal servicio de algunos entrenadores.",
              ]}
            />
          </div>
          <div className="flex flex-col gap-6 rounded-3xl bg-bg p-6 lg:p-10">
            <h4 className="text-xl font-bold lg:text-2xl">Puntos de dolor · Entrenadores</h4>
            <BulletList
              items={[
                "No pueden gestionar muchos clientes ni el control de cada uno.",
                "Cambiar rutinas, manejar la información y dar recomendaciones alimenticias lleva tiempo.",
                "Fricción y desconfianza ante nuevas apps y métodos de trabajo.",
                "Tener que perseguir a los clientes para que anoten su progreso.",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 05 Propuesta de valor */}
      <Section>
        <CaseHeading eyebrow="05 · Propuesta de valor" title="Crear una sola app para los dos lados" />
        <p className="mt-6 max-w-[1000px] font-display text-[clamp(24px,2.8vw,40px)] font-bold leading-[1.25] text-muted lg:mt-10">
          Resolver en una sola aplicación los puntos de dolor de clientes y entrenadores del mercado hispanohablante.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
          <FeatureCard title="Perfiles gratis" bg="bg-surface">
            Crear un perfil no tiene costo, ni para clientes ni para entrenadores.
          </FeatureCard>
          <FeatureCard title="Comisión por servicio" bg="bg-surface">
            Repe cobra un porcentaje de lo que el entrenador cobra a sus clientes, al estilo de Fiverr.
          </FeatureCard>
          <FeatureCard title="Clientes ilimitados" bg="bg-surface">
            Al llegar a 10 clientes, el entrenador paga una mensualidad accesible para tener clientes ilimitados, sin
            perder herramientas antes de ese punto.
          </FeatureCard>
        </div>
      </Section>

      {/* 06 Proceso */}
      <Section className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow="06 · Proceso" title="Cómo trabajé" />
          <Lead>
            Seguí un proceso de diseño centrado en las personas: entender el problema, definir la propuesta y llevarla
            a pantallas.
          </Lead>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          {pasos.map(([t, d], i) => (
            <li key={t} className="flex flex-col gap-3 border-t border-line pt-6">
              <span className="flex size-12 items-center justify-center rounded-full border border-accent text-lg font-semibold text-accent">
                {i + 1}
              </span>
              <span className="text-xl font-bold lg:text-2xl">{t}</span>
              <span className="text-base leading-[1.5] text-muted">{d}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* 07 MVP */}
      <Section className="bg-surface">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow="07 · MVP" title="Las piezas del producto" />
          <Lead>
            Repe tiene dos versiones: una para clientes y otra para entrenadores. Definí las pantallas mínimas de cada
            una y el objetivo de diseño de cada pieza.
          </Lead>
        </div>
        <div className="mt-10 flex flex-col gap-6 lg:mt-16">
          <Tag tone="red">App para clientes</Tag>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <FeatureCard title="Dashboard">
              La rutina del día con un botón para empezar y hábitos para marcar, con microrecompensas al completarlos.
            </FeatureCard>
            <FeatureCard title="Marketplace">
              Catálogo de entrenadores con especialidades, tarifas y testimonios, y filtros por experiencia, idioma o
              precio.
            </FeatureCard>
            <FeatureCard title="Calendario">
              Días de entrenamiento, reuniones con el entrenador y horarios para agendar nuevas citas.
            </FeatureCard>
            <FeatureCard title="Progreso">
              Gráficas de peso y grasa corporal, fotos de antes y después, récords y logros.
            </FeatureCard>
            <FeatureCard title="Mi perfil">
              Horarios, dieta, medidas y estilo de vida para que el entrenador personalice el plan.
            </FeatureCard>
            <FeatureCard title="Checklist de ejercicios">
              Registro de series, pesos y repeticiones mientras entrenas.
            </FeatureCard>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-6 lg:mt-16">
          <Tag tone="red">App para entrenadores</Tag>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <FeatureCard title="Dashboard">
              Entrenamientos del día, clientes activos e inactivos, vencimientos y ventas.
            </FeatureCard>
            <FeatureCard title="Clientes">
              Ficha de cada cliente con sus datos, progreso, chat y calendario de planes.
            </FeatureCard>
            <FeatureCard title="Calendario">
              Agenda mensual, semanal o en lista con citas, cancelaciones y confirmaciones.
            </FeatureCard>
            <FeatureCard title="Rutinas">
              Constructor de rutinas y dietas con librería de ejercicios, plantillas y videos propios.
            </FeatureCard>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <FeatureCard title="Mensajería">
              Chat por cliente: mensajes, notas de voz, fotos, videos y documentos.
            </FeatureCard>
            <FeatureCard title="Notificaciones">
              Recordatorios de cobros, cambios de rutina, reuniones y tareas pendientes.
            </FeatureCard>
            <FeatureCard title="Mi perfil" className="sm:col-span-2 lg:col-span-1">
              Certificaciones, experiencia, servicios, testimonios, pagos y ajustes de la cuenta.
            </FeatureCard>
          </div>
        </div>
      </Section>

      {/* 08 Pantallas */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <CaseHeading eyebrow="08 · Diseño" title="Pantallas de la app" />
          <Lead>
            Una interfaz oscura y enfocada: lo importante del día primero y la acción principal siempre a la vista.
          </Lead>
        </div>
        <div className="-mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:scroll-px-8 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 lg:mt-16 lg:gap-[37px]">
          {[
            ["repe-inicio", "Inicio", "La rutina del día y los hábitos, a un toque de empezar."],
            ["repe-marketplace", "Marketplace", "Encontrar entrenador por especialidad, valoración y precio."],
            ["repe-agenda", "Calendario", "Entrenamientos y reuniones con el entrenador de la semana."],
            ["repe-progreso", "Progreso", "Logros, peso corporal, fotos y récords personales."],
          ].map(([img, t, d]) => (
            <div key={img} className="w-[68vw] max-w-[300px] shrink-0 snap-start md:w-auto">
              <PhoneCard src={`/images/${img}.webp`} alt={`Repe: pantalla ${t}`} title={t} text={d} />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[32px] bg-surface p-6 sm:p-10 lg:mt-16 lg:rounded-[40px] lg:p-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div className="flex flex-col gap-3">
              <Eyebrow>Flujo clave</Eyebrow>
              <H2>Entrenar con Repe</H2>
            </div>
            <Lead>
              Visualización completa de la rutina, indicaciones y referencia de los ejercicios, observaciones y un
              cierre para motivar al usuario.
            </Lead>
          </div>
          <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4 lg:mt-16 lg:gap-8">
            {[
              ["repe-flujo-1", "1. Rutina del día", "Ejercicios, series y duración antes de empezar."],
              ["repe-flujo-2", "2. Registro por serie", "Peso, repeticiones, video de técnica y tip del entrenador."],
              ["repe-flujo-3", "3. Entreno completado", "Resumen, racha y volumen que ve el entrenador."],
            ].flatMap(([img, t, d], i) => {
              const card = (
                <div key={img} className="mx-auto w-full max-w-[300px] self-start">
                  <PhoneCard src={`/images/${img}.webp`} alt={`Repe: ${t}`} title={t} text={d} />
                </div>
              );
              if (i === 2) return [card];
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
            <CaseHeading eyebrow="09 · Sistema de diseño" title="Pensado para usarse en el gym" />
            <Lead>
              Construí un sistema propio para Repe: tema oscuro para no deslumbrar mientras entrenas, verde energético
              (#72F54A) para las acciones principales y Figtree como tipografía.
            </Lead>
            <BulletList
              items={[
                "Más de 280 variables organizadas en primitivas y alias.",
                "Paletas primaria, secundaria, neutros y semánticos, en modo claro y oscuro.",
                "Componentes reutilizables: tarjetas, tags, checkbox, botones y navegación.",
              ]}
            />
          </div>
          <Shot
            src="/images/repe-paleta.webp"
            alt="Paleta de color y variables del sistema de diseño de Repe"
            width={642}
            height={572}
            className="rounded-3xl bg-white"
          />
        </div>
      </Section>

      {/* 10 Cierre */}
      <Section>
        <CaseHeading eyebrow="10 · Cierre" title="Próximos pasos" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-16 lg:gap-6">
          <FeatureCard title="Experiencia del entrenador" bg="bg-surface">
            Completar las pantallas del entrenador y su versión web de escritorio.
          </FeatureCard>
          <FeatureCard title="Más idiomas" bg="bg-surface">
            Adaptar la app a otros idiomas además del español.
          </FeatureCard>
        </div>

        <div className="mt-16 flex flex-col gap-6 lg:mt-24">
          <h3 className="text-xl font-bold lg:text-2xl">Recursos del proyecto</h3>
          <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
            {recursos.map((r) => {
              const inner = (
                <>
                  <span className="flex flex-col gap-1">
                    <span className="text-sm text-muted lg:text-base">{r.tipo}</span>
                    <span className="text-xl font-bold lg:text-2xl">{r.titulo}</span>
                  </span>
                  {r.url && (
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:bg-accent">
                      <ArrowIcon />
                    </span>
                  )}
                </>
              );
              return r.url ? (
                <a
                  key={r.titulo}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-3xl bg-surface p-6 lg:p-8"
                >
                  {inner}
                </a>
              ) : (
                <div key={r.titulo} className="flex items-center justify-between gap-4 rounded-3xl bg-surface p-6 lg:p-8">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <NextProject label="Siguiente proyecto" title="Haditas" href="/proyectos/haditas" />
        </div>
      </Section>
    </>
  );
}
