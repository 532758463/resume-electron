/* eslint-disable no-undef */
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const { getCssLoaders, resolve } = require('./utils');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: false,
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
            plugins: [require('react-hot-loader/babel')]
          }
        }
      },
      {
        test: /\.css$/,
        use: getCssLoaders(0)
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  // 添加 eslint-webpack-plugin 插件实例
  plugins: [new ESLintPlugin({ extensions: ['.js', '.jsx', '.ts', '.tsx'] })]
};
