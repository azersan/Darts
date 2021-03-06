const path = require('path')
const webpack = require('webpack')

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app/components');


module.exports = {
  devtool: 'eval',
  entry: APP_DIR + "/Main.jsx",
    output: {
      path: BUILD_DIR,
      filename: "bundle.js"
    },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
