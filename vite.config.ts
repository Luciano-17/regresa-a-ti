import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Quita los comentarios HTML del index.html solo en el build, así siguen en el
// código fuente pero no llegan al navegador.
function stripHtmlComments(): Plugin {
  return {
    name: 'strip-html-comments',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler: (html) => html.replace(/<!--[\s\S]*?-->\s*/g, ''),
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), stripHtmlComments()],
})
