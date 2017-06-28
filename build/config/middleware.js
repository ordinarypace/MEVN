'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('../../config/webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _connectHistoryApiFallback = require('connect-history-api-fallback');

var _connectHistoryApiFallback2 = _interopRequireDefault(_connectHistoryApiFallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, config) {
    var proxyTable = config.proxyTable;
    var compiler = (0, _webpack2.default)(_webpack4.default);

    var devMiddleware = (0, _webpackDevMiddleware2.default)(compiler, {
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

    var hotMiddleware = (0, _webpackHotMiddleware2.default)(compiler, {
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

        app.use(proxyMiddleware(context, options));
    });

    app.use((0, _connectHistoryApiFallback2.default)());
    app.use(devMiddleware);
    app.use(hotMiddleware);

    devMiddleware.waitUntilValid(function () {
        console.log('> Listening at localhost:3000');
    });
};