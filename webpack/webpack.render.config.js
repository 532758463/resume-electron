const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const WebpackBaseConfig = require('./webpack.base.config');

const port = process.env.PORT || 8080;

const entries = {
  index: path.join(__dirname, '../src/renderer/app.tsx')
};
const htmlPlugins = Object.keys(entries).map(
  (k) =>
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      title: `[${k}] My Awesome Electron App`
    })
);

module.exports = merge(WebpackBaseConfig, {
  entry: entries,
  target: 'electron-renderer',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom' // 开发模式下
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    static: path.join(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 7001, // 启动端口为 7001 的服务
    hot: true
  },

  plugins: [...htmlPlugins]
});
