const path = require('path');
const baseConfig = require('./webpack.base.config.js');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  entry: path.resolve(__dirname, '../src/main/main.ts'),
  target: 'electron-main',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV || 'development'
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
