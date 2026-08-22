import Section from '../components/Section'
import Button from '../components/Button'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

// Placeholder: el cliente reemplaza foto-2.jpg por la foto definitiva.
// Al reemplazarla, actualizar también width/height de abajo con las
// dimensiones reales de la nueva imagen (ayuda a evitar layout shift).
import fotoGuadalupe from '../assets/images/quien-soy/foto-2.jpg'

export default function QuienSoy() {
  return (
    <>
      <Seo
        title="Quién soy"
        description="Conocé a Guadalupe Zulatto, terapeuta holística e instructora de movimiento detrás de Regresa a Ti."
      />

      <PageHero
        image={fotoGuadalupe}
        alt="Guadalupe Zulatto"
        eyebrow="Te cuento de mí"
        title="Hola, soy Guadalupe."
        imageClassName="object-[50%_25%]"
      />

      <Section background="cream">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <div className="max-w-2xl space-y-6 text-center font-sans text-base leading-relaxed text-plum/80 md:text-left md:text-lg">
            <p>
              Desde pequeña, escuchar a los demás siempre fue algo natural para mí. Aprendí a
              mirar más allá de las palabras: una pausa, una mirada, un gesto, aquello que a
              veces sentimos pero todavía no podemos expresar.
            </p>
            <p>
              Mi propia historia también estuvo llena de montañas que tuve que aprender a
              escalar. Hubo momentos en los que pude haber elegido vivir en modo
              supervivencia, pero mi propia fragilidad me llevó a buscar recursos, conocerme y
              aprender a acompañarme.
            </p>
            <p>
              Y entendí que el autoconocimiento no es un destino al que llegamos, sino una
              forma de transitar la vida. Porque seguimos siendo humanos, con días fáciles y
              otros que nos desafían.
            </p>
            <p>
              Hoy elijo poner todo lo aprendido al servicio de acompañarte a mirar hacia
              adentro, comprenderte y encontrar tus propias herramientas para volver a vos.
            </p>
          </div>

          <Button
            variant="whatsapp"
            size="xl"
            whatsappMessage="Hola! Vos hablá, yo te escucho."
            className="mt-4"
          >
            Vos hablá, yo te escucho
          </Button>
        </div>
      </Section>
    </>
  )
}
