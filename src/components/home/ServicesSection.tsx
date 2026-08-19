import Section from '../Section'
import ServiceCard from '../ServiceCard'
import Button from '../Button'

// Placeholders: el cliente reemplaza cover.jpg por las fotos definitivas de cada servicio
import terapiasCover from '../../assets/images/terapias/cover.jpg'
import movimientoCover from '../../assets/images/movimiento/cover.jpg'

export default function ServicesSection() {
  return (
    <Section background="white">
      <div className="text-center">
        <span className="font-sans text-base font-semibold uppercase tracking-widest text-purple">
          ¿Cómo puedo acompañarte?
        </span>
        <h2 className="mt-3 font-serif text-4xl text-plum md:text-5xl">
          Hay más de una forma de volver a vos.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-plum/80 md:text-xl">
          Cada proceso es diferente. Por eso, encontrá el espacio que hoy pueda acompañarte
          mejor.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <ServiceCard
          image={{ src: terapiasCover, alt: 'Terapias integrales' }}
          title="Terapias integrales"
          description="Un espacio de escucha para explorar lo que hoy necesitás, integrando diferentes herramientas y enfoques según tu propio proceso."
          buttonLabel="Quiero conocer este espacio"
          to="/servicios/terapias-integrales"
        />
        <ServiceCard
          image={{ src: movimientoCover, alt: 'Movimiento consciente' }}
          title="Movimiento consciente"
          description="Cuando poner en palabras lo que sentís no resulta fácil, el cuerpo puede encontrar otra forma de expresarlo. Un espacio para explorar, liberar y transformar aquello que necesita ser escuchado a través del movimiento."
          buttonLabel="Quiero explorar este camino"
          to="/servicios/movimiento-consciente"
        />
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="whatsapp" size="lg" whatsappMessage="Hola! ¿Qué necesitás hoy? Hablemos.">
          ¿Qué necesitás hoy? Hablemos.
        </Button>
      </div>
    </Section>
  )
}
