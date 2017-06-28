'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cluster = require('cluster');

var _cluster2 = _interopRequireDefault(_cluster);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    if (_cluster2.default.isMaster) {
        _os2.default.cpus().forEach(function (cpu) {
            return _cluster2.default.fork();
        });

        _cluster2.default.on('exit', function (worker, code, signal) {
            console.log('Worker died' + worker.process.pid);
            _cluster2.default.fork();
        });
    } else {
        console.log('Slave server' + _cluster2.default.worker.process.pid);
    }
};