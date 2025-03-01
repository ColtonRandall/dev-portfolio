import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/colton-website-react",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
