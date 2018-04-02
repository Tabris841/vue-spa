const base = require('./webpack.base.config');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = Object.assign({}, base, {
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: base.plugins || []
});

config.module.rules
  .filter(x => {
    return x.loader === 'vue-loader';
  })
  .forEach(x => (x.options.extractCSS = true));

config.plugins.push(new ExtractTextPlugin('assets/styles.css'));

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = config;
