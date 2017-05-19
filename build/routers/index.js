'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _home = require('./home.router');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    var router = _express2.default.Router();
    app.use('/', router);

    (0, _home2.default)(router);
};

// routers