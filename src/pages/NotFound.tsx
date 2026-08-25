import Section from '../components/Section'
import Button from '../components/Button'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Página no encontrada"
        description="La página que buscás no existe o fue movida. Volvé al inicio o escribinos si necesitás ayuda."
        noindex
      />

      <Section background="cream">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="font-serif text-2xl text-purple md:text-3xl">404</span>
          <h1 className="font-serif text-4xl text-plum md:text-6xl">
            Esta página no existe
          </h1>
          <p className="font-sans text-base leading-relaxed text-plum/80 md:text-lg">
            La página que estás buscando no fue encontrada. Puede que el enlace esté roto
            o que la dirección haya cambiado.
          </p>

          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
            <Button to="/">Ir al inicio</Button>
            <Button to="/#contacto">Hablemos</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
