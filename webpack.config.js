const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules: [
        {
          test:/\.js$/,
          // exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        },
        {
          test:/\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        }
      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:"style.css"
  })
],
  mode:'none'
};