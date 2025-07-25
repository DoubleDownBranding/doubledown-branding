import { defineConfig } from 'astro/config';
import content from '@astrojs/content';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://doubledownbranding.netlify.app',
  integrations: [content(), netlify()],
});
