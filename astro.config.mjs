// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://github.io',
  base: '/Fypro_AI',
  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
  },
});