// load dependency modules
import express from 'express';
import webpack from 'webpack';
import opn from 'opn';
import webpackConfig from '../webpack.dev.config';
import proxyMiddleware from 'http-proxy-middleware';
import { config } from './config/env';
import initialize from './config/app';
import routers from './config/router';
import database from './config/database';

const app = express();
const port = 3000;

let proxyTable = {};
let compiler = webpack(webpackConfig);

let devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath : webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
});

let hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log : () => {}
});

compiler.plugin('compilation', (compilation) => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        hotMiddleware.publish({ action: 'reload' });
        cb()
    })
});

Object.keys(proxyTable).forEach((context) => {
    let options = proxyTable[context];
    if (typeof options === 'string') {
        options = { target: options };
    }

    app.use(proxyMiddleware(context, options));
});

app.use(require('connect-history-api-fallback')());
app.use(devMiddleware);
app.use(hotMiddleware);

devMiddleware.waitUntilValid(() => {
    console.log('> Listening at localhost:3000')
});



initialize(app, config);
database();
routers(app, config);

//TODO : add cluster
app.listen(port, () => {
    console.log('Server Starting at localhost:3000');

    if(config.env !== 'development'){
        opn('http://localhost:3000');
    }
});
