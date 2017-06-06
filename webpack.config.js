var webpack = require('webpack');

module.exports = {
    devtool : 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },

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
