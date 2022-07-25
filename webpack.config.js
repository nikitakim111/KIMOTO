const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const ESLintPlugin = require("eslint-webpack-plugin");

let env = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = env = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },

      {
        test: /js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          env.prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(jpe?g|png)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    new HTMLPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new ESLintPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};


