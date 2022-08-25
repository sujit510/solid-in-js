// const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js');

import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import 'webpack-dev-server';
import TerserPlugin from 'terser-webpack-plugin';

const config = merge(common as Configuration, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new TerserPlugin(),
    ],
  },
});

export default config;
