const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    hot: true,
  },

  mode: 'development',
  devtool: 'inline-source-map',
});
