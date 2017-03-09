const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: "./dist",
    filename: "[name].bundle.js"
  },
};
