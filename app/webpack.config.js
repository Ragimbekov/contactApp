const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProductionMode = process.env.NODE_ENV === "production";


module.exports = {
  mode: isProductionMode ? "production" : "development",

  entry:     './public/js/index.js',
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'bundle.js',
  },
  
  // mode: 'development',
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },  
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
        ],
      },
    ],
  },
 plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPlugin({
          filename: '../css/style.css',
        })
    ],
    devServer: {
      static: path.join(__dirname, './public/js'),
      compress: true,
      port: 80
    },

    resolve: {
        extensions: ['.js'],
        fallback: {
          "path": require.resolve("path-browserify"),         
          "crypto": require.resolve("crypto-browserify")
          }   
    },
};