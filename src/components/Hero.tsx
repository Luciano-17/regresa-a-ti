import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

// Placeholders: el cliente reemplaza slide-1.jpg y slide-2.jpg por las fotos definitivas del hero.
// Al reemplazarlas, actualizar también width/height de la etiqueta <img> de abajo
// con las dimensiones reales (ayuda a evitar layout shift).
import slide1Image from '../assets/images/hero/slide-1.jpg'
import slide2Image from '../assets/images/hero/slide-2.jpg'

// Si el cliente insiste en reemplazar este slider de fotos por un video de fondo:
// usar un <video> con autoPlay muted loop playsInline (nunca audio automático),
// un archivo comprimido (H.264/MP4, apuntar a un peso liviano — pensar en pocos
// segundos de loop) y un atributo poster con una imagen de fallback (idealmente
// una de estas mismas fotos) para que se vea algo antes de que cargue el video
// y en conexiones lentas donde tal vez no llegue a reproducirse.

type Slide = {
  image: string
  alt: string
  title: string
  text: string
  buttonLabel: string
  whatsappMessage: string
}

const slides: Slide[] = [
  {
    image: slide1Image,
    alt: 'Espacio de escucha y acompañamiento terapéutico',
    title: 'Vos hablá, yo te escucho...',
    text: 'Porque a veces, para volver a vos, primero necesitás hacer consciente todo aquello que durante tanto tiempo aprendiste a callar.',
    buttonLabel: 'Quiero empezar a escucharme',
    whatsappMessage: 'Hola! Quiero empezar a escucharme.',
  },
  {
    image: slide2Image,
    alt: 'Proceso de autoconocimiento y bienestar emocional',
    title: '¿Qué hay detrás de lo que te pasa?',
    text: 'Tus emociones, tus pensamientos, tus reacciones y hasta aquello que llamás autosabotaje pueden estar intentando mostrarte algo. Aprender a escucharlo es empezar a conocerte.',
    buttonLabel: 'Quiero conocerme',
    whatsappMessage: 'Hola! Quiero conocerme.',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const goTo = (next: number) => setIndex((next + slides.length) % slides.length)
  const slide = slides[index]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [index])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-plum">
      <AnimatePresence>
        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={50}
            height={50}
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-plum/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-16 text-center md:px-24">
        <h1 className="max-w-3xl font-serif text-4xl font-bold text-cream md:text-7xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-xl font-sans text-lg text-cream md:text-2xl">{slide.text}</p>
        <Button
          variant="whatsapp"
          size="lg"
          whatsappMessage={slide.whatsappMessage}
          className="mt-8"
        >
          {slide.buttonLabel}
        </Button>
      </div>

      <button
        onClick={() => goTo(index - 1)}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/20 text-cream backdrop-blur-sm transition-colors hover:bg-cream/30 md:left-8"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Siguiente slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/20 text-cream backdrop-blur-sm transition-colors hover:bg-cream/30 md:right-8"
      >
        <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
      </button>
    </section>
  )
}
