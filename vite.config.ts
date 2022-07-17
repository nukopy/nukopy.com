import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === "serve") {
    return {
      base: "/",
      resolve: {
        alias: {
          "@/": `${__dirname}/src/`,
        },
      },
      mode: mode,
      plugins: [react()],
    };
  } else if (command === "build") {
    // FIXME: あとで変える
    return {
      base: "/",
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
