var path = require('path')
var webpack = require('webpack')
var base = require('./base')
var config = module.exports = Object.assign({}, base)
var HtmlWebpackPlugin = require('html-webpack-plugin');

Object.assign(config, {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist/gh-page'),
    filename: 'demo.js',
    // libraryTarget: 'commonjs2'
  },

  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // new webpack.ExternalsPlugin('commonjs2', [
    //   'vue',
    // ]),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: './index.html' //relative to root of the application
    })
  ],

})

