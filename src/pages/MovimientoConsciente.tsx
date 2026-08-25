import Section from '../components/Section'
import Button from '../components/Button'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

// Placeholder: el cliente reemplaza hero.jpg por la foto definitiva.
// Al reemplazarla, actualizar también width/height de abajo con las
// dimensiones reales de la nueva imagen (ayuda a evitar layout shift).
import heroImageDesktop from '../assets/images/movimiento/hero-desktop.png'
import heroImageMobile from '../assets/images/movimiento/hero-mobile.jpg'

const espacio = [
  {
    title: 'Nos movemos',
    text: 'Entrenamos, bailamos, exploramos distintas formas de mover el cuerpo y dejamos que el movimiento nos saque del automático.',
  },
  {
    title: 'Exploramos',
    text: 'Jugamos con objetos, música, ejercicios y propuestas corporales. Probamos, sentimos, descubrimos. No hay una única forma de hacerlo.',
  },
  {
    title: 'Nos permitimos sentir',
    text: 'Acá no hay nada bien o mal hecho. Usamos el movimiento para mantener la mente consciente presente y darle al inconsciente el espacio para expresarse, aparecer y mostrarnos aquello que necesita ser visto.',
  },
]

const volverAVos = [
  {
    title: 'Te escuchás',
    text: 'Aprendés a registrar lo que pasa en tu cuerpo, tus emociones y tus sensaciones, incluso cuando todavía no sabés cómo ponerlo en palabras.',
  },
  {
    title: 'Te expresás',
    text: 'Encontrás en el movimiento una manera diferente de sacar afuera, explorar y darle lugar a aquello que necesitás expresar.',
  },
  {
    title: 'Te encontrás',
    text: 'Volvés a conectar con tu cuerpo, con tu energía y con partes de vos que quizás habían quedado en segundo plano.',
  },
]

export default function MovimientoConsciente() {
  return (
    <>
      <Seo
        title="Movimiento consciente"
        description="Un espacio para escuchar y expresar a través del cuerpo lo que las palabras todavía no pueden nombrar."
      />

      <PageHero
        imageDesktop={heroImageDesktop}
        imageMobile={heroImageMobile}
        alt="Movimiento consciente"
        eyebrow="Cuando no encontrás las palabras, dejá que el cuerpo hable."
        title="Movimiento consciente"
        imageClassName="object-top md:object-[50%_40%]"
      />

      <Section background="cream">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <p className="font-sans text-base leading-relaxed text-plum/80 md:text-xl">
            A veces sabemos que algo nos pasa, pero no encontramos las palabras para
            explicarlo. El cuerpo, en cambio, siempre está hablando. A través del movimiento
            consciente te invito a escucharlo, explorar lo que necesita expresar y darle un
            lugar a aquello que quizás todavía no podés nombrar. No necesitás saber bailar,
            tener experiencia ni moverte de una determinada manera. Solo necesitás estar
            dispuesto/a a encontrarte con vos.
          </p>
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-serif text-3xl uppercase tracking-wide text-plum md:text-5xl">
          Un espacio para...
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {espacio.map((item) => (
            <div key={item.title} className="rounded-2xl bg-cream p-8">
              <h3 className="font-serif text-2xl text-plum">{item.title}</h3>
              <p className="mt-3 font-sans text-base text-plum/70">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-serif text-3xl uppercase tracking-wide text-plum md:text-5xl">
          ¿Y si esta fuera tu forma de volver a vos?
        </h2>

        <div className="mt-12 grid gap-10 text-center md:grid-cols-3">
          {volverAVos.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-2xl text-plum">{item.title}</h3>
              <p className="mt-3 font-sans text-base text-plum/70">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <p className="font-serif text-2xl text-plum md:text-4xl">
            ¿Y si eso que estás intentando entender necesita, primero, ser sentido?
          </p>
          <Button variant="whatsapp" size="xl" whatsappMessage="Hola! Quiero experimentarlo.">
            Quiero experimentarlo
          </Button>
        </div>
      </Section>
    </>
  )
}
