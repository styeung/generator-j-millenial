module.exports = {
    context: __dirname + "/app",
    entry: "./index.js",
    output: {
        path: __dirname + "/app",
        filename: "bundle.js"
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
