module.exports = {
  debug: true,
  watch: true,
  cache: true,
  devtool: 'inline-source-map',
  entry: {
    'live-demo-react-v13': './demo/live-demo-react-v13/',
    'live-demo-react-v14': './demo/live-demo-react-v14/'
  },
  output: {
    path: './build/',
    filename: '[name].js'
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
