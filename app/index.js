// load dependency modules
import express from 'express';
import opn from 'opn';
import { config } from './config/env';
import middleware from './config/middleware';
import initialize from './config/app';
import routers from './config/router';
import database from './config/database';

const app = express();
const port = config.port;

middleware(app, config);
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
