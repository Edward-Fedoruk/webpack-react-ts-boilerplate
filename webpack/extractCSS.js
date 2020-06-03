const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.module\.(css|scss)$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ]
  }
})
