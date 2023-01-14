import { defineConfig } from "vite";
import vitePluginHtmlEnv from "vite-plugin-html-env";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginHtmlEnv()],
});
