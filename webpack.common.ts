// const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/home/home.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
  },
  //   devtool: 'inline-source-map',
  //   devServer: {
  //     open: true,
  //     static: {
  //       directory: path.resolve(__dirname, './dist'),
  //     },
  //     devMiddleware: {
  //       index: './index.html',
  //       writeToDisk: true, // If this is false, webpack cretes and keeps bundle in memory and runs from there.
  //     },
  //   },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/solid-codes', to: 'solid-codes' },
        { from: 'index.html' },
      ],
    }),
  ],
};
