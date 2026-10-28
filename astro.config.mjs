// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fuente ÚNICA de URLs absolutas: canonical, hreflang, sitemap, Open Graph,
// JSON-LD, robots.txt y llms.txt salen de `site` + `base`.
// Producción: GitHub Pages con dominio propio (public/CNAME), servido en la raíz.
// Se pueden sobrescribir con las variables de entorno SITE / BASE
// (p. ej. BASE=/repo para probar en https://usuario.github.io/repo).
const SITE = process.env.SITE || 'https://hikuikoe.dgdev.cl';
const BASE = process.env.BASE || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !/\.txt\/?$/.test(page),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
    }),
  ],
});
