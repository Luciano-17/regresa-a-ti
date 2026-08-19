import Section from '../components/Section'
import Button from '../components/Button'
import Accordion from '../components/Accordion'
import Seo from '../components/Seo'

// Placeholder: el cliente reemplaza hero.jpg por la foto definitiva.
// Al reemplazarla, actualizar también width/height de abajo con las
// dimensiones reales de la nueva imagen (ayuda a evitar layout shift).
import heroImage from '../assets/images/terapias/hero.jpg'

const miradas = [
  {
    number: '1',
    category: 'Cuerpo',
    technique: 'Biodescodificación',
    text: 'Exploramos los síntomas que aparecen en tu cuerpo, en tus vínculos o en distintas áreas de tu vida para poner en palabras aquello que quizás todavía no habías podido reconocer conscientemente.',
  },
  {
    number: '2',
    category: 'Historia',
    technique: 'Constelaciones familiares',
    text: 'Exploramos patrones, lealtades y dinámicas familiares que pueden estar influyendo en tu manera de vincularte, tomar decisiones o vivir determinadas situaciones.',
  },
  {
    number: '3',
    category: 'Dirección',
    technique: 'Coaching de vida',
    text: 'Trabajamos sobre tus heridas, desafíos, recursos y posibilidades para comprender dónde estás, hacia dónde querés ir y qué necesitás para tomar acción desde tu poder personal.',
  },
]

const herramientas = [
  {
    title: 'Biodescodificación',
    content:
      'Una mirada que busca poner en palabras aquello que puede estar expresándose a través de síntomas, situaciones o conflictos, para llevar esa información a la conciencia y abrir nuevas posibilidades de comprensión.',
  },
  {
    title: 'Coaching de vida',
    content:
      'Una herramienta para comprender tus heridas, desafíos y recursos, transformar tu mirada sobre vos mismo/a y llevar esa conciencia a la acción, encontrar y potenciar tu propósito de vida, y habitar la plenitud.',
  },
  {
    title: 'Constelaciones familiares',
    content:
      'Una mirada sistémica para explorar patrones, lealtades y dinámicas familiares que pueden estar influyendo en tus vínculos y en diferentes áreas de tu vida.',
  },
  {
    title: 'Registros Akáshicos',
    content:
      'Una práctica espiritual orientada a explorar información y preguntas relacionadas con tu historia y tu camino, como una herramienta de autoconocimiento y reflexión. Desde una mirada espiritual, los Registros Akáshicos se entienden como un espacio de conexión con información del alma que puede ayudarnos a explorar preguntas, decisiones y propósito.',
  },
]

const resultados = [
  {
    title: 'Más consciencia',
    text: 'Comprender qué hay detrás de lo que te pasa te permite dejar de reaccionar automáticamente y empezar a tomar decisiones con mayor claridad.',
  },
  {
    title: 'Más recursos',
    text: 'No se trata solamente de entender tu historia. Aprendés herramientas para atravesar tus desafíos y llevar lo trabajado a tu vida cotidiana.',
  },
  {
    title: 'Más poder personal',
    text: 'Cuando reconocés tus patrones, tus recursos y tus posibilidades, empezás a ocupar un lugar diferente frente a tu propia vida: más consciente, más responsable y más protagonista.',
  },
]

export default function TerapiasIntegrales() {
  return (
    <>
      <Seo
        title="Terapias integrales"
        description="Sesiones de terapia integral que combinan biodescodificación, coaching de vida, constelaciones familiares y registros akáshicos, según tu propio proceso."
      />

      <div className="h-[75vh] w-full md:h-[85vh]">
        <img
          src={heroImage}
          alt="Terapias integrales"
          width={50}
          height={50}
          loading="eager"
          className="h-full w-full object-cover"
        />
      </div>

      <Section background="cream">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="font-sans text-lg font-semibold uppercase tracking-widest text-purple">
            Cada proceso necesita sus propias herramientas.
          </span>
          <h1 className="font-serif text-5xl text-plum md:text-6xl">Terapias integrales</h1>
          <p className="font-sans text-2xl leading-relaxed text-plum/80">
            Tu historia, tus desafíos y tu manera de vivir son únicos. Por eso, en las
            sesiones de Terapia Integral no trabajamos con una única técnica ni seguimos un
            método rígido. Integramos distintas herramientas —biodescodificación, coaching de
            vida, constelaciones familiares y registros akáshicos— de acuerdo con lo que estés
            atravesando, lo que necesites explorar y con aquello que estés dispuesto/a a
            abrir. Cada sesión es individual y tiene el tiempo que necesita. Exploramos,
            comprendemos y buscamos nuevas formas de abordar aquello que hoy querés
            transformar.
          </p>
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-serif text-4xl uppercase tracking-wide text-plum md:text-5xl">
          Cuatro miradas, un solo proceso
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {miradas.map((mirada) => (
            <div key={mirada.technique} className="rounded-2xl bg-cream p-8">
              <span className="font-sans text-lg font-semibold uppercase tracking-widest text-purple">
                {mirada.number} · {mirada.category}
              </span>
              <h3 className="mt-2 font-serif text-2xl text-plum">{mirada.technique}</h3>
              <p className="mt-3 font-sans text-lg text-plum/70">{mirada.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <div className="mx-auto max-w-3xl">
          <Accordion items={herramientas} />
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-serif text-4xl uppercase tracking-wide text-plum md:text-5xl">
          ¿Qué te llevás de este proceso?
        </h2>

        <div className="mt-12 grid gap-10 text-center md:grid-cols-3">
          {resultados.map((resultado) => (
            <div key={resultado.title}>
              <h3 className="font-serif text-2xl text-plum">{resultado.title}</h3>
              <p className="mt-3 font-sans text-lg text-plum/70">{resultado.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <p className="font-serif text-3xl text-plum md:text-4xl">
            ¿Cuánto podría cambiar tu vida si empezaras a comprender lo que te pasa, en lugar
            de simplemente intentar sobrellevarlo?
          </p>
          <Button
            variant="whatsapp"
            size="xl"
            whatsappMessage="Hola! Quiero empezar mi proceso."
          >
            Quiero empezar mi proceso
          </Button>
        </div>
      </Section>
    </>
  )
}
