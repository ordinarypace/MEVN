var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var baseConfig = require('./base.js');

module.exports = function(){
    console.log('Building PRODUCTION!');
    return webpackMerge(baseConfig(), {
        devtool : 'cheap-module-source-map',
        plugins : [
            new webpack.optimize.MinChunkSizePlugin({minChunkSize: Infinity}),
            new webpack.DefinePlugin({
                'process.env':{
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                mangle:true,
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.DedupePlugin()
        ]
    })
};
