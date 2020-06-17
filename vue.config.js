const path = require('path')
// const isLocal = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: './',
  // chainWebpack (config) {
  //   config
  //     .plugin('html')
  //     .tap(args => {
  //       return isLocal ? [{ template: path.resolve(__dirname, './public/index-local.html') }] : args
  //     })
  // },
  configureWebpack: {
    externals: { vue: 'Vue' }
  },
  devServer: {
    disableHostCheck: true
  }
}
