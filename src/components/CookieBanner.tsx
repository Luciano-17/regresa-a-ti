import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const STORAGE_KEY = 'regresa-a-ti-cookies-aceptadas'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) !== 'true') {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm rounded-2xl bg-plum p-5 text-cream shadow-xl"
        >
          <p className="font-sans text-base leading-relaxed">
            Usamos cookies propias y de terceros para mejorar tu experiencia y mostrarte
            publicidad relevante. Podés conocer más en nuestra{' '}
            <Link to="/privacidad" className="underline hover:text-mauveLight">
              Política de Privacidad
            </Link>
            .
          </p>
          <button
            onClick={acceptCookies}
            className="mt-4 rounded-full bg-purple px-5 py-2 font-sans text-base text-cream transition-colors duration-200 hover:bg-mauve"
          >
            Aceptar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
