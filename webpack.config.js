const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:"development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer:{
    static:{
       directory:path.resolve(__dirname, 'dist')
    },
    port:4000,
    open:true,
    hot:true,
    compress:true,
    historyApiFallback:true,
 },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          
          "style-loader",
         
          "css-loader",
         
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title:'Webpack App',
    filename: 'index.html',
    template: 'src/index.html'
  })],
};