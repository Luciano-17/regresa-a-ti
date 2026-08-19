import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { WHATSAPP_URL } from '../lib/constants'
import { trackWhatsAppConversion } from '../lib/gtag'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL('Hola! Quiero más información sobre las terapias.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      onClick={trackWhatsAppConversion}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
      <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7" />
    </a>
  )
}
