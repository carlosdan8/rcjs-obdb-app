const HtmlWebpackPlugin = require("html-webpack-plugin");

const ESLintPlugin = require("eslint-webpack-plugin");

const Dotenv = require("dotenv-webpack");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [htmlPlugin, new ESLintPlugin(), new Dotenv()],
};
