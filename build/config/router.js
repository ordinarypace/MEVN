'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, config) {
    var router = _express2.default.Router();
    var routers = _glob2.default.sync(config.root + '/build/routes/**/*.js');

    app.use('/', router);

    routers.forEach(function (route) {
        require(route).default(router);
    });
};