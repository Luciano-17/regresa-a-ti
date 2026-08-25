export const SITE_URL = 'https://regresaati.com.ar'

export const WHATSAPP_NUMBER = '5493515917235'

export const WHATSAPP_URL = (mensaje?: string): string => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base
}

export const INSTAGRAM_URL = 'https://www.instagram.com/regresaati.terapia'

export const EMAIL = 'regresaatiterapia@gmail.com'

export const COLORS = {
  cream: '#F2DFEA',
  plum: '#59254B',
  mauve: '#A6809C',
  mauveLight: '#BFA3B8',
  purple: '#733D6F',
} as const
