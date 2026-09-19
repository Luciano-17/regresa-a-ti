// Fuente única del SEO por ruta: la usan <Seo> en cada página (cliente) y el
// plugin de vite.config.ts, que genera el HTML estático de cada ruta en el build.
// No importar nada acá: el archivo también lo carga el config de Vite en Node.
export const SEO_ROUTES = {
  '/': {
    title: 'Terapias integrales y movimiento consciente online',
    description:
      'Sesiones online individuales de terapia integral y movimiento consciente con Guadalupe Zulatto, para volver a escucharte y conocerte.',
  },
  '/quien-soy': {
    title: 'Quién soy',
    description:
      'Conocé a Guadalupe Zulatto, terapeuta holística e instructora de movimiento detrás de Regresa a Ti.',
  },
  '/mision-y-vision': {
    title: 'Misión y visión',
    description:
      'Conocé la misión y la visión detrás de Regresa a Ti: un espacio para acompañarte a volver a vos.',
  },
  '/servicios/terapias-integrales': {
    title: 'Terapias integrales',
    description:
      'Sesiones de terapia integral que combinan biodescodificación, coaching de vida, constelaciones familiares y registros akáshicos, según tu propio proceso.',
  },
  '/servicios/movimiento-consciente': {
    title: 'Movimiento consciente',
    description:
      'Un espacio para escuchar y expresar a través del cuerpo lo que las palabras todavía no pueden nombrar.',
  },
  '/faq': {
    title: 'Preguntas frecuentes',
    description:
      'Resolvé tus dudas sobre cómo funcionan las sesiones, los pagos y el proceso de acompañamiento en Regresa a Ti.',
  },
  '/privacidad': {
    title: 'Política de Privacidad',
    description: 'Conocé cómo Regresa a Ti recolecta, usa y protege tus datos personales.',
  },
  '/terminos': {
    title: 'Términos y Condiciones',
    description:
      'Términos y condiciones de uso de los servicios de acompañamiento de Regresa a Ti.',
  },
  '/cancelaciones': {
    title: 'Política de Cancelación',
    description:
      'Conocé las condiciones para cancelar o reprogramar tus sesiones con Regresa a Ti.',
  },
} as const

export type SeoRoute = keyof typeof SEO_ROUTES
