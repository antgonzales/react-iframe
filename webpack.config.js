module.exports = {
  entry: {
    home: './src/Home/index.js',
    remote: './src/Remote/index.js',
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
    filename: '[name].bundle.js'
  }
};
