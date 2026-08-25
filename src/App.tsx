import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import CookieBanner from './components/CookieBanner'
import SiteSchema from './components/SiteSchema'

// Code-splitting por ruta: cada página se descarga recién cuando se visita,
// para mantener liviano el bundle inicial.
const Home = lazy(() => import('./pages/Home'))
const QuienSoy = lazy(() => import('./pages/QuienSoy'))
const TerapiasIntegrales = lazy(() => import('./pages/TerapiasIntegrales'))
const MovimientoConsciente = lazy(() => import('./pages/MovimientoConsciente'))
const MisionVision = lazy(() => import('./pages/MisionVision'))
const FAQ = lazy(() => import('./pages/FAQ'))
const PrivacidadPage = lazy(() => import('./pages/PrivacidadPage'))
const TerminosPage = lazy(() => import('./pages/TerminosPage'))
const CancelacionesPage = lazy(() => import('./pages/CancelacionesPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollRestoration() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <SiteSchema />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-cream" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quien-soy" element={<QuienSoy />} />
          <Route path="/servicios/terapias-integrales" element={<TerapiasIntegrales />} />
          <Route path="/servicios/movimiento-consciente" element={<MovimientoConsciente />} />
          <Route path="/mision-y-vision" element={<MisionVision />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacidad" element={<PrivacidadPage />} />
          <Route path="/terminos" element={<TerminosPage />} />
          <Route path="/cancelaciones" element={<CancelacionesPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <WhatsAppFloat />
      <CookieBanner />
      <Footer />
    </BrowserRouter>
  )
}

export default App
