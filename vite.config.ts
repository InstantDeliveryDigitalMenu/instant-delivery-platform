import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/

/// <reference types="vite-plugin-svgr/client" />

export default defineConfig({
  plugins: [
    svgr({
      include: "**/*.svg?react"
    }),
    react()
  ],
  server: {
    port: 3000
  }
});
