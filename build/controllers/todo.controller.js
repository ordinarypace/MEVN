'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.remove = exports.toggle = exports.add = exports.fetch = undefined;

var _todo = require('../models/todo.model');

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = exports.fetch = function fetch(req, res) {
    var data = _todo2.default.find({}).lean().exec(function (err, data) {
        if (data.length > 0) {
            return res.json(data);
        }

        return res.json(null);
    });
};

var add = exports.add = function add(req, res) {
    var data = {
        date: new Date(),
        text: req.body.text,
        complete: false
    };
    var todo = new _todo2.default(data);

    todo.save(function (err, item) {
        if (err) {
            res.send(err);
        }

        return res.json({ success: true, _id: item.id });
    });
};

var toggle = exports.toggle = function toggle(req, res) {
    _todo2.default.findByIdAndUpdate(req.body.id, { $set: { complete: true } }, function (err, user) {
        if (err) {
            res.send(err);
        }

        res.json({ success: true });
    });
};

var remove = exports.remove = function remove(req, res) {
    _todo2.default.findOneAndRemove(req.body.id, function (err, user) {
        if (err) {
            res.send(err);
        }

        res.json({ success: true });
    });
};