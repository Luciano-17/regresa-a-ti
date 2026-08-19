import { Helmet } from 'react-helmet-async'

// Placeholder de imagen para Open Graph/Twitter Card: reemplazar por una imagen
// de 1200x630 pensada para compartir en redes cuando el cliente la entregue.
// Idealmente esta ruta debería ser una URL absoluta (https://dominio/...) una vez
// publicado el sitio, ya que muchas plataformas no resuelven bien rutas relativas.
import defaultOgImage from '../assets/images/hero/slide-1.jpg'

const SITE_NAME = 'Regresa a Ti'

type SeoProps = {
  title: string
  description: string
  image?: string
}

export default function Seo({ title, description, image = defaultOgImage }: SeoProps) {
  const fullTitle = `${SITE_NAME} | ${title}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_AR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
