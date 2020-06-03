const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonPaths = require('./paths')
const sass = require('./sass')

module.exports = webpackMerge([
  {
    mode: 'development',
    output: {
      filename: '[name].js',
      path: commonPaths.outputPath,
      chunkFilename: '[name].js',
    },
    devServer: {
      contentBase: commonPaths.outputPath,
      compress: true,
      hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
  sass(),
])
