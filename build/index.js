'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('../config/webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

var _opn = require('opn');

var _opn2 = _interopRequireDefault(_opn);

var _httpProxyMiddleware = require('http-proxy-middleware');

var _httpProxyMiddleware2 = _interopRequireDefault(_httpProxyMiddleware);

var _env = require('./config/env');

var _app = require('./config/app');

var _app2 = _interopRequireDefault(_app);

var _router = require('./config/router');

var _router2 = _interopRequireDefault(_router);

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // load dependency modules

var port = _env.config.port;

var proxyTable = _env.config.proxyTable;
var compiler = (0, _webpack2.default)(_webpack4.default);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: _webpack4.default.output.publicPath,
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

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: function log() {}
});

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});

Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context];
    if (typeof options === 'string') {
        options = { target: options };
    }

    app.use((0, _httpProxyMiddleware2.default)(context, options));
});

app.use(require('connect-history-api-fallback')());
app.use(devMiddleware);
app.use(hotMiddleware);

devMiddleware.waitUntilValid(function () {
    console.log('> Listening at localhost:3000');
});

(0, _app2.default)(app, _env.config);
(0, _database2.default)();
(0, _router2.default)(app, _env.config);

//TODO : add cluster
app.listen(port, function () {
    console.log('Server Starting at localhost:3000');

    if (_env.config.env !== 'development') {
        (0, _opn2.default)('http://localhost:3000');
    }
});