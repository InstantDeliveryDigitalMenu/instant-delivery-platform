import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/

/// <reference types="vite-plugin-svgr/client" />

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg" // This ensures all .svg files are processed
    })
  ],
  server: {
    port: 3000
  }
});
