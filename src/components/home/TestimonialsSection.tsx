import Section from '../Section'
import TestimonialCard from '../TestimonialCard'
import Button from '../Button'

const testimonials = [
  {
    headline: 'Me animé a tomar esa decisión que venía postergando.',
    quote:
      'Después de mucho tiempo sintiendo que no podía dar el paso, pude escucharme, tomar una decisión y empezar a construir una vida más acorde a lo que necesitaba.',
    name: 'Sofía, México',
  },
  {
    headline: 'Empecé a relacionarme con mis hijos desde otro lugar.',
    quote:
      'Trabajar en mí también transformó la manera en la que me vinculo con ellos. Hoy puedo escucharlos, acompañarlos y disfrutar nuestra relación de otra manera.',
    name: 'Mónica, Argentina',
  },
  {
    headline: 'Finalmente encontré algo que sentía profundamente mío.',
    quote:
      'Siempre sentí que necesitaba encontrar un propósito. Hoy dedico mi tiempo al cuidado de animales y encontré en ese camino una sensación de plenitud que antes no conocía.',
    name: 'Alejandra, Colombia',
  },
]

export default function TestimonialsSection() {
  return (
    <Section background="cream">
      <div className="text-center">
        <h2 className="font-serif text-4xl text-plum md:text-5xl">
          Lo que puede cambiar cuando volvés a vos
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-plum/80 md:text-xl">
          Cada proceso es diferente. Estas son algunas de las experiencias que otras personas
          decidieron compartir.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="whatsapp" size="lg" whatsappMessage="Hola! Quiero comenzar a escucharme.">
          Quiero comenzar a escucharme
        </Button>
      </div>
    </Section>
  )
}
