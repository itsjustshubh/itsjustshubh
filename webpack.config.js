const path = require('path');

module.exports = {
  target: 'node', // Important for Node.js environment
  mode: 'development',
  entry: './src/updateReadme.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'updateReadmeBundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp4|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              emitFile: false // Important to avoid emitting files during build
            }
          }
        ]
      }
    ]
  }
};
