const path = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackFavicons = require("webpack-favicons");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main-bundle-[chunkhash].js",
    publicPath: "/test-web/",
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
            loader: MiniCssExtractPlugin.loader,
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
  plugins: [
    new DefinePlugin({
      "process.env.API_URL": JSON.stringify(
        "https://desafioonline.webmotors.com.br/api/OnlineChallenge"
      ),
    }),
    new WebpackFavicons({
      src: "./public/favicon.jpg",
      path: "favicon",
      background: "#FFFFFF",
      theme_color: "#FFFFFF",
      icons: {
        favicons: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main-bundle-[chunkhash].css",
    }),
  ],
});
