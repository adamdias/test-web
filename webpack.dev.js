const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: "./public",
    },
    historyApiFallback: true,
    port: 8080,
  },
  plugins: [
    new DefinePlugin({
      "process.env.API_URL": JSON.stringify(
        "https://desafioonline.webmotors.com.br/api/OnlineChallenge"
      ),
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./public/favicon.jpg",
    }),
  ],
});
