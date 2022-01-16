const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]'
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCss.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCss({
      filename: '[name].css',
    })
  ]
}