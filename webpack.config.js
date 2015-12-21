var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'sourcemap',
  entry: {
    index: ['./src/react-seed.js']
  },
  output: {
    publicPath: 'build/',
    path: path.resolve(__dirname, 'build'),
    filename: 'react-seed.js',
    sourceMapFilename: 'react-seed.map',
    library: 'ReactSeed',
    libraryTarget: 'umd'
  },
  resolve: {
    root: [
      path.resolve('./src')
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {

    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css!stylus'}
    ]
  },
  plugins: [],
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
};
