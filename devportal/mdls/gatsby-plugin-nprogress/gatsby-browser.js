"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRouteUpdate = exports.onRouteUpdateDelayed = exports.onClientEntry = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _nprogress = _interopRequireDefault(require("nprogress"));

var defaultOptions = {
  color: "#29d"
};

var onClientEntry = function onClientEntry(a, pluginOptions) {
  if (pluginOptions === void 0) {
    pluginOptions = {};
  }

  // Merge default options with user defined options in `gatsby-config.js`
  var options = (0, _extends2.default)({}, defaultOptions, pluginOptions); // Inject styles.

  var styles = "\n    #nprogress {\n     pointer-events: none;\n    }\n    #nprogress .bar {\n      background: " + options.color + ";\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 2px;\n    }\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px " + options.color + ", 0 0 5px " + options.color + ";\n      opacity: 1.0;\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n      transform: rotate(3deg) translate(0px, -4px);\n    }\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n      border: solid 2px transparent;\n      border-top-color: " + options.color + ";\n      border-left-color: " + options.color + ";\n      border-radius: 50%;\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n      animation: nprogress-spinner 400ms linear infinite;\n    }\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n    @-webkit-keyframes nprogress-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n    @keyframes nprogress-spinner {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n  ";
  var node = document.createElement("style");
  node.id = "nprogress-styles";
  node.innerHTML = styles;
  document.head.appendChild(node);

  _nprogress.default.configure(options);
};

exports.onClientEntry = onClientEntry;

var onRouteUpdateDelayed = function onRouteUpdateDelayed() {
  _nprogress.default.start();
};

exports.onRouteUpdateDelayed = onRouteUpdateDelayed;

var onRouteUpdate = function onRouteUpdate() {
  _nprogress.default.done();
};

exports.onRouteUpdate = onRouteUpdate;