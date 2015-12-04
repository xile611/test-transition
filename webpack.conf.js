module.exports = {
  debug: true,
  watch: true,
  cache: true,
  devtool: 'inline-source-map',
  entry: './demo/live-demo/index',
  output: {
    path: './demo/live-demo/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets:['es2015', 'react']
      }
    }]
  }
};
