const _ = require('lodash');
module.exports = {
  dev: { //此处配置代理
    proxyTable: {
      '/api': {
        target: 'http://192.168.0.0',
        changeOrigin: true,
        secure: false,
        bypass: function (req, res, proxyOptions) {}
      }
    },
    //host: '192.168.3.128',
    port: 8080
  },
  build: {
    prerender: false,
    dist: 'dist',
    projectName: '',
    publicPath: '/',
    extend(config) {
      config.productionSourceMap = config.devtool = false
      return config
    }
  },
  router: {
    base: '',
    mode: 'history',
    middleware: ['~/src/middleware/check-login', '~/src/middleware/check-auth'], //配置所有中间件资源
    meta: [{
      routers: [
        '/',
        '/login',
        '/404',
        '/error/500',
        '/demo'
      ],
      data: {
        layout: 'default',
        middleware: [],
        requireAuth: false,
      }
    }, {
      routers: [
        '/api',
        '/test'
      ],
      data: {
        layout: 'default',
        middleware: ['~/src/middleware/check-login', '~/src/middleware/check-auth'],
        requireAuth: true,
      }
    }],
    scrollBehavior: function (to, from, savedPosition) {
      if (savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              x: 0,
              y: 0
            })
          }, 0)
        })
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    },
    extendRoutes: function (routers, isProduction) {
      return routers
    }
  },
  css: ['element-ui/lib/theme-chalk/index.css', '~/static/css/bootstrap/css/bootstrap.min.css', '~/static/css/animate/animate.css', '~/src/style/scss/common.scss', '~/src/assets/style/sprite/sprite.css', '~/src/assets/style/iconfont/iconfont.css'],
  plugins: [{
      src: '~/src/plugins/element',
      sync: true
    },{
      src: '~/src/plugins/axios',
      sync: true
    }, {
      src: '~/src/plugins/filters',
      sync: true
    }
  ]
}