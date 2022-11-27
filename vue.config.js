const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { AntDesignVueResolver } = require('unplugin-vue-components/resolvers')
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
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': 'rgb(30, 206, 155)',
            'link-color': 'rgb(30, 206, 155)',
            'border-radius-base': '2px'
          },
          javascriptEnabled: true
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'auto-import.d.ts'
      }),
      Components({
        dts: true,
        dirs: ['./src/views', './src/components'],
        resolvers: [
          AntDesignVueResolver({ importStyle: true, resolveIcons: true })
        ]
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
