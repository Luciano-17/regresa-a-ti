import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '../lib/constants'

// Placeholder de imagen para Open Graph/Twitter Card: reemplazar por una imagen
// de 1200x630 pensada para compartir en redes cuando el cliente la entregue.
// Vive en /public (no en /src/assets) para tener una URL estable sin hash de
// build — el HTML prerenderizado apunta a esta misma ruta, así los bots que no
// ejecutan JS (Meta/WhatsApp/Twitter) ven la misma imagen.
const defaultOgImage = '/og-image.jpg'

const SITE_NAME = 'Regresa a Ti'

type SeoProps = {
  title: string
  description: string
  image?: string
  /** Para páginas que no deben indexarse (ej. 404). Por defecto se indexan. */
  noindex?: boolean
}

// El HTML prerenderizado ya trae estos tags con el valor de la ruta. Se
// sobrescriben en el lugar (nunca se quitan) para que el <title> no quede
// vacío en ningún momento, lo que haría que analytics lea un título vacío.
function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (href === null) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ title, description, image = defaultOgImage, noindex = false }: SeoProps) {
  const { pathname } = useLocation()
  const fullTitle = `${SITE_NAME} | ${title}`
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
  const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  useLayoutEffect(() => {
    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    // Las páginas noindex (404) no declaran canonical, así no se leen como duplicado de otra URL.
    setCanonical(noindex ? null : canonicalUrl)

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', absoluteImage)
    setMeta('property', 'og:locale', 'es_AR')
    if (noindex) {
      document.head.querySelector('meta[property="og:url"]')?.remove()
    } else {
      setMeta('property', 'og:url', canonicalUrl)
    }

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', absoluteImage)
  }, [fullTitle, description, noindex, canonicalUrl, absoluteImage])

  return null
}
