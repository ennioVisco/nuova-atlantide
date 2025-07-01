import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  base: '/nuova-atlantide/',
  // used to generate images
  site:
    process.env.LOCAL_DEV === 'true'
      ? 'https://localhost:3000/'
      : 'https://enniovisco.github.io/nuova-atlantide/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
