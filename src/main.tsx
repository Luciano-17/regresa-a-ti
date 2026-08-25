import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

// Saca el fallback estático de SEO de index.html (pensado para bots que no
// ejecutan JS, ver el comentario ahí) apenas React arranca, para que lo
// reemplace el <Seo> de cada página sin quedar duplicado en el <head>.
document.querySelectorAll('[data-static-fallback]').forEach((el) => el.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
