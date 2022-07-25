import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { resolve } from "path";
import Markdown from 'vite-plugin-md';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
      "~": resolve(__dirname, "../packages")
    }
  },
})
