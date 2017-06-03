module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },

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

    resolve : {
        alias : {
            vue : 'vue/dist/vue.js'
        }
    }
};
