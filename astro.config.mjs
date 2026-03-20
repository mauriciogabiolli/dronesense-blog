import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dronesense.com.br',
  base: '/blog',
  integrations: [mdx(), sitemap()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
