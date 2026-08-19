import Section from '../Section'
import Button from '../Button'

// Placeholder: el cliente reemplaza foto-1.jpg por la foto definitiva.
// Al reemplazarla, actualizar también width/height de abajo con las
// dimensiones reales de la nueva imagen (ayuda a evitar layout shift).
import fotoGuadalupe from '../../assets/images/quien-soy/foto-1.jpg'

export default function AboutPreview() {
  return (
    <Section background="cream">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          <h2 className="font-serif text-4xl text-plum md:text-5xl">Guadalupe Zulatto</h2>
          <p className="font-sans text-lg text-plum/80 md:text-xl">
            Soy terapeuta holística, mamá e instructora de movimiento. Siempre sentí que
            escuchar profundamente a los demás era una de mis formas más genuinas de estar
            presente. Con los años, esa sensibilidad se convirtió en una manera de acompañar:
            observar, escuchar lo que se dice y también aquello que a veces queda escondido
            detrás de las palabras.
          </p>
          <Button to="/quien-soy">Conoceme un poco más</Button>
        </div>

        <img
          src={fotoGuadalupe}
          alt="Guadalupe Zulatto"
          width={50}
          height={50}
          loading="lazy"
          className="h-80 w-80 shrink-0 rounded-full object-cover md:h-96 md:w-96"
        />
      </div>
    </Section>
  )
}
