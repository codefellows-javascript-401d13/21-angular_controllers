'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack2 = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundles.js',
    path: `${__dirname}/build`,
  },
  plugins: [
    new HTMLPlugin({ template: `${__dirname}/app/index.html`}),
    new ExtractTextPlugin('bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(eot|woff|tff|svg).*/,
        use: 'url?limit=10000&name=fonts/[hash].[ext]',
      },
    ],
  },
};


const webpack1 = { //eslint-disable-line
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundles.js',
    path: `${__dirname}/build`,
  },
  plugins: [
    new HTMLPlugin({ template: `${__dirname}/app/index.html`}),
    new ExtractTextPlugin('bundle.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!',
      },
      {
        test: /\.(eot|woff|tff|svg).*/,
        loader: 'url?limit=10000&name=fonts/[hash].[ext]',
      },
    ],
  },
};

module.exports = webpack2;
