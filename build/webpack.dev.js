// development config
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: ["./App.tsx"],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin({})],
});
