// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ogisetiawan.github.io',
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
