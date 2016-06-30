module.exports = {
    context: __dirname + "/spec/javascripts",
    entry: "./testindex.js",
    output: {
        path: __dirname + "/spec/javascripts",
        filename: "testbundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
}
