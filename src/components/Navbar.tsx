import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/logo/logo-lockup.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isMobileServiciosOpen, setIsMobileServiciosOpen] = useState(false)
  const [isDesktopServiciosOpen, setIsDesktopServiciosOpen] = useState(false)
  const desktopServiciosRef = useRef<HTMLLIElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsDrawerOpen(false)
        setIsMobileServiciosOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!isDesktopServiciosOpen) return
    const onClickOutside = (event: MouseEvent) => {
      if (!desktopServiciosRef.current?.contains(event.target as Node)) {
        setIsDesktopServiciosOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [isDesktopServiciosOpen])

  const closeAll = () => {
    setIsDrawerOpen(false)
    setIsMobileServiciosOpen(false)
    setIsDesktopServiciosOpen(false)
  }

  const handleContactoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#contacto')
    }
    closeAll()
  }

  const navLinkClasses = 'font-sans text-lg text-plum transition-colors duration-200 hover:text-purple'

  return (
    <nav
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        isScrolled ? 'bg-cream shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        <Link to="/" onClick={closeAll} className="flex items-center">
          <img
            src={logo}
            alt="Regresa a Ti"
            width={1072}
            height={504}
            loading="eager"
            className="h-10 w-auto md:h-16"
          />
        </Link>

        {/* Menú horizontal — tablet y desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link to="/quien-soy" className={navLinkClasses}>
              Quién soy
            </Link>
          </li>

          <li ref={desktopServiciosRef} className="relative">
            <button
              onClick={() => setIsDesktopServiciosOpen((prev) => !prev)}
              aria-expanded={isDesktopServiciosOpen}
              className={`flex items-center gap-1.5 ${navLinkClasses}`}
            >
              Servicios
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`h-3 w-3 transition-transform duration-200 ${
                  isDesktopServiciosOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {isDesktopServiciosOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-cream py-2 shadow-lg"
                >
                  <li>
                    <Link
                      to="/servicios/terapias-integrales"
                      onClick={closeAll}
                      className="block px-4 py-2 font-sans text-lg text-plum hover:bg-mauveLight/30"
                    >
                      Terapias integrales
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/movimiento-consciente"
                      onClick={closeAll}
                      className="block px-4 py-2 font-sans text-lg text-plum hover:bg-mauveLight/30"
                    >
                      Movimiento consciente
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link to="/mision-y-vision" className={navLinkClasses}>
              Misión y Visión
            </Link>
          </li>

          <li>
            <a href="/#contacto" onClick={handleContactoClick} className={navLinkClasses}>
              Contacto
            </a>
          </li>
        </ul>

        {/* Hamburguesa — solo mobile */}
        <button
          onClick={() => setIsDrawerOpen((prev) => !prev)}
          aria-label={isDrawerOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isDrawerOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-plum md:hidden"
        >
          <FontAwesomeIcon icon={isDrawerOpen ? faXmark : faBars} className="h-5 w-5" />
        </button>
      </div>

      {/* Drawer — solo mobile */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeAll}
              className="fixed inset-0 z-30 bg-plum/40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed right-0 top-0 z-40 h-full w-72 bg-cream px-6 py-6 shadow-xl md:hidden"
            >
              <div className="mb-8 flex justify-end">
                <button
                  onClick={closeAll}
                  aria-label="Cerrar menú"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-plum"
                >
                  <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-2 font-sans text-plum">
                <li>
                  <Link to="/quien-soy" onClick={closeAll} className="block py-3 text-xl">
                    Quién soy
                  </Link>
                </li>

                <li>
                  <button
                    onClick={() => setIsMobileServiciosOpen((prev) => !prev)}
                    aria-expanded={isMobileServiciosOpen}
                    className="flex w-full items-center justify-between py-3 text-left text-xl"
                  >
                    Servicios
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        isMobileServiciosOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isMobileServiciosOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-4"
                      >
                        <li>
                          <Link
                            to="/servicios/terapias-integrales"
                            onClick={closeAll}
                            className="block py-2 text-lg text-mauve"
                          >
                            Terapias integrales
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/servicios/movimiento-consciente"
                            onClick={closeAll}
                            className="block py-2 text-lg text-mauve"
                          >
                            Movimiento consciente
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link to="/mision-y-vision" onClick={closeAll} className="block py-3 text-xl">
                    Misión y Visión
                  </Link>
                </li>

                <li>
                  <a href="/#contacto" onClick={handleContactoClick} className="block py-3 text-xl">
                    Contacto
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
