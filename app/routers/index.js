import express from 'express';

// routers
import Home from './home.router';

export default (app) => {
    const router = express.Router();
    app.use('/', router);

    Home(router);
};

