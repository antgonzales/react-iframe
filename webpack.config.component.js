const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  entry: {
    otherComponent: './src/OtherComponent/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: __dirname + '/lib',
    publicPath: '/',
    filename: '[name].esm.js',
    libraryTarget: 'var',
    library: 'MODULE',
  },
  plugins: [
    new EsmWebpackPlugin()
  ]
};
