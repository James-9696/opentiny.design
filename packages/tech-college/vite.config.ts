import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { MdExt, mdInstall } from './md.extend.config'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      exclude: [/node_module/]
    }),
    // 支持md转为vue组件：   https://github.com/antfu/vite-plugin-md#configuration--options
    Markdown({
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true
      },
      markdownItSetup(md) {
        mdInstall(md)
      },
      markdownItUses: MdExt
    }),
  ],

  resolve: {
    alias: {
      '@/assets': path.resolve(__dirname, 'src/assets'),
      'flexsearch': 'flexsearch/dist/flexsearch.bundle.js'
    }
  },
})
