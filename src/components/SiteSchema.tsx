import { Helmet } from 'react-helmet-async'
import { SITE_URL, WHATSAPP_NUMBER, INSTAGRAM_URL, EMAIL } from '../lib/constants'

// Datos estructurados (schema.org) del negocio, presentes en todas las páginas.
// Ayudan a que Google entienda de qué trata el sitio (útil para Search Console
// y para eventuales resultados enriquecidos), no afectan lo que ve el usuario.
export default function SiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Regresa a Ti',
    url: SITE_URL,
    image: `${SITE_URL}/favicon.ico`,
    description:
      'Sesiones online individuales de terapia integral y movimiento consciente con Guadalupe Zulatto, para volver a escucharte y conocerte.',
    telephone: `+${WHATSAPP_NUMBER}`,
    email: EMAIL,
    sameAs: [INSTAGRAM_URL],
    areaServed: 'Online',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Córdoba',
      addressCountry: 'AR',
    },
    founder: {
      '@type': 'Person',
      name: 'Guadalupe Zulatto',
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
