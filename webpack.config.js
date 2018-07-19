module.exports = {
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
