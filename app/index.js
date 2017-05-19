// load dependency modules
import express from 'express';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.dev.config';
import { config } from './config/env';
import initialize from './config/app';
import routers from './config/router';
//import cluster from './config/cluster';

const app = express();
const port = 3000;
const devPort = 3001;

if(config.env === 'development'){
    let compiler = webpack(webpackConfig);
    let server = new webpackDevServer(compiler, webpackConfig.devServer);

    server.listen(devPort, () => {
        console.log('development Server Starting at localhost:3001');
    });
}

initialize(app, config);
routers(app, config);

//TODO add cluster
app.listen(port, () => {

    console.log('Server Starting at localhost:3000');
});
