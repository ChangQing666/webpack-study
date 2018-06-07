const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),   // 输出文件的绝对路径
        filename: 'assets/[name].[chunkhash].bundle.js',// chunkhash 用于长效缓存
        publicPath: '/', // 输出解析文件的目录
    },
    module: {
      rules: [

      ]
    },
    // context: path.resolve(__dirname, 'src'),
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '缓存'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.ProvidePlugin({
            join: ['lodash', 'join']
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}