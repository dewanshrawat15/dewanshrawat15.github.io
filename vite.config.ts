import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Start of Selection
export default defineConfig({
  plugins: [
    react({
      include:
        process.env.NODE_ENV === "development"
          ? /\.(js|jsx|ts|tsx)$/
          : undefined,
    }),
  ],
  build: {
    // Enable minification for a smaller bundle size
    minify: "esbuild",
    // Set the target to modern browsers for better optimization
    target: "esnext",
    // Configure chunking to reduce the size of the main bundle
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
