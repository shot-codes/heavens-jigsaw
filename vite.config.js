import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default {
  plugins: [svelte()],
  ssr: {
    noExternal: ['three']
  }
}
