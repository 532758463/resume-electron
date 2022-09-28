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
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@assets': path.join(__dirname, '../', 'assets/'),
      '@src': path.join(__dirname, '../', 'src/'),
      '@renderer': path.join(__dirname, '../', 'src/renderer/'),
      '@pages': path.join(__dirname, '../', 'src/renderer/pages/'),
      '@common': path.join(__dirname, '../', 'src/renderer/common/'),
      '@utils': path.join(__dirname, '../', 'src/renderer/utils/')
    }
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
        use: ['style-loader', 'css-loader', 'postcss-loader']
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
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        // type 属性适用于 Webpack5，旧版本可使用 file-loader
        type: 'asset/resource'
        // use: [
        //   {
        //     loader: 'image-webpack-loader',
        //     options: {
        //       disable: process.env.NODE_ENV === 'development',
        //       // jpeg 压缩配置
        //       mozjpeg: {
        //         quality: 80
        //       },
        //       optipng: {
        //         quality: 100
        //       }
        //     }
        //   }
        // ]
      }
    ]
  },
  // 添加 eslint-webpack-plugin 插件实例
  plugins: [new ESLintPlugin({ extensions: ['.js', '.jsx', '.ts', '.tsx'] })]
};
