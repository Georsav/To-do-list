const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
   mode: 'development',
   entry: './src/index.js',
   devtool: 'inline-source-map',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            template: 'src/index.html',
        }),
    ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 }