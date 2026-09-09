// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://manuelDk8s.github.io',
  base: '/webimportcontrol',
  integrations: [sitemap()],
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
