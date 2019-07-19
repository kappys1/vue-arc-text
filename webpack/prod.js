var path = require('path')
var webpack = require('webpack')
var base = require('./base')
var config = module.exports = Object.assign({}, base)
const CopyPkgJsonPlugin = require("copy-pkg-json-webpack-plugin")

Object.assign(config, {
  entry: './src/Vue-arc-text.vue',
  output: {
    path: path.resolve(__dirname, '../dist/lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.ExternalsPlugin('commonjs2', [
      'vue',
    ]),
    new CopyPkgJsonPlugin({
      remove: ['devDependencies'],
      replace: {main: 'index.js'}
    })
  ],
})

// if (process.env.NODE_ENV === 'production') {
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     })
//   ])
// }
