const commonPaths = require('./paths')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder,
            },
          },
        ],
      },
    ]
  }
})
