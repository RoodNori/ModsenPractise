const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/components/App/index.tsx', 

  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  resolve: {
    extensions: ['.svg', '.jpg', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    open: true, 
  },

  mode: 'development', 
};