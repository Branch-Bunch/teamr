const webpack = require('webpack')
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './public/src/index',
  output: {
    path: __dirname, filename: './public/build/bundle.js',
  },
  devtool: debug ? 'inline-sourcemap' : null,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  resolveLoader: { root: path.join(__dirname, 'node_modules') },
  devServer: {
    contentBase: './public/',
  },
  eslint: { configFile: './.eslintrc.json' },
  module: {
    preLoaders: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }],
    loaders: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false,
      compress: { warnings: false },
    }),
  ],
}

