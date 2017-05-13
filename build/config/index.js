'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.config = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = exports.config = {
    root: _path2.default.normalize(__dirname + '/'),
    rootPath: process.env.ROOT_PATH,
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development'
};