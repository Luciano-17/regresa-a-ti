import Section from '../Section'
import Button from '../Button'

// Placeholders: el cliente reemplaza mision.jpg y vision.jpg por las fotos definitivas.
// Al reemplazarlas, actualizar también width/height de abajo con las
// dimensiones reales de las nuevas imágenes (ayuda a evitar layout shift).
import misionImage from '../../assets/images/mision-vision/mision.jpg'
import visionImage from '../../assets/images/mision-vision/vision.jpg'

const columns = [
  {
    image: misionImage,
    alt: 'Misión de Regresa a Ti',
    eyebrow: 'Mi misión',
    title: 'Acompañarte a recuperar tu poder personal',
    text: 'Crear un espacio donde puedas parar, escucharte, conocerte y encontrar nuevas formas de habitar tu vida. A través de la terapia, el movimiento y la consciencia, acompañarte a descubrir tus propios recursos y volver a elegir desde vos.',
  },
  {
    image: visionImage,
    alt: 'Visión de Regresa a Ti',
    eyebrow: 'Mi visión',
    title: 'Que volver a vos se convierta en una forma de vivir.',
    text: 'Que cada persona pueda conocerse lo suficiente para atravesar sus desafíos con más consciencia, libertad y herramientas, entendiendo que el proceso no tiene un punto final: siempre podemos volver a nosotros.',
  },
]

export default function MissionVisionPreview() {
  return (
    <Section background="plum">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {columns.map((column) => (
          <div key={column.eyebrow} className="flex flex-col items-center gap-5 text-center">
            <img
              src={column.image}
              alt={column.alt}
              width={50}
              height={50}
              loading="lazy"
              className="h-72 w-full rounded-2xl object-cover md:h-80"
            />
            <span className="font-sans text-base font-semibold uppercase tracking-widest text-mauveLight">
              {column.eyebrow}
            </span>
            <h3 className="font-serif text-2xl text-cream md:text-4xl">{column.title}</h3>
            <p className="font-sans text-base text-cream/80">{column.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Button to="/mision-y-vision" size="lg" className="uppercase tracking-wide">
          Conocé la historia detrás de Regresa a Ti
        </Button>
      </div>
    </Section>
  )
}
