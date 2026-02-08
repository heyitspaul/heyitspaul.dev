import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  // @ts-expect-error vitest 3.x augments vite config at runtime but bundles vite 6.x types
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
