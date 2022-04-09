const path = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackFavicons = require("webpack-favicons");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main-bundle-[chunkhash].js",
    publicPath: "/",
  },
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
    new WebpackFavicons({
      src: "./public/favicon.jpg",
      path: "img",
      background: "#FFFFFF",
      theme_color: "#FFFFFF",
      icons: {
        favicons: true,
      },
    }),
  ],
});
