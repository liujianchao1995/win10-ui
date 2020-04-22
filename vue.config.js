module.exports = {
  publicPath: './',
  outputDir: 'docs',
  devServer: {
    host: "0.0.0.0",
    port: 9001, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
  },
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    sourceMap: true,
  }
}