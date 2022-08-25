import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/home/home.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
  },
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
        { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],
};
