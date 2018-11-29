const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app-[hash].js',
  },
  node: {
    net: 'empty',
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'My App', template: 'public/index.html', filename: 'index.html' }),
  ],
};

config.devtool = 'eval-source-map';
config.entry = ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', './src/index.js'];
config.devServer = {
  contentBase: './dist',
  historyApiFallback: true,
  hot: true,
};
config.plugins.push(new Webpack.HotModuleReplacementPlugin());
config.mode = "development";

module.exports = config;
