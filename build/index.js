'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpackDev = require('../webpack.dev.config');

var _webpackDev2 = _interopRequireDefault(_webpackDev);

var _env = require('./config/env');

var _app = require('./config/app');

var _app2 = _interopRequireDefault(_app);

var _router = require('./config/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // load dependency modules

var port = 3000;
var devPort = 3001;

if (_env.config.env === 'development') {
    var compiler = (0, _webpack2.default)(_webpackDev2.default);
    var server = new _webpackDevServer2.default(compiler, _webpackDev2.default.devServer);

    server.listen(devPort, function () {
        console.log('development Server Starting at localhost:3001');
    });
}

(0, _app2.default)(app, _env.config);
(0, _router2.default)(app, _env.config);

app.listen(port, function () {
    console.log('Server Starting at localhost:3000');
});