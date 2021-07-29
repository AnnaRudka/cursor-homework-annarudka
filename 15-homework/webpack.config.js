const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./js/main.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      //title: "AnnaRudka_Homework#15",
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]?[hash]",
            },
          },
        ],
      },
      {
        test: "/.(ttf|woff|woff2|eot)$",
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      },
      {
        test: /\.(wav|mp3|mov)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]?[hash]",
        },
      },
    ],
  },
};
