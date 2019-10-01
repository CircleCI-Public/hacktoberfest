module.exports = {
  chainWebpack: config => {
    config.plugin('optimize-css').tap(([options]) => {
      options.cssnanoOptions.preset[1].svgo = false
      return [options]
    })
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
    }
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