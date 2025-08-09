// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://safwanyp.com',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap(), tailwind()],

  server: {
    port: 3000,
    host: true
  },

  env: {
    schema: {
      CONTENT_API_KEY: envField.string({
        context: 'client',
        access: 'public',
        optional: false
      }),
      KOMMENTAR_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: false
      }),
      KOMMENTAR_API_SECRET: envField.string({
        context: 'server',
        access: 'secret',
        optional: false
      })
    }
  },

  adapter: node({
    mode: 'standalone'
  })
});
