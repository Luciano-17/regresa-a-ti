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
export function trackWhatsAppConversion() {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'whatsapp_click' })
}

export {}
