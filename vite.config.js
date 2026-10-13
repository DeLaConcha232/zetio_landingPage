import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { existsSync } from 'node:fs'
import { extname, join } from 'node:path'

// Rutas que sigue atendiendo la app de React. La home y /como-funciona son HTML estático en public/.
const APP_ROUTES = ['/links', '/shop', '/privacy', '/terms', '/privacyclubs', '/termsclubs']

// En desarrollo y en `vite preview` imita lo que hace public/_redirects en Netlify.
function appRoutes() {
  const rewrite = (req, _res, next) => {
    const [path, query = ''] = (req.url || '').split('?')
    const clean = path.replace(/\/$/, '')
    if (APP_ROUTES.includes(clean)) req.url = '/app.html'
    // páginas estáticas con URL limpia: / y /como-funciona/...
    else if (!extname(path) && existsSync(join('public', clean, 'index.html'))) {
      req.url = `${clean}/index.html${query ? `?${query}` : ''}`
    }
    next()
  }
  return {
    name: 'zetio-app-routes',
    configureServer(server) { server.middlewares.use(rewrite) },
    configurePreviewServer(server) { server.middlewares.use(rewrite) },
  }
}

export default defineConfig({
  appType: 'mpa',
  plugins: [appRoutes(), react(), tailwindcss()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    cssMinify: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: 'app.html',
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'motion': ['motion/react'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
})
