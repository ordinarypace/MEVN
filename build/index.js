'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _opn = require('opn');

var _opn2 = _interopRequireDefault(_opn);

var _env = require('./config/env');

var _middleware = require('./config/middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _app = require('./config/app');

var _app2 = _interopRequireDefault(_app);

var _router = require('./config/router');

var _router2 = _interopRequireDefault(_router);

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // load dependency modules

var port = _env.config.port;

(0, _middleware2.default)(app, _env.config);
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