const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const extractCSS = require('./extractCSS')
const webpackMerge = require('webpack-merge')
const commonPaths = require('./paths')

module.exports = webpackMerge([
  {
    mode: 'production',
    output: {
      filename: `${commonPaths.jsFolder}/[name].[hash].js`,
      path: commonPaths.outputPath,
      chunkFilename: `${commonPaths.jsFolder}/[name].[chunkhash].js`,
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          // Use multi-process parallel running to improve the build speed
          // Default number of concurrent runs: os.cpus().length - 1
          parallel: true,
          // Enable file caching
          cache: true,
          sourceMap: false,
        }),
        new OptimizeCSSAssetsPlugin(),
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: `${commonPaths.cssFolder}/[name].css`,
        chunkFilename: `${commonPaths.cssFolder}/[name].css`,
      }),
    ],
    devtool: false,
  },
  extractCSS()
])
