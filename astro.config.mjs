import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bcmg-website.pages.dev',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
