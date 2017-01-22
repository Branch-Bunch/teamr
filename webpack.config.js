const webpack = require('webpack')

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
  devServer: {
    contentBase: './public/',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-3'],
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
