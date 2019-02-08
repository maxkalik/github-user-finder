const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: 'index.html'
});

const cssPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]_[hash:base64]',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [htmlPlugin, cssPlugin]
};
