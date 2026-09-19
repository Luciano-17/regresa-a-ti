import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { NOT_FOUND_SEO, SEO_ROUTES } from './src/lib/seo-routes.ts'
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

const fail = (label: string): never => {
  throw new Error(`[prerender-seo] No se encontró ${label} en index.html`)
}

const metaTag = (attr: 'name' | 'property', key: string) =>
  new RegExp(`(<meta\\s+data-static-fallback="true"\\s+${attr}="${key}"\\s+content=")[^"]*(")`)

function setMeta(html: string, attr: 'name' | 'property', key: string, value: string) {
  const pattern = metaTag(attr, key)
  if (!pattern.test(html)) fail(`${key}`)
  return html.replace(pattern, (_m, open: string, close: string) => `${open}${value}${close}`)
}

type PageSeo = { title: string; description: string; url: string | null }

// Reescribe los tags marcados con data-static-fallback. Con url === null es
// una página noindex (404): sin canonical ni og:url, robots "noindex, follow".
function applySeo(template: string, { title, description, url }: PageSeo) {
  const fullTitle = escapeAttr(`Regresa a Ti | ${title}`)
  const desc = escapeAttr(description)

  let html = template
  const titlePattern = /<title data-static-fallback="true">[^<]*<\/title>/
  if (!titlePattern.test(html)) fail('el <title>')
  html = html.replace(titlePattern, () => `<title data-static-fallback="true">${fullTitle}</title>`)

  html = setMeta(html, 'name', 'description', desc)
  html = setMeta(html, 'name', 'robots', url === null ? 'noindex, follow' : 'index, follow')
  html = setMeta(html, 'property', 'og:title', fullTitle)
  html = setMeta(html, 'property', 'og:description', desc)
  html = setMeta(html, 'name', 'twitter:title', fullTitle)
  html = setMeta(html, 'name', 'twitter:description', desc)

  const canonicalPattern = /<link\s+data-static-fallback="true"\s+rel="canonical"[^>]*>\s*/
  const ogUrlPattern = /<meta\s+data-static-fallback="true"\s+property="og:url"[^>]*>\s*/
  if (!canonicalPattern.test(html)) fail('el canonical')
  if (!ogUrlPattern.test(html)) fail('og:url')
  if (url === null) {
    html = html.replace(canonicalPattern, () => '').replace(ogUrlPattern, () => '')
  } else {
    html = html.replace(
      canonicalPattern,
      () => `<link data-static-fallback="true" rel="canonical" href="${url}" />`,
    )
    html = setMeta(html, 'property', 'og:url', url)
  }
  return html
}

// Genera, después del build, el HTML de cada ruta con title, description,
// canonical y Open Graph/Twitter correctos ya en el HTML inicial (sin depender
// de JS), y un 404.html sin canonical para las rutas inexistentes.
//   "/"            -> dist/index.html
//   "/quien-soy"   -> dist/_prerender/quien-soy.html
//   404            -> dist/404.html (ErrorDocument de Apache, ver public/.htaccess)
// Van en _prerender/ para no crear carpetas públicas como /servicios.
function prerenderSeo(): Plugin {
  let outDir = ''
  const write = (file: string, html: string) => {
    const target = resolve(outDir, file)
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, html)
  }
  return {
    name: 'prerender-seo',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf-8')

      for (const [route, seo] of Object.entries(SEO_ROUTES)) {
        const html = applySeo(template, { ...seo, url: `${SITE_URL}${route}` })
        write(route === '/' ? 'index.html' : `_prerender${route}.html`, html)
      }
      write('404.html', applySeo(template, { ...NOT_FOUND_SEO, url: null }))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), stripHtmlComments(), prerenderSeo()],
})
