'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var home = exports.home = function home(req, res) {
    if (res) {
        res.send('hello my home');
    }
};

var fetch = exports.fetch = function fetch(req, res) {
    if (res) {
        res.send('hello');
    }
};