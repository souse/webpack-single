var path = require('path')
var config = require('./config')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var autoprefixer = require('autoprefixer')
var pxtorem = require('postcss-pxtorem')
var theme = require('../package.json').theme

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV !== 'development'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV !== 'development',
      sourceMap: options.sourceMap
    }
  }

  var postcssLoader = {
      loader: 'postcss-loader',
      options: {
          sourceMap: options.sourceMap,
          plugins: [
              autoprefixer(),
              pxtorem({
                  rootValue: 100,
                  propWhiteList: []
              })
          ]
      }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader, postcssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return [MiniCssExtractPlugin.loader].concat(loaders)
    } else {
      return ['style-loader'].concat(loaders)
    }
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less', { javascriptEnabled: true, modifyVars: theme }),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
