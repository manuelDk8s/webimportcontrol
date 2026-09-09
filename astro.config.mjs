// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://importcontrol-demo.pages.dev',
  integrations: [sitemap()],
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
