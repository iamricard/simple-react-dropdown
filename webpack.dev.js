const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'example')

module.exports = {
  entry: [
    APP_DIR + '/app.js'
  ],
  devtool: '#inline-source-map',
  contentBase: '../',
  filename: 'bundle.js',
  publicPath: '/dist/',
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: [/node_modules/],
        loader: 'babel'
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-dropdown',
      template: 'example/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
