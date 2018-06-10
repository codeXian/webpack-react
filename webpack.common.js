const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./manifest/react-manifest.json')
    // }),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./manifest/vis-manifest.json')
    // }),
  ]
}