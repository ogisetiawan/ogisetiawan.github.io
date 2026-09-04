// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ogisetiawan.my.id',
  integrations: [
    sitemap(),
  ],
  build: {
    // Inline CSS straight into the HTML <style> to remove the render-blocking
    // stylesheet request from the critical network path. This is a small static
    // site (2 pages, ~10KB gzip CSS) so inlining everything is a net win.
    // Use 'auto' instead if the CSS grows large (only inlines chunks < 4KB).
    inlineStylesheets: 'always',
  },
  image: {
    // Local assets via <Image>/<Picture> → WebP by default (Sharp)
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Keep transparency when converting PNG → WebP
        limitInputPixels: false,
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
