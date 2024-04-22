import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({

  
  plugins: [react()],
  base: "/Stock-cloud-app/stocks-frontend",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/stock": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
