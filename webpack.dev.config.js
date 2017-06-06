var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool : '#eval-source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },

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

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            },
            {
                test : /\.vue$/,
                loader : 'vue'
            }
        ]
    },

    vue : {
        loaders : {
            js : 'babel'
        }
    },

    // fixed vue runtime error
    resolve : {
        alias : {
            vue : 'vue/dist/vue.js'
        }
    }
};
