/*
 * webpack configuration
 *
 * Docs: https://webpack.js.org/concepts/configuration/
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "postcss-loader",
      },
    ],
  },
};
