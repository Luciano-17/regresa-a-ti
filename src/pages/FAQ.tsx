import Section from '../components/Section'
import Accordion from '../components/Accordion'
import Seo from '../components/Seo'

const faqs = [
  {
    title: '¿Cómo empiezo?',
    content:
      'Es muy simple. Podés escribirme por WhatsApp y contarme brevemente qué te está pasando, qué estás buscando o simplemente qué te gustaría trabajar. A partir de ahí conversamos y coordinamos nuestra primera sesión.',
  },
  {
    title: '¿Tengo que saber qué terapia necesito antes de empezar?',
    content:
      'No. No necesitás llegar sabiendo qué herramienta necesitás. En la primera sesión vamos a conocernos, entender qué estás atravesando y explorar qué enfoque puede acompañarte mejor. Podemos trabajar desde la Terapia Integral, el Movimiento Consciente o integrar diferentes recursos según tu proceso.',
  },
  {
    title: '¿Cuántas sesiones necesito?',
    content:
      'Recomiendo comenzar con tres sesiones. En cada encuentro podemos profundizar el conflicto desde diferentes lugares y utilizar distintas herramientas y recursos. Después de esas tres sesiones evaluamos juntas cómo seguir, según lo que necesites y cómo esté evolucionando tu proceso.',
  },
  {
    title: '¿Las sesiones son individuales?',
    content:
      'Sí. Todas las sesiones son individuales y confidenciales, para que tengas un espacio completamente dedicado a vos y puedas expresarte con libertad.',
  },
  {
    title: '¿Las sesiones son online?',
    content:
      'Sí. Las sesiones son 100% online, por lo que podés hacerlas desde el lugar en el que estés, siempre que tengas un espacio tranquilo donde puedas estar presente y sin interrupciones.',
  },
  {
    title: '¿Cuánto dura una sesión?',
    content:
      'La duración aproximada es de una hora, aunque no trabajamos mirando el reloj. Nos tomamos el tiempo necesario para profundizar, integrar lo trabajado y llegar a una buena conclusión en cada encuentro.',
  },
  {
    title: '¿Qué días y horarios hay disponibles?',
    content:
      'Buscamos el día y horario que mejor se adapte a vos. Tengo disponibilidad de lunes a domingo, incluyendo feriados, según la agenda disponible.',
  },
  {
    title: '¿Cómo puedo pagar?',
    content:
      'Podés abonar las sesiones mediante transferencia a una billetera virtual internacional o a través de Western Union o MoneyGram. Al momento de coordinar tu sesión te indico las opciones disponibles.',
  },
  {
    title: '¿Quién me acompaña durante las sesiones?',
    content:
      'Guadalupe. Soy yo quien acompaña personalmente todos los procesos de Regresa a Ti. No hay derivaciones a otros terapeutas ni sesiones con diferentes profesionales.',
  },
  {
    title: '¿Qué pasa después de la primera sesión?',
    content:
      'No tenés que decidir nada de antemano. La primera sesión es también un espacio para conocernos y empezar a explorar lo que necesitás. Después podemos continuar con las siguientes sesiones y, al completar las tres iniciales, revisamos juntas qué camino tiene sentido seguir.',
  },
]

export default function FAQ() {
  return (
    <>
      <Seo
        title="Preguntas frecuentes"
        description="Resolvé tus dudas sobre cómo funcionan las sesiones, los pagos y el proceso de acompañamiento en Regresa a Ti."
      />
      <Section background="cream">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-center font-serif text-4xl text-plum md:text-6xl">
            Preguntas frecuentes
          </h1>
          <div className="mt-12">
            <Accordion items={faqs} titleClassName="font-sans text-xl font-bold text-plum" />
          </div>
        </div>
      </Section>
    </>
  )
}
