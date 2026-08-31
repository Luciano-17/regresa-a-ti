declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const WHATSAPP_CONVERSION_LABEL = 'AW-11208585710/j-MqCPmS7oMZEO7j1eAp'

// Se llama en el onClick de los botones de WhatsApp, antes de que el navegador
// siga el link (el link abre en pestaña nueva vía target="_blank", así que no
// hace falta prevenir la navegación). No hace nada hasta que gtag.js esté
// cargado (ver index.html) — es seguro dejarlo activo desde ya.
export function trackWhatsAppConversion() {
  window.gtag?.('event', 'conversion', { send_to: WHATSAPP_CONVERSION_LABEL })
}

export {}
