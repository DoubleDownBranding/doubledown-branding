import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://doubledownbranding.netlify.app',
  integrations: [netlify()],
});
