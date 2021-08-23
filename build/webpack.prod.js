// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./App.tsx",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "../public/images",
          to: "images",
        },
        {
          from: "../public/manifest",
          to: "manifest",
        },
        {
          from: "../public/styles",
          to: "styles",
        },
        {
          from: "../public/manifest.json",
          to: "manifest.json",
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
});
