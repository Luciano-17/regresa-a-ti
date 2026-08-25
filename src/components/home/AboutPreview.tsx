import Section from '../Section'
import Button from '../Button'

// Placeholder: el cliente reemplaza foto-1.jpg por la foto definitiva.
// Al reemplazarla, actualizar también width/height de abajo con las
// dimensiones reales de la nueva imagen (ayuda a evitar layout shift).
import fotoGuadalupe from '../../assets/images/quien-soy/home.jpg'

export default function AboutPreview() {
  return (
    <Section background="cream">
      <div className="about-grid text-center md:text-left">
        <h2 className="about-name font-serif text-3xl text-plum md:text-5xl">Guadalupe Zulatto</h2>

        <img
          src={fotoGuadalupe}
          alt="Guadalupe Zulatto"
          width={50}
          height={50}
          loading="lazy"
          className="about-photo h-80 w-80 shrink-0 rounded-full object-cover md:h-96 md:w-96"
        />

        <p className="about-text font-sans text-base text-plum/80 md:text-lg">
          Soy terapeuta holística, mamá e instructora de movimiento. Siempre sentí que
          escuchar profundamente a los demás era una de mis formas más genuinas de estar
          presente. Con los años, esa sensibilidad se convirtió en una manera de acompañar:
          observar, escuchar lo que se dice y también aquello que a veces queda escondido
          detrás de las palabras.
        </p>

        <Button to="/quien-soy" className="about-cta">
          Conoceme un poco más
        </Button>
      </div>
    </Section>
  )
}
