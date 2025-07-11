import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [sveltekit()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTest.js"],
  },
  resolve: {
    conditions: mode === "test" ? ["browser"] : [],
  },
  server: {
    allowedHosts: true,
  },
}));
