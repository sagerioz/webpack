var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  // __dirname refers to the directory we are currently in. If your app lives in a subdirectory you can add it here, ex) __dirname + "/app"
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  // where we start:
  entry: "./js/scripts.js",
  //output goes here:
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  // are we in debug mode? then return an empty array. Otherwise, remove duplicate code, minify the code and go into production
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
