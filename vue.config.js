module.exports = {
  chainWebpack: config => {
    config.plugin('optimize-css').tap(([options]) => {
      options.cssnanoOptions.preset[1].svgo = false
      return [options]
    })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hacktoberfest/'
    : '/',
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