'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var TodoSchema = new Schema({
    date: Date,
    text: String,
    complete: Boolean
});

exports.default = _mongoose2.default.model('Todo', TodoSchema);