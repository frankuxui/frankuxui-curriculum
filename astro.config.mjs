// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  site: 'https://frankuxui.github.io/frankuxui-curriculum',
  base: '/frankuxui-curriculum',
  vite: {
    plugins: [tailwindcss()]
  }
});