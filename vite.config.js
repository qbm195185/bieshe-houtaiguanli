import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue'],
      dts: './src/utils/auto-import.d.js'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // electron({
    //   entry: 'electron/index.js'
    // })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  },
  devServer: {
    open: true,
    proxy: {
      // https: false,
      // hotOnly: false,
      '/api': {
        target: 'http://localhost:3000/api/',
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' // 重写路径
        }
      }
    }
  },
  define: {
    'process.env': {
      'BASE_API': 'http://localhost:3000/api'
    }
  }
})
