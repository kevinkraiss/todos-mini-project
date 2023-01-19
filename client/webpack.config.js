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
      }),
      new WebpackPwaManifest({
        name: 'myTODO app',
        short_name: 'TODOs',
        description: 'TODO app',
        background_color: '#ffffff',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512]
          }
        ]
      }),
      GenerateSW()
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
