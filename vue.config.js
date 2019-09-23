module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/hacktoberfest/'
  : '/',
  chainWebpack: config => {
    config.plugin('optimize-css').tap(([options]) => {
      options.cssnanoOptions.preset[1].svgo = false
      return [options]
    })
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/global.scss";
        `
      }
    }
  }
}