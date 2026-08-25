import Section from '../components/Section'
import Button from '../components/Button'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

// Placeholder: el cliente reemplaza hero.jpg por la foto definitiva.
// Al reemplazarla, actualizar también width/height de abajo con las
// dimensiones reales de la nueva imagen (ayuda a evitar layout shift).
import heroImageDesktop from '../assets/images/mision-vision/hero-desktop.png'
import heroImageMobile from '../assets/images/mision-vision/hero-mobile.jpg'

export default function MisionVision() {
  return (
    <>
      <Seo
        title="Misión y visión"
        description="Conocé la misión y la visión detrás de Regresa a Ti: un espacio para acompañarte a volver a vos."
      />

      <PageHero
        imageDesktop={heroImageDesktop}
        imageMobile={heroImageMobile}
        alt="Misión y visión"
        eyebrow="misión y visión"
        title="Un espacio que nació de una convicción"
        imageClassName="md:object-[50%_60%]"
      />

      <Section background="white">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="text-center md:text-left">
            <span className="font-sans text-base font-semibold uppercase tracking-widest text-purple">
              Misión
            </span>
            <h2 className="mt-2 font-serif text-2xl text-plum md:text-4xl">
              Acompañarte a volver a vos.
            </h2>
            <div className="mt-5 space-y-4 font-sans text-base leading-relaxed text-plum/80">
              <p>
                Regresa a Ti nació de una convicción simple: muchas veces, entre sostener,
                resolver y seguir adelante, nos vamos alejando de nosotros mismos sin darnos
                cuenta.
              </p>
              <p>
                Mi misión es crear un espacio donde puedas detenerte, escucharte, comprender
                lo que te pasa y descubrir recursos que ya existen en vos.
              </p>
              <p>
                Hay muchas formas de volver a vos. Por eso, cada proceso encuentra su propio
                camino: hablar, comprender, moverte, sentir, explorar o mirar tu historia
                desde otro lugar.
              </p>
              <p>
                Mi deseo es que lo que descubras acá no quede en una sesión, sino que se
                transforme en nuevas formas de mirarte, elegir y vivir.
              </p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <span className="font-sans text-base font-semibold uppercase tracking-widest text-purple">
              Visión
            </span>
            <h2 className="mt-2 font-serif text-2xl text-plum md:text-4xl">
              Aprender a vivir desde tu propio centro.
            </h2>
            <div className="mt-5 space-y-4 font-sans text-base leading-relaxed text-plum/80">
              <p>
                No imagino la evolución personal como llegar a un lugar sin problemas, dudas o
                desafíos. La vida va a seguir cambiando, y nosotros también.
              </p>
              <p>
                Mi visión es que puedas atravesar esos cambios sin perderte en el camino:
                reconocer tus patrones, comprender lo que necesitás, descubrir tu propósito y
                desarrollar recursos para elegir desde un lugar más consciente.
              </p>
              <p>
                Que puedas dejar de perseguir una felicidad que depende de que todo salga bien
                y construir una plenitud más genuina: una vida con sentido, poder personal y
                paz, incluso cuando las cosas no sean perfectas.
              </p>
              <p>
                Porque el proceso evolutivo no tiene principio ni fin. Siempre habrá nuevas
                montañas que atravesar, pero también nuevas formas de descubrirte en el
                camino. No se trata de evitar las dificultades, sino de aprender a
                atravesarlas con más consciencia, recursos y más vos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            variant="whatsapp"
            size="xl"
            whatsappMessage="Hola! Quiero darme este espacio."
            className="uppercase tracking-wide"
          >
            Quiero darme este espacio
          </Button>
        </div>
      </Section>
    </>
  )
}
