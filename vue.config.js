module.exports = {
  publicPath: '/',

  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1024000 }))
  },
  devServer: {
    // 设置代理，解决跨域问题
    proxy: {
      '/data.json': {
        target: 'https://cdn.ycku.com',
        ws: true,
        changeOrigin: true
      }
    },
    host: '127.0.0.1',
    port: '6001'
  },
  outputDir: process.env.outputDir
}
