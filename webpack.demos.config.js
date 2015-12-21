var webpack = require('webpack');
var path = require('path');

var ENV = process.env.NODE_ENV;

module.exports = {
  devtool: ENV === 'development' ? 'inline-source-map' : false,
  entry: {
    demo: ['babel-core/polyfill', './demo/index.jsx']
  },
  contentBase: './demo',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'demo')
  },
  resolve: {
    root: [
      path.resolve('./src')
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.jsx?$/,
        loaders: ENV === 'development'
          ? ['react-hot', 'babel']
          : ['babel?comments=false'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css!stylus'},
      { test: /\.(eot|otf|woff2?|ttf|svg|png)[\?]?.*$/, loader: 'file-loader' }
    ]
  },
  plugins: ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    }),
  ] : []
};
