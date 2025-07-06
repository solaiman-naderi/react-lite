import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "public",
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "packages/react-core/src"),
      "@dom": path.resolve(__dirname, "packages/react-dom-lite/src"),
      "@examples": path.resolve(__dirname, "examples"),
    },
  },
  server: {
    port: 3000,
    fs: {
      allow: [
        path.resolve(__dirname, "public"),
        path.resolve(__dirname, "examples"),
      ],
    },
  },
});
