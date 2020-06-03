const webpackMerge = require('webpack-merge')
const common = require('./webpack/webpack.common')

const envs = {
  development: 'dev',
  production: 'prod',
}

module.exports = ({ NODE_ENV }) => webpackMerge(
  common, 
  require(`./webpack/webpack.${envs[NODE_ENV]}.js`)
)
