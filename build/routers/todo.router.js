'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _todo = require('../controllers/todo.controller');

var TodoController = _interopRequireWildcard(_todo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (router) {
    router.get('/todo', TodoController.fetch);
    router.post('/todo', TodoController.add);
    router.put('/todo', TodoController.toggle);
    router.delete('/todo', TodoController.remove);
};