var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var baseConfig = require('./base.js');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(){
    return webpackMerge(baseConfig(), {
        devtool : 'inline-source-map',
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new htmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html',
                inject: true
            })
        ],
    });
};
