import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '../lib/constants'

// Placeholder de imagen para Open Graph/Twitter Card: reemplazar por una imagen
// de 1200x630 pensada para compartir en redes cuando el cliente la entregue.
// Vive en /public (no en /src/assets) para tener una URL estable sin hash de
// build — el fallback estático en index.html apunta a esta misma ruta, así
// los bots que no ejecutan JS (Meta/WhatsApp/Twitter) ven la misma imagen.
const defaultOgImage = '/og-image.jpg'

const SITE_NAME = 'Regresa a Ti'

type SeoProps = {
  title: string
  description: string
  image?: string
  /** Para páginas que no deben indexarse (ej. 404). Por defecto se indexan. */
  noindex?: boolean
}

export default function Seo({ title, description, image = defaultOgImage, noindex = false }: SeoProps) {
  const { pathname } = useLocation()
  const fullTitle = `${SITE_NAME} | ${title}`
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
  const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:locale" content="es_AR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
    </Helmet>
  )
}
