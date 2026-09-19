import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { SEO_ROUTES } from './src/lib/seo-routes.ts'
import { SITE_URL } from './src/lib/constants.ts'

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

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function replaceOnce(html: string, pattern: RegExp, replacement: string, label: string) {
  if (!pattern.test(html)) {
    throw new Error(`[prerender-seo] No se encontró ${label} en index.html`)
  }
  return html.replace(pattern, () => replacement)
}

// Genera, después del build, un HTML por ruta con title, description, canonical
// y Open Graph/Twitter correctos ya en el HTML inicial (sin depender de JS).
// Reescribe los tags marcados con data-static-fallback de index.html; al
// arrancar, main.tsx los quita y <Seo> toma el control como siempre.
// Salida: dist/quien-soy.html, dist/servicios/terapias-integrales.html, etc.
// (.htaccess los sirve sin cambiar la URL). "/" queda en dist/index.html.
function prerenderSeo(): Plugin {
  let outDir = ''
  return {
    name: 'prerender-seo',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf-8')

      for (const [route, seo] of Object.entries(SEO_ROUTES)) {
        const title = escapeAttr(`Regresa a Ti | ${seo.title}`)
        const description = escapeAttr(seo.description)
        const url = `${SITE_URL}${route}`
        const tag = (attr: 'name' | 'property', key: string) =>
          new RegExp(`(<meta\\s+data-static-fallback="true"\\s+${attr}="${key}"\\s+content=")[^"]*(")`)

        let html = template
        html = replaceOnce(
          html,
          /<title data-static-fallback="true">[^<]*<\/title>/,
          `<title data-static-fallback="true">${title}</title>`,
          'el <title>',
        )
        html = replaceOnce(
          html,
          /<link\s+data-static-fallback="true"\s+rel="canonical"\s+href="[^"]*"/,
          `<link data-static-fallback="true" rel="canonical" href="${url}"`,
          'el canonical',
        )
        const metas: [RegExp, string, string][] = [
          [tag('name', 'description'), description, 'description'],
          [tag('property', 'og:url'), url, 'og:url'],
          [tag('property', 'og:title'), title, 'og:title'],
          [tag('property', 'og:description'), description, 'og:description'],
          [tag('name', 'twitter:title'), title, 'twitter:title'],
          [tag('name', 'twitter:description'), description, 'twitter:description'],
        ]
        for (const [pattern, value, label] of metas) {
          if (!pattern.test(html)) throw new Error(`[prerender-seo] No se encontró ${label} en index.html`)
          html = html.replace(pattern, (_m, open: string, close: string) => `${open}${value}${close}`)
        }

        const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
        const target = resolve(outDir, file)
        mkdirSync(dirname(target), { recursive: true })
        writeFileSync(target, html)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), stripHtmlComments(), prerenderSeo()],
})
