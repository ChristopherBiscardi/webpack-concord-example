const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: "./dist",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
};
