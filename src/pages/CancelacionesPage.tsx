import LegalLayout from '../components/LegalLayout'
import Seo from '../components/Seo'
import { WHATSAPP_URL } from '../lib/constants'
import { trackWhatsAppConversion } from '../lib/gtag'

// Plazo genérico de 24hs: ajustable según lo defina el cliente.
export default function CancelacionesPage() {
  return (
    <>
      <Seo
        title="Política de Cancelación"
        description="Conocé las condiciones para cancelar o reprogramar tus sesiones con Regresa a Ti."
      />
      <LegalLayout title="Política de Cancelación">
      <p>
        Para que podamos organizar la agenda y ofrecer una buena disponibilidad a todas las
        personas que acompañamos, te pedimos tener en cuenta la siguiente política de
        cancelación y reprogramación de sesiones.
      </p>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Plazo para cancelar o reprogramar</h2>
        <p className="mt-3">
          Podés cancelar o reprogramar tu sesión sin cargo escribiéndonos por WhatsApp con al
          menos 24 horas de anticipación al horario agendado.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Cancelaciones fuera de plazo</h2>
        <p className="mt-3">
          Las cancelaciones o inasistencias que se comuniquen con menos de 24 horas de
          anticipación, o la falta de asistencia sin previo aviso, podrán considerarse como
          sesión tomada.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Situaciones excepcionales</h2>
        <p className="mt-3">
          Entendemos que pueden surgir imprevistos. Ante una emergencia o situación
          excepcional, escribinos y evaluamos juntas/os cómo reorganizar tu sesión.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Cómo cancelar o reprogramar</h2>
        <p className="mt-3">
          Escribinos por{' '}
          <a
            href={WHATSAPP_URL('Hola! Necesito cancelar o reprogramar mi sesión.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppConversion}
            className="text-purple underline"
          >
            WhatsApp
          </a>{' '}
          apenas sepas que no vas a poder asistir, para coordinar juntas/os un nuevo horario.
        </p>
      </div>
      </LegalLayout>
    </>
  )
}
