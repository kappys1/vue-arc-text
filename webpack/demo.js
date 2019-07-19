var path = require('path')
var webpack = require('webpack')
var base = require('./base')
var config = module.exports = Object.assign({}, base)
var HtmlWebpackPlugin = require('html-webpack-plugin');

Object.assign(config, {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'demo.js'
  },
  devServer: {
    contentBase:  path.resolve(__dirname, 'dist/'),
    noInfo: true
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: './index.html' //relative to root of the application
    })
  ]
})
