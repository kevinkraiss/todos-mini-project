const path = require('path');
const  WebpackPwaManifest = require('webpack-pwa-manifest')
const {GenerateSW} = require('workbox-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },

    // TODO: Add the correct output
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },

    // TODO: Add the correct plugins
    plugins: [
      new HTMLWebpackPlugin({
        template: './index.html'
      })
    ],

    // TODO: Add the correct modules
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    }
  };
};
