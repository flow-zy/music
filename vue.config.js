const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const { VUE_BASE_URL, VUE_BASE_PORT, VUE_BASE_API, PORT = 6000 } = process.env
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: VUE_BASE_PORT ?? PORT ?? 3000,
    proxy: {
      VUE_BASE_API: {
        target: VUE_BASE_URL,
        ws: true,
        changeOrigin: true,
        pathRewrite: { [`^${VUE_BASE_API}`]: '' }
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'auto-import.d.ts'
      })
    ],
    resolve: {
      // 尝试按顺序解析这些后缀名
      extensions: ['.ts', '.json', '.vue'],
      // 配置路径别名
      alias: {
        '@/': resolve(__dirname, 'src/')
      }
    }
  }
})
