const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'lib');

const config = {
  entry: `${APP_DIR}/index.js`,
  mode: 'development',
  output: {
    path: BUILD_DIR,
    filename: 'launcher.js',
    libraryTarget: 'umd',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};

module.exports = config;
