"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-redeclare */
// $FlowFixMe[name-already-bound] workaround for: https://github.com/facebook/flow/issues/4441
var objectValues = Object.values || function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

var _default = objectValues;
exports.default = _default;
