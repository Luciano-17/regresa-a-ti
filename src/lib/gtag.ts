declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// TODO cliente: reemplazar por la etiqueta de conversión real de Google Ads
// (Google Ads → Conversiones → tu acción de conversión → "Fragmento de evento"),
// con el formato "AW-XXXXXXXXX/XXXXXXXXXXXXXXXXXXXX". Ver también index.html,
// donde se pega el ID de Google tag (gtag.js) que carga la librería `gtag`.
const WHATSAPP_CONVERSION_LABEL = 'AW-XXXXXXXXX/REEMPLAZAR_CON_LABEL_DE_CONVERSION'

// Se llama en el onClick de los botones de WhatsApp, antes de que el navegador
// siga el link (el link abre en pestaña nueva vía target="_blank", así que no
// hace falta prevenir la navegación). No hace nada hasta que gtag.js esté
// cargado (ver index.html) — es seguro dejarlo activo desde ya.
export function trackWhatsAppConversion() {
  window.gtag?.('event', 'conversion', { send_to: WHATSAPP_CONVERSION_LABEL })
}

export {}
