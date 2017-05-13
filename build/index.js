'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpackDev = require('../webpack.dev.config');

var _webpackDev2 = _interopRequireDefault(_webpackDev);

var _config = require('./config');

var _routers = require('./routers');

var _routers2 = _interopRequireDefault(_routers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// load dependency modules
var app = (0, _express2.default)();

if (_config.config.env === 'development') {
    console.log('Server is running on development mode');

    var compiler = (0, _webpack2.default)(_webpackDev2.default);
    var server = new _webpackDevServer2.default(compiler, _webpackDev2.default.devServer);
    server.listen(3001, function () {
        console.log('Server Starting at localhost:3001');
    });
}

(0, _routers2.default)(app, _config.config);

app.listen(3000, function () {
    console.log('Server Starting at localhost:3000');
});