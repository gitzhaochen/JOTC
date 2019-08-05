module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'jotc',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'renderer',
        content: 'webkit'
      },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'description', name: 'description', content: '' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }
    ]
  },
  server: {
    port: 5555,
    host: '0.0.0.0'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '@/components/loading.vue',
  /*
   ** Global CSS
   */
  // 配置所有页面渲染后滚动至顶部
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // 引入样式文件
  css: ['./assets/style/reset.css', './assets/style/main.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    ['@nuxtjs/eslint-module']
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    less: ['./assets/style/vars.less', './assets/style/mixins.less']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: process.env.NODE_ENV === 'production', // 生产环境单独抽离css
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[name].[chunkhash:7].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[name].[chunkhash:7].js'),
      css: ({ isDev }) => (isDev ? '[name].js' : '[name].[contenthash:7].css'),
      img: ({ isDev }) =>
        isDev ? '[name].[ext]' : 'img/[name].[hash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[name].[ext]' : 'fonts/[name].[hash:7].[ext]'
    },
    babel: {
      presets({ isServer }) {
        const targets = isServer
          ? { node: 'current' }
          : { ie: '9', edge: '17', chrome: '44', firefox: '60', safari: '7' }
        return [[require.resolve('@nuxt/babel-preset-app'), { targets }]]
      }
    },
    extend(config, ctx) {
      // 开启source-map
      if (ctx.isDev) {
        config.devtool = 'cheap-module-eval-source-map'
      } else {
        config.devtool = 'cheap-module-source-map'
      }
    }
  }
}
