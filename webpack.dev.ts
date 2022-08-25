// const { merge } = require('webpack-merge');
// const path = require('path');
// const common = require('./webpack.common.js');

import { merge } from 'webpack-merge';
import common from './webpack.common';
import path from 'path';
import { Configuration } from 'webpack';

export default merge(
  common as Configuration,
  {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      open: true,
      static: {
        directory: path.resolve(__dirname, './dist'),
      },
      devMiddleware: {
        index: './index.html',
        writeToDisk: true, // If this is false, webpack creates and keeps bundle in memory and runs from there.
      },
    },
  } as Configuration
);
