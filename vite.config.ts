import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    vue(),
    // tsconfigPathsプラグインを入れれば、
    // path設定は、tsconfig.jsonのみでOK。
    // vite.configにpathsを記述する必要がなくなる。
    tsconfigPaths(),
  ],
})
