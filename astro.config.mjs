// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ogisetiawan.my.id',
  integrations: [
    sitemap(),
  ],
  // Astro Fonts API (stable in Astro 7; formerly experimental.fonts)
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
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
