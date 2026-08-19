import LegalLayout from '../components/LegalLayout'
import Seo from '../components/Seo'
import { EMAIL } from '../lib/constants'

export default function TerminosPage() {
  return (
    <>
      <Seo
        title="Términos y Condiciones"
        description="Términos y condiciones de uso de los servicios de acompañamiento de Regresa a Ti."
      />
      <LegalLayout title="Términos y Condiciones">
      <p>
        Al navegar este sitio o coordinar una sesión con Regresa a Ti, aceptás los siguientes
        términos y condiciones. Te pedimos que los leas con atención.
      </p>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Naturaleza de los servicios</h2>
        <p className="mt-3">
          Regresa a Ti ofrece sesiones online individuales de Terapia Integral y Movimiento
          Consciente, orientadas al autoconocimiento y al acompañamiento personal.
        </p>
        <p className="mt-3 rounded-xl bg-white p-5 font-medium text-plum">
          Los servicios ofrecidos por Regresa a Ti (terapias integrales, movimiento
          consciente) son de acompañamiento y desarrollo personal, y no constituyen
          tratamiento médico ni psicológico ni reemplazan la atención de un profesional de la
          salud. Ante síntomas de salud física o mental, consultá a un profesional médico
          matriculado.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Uso del sitio</h2>
        <p className="mt-3">
          El contenido de este sitio es de carácter informativo y tiene como fin dar a
          conocer los servicios de Regresa a Ti. No está permitido reproducir, copiar o
          distribuir su contenido sin autorización previa.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Coordinación y pago de sesiones</h2>
        <p className="mt-3">
          Las sesiones se coordinan directamente por WhatsApp y se abonan según las
          modalidades de pago informadas al momento de agendar. Las condiciones de
          cancelación y reprogramación se detallan en nuestra Política de Cancelación.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Responsabilidad</h2>
        <p className="mt-3">
          El proceso y sus resultados dependen del compromiso activo de cada persona. Regresa
          a Ti se compromete a brindar un espacio de acompañamiento profesional, pero no
          garantiza resultados específicos, ya que cada proceso es individual.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Modificaciones</h2>
        <p className="mt-3">
          Estos términos pueden actualizarse en cualquier momento. Te recomendamos revisarlos
          periódicamente.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Contacto</h2>
        <p className="mt-3">
          Ante cualquier consulta sobre estos términos, podés escribirnos a{' '}
          <a href={`mailto:${EMAIL}`} className="text-purple underline">
            {EMAIL}
          </a>
          .
        </p>
      </div>
      </LegalLayout>
    </>
  )
}
