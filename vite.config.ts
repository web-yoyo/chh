import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

import styleImport, { VantResolve } from 'vite-plugin-style-import'
// Vite自身已经集成PostCSS，无需再次安装。另外也无需单独创建PostCSS配置文件，已集成到vite.config.js的css选项中
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //设置别名
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*'],
        }),
      ],
    },
  },
})
