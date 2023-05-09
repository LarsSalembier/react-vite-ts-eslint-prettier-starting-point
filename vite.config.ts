import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), reactScopedCssPlugin()],
  base: '',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
});
