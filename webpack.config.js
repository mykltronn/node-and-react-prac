/*
Setting up Webpack and Babel

Before I can run my application I need to generate the bundle.js file containing all my React components with Webpack. This file will be executed by the browser so Webpack will make sure to convert all the modules into code that can be executed in the most common browser environments. Webpack will convert ES2015 and React JSX syntax to equivalent ES5 syntax (using Babel), which can be executed by almost all browsers. Furthermore I can use Webpack to apply a number of optimizations to the resulting code, like combining all the scripts files into one file and minifying/uglifying the resulting bundle.

once this file is created (and it's living in the root directory)
navigate to the root dir in bash and execute the following command:
->$ NODE_ENV=production node_modules/.bin/webpack -p

this can take a bit.
if I want a progress bar and pretty colors run:
->$ webpack --progress --colors
this -p generates the bundle in PRODUCTION MODE

If successful, it should create a bundle in the designated output location.

If I want to run this bundle as a static-file web server use the http-server node package from command line:

->$ node_modules/.bin/http-server src/static


this runs the bundle in DEVELOPMENT
-- it binds a small express server on localhost:8080 which serves the static assets as well my bundle

->$ npm install --save-dev webpack-dev-server
->$ webpack-dev-server [--content-base loc/of/bundle/][--progress --colors]


*/

const webpack = require('webpack');
const path = require('path');

module.exports = {
    // entry: is the file I want to be served up, containing my routes. It will include all the imported files in the bundle.
  entry: path.join(__dirname, 'src', 'app-client.js'),
    // output: path: is where I want the resultant bundle file to go, and of course filename: is what I want it to be called.
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ // loaders: is where we determine what transformations to make on certain files. This says:
      test: path.join(__dirname, 'src'), // : take everthing in 'src'
      loader: ['babel-loader'],          // : use babel-loader
      query: {
        cacheDirectory: 'babel_cache',   // : ? find the following in 'babel_cache' ?
        presets: ['react', 'es2015']     // : use the react and es2015 presets to convert all the existing .js files to es2015 syntax
      }
    }]
  },
  plugins: [
// here I declare and configure the built-in optmization plugins I want to use
    new webpack.DefinePlugin({      // ? not sure exactly what this does, just that it something that React requires to be specified ?
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),            // dedupe removes duplicate imported files from bundle
    new webpack.optimize.OccurenceOrderPlugin(),    // OccurenceOrder mysteriously reduces the bundle size...
    new webpack.optimize.UglifyJsPlugin({           // UglifyJsPlugin minifies the bundle for speedy shipment!
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};
