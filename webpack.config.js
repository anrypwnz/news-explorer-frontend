const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssNano = require('cssnano');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/js/index.js',
    articles: './src/js/articles/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[chunkhash].js',
  },
  module: {
    rules: [{
      test: /\.js$/i,
      use: {
        loader: 'babel-loader',
      },
      exclude: /node_modules/,
    },
    {
      test: /\.css$/i,
      use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.(png|jpe?g|gif|ico|svg)$/i,
      use: [
        {
          loader: 'file-loader?name=./images/[name].[ext]',
        },
        {
          loader: 'image-webpack-loader',
          options: {
            publicPath: 'assets',
          },
        },
      ],
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/i,
      loader: 'file-loader?name=./vendor/[name].[ext]',
    },

    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/i,
      cssProcessor: cssNano,
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/articles.html',
      filename: 'articles.html',
      chunks: ['articles'],
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
