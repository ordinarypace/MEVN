'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _expressVue = require('express-vue');

var _expressVue2 = _interopRequireDefault(_expressVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, config) {
    app.set('views', config.root + '/src');
    app.set('vue', {
        componentsDir: config.root + '/src/components',
        defaultLayout: 'layout'
    });
    app.engine('vue', _expressVue2.default);
    app.set('view engine', 'vue');

    app.use(_express2.default.static('public'));

    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({
        extended: true
    }));

    config.env === 'production' ? app.use((0, _compression2.default)()) : app.use((0, _morgan2.default)('dev'));
    app.use((0, _expressValidator2.default)());
    app.use((0, _methodOverride2.default)());
};