import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Make sure base is set correctly, if needed
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
});
