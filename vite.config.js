import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  // vite.config.js
  // vite.config.js

  build: {
    // Adjust chunk size thresholds
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 500_000,
      },
    },
  },
});
