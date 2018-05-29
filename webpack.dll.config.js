const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const library = '[name]_lib';
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    react: ['react', 'react-dom'],
    vis: ['vis']
  },
  output: { 
    path: path.join(__dirname, '/dist'),
    filename: '[name].dll.js',
    library
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'manifest']),
    new webpack.DllPlugin({
      path: path.join(__dirname, '/manifest', '[name]-manifest.json'),
      name: library
    })
  ]
}