import type { MouseEvent } from 'react'

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

// Se llama en el onClick de los botones de WhatsApp, antes de que el navegador
// siga el link (el link abre en pestaña nueva vía target="_blank", así que no
// hace falta prevenir la navegación). El tracking de conversión se hace en GTM
// (ver index.html): armar ahí un trigger de evento personalizado "whatsapp_click"
// y colgarle la tag de conversión de Google Ads correspondiente.
export function trackWhatsAppConversion(event: MouseEvent<HTMLAnchorElement>) {
  const link = event.currentTarget
  const linkText =
    link.textContent?.replace(/\s+/g, ' ').trim() || link.getAttribute('aria-label') || ''

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'whatsapp_click',
    link_url: link.href,
    link_text: linkText,
    cta_id: link.getAttribute('data-cta'),
  })
}

export {}
