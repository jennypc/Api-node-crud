"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app.js"));

_app["default"].listen(_app["default"].get('port'));

console.log('server on port', 3000);