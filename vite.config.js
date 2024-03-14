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
    rollupOptions: {
      // Adjust chunk size thresholds
      output: {
        // Set the minimum chunk size (in bytes) before splitting
        minChunkSize: 20000, // Example: split chunks larger than 20kb
        // Set the maximum chunk size (in bytes) before splitting
        manualChunks(id) {
          // This function allows you to manually specify chunks
          if (id.includes("node_modules")) {
            return "vendor"; // Put node_modules in a separate chunk
          }
        },
      },
    },
  },
});
