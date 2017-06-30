import glob from 'glob';
import express from 'express';

export default (app, config) => {
    const router = express.Router();
    const routers = glob.sync(config.root + '/build/routes/**/*.js');

    app.use('/', router);

    routers.forEach((route) => {
        require(route).default(router);
    });
};
