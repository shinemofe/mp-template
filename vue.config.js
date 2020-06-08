const path = require('path')
const isLocal = process.env.NODE_ENV === 'development'

module.exports = {
  configureWebpack: {
  },
  chainWebpack (config) {
    config
      .plugin('html')
      .tap(args => {
        return isLocal ? [{ template: path.resolve(__dirname, '../public/index-local.html') }] : args
      })
  }
}
