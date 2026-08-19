import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from '../lib/constants'
import logo from '../assets/logo/logo-lockup.png'

const legalLinks = [
  { label: 'Preguntas frecuentes', to: '/faq' },
  { label: 'Política de Privacidad', to: '/privacidad' },
  { label: 'Términos y Condiciones', to: '/terminos' },
  { label: 'Política de Cancelación', to: '/cancelaciones' },
]

export default function Footer() {
  return (
    <footer id="contacto" className="bg-plum text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:justify-between md:px-10">
        <div className="flex flex-col gap-3 md:max-w-xs">
          <img
            src={logo}
            alt="Regresa a Ti"
            width={1072}
            height={504}
            loading="lazy"
            className="h-14 w-auto self-start brightness-0 invert md:h-16"
          />
          <p className="font-sans text-base text-cream/80">
            Porque también merecés ser parte de la vida que estás construyendo.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 self-center font-sans text-base md:self-auto">
          <a
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 shrink-0" />
            351 591-7235
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-4 w-4 shrink-0" />
            @regresaati.terapia
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:underline">
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 shrink-0" />
            {EMAIL}
          </a>
          <span className="flex items-center gap-2 text-cream/80">
            <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4 shrink-0" />
            Córdoba, Argentina al mundo online.
          </span>
        </div>

        <div className="flex flex-col items-start gap-3 font-sans text-base md:items-end">
          {legalLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-cream/20 py-4 text-center font-sans text-sm text-cream/60">
        &copy; {new Date().getFullYear()} Regresa a Ti |{' '}

        <p className="inline-flex items-center">
          Desarrollado por
          <a href="https://onai.com.ar/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:opacity-80 transition-opacity">
            <img src="src/assets/onai-logo.svg" alt="Onai" className="w-16" />
          </a>
        </p>
      </div>
    </footer>
  )
}
