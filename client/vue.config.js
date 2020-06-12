module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'HopsCo'
        return args
      })
    },
    //publicPath: "/web701_si/dist/",
  }