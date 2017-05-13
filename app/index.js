// load dependency modules
import express from 'express';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import { config } from './config';
import router from './routers';

const app = express();

if(config.env === 'development'){
    let webpackConfig = require('../webpack.dev.config');
    let compiler = webpack(webpackConfig);
    let server = new webpackDevServer(compiler, webpackConfig.devServer);

    server.listen(config.port, () => {
        console.log('development Server Starting at localhost:3001');
    });
}

router(app, config);

app.listen(config.port, () => {
    console.log('Server Starting at localhost:3000');
});
