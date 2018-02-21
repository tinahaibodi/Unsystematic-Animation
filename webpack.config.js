const path = require("path");

const config = {
  entry: "./src/source.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: "public"
  }
};

module.exports = config;
