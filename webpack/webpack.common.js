const path = require('path')
const webpack = require('webpack')
const commonPaths = require('./paths')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const assets = require('./assets')  
const fonts = require('./fonts')  
const typescript = require('./typescript')  

module.exports = webpackMerge([
  {
    entry: commonPaths.entryPath,
    resolve: {
      modules: ['node_modules'],
      extensions: ['*', '.js', '.tsx', '.css', '.scss', '.ts'],
      alias: {
        Components: path.resolve(__dirname, 'src/Components/')
      }
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: commonPaths.templatePath,
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async',
      }),
    ],
  },
  assets(),
  fonts(),
  typescript()
])
