'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

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
    var router = _express2.default.Router();

    app.set('views', config.root + '/routes');
    app.set('vue', {
        components: config.root + '/components',
        defaultLayout: 'layout'
    });

    app.engine('vue', _expressVue2.default);
    app.set('view engine', 'vue');

    //app.use(express.static(__dirname, '/public'));

    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({
        extended: true
    }));
    app.use((0, _expressValidator2.default)());
    app.use((0, _morgan2.default)('dev'));
    app.use((0, _methodOverride2.default)());
    app.use((0, _compression2.default)());
    app.use('/', router);

    var controllers = _glob2.default.sync(config.root + '/controller/**/*.js');

    console.log(controllers);

    controllers.forEach(function (controller) {
        require(controller).default(router);
    });
};