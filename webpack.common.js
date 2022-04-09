const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/core/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main-bundle-[chunkhash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "scss"],
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
