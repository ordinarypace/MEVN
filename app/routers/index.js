import glob from 'glob';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import validator from 'express-validator';
import expressVue from 'express-vue';

export default (app, config) => {
    const router = express.Router();

    app.set('views', config.root + '/routes');
    app.set('vue', {
        components: config.root + '/components',
        defaultLayout: 'layout'
    });
    app.engine('vue', expressVue);
    app.set('view engine', 'vue');

    app.use(express.static(__dirname, '/public'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(validator());
    app.use(logger('dev'));
    app.use(methodOverride());
    app.use(compress());
    app.use('/', router);

    let controllers = glob.sync(config.root + '/controller/**/*.js');

    controllers.forEach((controller) => {
        require(controller).default(router)
    });
};

