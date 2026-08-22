import Section from '../Section'
import Button from '../Button'

export default function FinalCta() {
  return (
    <Section background="cream">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-serif text-3xl text-plum md:text-5xl">
          Quizás sea momento de hacerte un poquito de lugar.
        </h2>
        <p className="max-w-xl font-sans text-base text-plum/80 md:text-lg">
          Para escuchar qué te pasa, descubrir qué necesitás y ver qué querés hacer con todo
          eso.
        </p>
        <Button
          variant="whatsapp"
          size="lg"
          whatsappMessage="Hola! Hablemos."
          className="uppercase tracking-wide"
        >
          Hablemos
        </Button>
      </div>
    </Section>
  )
}
