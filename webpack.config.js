/**
 * Created by yanzi on 2017/9/12.
 */
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],
    output: {
        path: __dirname + "/app",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('index.css')
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 8080,
        contentBase: './app'
    }

}