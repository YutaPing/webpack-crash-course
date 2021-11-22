const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
      'style-loader',
      'css-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
      'style-loader',
      'css-loader',
      'sass-loader'
      ]
    },
    {
      test:/\.(jpe?g|png|gif|svg|ico)$/i,
      loader: 'url-loader',
      options: {
        limit: 2048,
        name: './images/[name].[ext]'
      }
    },
    {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
    },
    {
      test:/\.html$/,
      loader: 'html-loader'
    }
    
  ] 

  },
  devServer: {
    contentBase: outputPath
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
} 