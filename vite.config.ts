import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === "serve") {
    return {
      // base: "/src/",
      resolve: {
        alias: {
          "@/": `${__dirname}/src/`,
        },
      },
      mode: mode,
      plugins: [react()],
    };
  }

  throw new Error(`Unknown command: "${command}"`);
});
