import React, { useContext, useRef, useState, useEffect, useLayoutEffect, useMemo, Component } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var debug = createCommonjsModule(function (module) {
/**
 * 
 * I stole most of this code from the debug lib
 * https://github.com/visionmedia/debug
 * 
 * Just wanted it to be easy to debug without relying on the dependency!
 */

/**
	* Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @param {String} colors color pallette to choose from
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
function selectColor(namespace, colors) {
  var hash = 0;

  for (var i = 0; i < namespace.length; i++) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return colors[Math.abs(hash) % colors.length];
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */


function formatNodeArgs(args, config) {
  var name = config.namespace;

  if (config.useColors) {
    var c = config.color;
    var colorCode = "\x1B[3" + (c < 8 ? c : '8;5;' + c);
    var prefix = "  ".concat(colorCode, ";1m").concat(name, " \x1B[0m");
    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
  } else {
    args[0] = name + ' ' + args[0];
  }
}
/**
 * Colorize log arguments if enabled.
 *
 */


function formatBrowserArgs(args, config) {
  args[0] = (config.useColors ? '%c' : '') + config.namespace;

  if (!config.useColors) {
    return;
  }

  var c = 'color: ' + config.color; // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}

var browserColors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Load `namespaces`.
 *
 * @return {String} returns the debug modes
 * @api private
 */

function loadBrowser() {
  var namespaces;

  try {
    namespaces = localStorage.getItem('debug');
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!namespaces && typeof process !== 'undefined' && 'env' in process) {
    namespaces = process.env.DEBUG;
  }

  return {
    namespaces: namespaces || '',
    colors: browserColors,
    useColors: true,
    formatArgs: formatBrowserArgs
  };
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the debug modes
 * @api private
 */


function loadNode() {
  return {
    namespaces: process.env.DEBUG || '',
    colors: [6, 2, 3, 4, 5, 1],
    useColors: true,
    formatArgs: formatNodeArgs
  };
}

function createLogger() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var config = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (prefix) {
      args.unshift(prefix);
    } // Create a namespace regex for each namespace


    var matches = config.namespaces.split(',').map(function (namespace) {
      // Remove wildcard and add to regex if wildcard
      if (namespace[namespace.length - 1] === '*') {
        return new RegExp('^' + namespace.slice(0, namespace.length - 1) + '.*' + '$');
      }

      return new RegExp('^' + namespace + '$');
    }); // Does the prefix match a namespace

    var match = matches.some(function (regex) {
      return regex.test(prefix);
    });
    var conf = {
      color: selectColor(prefix, config.colors),
      namespace: prefix,
      useColors: config.useColors
    };

    if (process.env.NODE_ENV !== 'production' && match) {
      var _console;

      config.formatArgs(args, conf);

      (_console = console).log.apply(_console, args);
    }
  };
}

function nodeLogger(prefix) {
  return createLogger(prefix, loadNode());
}

function browserLogger(prefix) {
  return createLogger(prefix, loadBrowser());
}
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */


if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
  module.exports = browserLogger;
} else {
  module.exports = nodeLogger;
}
});

var debug$1 = debug('informed:ObjMap' + '\t');
/* -------------------- toPath -------------------- */

var ldtoPath = function ldtoPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String.prototype.replace.call(path, /\['(.+?)'\]/g, '.$1').split(/[,[\].]+?/).filter(Boolean);
};
/* --------------------- get --------------------- */


var ldget = function ldget(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultValue = arguments.length > 2 ? arguments[2] : undefined;
  var result = String.prototype.replace.call(path, /\['(.+?)'\]/g, '.$1').split(/[,[\].]+?/).filter(Boolean).reduce(function (res, key) {
    return res !== null && res !== undefined ? res[key] : res;
  }, obj);
  return result === undefined || result === obj ? defaultValue : result;
};
/* --------------------- has --------------------- */
// foo -->
// foo.bar --> foo
// foo.bar[3] --> foo.bar
// foo.bar.baz[2].raz.taz[5].laz --> foo.bar.baz[2].raz.taz[5]


var parentPath = function parentPath(path) {
  return ".".concat(path).replace(/(.*)[.[].*/, '$1').replace(/\./, '');
}; // foo --> foo
// foo.bar --> bar
// foo.bar[3] --> [3]
// foo.bar.baz[2].raz.taz[5].laz --> laz


var pathKey = function pathKey(path) {
  return path.replace(parentPath(path), '').replace(/\./, '');
};

var ldhas = function ldhas(obj, path) {
  var pPath = parentPath(path);
  var key = pathKey(path); // If we have parent path then get the object at that location
  // .. otherwise its the root object

  var parentObj = pPath ? ldget(obj, pPath) : obj; // If its [3] turn key into 3

  return !!(parentObj && Object.hasOwnProperty.call(parentObj, key.replace(/\[(.*)\]/, '$1')));
};
/* --------------------- set --------------------- */


var ldset = function ldset(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var val = arguments.length > 2 ? arguments[2] : undefined;
  String.prototype.replace.call(path, /\['(.+?)'\]/g, '.$1').split(/[,[\].]+?/).filter(Boolean).reduce(function (res, key, i, arr) {
    //console.log('RES', res, 'Key', key, 'I', i, 'Arr', arr, 'OBJ', obj);
    // At the leaf set the value
    if (i === arr.length - 1) {
      res[key] = val;
      return res[key];
    } // Initialize to new array or object if needed


    if (res[key] === undefined) {
      if (Number.isInteger(+arr[i + 1])) {
        res[key] = [];
      } else {
        res[key] = {};
      }

      return res[key];
    } // Exception for if the value is changeing to an array


    if (Number.isInteger(+arr[i + 1]) && !Array.isArray(res[key])) {
      res[key] = [];
    } //TODO exception for if object ??
    // Otherwise keep whats there


    return res[key];
  }, obj);
};
/* --------------------- unset --------------------- */


var ldunset = function ldunset(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var found = false;
  String.prototype.replace.call(path, /\['(.+?)'\]/g, '.$1').split(/[,[\].]+?/).filter(Boolean).reduce(function (res, key, i, arr) {
    // Base case res is undefined
    if (res === undefined) {
      return res;
    } // At the leaf delete the value


    if (i === arr.length - 1) {
      delete res[key];
      found = true;
      return res[key];
    } // Otherwise keep going


    return res[key];
  }, obj);
  return found;
};
/* --------------------- pullAt --------------------- */


var ldpullAt = function ldpullAt(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var pulled;
  String.prototype.replace.call(path, /\['(.+?)'\]/g, '.$1').split(/[,[\].]+?/).filter(Boolean).reduce(function (res, key, i, arr) {
    // Base case res is undefined
    if (res === undefined) {
      return res;
    } // At the leaf delete the value


    if (i === arr.length - 1 && Array.isArray(res)) {
      // Pull out one value at index ( key )
      pulled = res.splice(key, 1);
      return res[key];
    } // Otherwise keep going


    return res[key];
  }, obj);
  return pulled;
};
/* --------------------- values --------------------- */


var ldvalues = function ldvalues() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = Object.keys(obj);
  return props.map(function (key) {
    return obj[key];
  });
};

var pathToArrayElem = function pathToArrayElem(path) {
  var pathArray = ldtoPath(path);
  return Number.isInteger(+pathArray[pathArray.length - 1]);
};

var ObjectMap = /*#__PURE__*/function () {
  function ObjectMap() {
    _classCallCheck(this, ObjectMap);
  }

  _createClass(ObjectMap, null, [{
    key: "empty",
    value: function empty(object) {
      return ldvalues(object).length === 0;
    }
  }, {
    key: "get",
    value: function get(object, path) {
      var val = ldget(object, path); //debug('GOT', path, val);

      return val;
    }
  }, {
    key: "has",
    value: function has(object, path) {
      return ldhas(object, path);
    }
  }, {
    key: "set",
    value: function set(object, path, value) {
      if (value !== undefined) {
        debug$1('SETTING', path, value);
        ldset(object, path, value);
      } else {
        // Setting things to undefined in informed is special!
        // so in this else statement we deal with that
        // If the path is to an array leaf then we want to set to undefined
        // Example:
        // path = 'foo.bar[2]'
        // foo.bar = [ 'baz', 'raz', 'taz' ]
        // setting taz to undefined   ^^^
        if (pathToArrayElem(path) && ObjectMap.get(object, path) !== undefined) {
          debug$1('Special case SETTING', path, 'to undefined');
          ldset(object, path, undefined);
          var pathArray = ldtoPath(path);
          pathArray = pathArray.slice(0, pathArray.length - 1);
          cleanup(object, pathArray);
        } // Only delete the field if it needs to be deleted and its not a path to an array ( array leaf )
        // Example:
        // path = 'foo.bar'
        // foo.bar = 'baz'
        // removing foo.bar from the object completley
        else if (!pathToArrayElem(path) && ObjectMap.get(object, path) !== undefined) {
            debug$1('Special case REMOVING', path, 'from object completley');
            ObjectMap["delete"](object, path);
          }
      }
    }
  }, {
    key: "delete",
    value: function _delete(object, path) {
      debug$1('DELETE', path); // Special case for arrays

      if (pathToArrayElem(path)) {
        debug$1('ARRAY', path); //ldunset(object, path);

        this.pullOut(object, path);
      } else {
        ldunset(object, path);
      }

      var pathArray = ldtoPath(path);
      pathArray = pathArray.slice(0, pathArray.length - 1);
      cleanup(object, pathArray);
    } // Very important ;)

  }, {
    key: "pullOut",
    value: function pullOut(object, path) {
      // Get the path to the array
      var pathArray = ldtoPath(path); // debug('PathArray1', pathArray);

      var index = pathArray[pathArray.length - 1];
      pathArray = pathArray.slice(0, pathArray.length - 1);
      debug$1('Pulling out:', pathArray, 'index', index); // Get the array

      var arr = ldget(object, pathArray);
      debug$1('Array', arr); // Pull out of array

      if (Array.isArray(arr)) {
        ldpullAt(arr, index);
      }

      cleanup(object, pathArray);
    }
  }]);

  return ObjectMap;
}();

function cleanup(obj, path) {

  // Base case no path left
  if (path.length === 0) {
    return;
  }

  var object = ldget(obj, path); // Clean up undefined from array
  // if (Array.isArray(object) && pull) {
  //   ldpull(object, undefined);
  // }
  // Delete object if its empty

  if (Array.isArray(object) ? object.every(function (e) {
    return e == null;
  }) : JSON.stringify(object) === '{}') {
    ldunset(obj, path);
  } // Recur


  cleanup(obj, path.slice(0, path.length - 1));
}

var FormRegisterContext = /*#__PURE__*/React.createContext({
  register: function register() {},
  deregister: function deregister() {},
  setValue: function setValue() {},
  setTouched: function setTouched() {},
  setError: function setError() {},
  update: function update() {},
  getField: function getField() {},
  expectRemoval: function expectRemoval() {},
  getInitialValue: function getInitialValue() {},
  getSavedValue: function getSavedValue() {}
});
var FormStateContext = /*#__PURE__*/React.createContext({});
var FormApiContext = /*#__PURE__*/React.createContext({
  getFullField: function getFullField() {},
  getValues: function getValues() {},
  getOptions: function getOptions() {
    return {};
  },
  setInitialValue: function setInitialValue() {},
  getInitialValue: function getInitialValue() {},
  getDerrivedValue: function getDerrivedValue() {},
  getSavedValue: function getSavedValue() {},
  removeSavedState: function removeSavedState() {}
});
var GroupContext = /*#__PURE__*/React.createContext();
var ArrayFieldStateContext = /*#__PURE__*/React.createContext();
var ArrayFieldApiContext = /*#__PURE__*/React.createContext();
var ArrayFieldItemApiContext = /*#__PURE__*/React.createContext();
var ArrayFieldItemStateContext = /*#__PURE__*/React.createContext();
var MultistepStateContext = /*#__PURE__*/React.createContext();
var MultistepApiContext = /*#__PURE__*/React.createContext();
var MultistepStepContext = /*#__PURE__*/React.createContext();

function useFormApi() {
  var formApi = useContext(FormApiContext);
  return formApi;
}

// https://github.com/facebook/react/issues/14543

function useStateWithGetter(initial) {
  var ref = useRef();
  var mounted = useRef(true);

  var _useState = useState(initial),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  ref.current = state;

  var set = function set(value) {
    ref.current = value;
    if (mounted.current) setState(value);
  };

  var get = function get() {
    return ref.current;
  };

  useEffect(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return [state, set, get];
}

var getChildDisplayName = function getChildDisplayName(WrappedComponent) {
  // fix for "memo" components
  if (WrappedComponent.type && WrappedComponent.type.name) {
    return WrappedComponent.type.name;
  }

  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
var yupToFormErrors = function yupToFormErrors(yupError) {
  var errors = {};

  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      // console.log(yupError.path);
      ObjectMap.set(errors, yupError.path, yupError.message);
      return;
    }

    var _iterator = _createForOfIteratorHelper(yupError.inner),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var err = _step.value;

        if (!ObjectMap.get(errors, err.path)) {
          // console.log(errors, err.path, err.message);
          ObjectMap.set(errors, err.path, err.message);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return errors;
};
var validateYupSchema = function validateYupSchema(schema, values) {
  try {
    schema.validateSync(values, {
      abortEarly: false
    });
  } catch (e) {
    var formErrors = yupToFormErrors(e);
    return formErrors;
  }
};
var yupToFormError = function yupToFormError(yupError) {
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return;
    }

    var err = yupError.inner[0];
    return err.message;
  }
};
var validateYupField = function validateYupField(schema, value) {
  try {
    schema.validateSync(value, {
      abortEarly: false
    });
  } catch (e) {
    return yupToFormError(e);
  }
};
var validateAjvSchema = function validateAjvSchema(validate, data) {
  validate(data);
  var errors = {};

  if (validate.errors) {
    validate.errors.forEach(function (_ref) {
      var message = _ref.message,
          dataPath = _ref.dataPath,
          keyword = _ref.keyword,
          params = _ref.params;
      var path = dataPath; // Special case for required

      if (keyword === 'required') {
        path = "".concat(path, ".").concat(params.missingProperty);
      } // Get rid of leading dot


      path = path.replace('.', ''); // console.log('PATH', path, message);
      // TODO get message from informed if present

      ObjectMap.set(errors, path, message);
    });
  }

  return errors;
}; // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript

var uuidv4 = function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
var debounce = function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      clearTimeout(timeout);
      func.apply(void 0, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
var computeFieldFromProperty = function computeFieldFromProperty(propertyName, property, prefix) {
  var uiControl = property['ui:control'],
      informedProps = property['informed:props'],
      inputProps = property['input:props'],
      uiBefore = property['ui:before'],
      uiAfter = property['ui:after'],
      oneOf = property.oneOf,
      items = property.items,
      schemaEnum = property["enum"],
      label = property.title,
      min = property.minimum,
      max = property.maximum,
      minLength = property.minLength,
      maxLength = property.maxLength,
      pattern = property.pattern,
      type = property.type,
      subProperties = property.properties; // Set Id if not passed

  var id = uuidv4();

  if (inputProps && inputProps.id) {
    id = inputProps.id;
  }

  var field = {
    componentType: uiControl,
    field: prefix ? "".concat(prefix, ".").concat(propertyName) : propertyName,
    type: type,
    uiBefore: uiBefore,
    uiAfter: uiAfter,
    properties: type === 'object' ? subProperties : undefined,
    items: type === 'array' ? items : undefined,
    props: _objectSpread2(_objectSpread2({
      label: label,
      id: id,
      min: min,
      max: max,
      minLength: minLength,
      maxLength: maxLength,
      pattern: pattern
    }, informedProps), inputProps)
  };

  if (oneOf) {
    var options = property.oneOf.map(function (option) {
      var _option$inputProps = option['input:props'],
          inputProps = _option$inputProps === void 0 ? {} : _option$inputProps;
      return _objectSpread2({
        value: option["const"],
        label: option.title
      }, inputProps);
    });
    field.props.options = options;
  }

  if (schemaEnum) {
    var _options = property["enum"].map(function (val) {
      return {
        value: val,
        label: val
      };
    });

    field.props.options = _options;
  }

  if (items && items.oneOf) {
    var _options2 = items.oneOf.map(function (option) {
      var _option$inputProps2 = option['input:props'],
          inputProps = _option$inputProps2 === void 0 ? {} : _option$inputProps2;
      return _objectSpread2({
        value: option["const"],
        label: option.title
      }, inputProps);
    });

    field.props.options = _options2;
  }

  return field;
};
var computeFieldsFromSchema = function computeFieldsFromSchema(schema, onlyValidateSchema, prefix) {
  if (!schema || onlyValidateSchema) {
    return [];
  } // Grab properties and items off of schema


  var _schema$properties = schema.properties,
      properties = _schema$properties === void 0 ? {} : _schema$properties,
      allOf = schema.allOf,
      _schema$propertyOrder = schema.propertyOrder,
      propertyOrder = _schema$propertyOrder === void 0 ? [] : _schema$propertyOrder;

  if (Object.keys(properties).length > 0) {
    // Attempt to generate fields from properties
    var fields = Object.keys(properties).sort(function (a, b) {
      var aIndex = propertyOrder.indexOf(a);
      var bIndex = propertyOrder.indexOf(b);
      return (aIndex > -1 ? aIndex : propertyOrder.length + 1) - (bIndex > -1 ? bIndex : propertyOrder.length + 1);
    }).map(function (propertyName) {
      var property = properties[propertyName];
      var field = computeFieldFromProperty(propertyName, property, prefix);
      return field;
    }); // Check for all of ( we have conditionals )

    if (allOf) {
      fields.push({
        componentType: 'conditionals',
        // Each element of the "allOf" array is a conditional
        allOf: allOf
      });
    }

    return fields;
  }

  return [];
}; // Examples
// field = "name" ---> properties.name
// field = "brother.name" ---> properties.brother.properties.name
// field = "brother.siblings[1].friend.name" ---> properties.brother.properties.siblings.items[1].properties.friend.properties.name

var getSchemaPathFromJsonPath = function getSchemaPathFromJsonPath(jsonPath) {
  // Convert
  var schemaPath = jsonPath.replace(/\./g, '.properties.').replace(/\[/g, '.itmes['); // Add first properties

  schemaPath = "properties.".concat(schemaPath);
  return schemaPath;
};
/* -------------------------- Formatter ----------------------------- */

var getFormatter = function getFormatter(formatter, value) {
  // If mask is a string turn it into an array;
  if (typeof formatter === 'string') {
    return formatter.split('').map(function (_char) {
      if (_char === '#') {
        return /\d/;
      }

      if (_char === '*') {
        return /[\w]/;
      }

      return _char;
    });
  } // If mask is a function use it to genreate current mask


  if (typeof formatter === 'function') {
    return formatter(value);
  }

  if (Array.isArray(formatter)) {
    return formatter;
  } // Should never make it here throw


  throw new Error('Formatter must be string, array, or function');
};

var matchingIndex = function matchingIndex(a, b) {
  var i = 0;
  var mi = -1;
  var matching = true; // a = "+1 "
  // b = "+12"

  while (matching && i < a.length) {
    if (a[i] == b[i]) {
      mi = i;
    } else {
      matching = false;
    }

    i = i + 1;
  }

  return mi;
};

var informedFormat = function informedFormat(val, frmtr) {
  // console.log('Formatting', val);
  // Null check
  if (!val) {
    return {
      val: val,
      offset: 0
    };
  }

  var value = "".concat(val); // Generate formatter array

  var formatter = getFormatter(frmtr, value); // Start to fill in the array
  // Example: phone formatter
  // formatter =['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  // value examples:
  // "1231231234 ----> +1 123-123-1234
  // "+" 				 ----> +
  // "+1" 			 ----> +1
  // "+2"				 ----> +1 2
  // "1"				 ----> +1 1
  // "1234"			 ----> +1 123-4
  // "123a"      ----> +1 123
  // Determine prefix length and suffix start

  var prefixLength = formatter.findIndex(function (v) {
    return typeof v != 'string';
  });

  var suffixStart = formatter.length - _toConsumableArray(formatter).reverse().findIndex(function (v) {
    return typeof v != 'string';
  }); // Formatted value


  var formatted = []; // The characters from the current value

  var chars = value.split(''); // To track the value index during itteration

  var vIndex = 0;
  var start = 0; // If the value matches part of the prefix take it out
  // Example prefix = "+1 " value = ["+1 123-123-1234", "+12", "+2"]

  var matchIndex = matchingIndex(formatter.slice(0, prefixLength), chars.slice(0, prefixLength)); // console.log('Matching index', matchIndex);

  if (matchIndex > -1) {
    //vIndex = prefixLength;
    vIndex = matchIndex + 1;
    formatted = formatted.concat(formatter.slice(0, matchIndex + 1));
    start = matchIndex + 1;
  } // Example prefix = "+1 " value=["1", "1234"]


  if (matchIndex < 0) {
    // Start past the prefix
    formatted = formatted.concat(formatter.slice(0, prefixLength));
    start = prefixLength;
  } // console.log('start', start, formatted);

  for (var i = start; i < formatter.length; i++) {
    // Get current formatter location matcher
    var matcher = formatter[i]; // We get past the prefix if matcher is not a string


    if (vIndex != chars.length) {
      // Get the current value character
      var curChar = chars[vIndex]; // Special case for function

      if (typeof matcher === 'function') {
        formatted.push(matcher(curChar));
        vIndex = vIndex + 1;
      } else {
        // If type is string normal compare otherwise regex compare
        var match = typeof matcher === 'string' ? matcher === curChar : matcher.test(curChar); // If the current character of the value matches and matcher is a string
        // "1" === "1"

        if (match && typeof matcher === 'string') {
          formatted.push(matcher); //if( pastPrefix ){

          vIndex = vIndex + 1; //}
        } // If the current character does not match and matcher is a stirng
        // "1" != "+"
        else if (!match && typeof matcher === 'string') {
            // Special check for 123a ---> dont want "+1 123-"
            // Special check for 1234 ---> DO want "+1 123-4"
            if (vIndex != chars.length) formatted.push(matcher);
          } // If the current character matches and the matcher is not a string
          // /\d/.test("2")
          else if (match && typeof matcher != 'string') {
              formatted.push(curChar);
              vIndex = vIndex + 1;
            } // If the current character does NOT match and the matecer is regex
            // /\d/.test("a")
            else if (!match && typeof matcher != 'string') {
                // Throw out this value
                vIndex = vIndex + 1;
                i = i - 1;
              }
      }
    } else {
      // If mattcher is a string and we are at suffix keep going
      if (typeof matcher === 'string' && i >= suffixStart) {
        formatted.push(matcher);
      } else {
        // Otherwise we want to break out
        break;
      }
    }
  }

  return {
    value: formatted.join(''),
    offset: value ? formatted.length - value.length : 0
  };
};
/* --------------------------------------- createIntlNumberFormatter --------------------------------------- */

var createIntlNumberFormatter = function createIntlNumberFormatter(locale, opts) {
  var _numberFormatterWitho, _numberFormatterWitho2;

  var numberFormatter = new Intl.NumberFormat(locale, opts);
  var numberFormatterWithoutOpts = new Intl.NumberFormat(locale);
  var decimalChar = (_numberFormatterWitho = (_numberFormatterWitho2 = numberFormatterWithoutOpts.formatToParts(0.1).find(function (_ref2) {
    var type = _ref2.type;
    return type === 'decimal';
  })) === null || _numberFormatterWitho2 === void 0 ? void 0 : _numberFormatterWitho2.value) !== null && _numberFormatterWitho !== void 0 ? _numberFormatterWitho : '.';

  function isRegexEqual(x, y) {
    return x instanceof RegExp && y instanceof RegExp && x.source === y.source && x.global === y.global && x.ignoreCase === y.ignoreCase && x.multiline === y.multiline;
  }

  function findLastIndex(arr, predicate) {
    var l = arr.length; // eslint-disable-next-line no-plusplus

    while (l--) {
      if (predicate(arr[l])) return l;
    }

    return -1;
  }

  function insert(arr, index, value) {
    var nextArr = _toConsumableArray(arr);

    if (Array.isArray(value)) {
      nextArr.splice.apply(nextArr, [index, 0].concat(_toConsumableArray(value)));
    } else {
      nextArr.splice(index, 0, value);
    }

    return nextArr;
  }

  function stripNonNumeric(str) {
    return "".concat(str).replace(/\D/g, '');
  }

  function toNumberString(str) {
    return "".concat(str).split(decimalChar).map(function (splitStr) {
      return stripNonNumeric(splitStr);
    }).join('.');
  }

  function toFloat(str) {
    if (typeof str === 'number') {
      return str;
    }

    var _float = parseFloat(toNumberString(str));

    return !Number.isNaN(_float) ? _float : undefined;
  }

  function mask(value) {
    var _float2 = toNumberString(value); // if (!float) {
    //   return [];
    // }


    var fraction = "".concat(_float2).split('.')[1];
    var numberParts = numberFormatter.formatToParts(Number(_float2));

    if (fraction === '0') {
      numberParts.push({
        type: 'decimal',
        value: decimalChar
      }, {
        type: 'fraction',
        value: fraction
      });
    }

    var maskArray = numberParts.reduce(function (pv, _ref3) {
      var type = _ref3.type,
          partValue = _ref3.value;

      if (['decimal', 'fraction'].includes(type) && fraction == null) {
        return pv;
      }

      if (['integer', 'fraction'].includes(type)) {
        return [].concat(_toConsumableArray(pv), _toConsumableArray(partValue.split('').filter(function (_, index) {
          return type === 'fraction' ? index < fraction.length : true;
        }).map(function () {
          return /\d/;
        })));
      }

      if (type === 'currency') {
        return [].concat(_toConsumableArray(pv), _toConsumableArray(partValue.split('')));
      }

      return [].concat(_toConsumableArray(pv), [partValue]);
    }, []);
    var lastDigitIndex = findLastIndex(maskArray, function (maskChar) {
      return isRegexEqual(maskChar, /\d/);
    });

    if (maskArray.indexOf(decimalChar) === -1 && "".concat(value).indexOf(decimalChar) !== -1) {
      maskArray = insert(maskArray, lastDigitIndex + 1, [decimalChar, '[]']);
      lastDigitIndex += 2; // we want to insert a new number after the decimal
    }

    var endOfMask = maskArray.slice(lastDigitIndex + 1).join('');
    maskArray = [].concat(_toConsumableArray(maskArray.slice(0, lastDigitIndex + 1)), [endOfMask]);
    return maskArray;
  }

  var parser = function parser(value) {
    if (value == null) {
      return undefined;
    }

    return toFloat(value);
  };

  return {
    formatter: mask,
    parser: parser
  };
};

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getChildDisplayName: getChildDisplayName,
  yupToFormErrors: yupToFormErrors,
  validateYupSchema: validateYupSchema,
  yupToFormError: yupToFormError,
  validateYupField: validateYupField,
  validateAjvSchema: validateAjvSchema,
  uuidv4: uuidv4,
  debounce: debounce,
  computeFieldFromProperty: computeFieldFromProperty,
  computeFieldsFromSchema: computeFieldsFromSchema,
  getSchemaPathFromJsonPath: getSchemaPathFromJsonPath,
  informedFormat: informedFormat,
  createIntlNumberFormatter: createIntlNumberFormatter
});

// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? useLayoutEffect : useEffect;

var useCursorPosition = function useCursorPosition(_ref) {
  var value = _ref.value,
      inputRef = _ref.inputRef,
      _ref$maintainCursor = _ref.maintainCursor,
      maintainCursor = _ref$maintainCursor === void 0 ? true : _ref$maintainCursor;

  var _useStateWithGetter = useStateWithGetter(0),
      _useStateWithGetter2 = _slicedToArray(_useStateWithGetter, 3),
      cursor = _useStateWithGetter2[0],
      setCursor = _useStateWithGetter2[1],
      getCursor = _useStateWithGetter2[2];

  var _useStateWithGetter3 = useStateWithGetter(0),
      _useStateWithGetter4 = _slicedToArray(_useStateWithGetter3, 3),
      cursorOffset = _useStateWithGetter4[0],
      setCursorOffset = _useStateWithGetter4[1],
      getCursorOffset = _useStateWithGetter4[2];

  useIsomorphicLayoutEffect(function () {
    if (inputRef.current != null && getCursor()) {
      // inputRef.current.selectionEnd = getCursor() + getCursorOffset();
      var cursorLoc = getCursor() + getCursorOffset(); // Only offset if we need to

      if (getCursorOffset() != 0 && maintainCursor) {
        inputRef.current.setSelectionRange(cursorLoc + 1, cursorLoc + 1);
      } else if (maintainCursor) {
        inputRef.current.setSelectionRange(cursorLoc, cursorLoc);
      }
    }
  }, [value]);
  return {
    setCursorOffset: setCursorOffset,
    setCursor: setCursor,
    cursor: cursor,
    getCursor: getCursor,
    cursorOffset: cursorOffset
  };
};

/**
 *
 * Acts as a react useEffect that does not run on first render.
 *
 * @example
 * useUpdateEffect(()=>{...}, [foo])
 * 1st Render: NO CALL
 * foo changes: GETS CALLED
 *
 */

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  var firstRef = useRef(true);
  var isFirstMount = firstRef.current;
  useEffect(function () {
    if (!isFirstMount) {
      return effect();
    } else {
      firstRef.current = false;
    }
  }, deps);
};

var logger = debug('informed:useField' + '\t'); // localStorage.debug = 'informed:.*' << HOW to enable debuging

var initializeValue = function initializeValue(value, mask, formatter, parser, initialize) {
  if (value != null) {
    // Call users initialize if it was passed
    if (initialize) {
      return initialize(value);
    } // Call mask if it was passed


    if (mask) {
      return mask(value);
    }

    if (formatter && !parser) {
      var res = informedFormat(value, formatter);
      return res.value;
    }

    return value;
  } // Not needed but called out specifically


  return undefined;
};

var initializeMask = function initializeMask(value, format, parse, formatter) {
  // Call format and parse if they were passed
  if (format && parse) {
    return format(value);
  } // Call formatter


  if (formatter) {
    var res = informedFormat(value, formatter);
    return res.value;
  }

  return value;
};

var generateValidationFunction = function generateValidationFunction(validationFunc, validationSchema, _ref) {
  var required = _ref.required;

  // We dont want a validation function if there was nothing passed
  if (validationFunc || validationSchema) {
    return function (val, values) {
      if (validationSchema) {
        return validateYupField(validationSchema, val);
      }

      if (validationFunc) {
        return validationFunc(val, values);
      }
    };
  }

  if (required) {
    return function (val) {
      return validateRequired(val, required);
    };
  }
};

var generateOnChange = function generateOnChange(_ref2) {
  var fieldType = _ref2.fieldType,
      setValue = _ref2.setValue,
      onChange = _ref2.onChange,
      multiple = _ref2.multiple,
      ref = _ref2.ref;

  var setter = function setter(e) {
    return setValue(e);
  };

  if (fieldType === 'text' || fieldType === 'textArea' || fieldType === 'number') {
    setter = function setter(e) {
      return setValue(e.target.value, e);
    };
  }

  if (fieldType === 'select') {
    setter = function setter() {
      var selected = Array.from(ref.current).filter(function (option) {
        return option.selected;
      }).map(function (option) {
        return option.value;
      });
      setValue(multiple ? selected : selected[0] || '');
    };
  }

  if (fieldType === 'checkbox') {
    setter = function setter(e) {
      setValue(e.target.checked);

      if (onChange) {
        onChange(e);
      }
    };
  }

  return function (e) {
    setter(e);
  };
};

var generateOnBlur = function generateOnBlur(_ref3) {
  var setTouched = _ref3.setTouched,
      onBlur = _ref3.onBlur;
  return function (e) {
    setTouched(true);

    if (onBlur) {
      onBlur(e);
    }
  };
};

var generateValue = function generateValue(_ref4) {
  var fieldType = _ref4.fieldType,
      maskedValue = _ref4.maskedValue,
      multiple = _ref4.multiple,
      value = _ref4.value;

  switch (fieldType) {
    case 'text':
    case 'number':
      return !maskedValue && maskedValue !== 0 ? '' : maskedValue;

    case 'textArea':
      return !maskedValue ? '' : maskedValue;

    case 'select':
      return value || (multiple ? [] : '');

    case 'checkbox':
      return !!value;

    default:
      return value;
  }
};

var generateFieldType = function generateFieldType(fieldType) {
  switch (fieldType) {
    case 'text':
      return fieldType;

    case 'number':
      return fieldType;

    case 'checkbox':
      return fieldType;

    default:
      return;
  }
};

var validateRequired = function validateRequired(value, required) {
  if (required && (value == null || value === '')) {
    return typeof required === 'string' ? required : 'This field is required';
  }
};

function useField() {
  var fieldProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var userRef = arguments.length > 1 ? arguments[1] : undefined;

  // Pull props off of field props
  var field = fieldProps.field,
      validationFunc = fieldProps.validate,
      asyncValidate = fieldProps.asyncValidate,
      validationSchema = fieldProps.validationSchema,
      mask = fieldProps.mask,
      maskWithCursorOffset = fieldProps.maskWithCursorOffset,
      format = fieldProps.format,
      parse = fieldProps.parse,
      formatter = fieldProps.formatter,
      parser = fieldProps.parser,
      initialValue = fieldProps.initialValue,
      validateOnChange = fieldProps.validateOnChange,
      validateOnBlur = fieldProps.validateOnBlur,
      validateOnMount = fieldProps.validateOnMount,
      asyncValidateOnBlur = fieldProps.asyncValidateOnBlur,
      maskOnBlur = fieldProps.maskOnBlur,
      allowEmptyString = fieldProps.allowEmptyString,
      onValueChange = fieldProps.onValueChange,
      notify = fieldProps.notify,
      keepState = fieldProps.keepState,
      maintainCursor = fieldProps.maintainCursor,
      debug = fieldProps.debug,
      shadow = fieldProps.shadow,
      step = fieldProps.step,
      fieldType = fieldProps.fieldType,
      multiple = fieldProps.multiple,
      onChange = fieldProps.onChange,
      onBlur = fieldProps.onBlur,
      formController = fieldProps.formController,
      userRelevant = fieldProps.relevant,
      required = fieldProps.required,
      keepStateIfRelevant = fieldProps.keepStateIfRelevant,
      initialize = fieldProps.initialize,
      _fieldProps$formatter = fieldProps.formatterDependencies,
      formatterDependencies = _fieldProps$formatter === void 0 ? [] : _fieldProps$formatter,
      userProps = _objectWithoutProperties(fieldProps, ["field", "validate", "asyncValidate", "validationSchema", "mask", "maskWithCursorOffset", "format", "parse", "formatter", "parser", "initialValue", "validateOnChange", "validateOnBlur", "validateOnMount", "asyncValidateOnBlur", "maskOnBlur", "allowEmptyString", "onValueChange", "notify", "keepState", "maintainCursor", "debug", "shadow", "step", "fieldType", "multiple", "onChange", "onBlur", "formController", "relevant", "required", "keepStateIfRelevant", "initialize", "formatterDependencies"]); // Create ref to a field id


  var _useState = useState(uuidv4()),
      _useState2 = _slicedToArray(_useState, 1),
      fieldId = _useState2[0]; // Grab the form register context


  var updater = useContext(FormRegisterContext); // Grab multistepContext

  var multistepContext = useContext(MultistepStepContext);
  var inMultistep = multistepContext || keepStateIfRelevant; // Grab the form api

  var formApi = useFormApi(); // Create ref to fieldApi

  var fieldApiRef = useRef(); // Create initial render ref

  var initialRenerRef = useRef(true); // Create ref to fieldObject

  var fieldObjectRef = useRef(); // Create ref for pristine and dirty

  var valueTouched = useRef(false); // Getters for value ref

  var getPristine = function getPristine() {
    return !valueTouched.current;
  };

  var getDirty = function getDirty() {
    return valueTouched.current;
  }; // If the form Controller was passed in then use that instead


  if (formController) {
    updater = formController.updater;
    formApi = formController.getFormApi();
  } // Generate validation function


  var validate = generateValidationFunction(validationFunc, validationSchema, {
    required: required
  }); // Grab possible initial value from form

  var _useState3 = useState(function () {
    return updater.getInitialValue(field);
  }),
      _useState4 = _slicedToArray(_useState3, 1),
      formInitialValue = _useState4[0]; // We might have keep state so check for it!


  var savedState = updater.getSavedValue(field); // Create Initial Values

  var initVal;
  var initTouched; // We do these checks because initial value could be false or zero!!

  if ((keepState || inMultistep) && savedState) {
    logger("Setting field ".concat(name, "'s kept state"), savedState);
    initVal = savedState.value;
    initTouched = savedState.touched; // Remove the saved state

    formApi.removeSavedState(name);
  } else if (initialValue != undefined) {
    initVal = initialValue;
  } else {
    initVal = formInitialValue;
  } // Initialize state


  var _useStateWithGetter = useStateWithGetter(initializeValue(initVal, mask, formatter, parser, initialize)),
      _useStateWithGetter2 = _slicedToArray(_useStateWithGetter, 3),
      value = _useStateWithGetter2[0],
      setVal = _useStateWithGetter2[1],
      getTheVal = _useStateWithGetter2[2];

  var _useStateWithGetter3 = useStateWithGetter(validateOnMount ? validate(value) : undefined),
      _useStateWithGetter4 = _slicedToArray(_useStateWithGetter3, 3),
      error = _useStateWithGetter4[0],
      setErr = _useStateWithGetter4[1],
      getErr = _useStateWithGetter4[2];

  var _useStateWithGetter5 = useStateWithGetter(initTouched),
      _useStateWithGetter6 = _slicedToArray(_useStateWithGetter5, 3),
      touched = _useStateWithGetter6[0],
      setTouch = _useStateWithGetter6[1],
      getTouch = _useStateWithGetter6[2];

  var _useState5 = useState(function () {
    return initializeMask(value, format, parse, formatter);
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      maskedValue = _useState6[0],
      setMaskedValue = _useState6[1];

  var maskedValueRef = useRef();
  maskedValueRef.current = maskedValue; // Create then update refs to props

  var initialValueRef = useRef(initialValue);
  var fieldRef = useRef(field);
  var prevFieldRef = useRef();
  initialValueRef.current = initialValue;
  fieldRef.current = field; // Create ref to input

  var internalRef = useRef(null);
  var ref = React.useMemo(function () {
    return userRef || internalRef;
  }, []); // Setup cursor position tracking

  var _useCursorPosition = useCursorPosition({
    value: value,
    inputRef: ref,
    maintainCursor: !!maintainCursor
  }),
      getCursor = _useCursorPosition.getCursor,
      setCursor = _useCursorPosition.setCursor,
      setCursorOffset = _useCursorPosition.setCursorOffset; // Default relevant function


  var relevantFunc = function relevantFunc() {
    return true;
  };

  var relevant = function relevant(params) {
    var rel = userRelevant || relevantFunc;
    var ff = formApi.getFullField(fieldRef.current) || fieldRef.current;
    var args = {
      path: ff,
      parentPath: ff.replace(/(.*)[.[].*/, '$1'),
      get: function get(values, path) {
        return ObjectMap.get(values, path);
      }
    };

    if (multistepContext && multistepContext.relevant) {
      return rel(params, args) && multistepContext.relevant(params, args);
    }

    return rel(params, args);
  };

  var _useStateWithGetter7 = useStateWithGetter(relevant(formApi.getValues())),
      _useStateWithGetter8 = _slicedToArray(_useStateWithGetter7, 3),
      isRelevant = _useStateWithGetter8[0],
      setIsRelevant = _useStateWithGetter8[1],
      getIsRelevant = _useStateWithGetter8[2];

  var multistepRelevant = function multistepRelevant(params) {
    if (multistepContext && multistepContext.relevant) {
      return multistepContext.relevant(params);
    }

    return true;
  };

  var checkRelevant = function checkRelevant() {
    var newRel = relevant(formApi.getValues());
    var curRel = getIsRelevant();

    if (newRel != curRel) {
      setIsRelevant(newRel);
    }

    return newRel;
  };

  useEffect(function () {
    // Reset if we dont have keep state and relevance changed.
    if (!isRelevant && !keepState) {
      fieldApiRef.current.reset();
    }
  }, [isRelevant]); // Special getter to support shadow fields

  var getVal = function getVal() {
    return shadow ? formApi.getDerrivedValue(field) : getTheVal();
  };
  /* ---------------------- Setters ---------------------- */
  // ---- Define set error ----


  var setError = function setError(val) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        preventUpdate = _ref5.preventUpdate;

    // For multistep forms always set error to undefined when not at that step
    if (step && formApi.getStep() < step) {
      logger("Setting ".concat(field, "'s error to undefined as we are not at that step"));
      setErr(undefined);
      updater.setError(fieldId, undefined, !preventUpdate);
    } else {
      logger("Setting ".concat(field, "'s error to ").concat(val));
      setErr(val);
      updater.setError(fieldId, val, !preventUpdate);
    }
  }; // ---- Define set value ----


  var setValue = function setValue(v, e) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var val = v; // This value has now been modified

    valueTouched.current = true;
    logger("Setting ".concat(field, " to ").concat(val)); // Set value may have been called externally
    // NOT from an inputs change event ( onChange )
    // Therefore, as a precausion, we call the initialize function to format it just in case

    if (initialize) {
      val = initialize(val);
    } // Get the most up to date options


    var formOptions = formApi.getOptions(); // Initialize maked value

    var maskedVal = val;

    if (val === '' && !allowEmptyString && !options.allowEmptyString && !formOptions.allowEmptyStrings) {
      val = undefined;
    } // Turn string into number for number fields


    if ((fieldProps.type === 'number' || fieldType === 'number') && val !== undefined) {
      val = +val;
    } // Remember Cursor position!


    if (e && e.target && e.target.selectionStart) {
      setCursor(e.target.selectionStart);
    } // Call mask if it was passed


    if (mask && !maskOnBlur) {
      maskedVal = mask(val, getCursor());
      val = mask(val, getCursor());
    } // Call maskWithCursorOffset if it was passed


    if (maskWithCursorOffset && !maskOnBlur) {
      var res = maskWithCursorOffset(val, getCursor());
      maskedVal = res.value;
      val = res.value;
      setCursorOffset(res.offset);
    } // Call format and parse if they were passed


    if (format && parse) {
      // Masked value only differs from value when format and parse are used
      val = parse(val);
      maskedVal = format(val);
    } // Call formatter and parser if passed


    if (formatter) {
      var _res = informedFormat(val, formatter);

      setCursorOffset(_res.offset);
      maskedVal = _res.value;
      val = maskedVal;
    } // // Only parse if parser was passed


    if (parser) {
      val = val != null ? parser(val) : val;
    } // We only need to call validate if the user gave us one
    // and they want us to validate on change && its not the initial validation


    if (validate && validateOnChange && !options.initial) {
      logger("Validating after change ".concat(field, " ").concat(val));
      setError(validate(val, formApi.getValues()));
    } // Now we update the value


    setVal(val);
    setMaskedValue(maskedVal); // If the user passed in onValueChange then call it!

    if (onValueChange) {
      onValueChange(val);
    } // Call the updater


    updater.setValue(fieldId, val, !options.preventUpdate);
  };

  useUpdateEffect(function () {
    fieldApiRef.current.setValue(maskedValueRef.current);
  }, _toConsumableArray(formatterDependencies)); // ---- Define set touched ----

  var setTouched = function setTouched(val, reset) {
    var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        preventUpdate = _ref6.preventUpdate;

    logger("Field ".concat(field, " has been touched")); // We only need to call validate if the user gave us one
    // and they want us to validate on blur

    if (validate && validateOnBlur && !reset && val) {
      logger("Validating after blur ".concat(field, " ").concat(getVal()));
      setError(validate(getVal(), formApi.getValues()));
    } // Same for async


    if (asyncValidate && asyncValidateOnBlur && !reset && val) {
      logger("Validating async after blur ".concat(field, " ").concat(getVal()));
      asyncValidate(getVal(), formApi.getValues());
    } // Call mask if it was passed


    if (mask && maskOnBlur) {
      // Generate the masked value from the current value
      var maskedVal = mask(getVal()); // Now we update the value

      setVal(maskedVal);
      setMaskedValue(maskedVal); // If the user passed in onValueChange then call it!

      if (onValueChange) {
        onValueChange(maskedVal);
      } // Call the updater


      updater.setValue(fieldId, maskedVal, !preventUpdate);
    } // Call maskWithCursorOffset if it was passed


    if (maskWithCursorOffset && maskOnBlur) {
      // Generate the mask and offset
      var res = maskWithCursorOffset(getVal()); // Set the offset

      setCursorOffset(res.offset); // Now we update the value

      setVal(res.value);
      setMaskedValue(res.value); // If the user passed in onValueChange then call it!

      if (onValueChange) {
        onValueChange(res.value);
      } // Call the updater


      updater.setValue(fieldId, res.value, !preventUpdate);
    } // Finally we set touched and call the updater


    setTouch(val);
    updater.setTouched(fieldId, val, !preventUpdate);
  }; // ---- Define reset ----


  var reset = function reset() {
    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        preventUpdate = _ref7.preventUpdate;

    var initVal = initializeValue(initialValueRef.current || updater.getInitialValue(fieldRef.current), mask, formatter, parser, initialize); // TODO support numbers

    setValue(initVal, null, {
      initial: true,
      preventUpdate: preventUpdate
    }); // Setting somthing to undefined will remove it

    setError(validateOnMount ? validate(initVal) : undefined, {
      preventUpdate: preventUpdate
    });
    setTouched(undefined, true, {
      preventUpdate: preventUpdate
    }); // We are now at our initial state

    valueTouched.current = false;
  }; // ---- Define validate ----
  // Note: it takes values as an optimization for when
  // the form controller calls it ( dont need to generate all values )
  // over and over :)


  var fieldValidate = function fieldValidate(values) {
    if (validate) {
      logger("Field validating ".concat(field, " ").concat(getVal()));
      setError(validate(getVal(), values || formApi.getValues()));
    }
  };

  var fieldAsyncValidate = function fieldAsyncValidate(values) {
    if (asyncValidate) {
      logger("Field async validating ".concat(field, " ").concat(getVal()));
      asyncValidate(getVal(), values || formApi.getValues());
    }
  };
  /* ----------------- Field Api && State ----------------- */
  // Build the field api


  var fieldApi = {
    setValue: setValue,
    setTouched: setTouched,
    setError: setError,
    reset: reset,
    validate: fieldValidate,
    asyncValidate: fieldAsyncValidate,
    getValue: getVal,
    getTouched: getTouch,
    getError: getErr,
    getIsRelevant: getIsRelevant,
    getDirty: getDirty,
    getPristine: getPristine,
    getFieldState: function getFieldState() {
      return {
        value: getVal(),
        touched: getTouch(),
        dirty: getDirty(),
        pristine: getPristine()
      };
    },
    relevant: relevant,
    multistepRelevant: multistepRelevant,
    checkRelevant: checkRelevant
  };
  fieldApiRef.current = fieldApi; // Build the field state

  var fieldState = {
    value: value,
    error: error,
    touched: touched,
    maskedValue: maskedValue,
    isRelevant: isRelevant,
    dirty: valueTouched.current,
    pristine: !valueTouched.current
  }; // Create shadow state if this is a shadow field

  if (shadow) {
    fieldState = {
      error: error,
      touched: touched
    };
  }

  logger('Render', formApi.getFullField(field), fieldState); // We want to register and deregister this field

  useIsomorphicLayoutEffect(function () {
    var fullField = formApi.getFullField(fieldRef.current);
    logger('Register', fieldId, fieldRef.current);
    fieldObjectRef.current = {
      field: fullField,
      fieldId: fieldId,
      fieldApi: fieldApi,
      fieldState: fieldState,
      notify: notify,
      keepState: keepState,
      inMultistep: inMultistep,
      shadow: shadow
    };
    updater.register(fieldId, fieldObjectRef.current);
    return function () {
      var fullField = formApi.getFullField(fieldRef.current);
      logger('Deregister', fieldId, fullField);
      updater.deregister(fieldId);
    };
  }, []); // We want to let the controller know of changes on this field when specific props change

  useEffect(function () {
    var fullField = formApi.getFullField(field);

    if (initialRenerRef.current) {
      initialRenerRef.current = false;
    } else {
      logger('Update', field, inMultistep);
      fieldObjectRef.current.field = fullField;
      updater.update(fieldId, fieldObjectRef.current, prevFieldRef.current);
    }

    return function () {
      prevFieldRef.current = fullField;
    };
  }, [field]); // Maintain cursor position
  // useLayoutEffect(
  //   () => {
  //     if (maintainCursor && ref.current != null && getCursor())
  //       ref.current.selectionEnd = getCursor() + getCursorOffset();
  //   },
  //   [value]
  // );
  // for debugging

  useIsomorphicLayoutEffect(function () {
    if (debug && ref) {
      ref.current.style.border = '5px solid orange';
      setTimeout(function () {
        ref.current.style.borderWidth = '2px';
        ref.current.style.borderStyle = 'inset';
        ref.current.style.borderColor = 'initial';
        ref.current.style.borderImage = 'initial';
      }, 500);
    }
  }); // This is an awesome optimization!!

  var shouldUpdate = [].concat(_toConsumableArray(Object.values(fieldState)), _toConsumableArray(Object.values(fieldProps)), _toConsumableArray(Object.values(userProps)));

  var render = function render(children) {
    return useMemo(function () {
      return isRelevant ? children : null;
    }, _toConsumableArray(shouldUpdate));
  }; // const render = children => {
  //   // console.log('RENDER', field);
  //   return isRelevant ? children : null;
  // };
  // Build some setub fields so users can easily intagrate without any hookup code


  var name = field;
  var changeHandler = generateOnChange({
    fieldType: fieldType,
    setValue: setValue,
    onChange: onChange,
    multiple: multiple,
    ref: ref
  });
  var blurHandler = generateOnBlur({
    setTouched: setTouched,
    onBlur: onBlur
  });
  var hookedValue = generateValue({
    fieldType: fieldType,
    maskedValue: maskedValue,
    multiple: multiple,
    value: value
  });
  var type = generateFieldType(fieldType);
  return {
    fieldState: fieldState,
    fieldApi: fieldApi,
    render: render,
    ref: ref,
    userProps: _objectSpread2(_objectSpread2({}, userProps), {}, {
      multiple: multiple,
      // WE NEED TO PUT THESE BACK!!
      onChange: onChange,
      // WE NEED TO PUT THESE BACK!!
      onBlur: onBlur,
      // WE NEED TO PUT THESE BACK!!
      // required // WE NEED TO PUT THESE BACK!!
      id: userProps.id || fieldId // If user did not pass id we pass fields id

    }),
    informed: _objectSpread2({
      name: name,
      multiple: multiple,
      onChange: changeHandler,
      onBlur: blurHandler,
      value: hookedValue,
      ref: ref,
      type: type,
      id: userProps.id || fieldId
    }, userProps)
  };
}

var asField = function asField(Component) {
  var forwardRef = /*#__PURE__*/React.forwardRef(function (props, userRef) {
    var _useField = useField(props, userRef),
        fieldState = _useField.fieldState,
        fieldApi = _useField.fieldApi,
        render = _useField.render,
        ref = _useField.ref,
        userProps = _useField.userProps;

    return render( /*#__PURE__*/React.createElement(Component, _extends({
      fieldApi: fieldApi,
      fieldState: fieldState,
      field: props.field,
      forwardedRef: ref,
      debug: props.debug,
      type: props.type
    }, userProps)));
  });
  forwardRef.displayName = "asField(".concat(getChildDisplayName(Component), ")");
  return forwardRef;
};

var logger$1 = debug('informed:Text' + '\t');

var Text = function Text(_ref) {
  var fieldApi = _ref.fieldApi,
      fieldState = _ref.fieldState,
      props = _objectWithoutProperties(_ref, ["fieldApi", "fieldState"]);

  var maskedValue = fieldState.maskedValue;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange = props.onChange,
      _onBlur = props.onBlur,
      field = props.field,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      debug = props.debug,
      label = props.label,
      title = props.title,
      id = props.id,
      rest = _objectWithoutProperties(props, ["onChange", "onBlur", "field", "initialValue", "forwardedRef", "debug", "label", "title", "id"]);

  logger$1('Render', field); // for debugging

  useIsomorphicLayoutEffect(function () {
    if (debug && forwardedRef) {
      forwardedRef.current.style.background = 'red';
      setTimeout(function () {
        forwardedRef.current.style.background = 'white';
      }, 500);
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, " ", label, " ") : null, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: id,
    name: field,
    ref: forwardedRef,
    value: !maskedValue && maskedValue !== 0 ? '' : maskedValue,
    onChange: function onChange(e) {
      setValue(e.target.value, e);

      if (_onChange) {
        _onChange(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched(true);

      if (_onBlur) {
        _onBlur(e);
      }
    }
  })));
};
var Text$1 = asField(Text);

var TextArea = function TextArea(_ref) {
  var fieldApi = _ref.fieldApi,
      fieldState = _ref.fieldState,
      props = _objectWithoutProperties(_ref, ["fieldApi", "fieldState"]);

  var maskedValue = fieldState.maskedValue;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange = props.onChange,
      _onBlur = props.onBlur,
      field = props.field,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      debug = props.debug,
      label = props.label,
      id = props.id,
      rest = _objectWithoutProperties(props, ["onChange", "onBlur", "field", "initialValue", "forwardedRef", "debug", "label", "id"]); // for debugging


  useIsomorphicLayoutEffect(function () {
    if (debug && forwardedRef) {
      forwardedRef.current.style.background = 'red';
      setTimeout(function () {
        forwardedRef.current.style.background = 'white';
      }, 500);
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, " ", label, " ") : null, /*#__PURE__*/React.createElement("textarea", _extends({}, rest, {
    id: id,
    name: field,
    ref: forwardedRef,
    value: !maskedValue ? '' : maskedValue,
    onChange: function onChange(e) {
      setValue(e.target.value, e);

      if (_onChange) {
        _onChange(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched(true);

      if (_onBlur) {
        _onBlur(e);
      }
    }
  })));
};
var TextArea$1 = asField(TextArea);

var logger$2 = debug('informed:Select' + '\t');

var Select = function Select(_ref) {
  var fieldApi = _ref.fieldApi,
      fieldState = _ref.fieldState,
      props = _objectWithoutProperties(_ref, ["fieldApi", "fieldState"]);

  var value = fieldState.value;
  var setTouched = fieldApi.setTouched;

  var onChange = props.onChange,
      _onBlur = props.onBlur,
      field = props.field,
      initialValue = props.initialValue,
      options = props.options,
      children = props.children,
      forwardedRef = props.forwardedRef,
      debug = props.debug,
      multiple = props.multiple,
      label = props.label,
      id = props.id,
      rest = _objectWithoutProperties(props, ["onChange", "onBlur", "field", "initialValue", "options", "children", "forwardedRef", "debug", "multiple", "label", "id"]);

  var selectRef = useRef();

  var handleChange = function handleChange(e) {
    var selected = Array.from((forwardedRef || selectRef).current).filter(function (option) {
      return option.selected;
    }).map(function (option) {
      return option.value;
    });
    fieldApi.setValue(multiple ? selected : selected[0] || '');

    if (onChange && e) {
      onChange(e);
    }
  }; // for debugging


  useIsomorphicLayoutEffect(function () {
    if (debug && forwardedRef) {
      forwardedRef.current.style.background = 'red';
      setTimeout(function () {
        forwardedRef.current.style.background = 'white';
      }, 500);
    }
  });
  logger$2('Render', field, value);
  return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, " ", label, " ") : null, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    id: id,
    multiple: multiple,
    name: field,
    ref: forwardedRef || selectRef,
    value: value || (multiple ? [] : ''),
    onChange: handleChange,
    onBlur: function onBlur(e) {
      setTouched(true);

      if (_onBlur) {
        _onBlur(e);
      }
    }
  }), options ? options.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      key: option.value,
      value: option.value,
      disabled: option.disabled
    }, option.label);
  }) : children));
};
var Select$1 = asField(Select);

var Checkbox = function Checkbox(_ref) {
  var fieldApi = _ref.fieldApi,
      fieldState = _ref.fieldState,
      props = _objectWithoutProperties(_ref, ["fieldApi", "fieldState"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange = props.onChange,
      _onBlur = props.onBlur,
      field = props.field,
      initialValue = props.initialValue,
      debug = props.debug,
      forwardedRef = props.forwardedRef,
      id = props.id,
      label = props.label,
      rest = _objectWithoutProperties(props, ["onChange", "onBlur", "field", "initialValue", "debug", "forwardedRef", "id", "label"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, " ", label, " ") : null, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: id,
    name: field,
    ref: forwardedRef,
    checked: !!value,
    onChange: function onChange(e) {
      setValue(e.target.checked);

      if (_onChange) {
        _onChange(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched(true);

      if (_onBlur) {
        _onBlur(e);
      }
    },
    type: "checkbox"
  })));
};
var Checkbox$1 = asField(Checkbox);

var withRadioGroup = function withRadioGroup(Component) {
  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(GroupContext.Consumer, null, function (_ref) {
      var radioGroupApi = _ref.radioGroupApi,
          radioGroupState = _ref.radioGroupState;
      return /*#__PURE__*/React.createElement(Component, _extends({
        radioGroupApi: radioGroupApi,
        radioGroupState: radioGroupState,
        ref: ref
      }, props));
    });
  });
};

var Radio = function Radio(_ref) {
  var radioGroupApi = _ref.radioGroupApi,
      radioGroupState = _ref.radioGroupState,
      props = _objectWithoutProperties(_ref, ["radioGroupApi", "radioGroupState"]);

  var groupValue = radioGroupState.value;
  var setValue = radioGroupApi.setValue,
      setTouched = radioGroupApi.setTouched,
      groupOnChange = radioGroupApi.onChange,
      groupOnBlur = radioGroupApi.onBlur;

  var value = props.value,
      _onChange = props.onChange,
      _onBlur = props.onBlur,
      field = props.field,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      rest = _objectWithoutProperties(props, ["value", "onChange", "onBlur", "field", "initialValue", "forwardedRef"]);

  return /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    name: field,
    ref: forwardedRef,
    value: value,
    checked: groupValue === value,
    onChange: function onChange(e) {
      if (!e.target.checked) {
        return;
      }

      setValue(value);

      if (_onChange) {
        _onChange(e);
      }

      if (groupOnChange) {
        groupOnChange(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched(true);

      if (_onBlur) {
        _onBlur(e);
      }

      if (groupOnBlur) {
        groupOnBlur(e);
      }
    },
    type: "radio"
  }));
};
var Radio$1 = withRadioGroup(Radio);

var RadioGroup = /*#__PURE__*/function (_Component) {
  _inherits(RadioGroup, _Component);

  var _super = _createSuper(RadioGroup);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _super.apply(this, arguments);
  }

  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement(GroupContext.Provider, {
        value: this.groupContext
      }, options ? options.map(function (option) {
        return /*#__PURE__*/React.createElement("label", {
          key: option.value
        }, option.label, " ", /*#__PURE__*/React.createElement(Radio$1, {
          value: option.value
        }));
      }) : children);
    }
  }, {
    key: "groupContext",
    get: function get() {
      return {
        radioGroupApi: _objectSpread2(_objectSpread2({}, this.props.fieldApi), {}, {
          onChange: this.props.onChange,
          onBlur: this.props.onBlur
        }),
        radioGroupState: this.props.fieldState
      };
    }
  }]);

  return RadioGroup;
}(Component);
var RadioGroup$1 = asField(RadioGroup);

function useArrayFieldApi() {
  return useContext(ArrayFieldApiContext);
}

var AddButton = function AddButton() {
  var _useArrayFieldApi = useArrayFieldApi(),
      add = _useArrayFieldApi.add;

  return /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      add();
    },
    type: "button"
  }, "Add");
};

function useArrayFieldItemApi() {
  return useContext(ArrayFieldItemApiContext);
}

var AddButton$1 = function AddButton() {
  var _useArrayFieldItemApi = useArrayFieldItemApi(),
      remove = _useArrayFieldItemApi.remove;

  return /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      remove();
    },
    type: "button"
  }, "Remove");
};

var logger$3 = debug('informed:useArrayField' + '\t');

var useArrayField = function useArrayField(_ref) {
  var field = _ref.field,
      initialValue = _ref.initialValue,
      validate = _ref.validate,
      arrayFieldApiRef = _ref.arrayFieldApiRef,
      props = _objectWithoutProperties(_ref, ["field", "initialValue", "validate", "arrayFieldApiRef"]);

  // Reference to the form Api
  var formApi = useFormApi(); // Keep track of fields that belong to this array field

  var _useState = useState(new Map()),
      _useState2 = _slicedToArray(_useState, 1),
      fieldsById = _useState2[0]; // Grab the form register context


  var updater = useContext(FormRegisterContext); // May be scoped so get full field name!!

  var fullField = formApi.getFullField(field);
  var initialVals = updater.getInitialValue(field) || initialValue || []; // TODO throw error if initial value and its not array
  // If keep state was passed into the child inputs we need to maintain the length of
  // keys, in order to do so we grab the value from informeds api

  var keptValues = formApi.getSavedValue(fullField) && formApi.getSavedValue(fullField).value;

  var _useStateWithGetter = useStateWithGetter(keptValues || initialVals),
      _useStateWithGetter2 = _slicedToArray(_useStateWithGetter, 3),
      initialValues = _useStateWithGetter2[0],
      setInitialValues = _useStateWithGetter2[1],
      getInitialValues = _useStateWithGetter2[2];

  var initialKeys = initialValues ? initialValues.map(function () {
    return uuidv4();
  }) : [];

  var _useStateWithGetter3 = useStateWithGetter(initialKeys),
      _useStateWithGetter4 = _slicedToArray(_useStateWithGetter3, 3),
      keys = _useStateWithGetter4[0],
      setKeys = _useStateWithGetter4[1],
      getKeys = _useStateWithGetter4[2];

  var validateWithLength = useMemo(function () {
    return function (value, values) {
      var length = getKeys() == null ? 0 : getKeys().length;
      return validate ? validate(value, length, values) : undefined;
    };
  }); // Register shadow field

  var _useField = useField(_objectSpread2({
    field: field,
    validate: validate ? validateWithLength : undefined,
    shadow: true
  }, props)),
      fieldApi = _useField.fieldApi; // Register for events


  useIsomorphicLayoutEffect(function () {
    // Define event handler
    var onChangeHandler = function onChangeHandler(fieldName) {
      // Dont do anythign if we updated
      if (fieldName === fullField) {
        return;
      }

      logger$3("".concat(fullField, " changed")); // determine if one of our array children triggered this change

      if (RegExp("".concat(fullField, "\\[[0-9]+\\]")).test(fieldName)) {
        // If it was we need to call validate
        fieldApi.validate();
      }
    }; // Register for events


    formApi.emitter.on('value', onChangeHandler); // Unregister events

    return function () {
      formApi.emitter.removeListener('value', onChangeHandler);
    };
  }, [field]);

  var _remove = function remove(i) {
    // Notify form to expect removal on this field
    logger$3('EXPECTING REMOVAL OF', "".concat(field, "[").concat(i, "] and ").concat(field, "[").concat(keys.length - 1, "]"));
    updater.expectRemoval("".concat(field, "[").concat(i, "]"));
    updater.expectRemoval("".concat(field, "[").concat(keys.length - 1, "]")); // Remove the key

    var newKeys = keys.slice(0, i).concat(keys.slice(i + 1, keys.length));
    setKeys(newKeys); // Remove the initial value ( user wanted to get rid of that input )

    var initVals = getInitialValues();
    var newInitialValues = initVals.slice(0, i).concat(initVals.slice(i + 1, initVals.length));
    setInitialValues(newInitialValues); //formApi.setInitialValue(field, newInitialValues);
  };

  var swap = function swap(a, b) {
    logger$3('Swapping', "".concat(field, "[").concat(a, "] and ").concat(field, "[").concat(b, "]")); // Swap the keys

    var newKeys = _toConsumableArray(keys);

    if (keys[a] && keys[b]) {
      newKeys[a] = keys[b];
      newKeys[b] = keys[a];
    } else {
      // eslint-disable-next-line no-console
      console.warn("Attempted to swap ".concat(a, " with ").concat(b, " but one of them does not exist :("));
    }

    setKeys(newKeys);
  };

  var add = function add() {
    keys.push(uuidv4());
    setKeys(_toConsumableArray(keys));
  };

  var addWithInitialValue = function addWithInitialValue(initialValue) {
    keys.push(uuidv4());
    setKeys(_toConsumableArray(keys));

    var newInitialValues = _toConsumableArray(getInitialValues());

    newInitialValues[keys.length - 1] = initialValue;
    setInitialValues(newInitialValues);
  };

  var reset = function reset() {
    // When resetting we reset to the users initial value not the one tracked by this hook
    var initVals = updater.getInitialValue(field) || initialValue || []; // Set our initial values back to what the user set at beginning

    setInitialValues(initVals); // Build a new set of keys because everything is new !!!

    var resetKeys = initVals ? initVals.map(function () {
      return uuidv4();
    }) : []; // Finally set that shit !

    setKeys(resetKeys);
  };

  var fields = keys.map(function (key, i) {
    var arrayFieldItemApi = {
      remove: function remove() {
        return _remove(i);
      }
    };
    var arrayFieldItemState = {
      initialValue: initialValues && initialValues[i],
      key: key,
      field: "".concat(field, "[").concat(i, "]"),
      index: i
    };
    return _objectSpread2(_objectSpread2({
      arrayFieldItemApi: arrayFieldItemApi,
      arrayFieldItemState: arrayFieldItemState
    }, arrayFieldItemApi), arrayFieldItemState);
  });
  var arrayFieldApi = {
    add: add,
    swap: swap,
    addWithInitialValue: addWithInitialValue,
    reset: reset
  };

  if (arrayFieldApiRef) {
    arrayFieldApiRef.current = arrayFieldApi;
  }

  var arrayFieldState = {
    fields: fields,
    field: field
  }; // Wrap the updater to update array fields references

  var wrappedUpdator = _objectSpread2(_objectSpread2({}, updater), {}, {
    register: function register(id, fld) {
      fieldsById.set(id, fld);

      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      updater.register.apply(updater, [id, fld].concat(args));
    },
    deregister: function deregister(id) {
      fieldsById["delete"](id);

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      updater.deregister.apply(updater, [id].concat(args));
    },
    getInitialValue: function getInitialValue(fieldName) {
      // If we are getting initial value and its for this field return that
      if (RegExp("".concat(fullField, "\\[[0-9]+\\]")).test(fieldName)) {
        var path = fieldName.replace(field, '');
        var v = ObjectMap.get(getInitialValues(), path);
        logger$3("Resetting ".concat(path, " to ").concat(v));
        return v;
      }

      return updater.getInitialValue(fieldName);
    }
  });

  var render = function render(children) {
    return /*#__PURE__*/React.createElement(FormRegisterContext.Provider, {
      value: wrappedUpdator
    }, /*#__PURE__*/React.createElement(ArrayFieldApiContext.Provider, {
      value: arrayFieldApi
    }, /*#__PURE__*/React.createElement(ArrayFieldStateContext.Provider, {
      value: arrayFieldState
    }, children)));
  };

  return {
    render: render,
    add: add,
    swap: swap,
    addWithInitialValue: addWithInitialValue,
    fields: fields,
    arrayFieldState: arrayFieldState,
    arrayFieldApi: arrayFieldApi,
    field: field
  };
};

var buildScopedFormApi = function buildScopedFormApi(scope, formApi) {
  return _objectSpread2(_objectSpread2({}, formApi), {}, {
    getValue: function getValue(field) {
      return formApi.getValue("".concat(scope, ".").concat(field));
    },
    getTouched: function getTouched(field) {
      return formApi.getTouched("".concat(scope, ".").concat(field));
    },
    getError: function getError(field) {
      return formApi.getError("".concat(scope, ".").concat(field));
    },
    setValue: function setValue(field, value) {
      return formApi.setValue("".concat(scope, ".").concat(field), value);
    },
    setTouched: function setTouched(field, value) {
      return formApi.setTouched("".concat(scope, ".").concat(field), value);
    },
    setError: function setError(field, value) {
      return formApi.setError("".concat(scope, ".").concat(field), value);
    },
    getInitialValue: function getInitialValue(field) {
      return formApi.getInitialValue("".concat(scope, ".").concat(field));
    },
    getSavedValue: function getSavedValue(field) {
      return formApi.getSavedValue("".concat(scope, ".").concat(field));
    },
    getFullField: function getFullField(field) {
      return "".concat(formApi.getFullField(scope), ".").concat(field);
    }
  });
};

function useScopedApi(scope) {
  var formApi = useFormApi(); // VERY important to memoize the builder!

  var scopedFormApi = useMemo(function () {
    return buildScopedFormApi(scope, formApi);
  }, [scope]);
  return scopedFormApi;
}

function useFormState() {
  var formState = useContext(FormStateContext);
  return formState;
}

var Relevant = function Relevant(_ref) {
  var when = _ref.when,
      children = _ref.children;
  var formState = useFormState();
  var isRelevant = when(formState);

  if (isRelevant) {
    return children;
  }

  return null;
};

var ArrayField = function ArrayField(_ref) {
  var relevant = _ref.relevant,
      field = _ref.field,
      props = _objectWithoutProperties(_ref, ["relevant", "field"]);

  // Need to get formApi to have consistant interface for relevant function
  var formApi = useFormApi();

  if (relevant) {
    var ff = formApi.getFullField(field);
    var args = {
      path: ff,
      parentPath: ff.replace(/(.*)[.[].*/, '$1'),
      get: function get(values, path) {
        return ObjectMap.get(values, path);
      }
    };

    var when = function when(_ref2) {
      var values = _ref2.values;
      return relevant(values, args);
    };

    return /*#__PURE__*/React.createElement(Relevant, {
      when: when
    }, /*#__PURE__*/React.createElement(ArrayFieldWrapper, _extends({
      field: field
    }, props)));
  } else {
    return /*#__PURE__*/React.createElement(ArrayFieldWrapper, _extends({
      field: field
    }, props));
  }
};

var ArrayFieldWrapper = function ArrayFieldWrapper(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"]);

  var _useArrayField = useArrayField(props),
      render = _useArrayField.render,
      arrayFieldState = _useArrayField.arrayFieldState,
      arrayFieldApi = _useArrayField.arrayFieldApi,
      field = _useArrayField.field;

  if (typeof children === 'function') {
    return render(children(_objectSpread2(_objectSpread2({
      field: field,
      arrayFieldApi: arrayFieldApi,
      arrayFieldState: arrayFieldState
    }, arrayFieldApi), arrayFieldState)));
  }

  return render(children);
};

var ArrayFieldItem = function ArrayFieldItem(_ref4) {
  var arrayFieldItemState = _ref4.arrayFieldItemState,
      arrayFieldItemApi = _ref4.arrayFieldItemApi,
      children = _ref4.children;
  // Grab the form register context
  var updater = useContext(FormRegisterContext); // Grab the form state

  var formApi = useFormApi(); // A little trick I learned in nam to trigger rerender

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // Keep track of fields that belong to this array field


  var _useState3 = useState(new Map()),
      _useState4 = _slicedToArray(_useState3, 1),
      fieldsById = _useState4[0]; // Get this items field


  var field = arrayFieldItemState.field; // Create scoped api

  var scopedApi = useScopedApi(field); // State generation function

  var getState = function getState() {
    var _formApi$getState = formApi.getState(),
        values = _formApi$getState.values,
        errors = _formApi$getState.errors,
        touched = _formApi$getState.touched; // Get this fields state


    var itemState = {
      values: ObjectMap.get(values, field),
      errors: ObjectMap.get(errors, field),
      touched: ObjectMap.get(touched, field)
    };
    return itemState;
  }; // Register for events for rerenders!


  useEffect(function () {
    // Define event handler
    var onChangeHandler = function onChangeHandler(fieldName) {
      // Example foo.bar.baz[3].baz >>>> foo.bar.baz[3]
      var magicValue = fieldName.slice(0, fieldName.lastIndexOf('[') != -1 ? fieldName.lastIndexOf(']') + 1 : fieldName.length); // This field updated so trigger rerender

      if (magicValue === field) {
        setState(Math.random());
      }
    }; // Register for events


    formApi.emitter.on('value', onChangeHandler); // Unregister events

    return function () {
      formApi.emitter.removeListener('value', onChangeHandler);
    };
  }, [field]); // Resets all fields in this item

  var reset = function reset() {
    fieldsById.forEach(function (fld) {
      fld.fieldApi.reset();
    });
  }; // Generate the item state


  var itemState = getState(); // Wrap the updater to update array fields references

  var wrappedUpdator = _objectSpread2(_objectSpread2({}, updater), {}, {
    register: function register(id, fld, initialRender) {
      fieldsById.set(id, fld);
      updater.register(id, fld, initialRender);
    },
    deregister: function deregister(id) {
      fieldsById["delete"](id);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      updater.deregister.apply(updater, [id].concat(args));
    }
  });

  var arrayFieldItemApiValue = _objectSpread2(_objectSpread2(_objectSpread2({}, arrayFieldItemApi), scopedApi), {}, {
    reset: reset
  });

  var arrayFieldItemStateValue = _objectSpread2(_objectSpread2({}, arrayFieldItemState), itemState);

  if (typeof children === 'function') {
    return /*#__PURE__*/React.createElement(FormRegisterContext.Provider, {
      value: wrappedUpdator
    }, /*#__PURE__*/React.createElement(ArrayFieldItemApiContext.Provider, {
      value: arrayFieldItemApiValue
    }, /*#__PURE__*/React.createElement(ArrayFieldItemStateContext.Provider, {
      value: arrayFieldItemStateValue
    }, children(_objectSpread2(_objectSpread2({
      arrayFieldItemApi: arrayFieldItemApiValue,
      arrayFieldItemState: arrayFieldItemStateValue
    }, arrayFieldItemApiValue), arrayFieldItemStateValue)))));
  }

  return /*#__PURE__*/React.createElement(FormRegisterContext.Provider, {
    value: wrappedUpdator
  }, /*#__PURE__*/React.createElement(ArrayFieldItemApiContext.Provider, {
    value: arrayFieldItemApiValue
  }, /*#__PURE__*/React.createElement(ArrayFieldItemStateContext.Provider, {
    value: arrayFieldItemStateValue
  }, children)));
};

ArrayField.Items = function (_ref5) {
  var children = _ref5.children;

  var _useContext = useContext(ArrayFieldStateContext),
      fields = _useContext.fields;

  return fields.map(function (_ref6) {
    var arrayFieldItemState = _ref6.arrayFieldItemState,
        arrayFieldItemApi = _ref6.arrayFieldItemApi;
    var key = arrayFieldItemState.key;
    return /*#__PURE__*/React.createElement(ArrayFieldItem, {
      key: key,
      arrayFieldItemApi: arrayFieldItemApi,
      arrayFieldItemState: arrayFieldItemState
    }, children);
  });
};

var FormComponents = function FormComponents(_ref) {
  var components = _ref.components;

  // Get the field map off the forms context
  var _useContext = useContext(FormRegisterContext),
      fieldMap = _useContext.fieldMap;

  if (!components) return null;
  return components.map(function (comp, i) {
    var componentType = comp['ui:control'];
    var Component = fieldMap[componentType];
    return /*#__PURE__*/React.createElement(Component, {
      key: "ui-comp-".concat(i)
    });
  });
};

var logger$4 = debug('informed:FormFields' + '\t');

var FormFields = function FormFields(_ref) {
  var schema = _ref.schema,
      prefix = _ref.prefix,
      onlyValidateSchema = _ref.onlyValidateSchema;

  // Get the field map off the forms context
  var _useContext = useContext(FormRegisterContext),
      fieldMap = _useContext.fieldMap; // Get fields from scheama


  var fields = useMemo(function () {
    var schemaFields = computeFieldsFromSchema(schema, onlyValidateSchema, prefix);
    var mapedFields = schemaFields.map(function (schemaField, i) {
      var field = schemaField.field,
          props = schemaField.props,
          type = schemaField.type,
          properties = schemaField.properties,
          items = schemaField.items,
          componentType = schemaField.componentType,
          uiBefore = schemaField.uiBefore,
          uiAfter = schemaField.uiAfter,
          allOf = schemaField.allOf;
      var Component = fieldMap[componentType]; // console.log('WTF', schemaField);

      logger$4('Rendering Field', field, schemaField); // Scope for nested

      if (!Component && type === 'object' && properties) {
        return /*#__PURE__*/React.createElement(FormFields, {
          schema: schemaField,
          prefix: field,
          key: "ScheamField-".concat(i)
        });
      } // Array field for array ( if none was provided use our default )


      if (!Component && type === 'array' && items) {
        return /*#__PURE__*/React.createElement(ArrayField$1, _extends({
          key: "ScheamField-".concat(i),
          field: field,
          items: items,
          uiBefore: uiBefore,
          uiAfter: uiAfter
        }, props));
      } // User created custom array field


      if (Component && componentType === 'array' && items && type === 'array') {
        return /*#__PURE__*/React.createElement(Component, _extends({
          key: "ScheamField-".concat(i),
          field: field,
          items: items,
          uiBefore: uiBefore,
          uiAfter: uiAfter
        }, props));
      } // For conditionals


      if (componentType === 'conditionals') {
        return allOf.map(function (conditional) {
          // Example then ( its a subschema )
          // then: {
          //   properties: {
          //     spouse: {
          //       type: 'string',
          //       title: 'Spouse name',
          //       'ui:control': 'input'
          //     }
          //   }
          // }
          var subSchema = conditional.then; // Turn the if into a when function for informed
          // Example if condition
          // if: {
          //   properties: {
          //     married: { const: 'yes' }
          //   },
          //   required: ['married']
          // },

          var conditions = conditional["if"].properties;

          var when = function when(_ref2) {
            var values = _ref2.values;
            // Example key "married, Example condition: "{ const: 'yes' }"
            return Object.keys(conditions).every(function (key) {
              var condition = conditions[key]; // values.married === 'yes'

              return values[key] === condition["const"];
            });
          };

          return /*#__PURE__*/React.createElement(Relevant, {
            key: "ScheamField-".concat(i),
            when: when
          }, /*#__PURE__*/React.createElement(FormFields, {
            schema: subSchema
          }));
        });
      } // If no com ret null ( dont render )


      if (!Component) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Component, _extends({
        key: "ScheamField-".concat(i),
        field: field
      }, props));
    });
    return mapedFields;
  }, [schema, prefix]);
  return fields;
};

var ArrayField$1 = function ArrayField$1(_ref) {
  var field = _ref.field,
      items = _ref.items,
      uiBefore = _ref.uiBefore,
      uiAfter = _ref.uiAfter,
      props = _objectWithoutProperties(_ref, ["field", "items", "uiBefore", "uiAfter"]);

  return /*#__PURE__*/React.createElement(ArrayField, _extends({
    field: field
  }, props), /*#__PURE__*/React.createElement(FormComponents, {
    components: uiBefore
  }), /*#__PURE__*/React.createElement(ArrayField.Items, null, function (_ref2) {
    var field = _ref2.field;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormComponents, {
      components: items['ui:before']
    }), /*#__PURE__*/React.createElement(FormFields, {
      schema: items,
      prefix: field
    }), /*#__PURE__*/React.createElement(FormComponents, {
      components: items['ui:after']
    }));
  }), /*#__PURE__*/React.createElement(FormComponents, {
    components: uiAfter
  }));
};

var defaultFieldMap = {
  select: Select$1,
  input: Text$1,
  textarea: TextArea$1,
  checkbox: Checkbox$1,
  radio: RadioGroup$1,
  add: AddButton,
  remove: AddButton$1,
  array: ArrayField$1
};

var debug$2 = debug('informed:Controller' + '\t');

var isExpected = function isExpected(path, expectedRemovals) {
  var includedKey = Object.keys(expectedRemovals).find(function (key) {
    return path.includes(key);
  });
  if (!includedKey) return;
  var start = path.slice(0, includedKey.length);
  return start === includedKey;
};

var noop = function noop() {};

var FormController = /*#__PURE__*/function () {
  function FormController() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FormController);

    this.options = options; // Initialize listeners

    this.subscriptions = new Map();
    var ajv = options.ajv,
        schema = options.schema,
        fieldMap = options.fieldMap; // Create new ajv instance if passed

    this.ajv = ajv ? new ajv({
      allErrors: true
    }) : null;
    this.ajvValidate = ajv ? this.ajv.compile(schema) : null; // Add field map ( defaults to our field map )

    this.fieldMap = fieldMap || defaultFieldMap; // Map will store all fields by id
    // Key => uuid
    // Val => fieldObj
    // Why? so the form can control the fields!

    this.fieldsById = new Map(); // Map will store all fields by name
    // Key => fieldName - example: "foo.bar[3].baz"
    // Val => fieldObj
    // Why? so the form can control the fields!

    this.fieldsByName = {
      get: function get(name) {
        var fieldByName; // TODO speed this up maybe

        _this.fieldsById.forEach(function (value) {
          if (value && value.field === name) {
            fieldByName = value;
          }
        });

        return fieldByName;
      }
    }; // Map to store whos on the screen

    this.onScreen = {}; // Map to store fields being removed

    this.expectedRemovals = {};
    this.pulledOut = {}; // Map of saved values

    this.savedValues = {}; // Initialize the controller state

    this.state = {
      pristine: true,
      dirty: false,
      invalid: false,
      submits: 0,
      step: 0,
      validating: 0,
      submitting: false,
      values: {},
      errors: {},
      touched: {}
    }; // Initialize a dummy field ( see getField for example use )

    this.dummyField = {
      fieldApi: {
        setValue: noop,
        setTouched: noop,
        setError: noop,
        reset: noop,
        validate: noop,
        getValue: noop,
        getTouched: noop,
        getError: noop,
        getFieldState: noop,
        checkRelevant: noop,
        getPristine: noop,
        getDirty: noop
      }
    }; // Bind functions that will be called externally

    this.deregister = this.deregister.bind(this);
    this.register = this.register.bind(this);
    this.getValue = this.getValue.bind(this);
    this.getTouched = this.getTouched.bind(this);
    this.getError = this.getError.bind(this);
    this.getErrors = this.getErrors.bind(this);
    this.setValue = this.setValue.bind(this);
    this.getValues = this.getValues.bind(this);
    this.getStep = this.getStep.bind(this);
    this.setStep = this.setStep.bind(this);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.setCurrent = this.setCurrent.bind(this);
    this.setTouched = this.setTouched.bind(this);
    this.setError = this.setError.bind(this);
    this.setFormError = this.setFormError.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.reset = this.reset.bind(this);
    this.update = this.update.bind(this);
    this.validate = this.validate.bind(this);
    this.screenValid = this.screenValid.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.getField = this.getField.bind(this);
    this.getInitialValue = this.getInitialValue.bind(this);
    this.setInitialValue = this.setInitialValue.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.getFormState = this.getFormState.bind(this);
    this.expectRemoval = this.expectRemoval.bind(this);
    this.getSavedValue = this.getSavedValue.bind(this);
    this.removeSavedState = this.removeSavedState.bind(this);
    this.getDerrivedValue = this.getDerrivedValue.bind(this);
    this.setValues = this.setValues.bind(this);
    this.resetField = this.resetField.bind(this);
    this.fieldExists = this.fieldExists.bind(this);
    this.validateField = this.validateField.bind(this);
    this.notify = this.notify.bind(this);
    this.validating = this.validating.bind(this);
    this.validated = this.validated.bind(this);
    this.getDirty = this.getDirty.bind(this);
    this.getPristine = this.getPristine.bind(this);
    this.on = this.on.bind(this);
    this.emit = this.emit.bind(this);
    this.removeListener = this.removeListener.bind(this); // Updater will be used by fields to update and register

    this.updater = {
      register: this.register,
      deregister: this.deregister,
      getField: this.getField,
      update: this.update,
      fieldMap: this.fieldMap,
      setValue: function setValue(fieldId, value) {
        var emit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var field = _this.fieldsById.get(fieldId);

        if (!field.shadow) {
          ObjectMap.set(_this.state.values, field.field, field.fieldApi.getValue());
        }

        if (!field.fieldApi.relevant(_this.state.values)) {
          ObjectMap["delete"](_this.state.values, field.field);
        } // Cleanup phase to get rid of irrelevant fields
        // Also evaluate relevance on all fields


        _this.fieldsById.forEach(function (f) {
          // If a fields within an irrelivant step then remove it
          // Otherwise, check to see if its relevant and only remove if keep state is false
          var newRel = f.fieldApi.checkRelevant();

          if (!f.fieldApi.multistepRelevant(_this.state.values) || !newRel && !f.keepState) {
            ObjectMap["delete"](_this.state.values, f.field);
            ObjectMap["delete"](_this.state.touched, f.field);
            ObjectMap["delete"](_this.state.errors, f.field);
          }
        });

        if (emit) {
          _this.emit('change');

          _this.emit('field', field.field);

          _this.emit('value', field.field, value);
        }
      },
      setTouched: function setTouched(fieldId, touch) {
        var emit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var field = _this.fieldsById.get(fieldId);

        if (!field.shadow && field.fieldApi.getIsRelevant()) {
          ObjectMap.set(_this.state.touched, field.field, field.fieldApi.getTouched());
        } // Shadow values override unless undefined


        if (field.shadow && field.fieldApi.getError() != undefined && field.fieldApi.relevant(_this.state.values)) {
          ObjectMap.set(_this.state.touched, field.field, field.fieldApi.getTouched());
        }

        if (emit) {
          _this.emit('change');

          _this.emit('field', field.field); //this.emit('touch', field.field, touch);

        }
      },
      setError: function setError(fieldId, error) {
        var emit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var field = _this.fieldsById.get(fieldId);

        if (!field.shadow && field.fieldApi.getIsRelevant()) {
          ObjectMap.set(_this.state.errors, field.field, field.fieldApi.getError());
        } // Shadow values override unless undefined


        var currentError = ObjectMap.get(_this.state.errors, field.field);

        if (field.shadow && field.fieldApi.getError() != undefined && field.fieldApi.relevant(_this.state.values)) {
          ObjectMap.set(_this.state.errors, field.field, field.fieldApi.getError());
        } // Special case for attempting to set shadow to undefiend
        else if (field.shadow && field.fieldApi.getError() === undefined && field.fieldApi.relevant(_this.state.values) && // TODO maybe check if object or array
          typeof currentError === 'string') {
            ObjectMap.set(_this.state.errors, field.field, field.fieldApi.getError());
          }

        if (emit) {
          _this.emit('change');

          _this.emit('field', field.field); //this.emit('error', field.field, error);

        }
      },
      expectRemoval: this.expectRemoval,
      getInitialValue: this.getInitialValue,
      getSavedValue: this.getSavedValue
    }; // Define the formApi

    this.formApi = {
      setValue: this.setValue,
      setTouched: this.setTouched,
      setError: this.setError,
      setFormError: this.setFormError,
      setValues: this.setValues,
      setInitialValue: this.setInitialValue,
      getValue: this.getValue,
      getTouched: this.getTouched,
      getError: this.getError,
      reset: this.reset,
      submitForm: this.submitForm,
      getState: this.getFormState,
      getValues: this.getValues,
      getFullField: this.getFullField,
      fieldExists: this.fieldExists,
      getInitialValue: this.getInitialValue,
      validate: this.validate,
      validateField: this.validateField,
      screenValid: this.screenValid,
      resetField: this.resetField,
      getOptions: this.getOptions,
      emitter: this,
      getSavedValue: this.getSavedValue,
      removeSavedState: this.removeSavedState,
      getDerrivedValue: this.getDerrivedValue,
      getStep: this.getStep,
      setStep: this.setStep,
      next: this.next,
      back: this.back,
      setCurrent: this.setCurrent,
      validated: this.validated,
      validating: this.validating,
      getDirty: this.getDirty,
      getPristine: this.getPristine,
      getField: this.getField
    };
    this.on('value', function (field) {
      // The forms values have changed so we want to clear form level error
      delete _this.state.error;

      _this.notify(field);
    });
  }
  /* -------------------------------- Event Emitter ------------------------------ */


  _createClass(FormController, [{
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Grab the set based on the event
      var listeners = this.subscriptions.get(event); // Only call if we have listeners on that event ( null check )

      if (listeners) {
        listeners.forEach(function (listener) {
          return listener.apply(void 0, args);
        });
      }
    }
  }, {
    key: "on",
    value: function on(event, listener) {
      // Singleton check
      if (!this.subscriptions.get(event)) {
        this.subscriptions.set(event, new Set());
      } // Add listener


      var listeners = this.subscriptions.get(event);
      listeners.add(listener);
    }
  }, {
    key: "removeListener",
    value: function removeListener(event, listener) {
      // Remove listener
      var listeners = this.subscriptions.get(event);
      listeners["delete"](listener);
    }
    /* ---------------------------------- Setters ---------------------------------- */

  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: "setValue",
    value: function setValue(name, value, options) {
      this.getField(name).fieldApi.setValue(value, null, _objectSpread2({
        allowEmptyString: this.options.allowEmptyStrings
      }, options));
    }
  }, {
    key: "setTouched",
    value: function setTouched(name, value) {
      this.getField(name).fieldApi.setTouched(value);
    }
  }, {
    key: "setError",
    value: function setError(name, value) {
      this.getField(name).fieldApi.setError(value);
    }
  }, {
    key: "setFormError",
    value: function setFormError(value) {
      this.state.error = value;
      this.emit('change');
    }
  }, {
    key: "validating",
    value: function validating() {
      this.state.validating = this.state.validating + 1;
      this.emit('change');
    }
  }, {
    key: "validated",
    value: function validated(name, error) {
      // Decrement the validating
      this.state.validating = this.state.validating - 1; // Set the error if there is not already one ( sync error first )

      if (!this.getError(name)) {
        this.setError(name, error);
      } // If we are not still validating, and we were submitting, then submit form
      // If we are async validating then dont submit yet


      if (this.state.validating > 0) {
        this.emit('change');
        return;
      } // If we were submitting


      if (this.state.submitting) {
        // Check validity and perform submission if valid
        if (this.valid()) {
          debug$2('Submit', this.state);
          this.emit('submit');
        } else {
          debug$2('Submit', this.state);
          this.emit('failure');
        }

        this.state.submitting = false;
      }

      this.emit('change');
    }
  }, {
    key: "setStep",
    value: function setStep(value) {
      this.state.step = value;
      this.emit('change');
    }
  }, {
    key: "setCurrent",
    value: function setCurrent(component) {
      this.state.Current = component;
      this.emit('change');
    }
  }, {
    key: "back",
    value: function back(prevComponent) {
      this.state.step = this.state.step - 1;
      this.state.Current = prevComponent;
      this.emit('change');
    }
  }, {
    key: "next",
    value: function next(nextComponent) {
      // Validate the entire form
      this.validate(); // If fields on the screen ( currently rendered ) are valid move on

      if (this.screenValid()) {
        this.state.step = this.state.step + 1;
        this.state.Current = nextComponent;
      } // State will have changed


      this.emit('change');
    }
  }, {
    key: "setInitialValue",
    value: function setInitialValue(field, value) {
      ObjectMap.set(this.options.initialValues, field, value);
    }
    /* ---------------------------------- Getters ---------------------------------- */

    /**
     * Generate the external form state that will be exposed to the users
     *
     * @returns Form State
     */

  }, {
    key: "getFormState",
    value: function getFormState() {
      debug$2('Returning form state');
      return _objectSpread2(_objectSpread2({}, this.state), {}, {
        pristine: this.pristine(),
        dirty: this.dirty(),
        invalid: this.invalid()
      });
    }
  }, {
    key: "getFormApi",
    value: function getFormApi() {
      return this.formApi;
    }
  }, {
    key: "getDerrivedValue",
    value: function getDerrivedValue(name) {
      var values = this.getValues();
      return ObjectMap.get(values, name);
    }
  }, {
    key: "getValue",
    value: function getValue(name) {
      var value = this.getField(name).fieldApi.getValue();
      debug$2('Getting value for', name, value);
      return value;
    }
  }, {
    key: "getTouched",
    value: function getTouched(field) {
      var touched = this.getField(field).fieldApi.getTouched();
      debug$2('Getting touched for', field, touched);
      return touched;
    }
  }, {
    key: "getError",
    value: function getError(field) {
      var error = this.getField(field).fieldApi.getError();
      debug$2('Getting error for', field, error);
      return error;
    }
  }, {
    key: "getDirty",
    value: function getDirty(field) {
      var dirty = this.getField(field).fieldApi.getDirty();
      debug$2('Getting dirty for', field, dirty);
      return dirty;
    }
  }, {
    key: "getPristine",
    value: function getPristine(field) {
      var pristine = this.getField(field).fieldApi.getPristine();
      debug$2('Getting pristine for', field, pristine);
      return pristine;
    }
  }, {
    key: "getValues",
    value: function getValues() {
      debug$2('Gettings values');
      return this.state.values;
    }
  }, {
    key: "getAllTouched",
    value: function getAllTouched() {
      debug$2('Gettings touched');
      return this.state.touched;
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      debug$2('Gettings errors');
      return this.state.errors;
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.options;
    }
  }, {
    key: "getStep",
    value: function getStep() {
      return this.state.step;
    }
  }, {
    key: "getSavedValue",
    value: function getSavedValue(name) {
      var field = this.fieldsByName.get(name);

      if (field && field.shadow) {
        return ObjectMap.get(this.savedValues, "shadow-".concat(name));
      }

      return ObjectMap.get(this.savedValues, name);
    }
  }, {
    key: "removeSavedState",
    value: function removeSavedState(name) {
      var field = this.fieldsByName.get(name);

      if (field && field.shadow) {
        return ObjectMap["delete"](this.savedValues, "shadow-".concat(name));
      }

      return ObjectMap["delete"](this.savedValues, name);
    }
  }, {
    key: "getFullField",
    value: function getFullField(field) {
      return field;
    }
  }, {
    key: "getInitialValue",
    value: function getInitialValue(field) {
      return ObjectMap.get(this.options.initialValues, field);
    }
  }, {
    key: "getField",
    value: function getField(name) {
      debug$2('Getting Field', name);
      var field = this.fieldsByName.get(name);

      if (!field) {
        // eslint-disable-next-line no-console
        console.warn("Attempting to get field ".concat(name, " but it does not exist")); // Prevent app from crashing

        return this.dummyField;
      }

      return field;
    } // Notify other fields

  }, {
    key: "notify",
    value: function notify(field) {
      var _this2 = this;

      // Example field - siblings[0].married
      // Get the notifier
      var notifier = this.getField(field); // If we have a list we must notify each one

      if (notifier && notifier.notify) {
        // Example: ['spouse']
        notifier.notify.forEach(function (fieldName) {
          // Get the field toNotify
          var JSPAN = ".".concat(field);
          var path = "".concat(JSPAN.replace(/(.*)[.[].*/, '$1'), ".").concat(fieldName).slice(1); // console.log('PATH', path);
          // Example path - siblings[0].spouse

          var toNotify = _this2.getField(path);

          if (toNotify) {
            debug$2('Notifying', toNotify.field);
            toNotify.fieldApi.validate();
            toNotify.fieldApi.checkRelevant();
          }
        });
      }
    }
  }, {
    key: "validateField",
    value: function validateField(field) {
      this.getField(field).fieldApi.validate();
    }
  }, {
    key: "resetField",
    value: function resetField(field) {
      this.getField(field).fieldApi.reset();
    }
  }, {
    key: "fieldExists",
    value: function fieldExists(field) {
      return this.fieldsByName.get(field) != null;
    }
  }, {
    key: "valid",
    value: function valid() {
      var errors = this.getErrors();
      return !!(ObjectMap.empty(errors) && !this.state.error);
    }
  }, {
    key: "screenValid",
    value: function screenValid() {
      // Return false if any of the fields on the screen are invalid
      var error = Object.entries(this.onScreen).some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            field = _ref2[1];

        return field.fieldApi.getError();
      });
      return !error;
    }
  }, {
    key: "invalid",
    value: function invalid() {
      var errors = this.getErrors();
      return !!(!ObjectMap.empty(errors) || this.state.error);
    }
  }, {
    key: "pristine",
    value: function pristine() {
      // We are pristine if all our fields are pristine
      // const touched = this.getAllTouched();
      // const values = this.getValues();
      // return ObjectMap.empty(touched) && ObjectMap.empty(values);
      var pristine = true;
      this.fieldsById.forEach(function (field) {
        if (!field.fieldApi.getPristine()) {
          pristine = false;
        }
      });
      return pristine;
    }
  }, {
    key: "dirty",
    value: function dirty() {
      return !this.pristine();
    }
  }, {
    key: "reset",
    value: function reset() {
      debug$2('Resetting'); // So because all fields controll themselves and, "inform", this controller
      // of their changes, we need to literally itterate through all registered fields
      // and reset them. Not a big deal but very important to remember that you cant simply
      // reset this controllers state!

      this.fieldsById.forEach(function (field) {
        field.fieldApi.reset({
          preventUpdate: true
        });
      });
      this.emit('reset');
      this.emit('change');
    }
  }, {
    key: "setValues",
    value: function setValues(values) {
      debug$2('Setting values'); // So we because all fields controll themselves and, "inform", this controller
      // of their changes, we need to literally itterate through all registered fields
      // and set them. Not a big deal but very important to remember that you cant simply
      // set this controllers state!

      this.fieldsById.forEach(function (field) {
        // Initialize the values if it needs to be
        var value = ObjectMap.get(values, field.field);

        if (value !== undefined) {
          field.fieldApi.setValue(value, null, {
            preventUpdate: true
          });
        }
      });
      this.emit('change');
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this3 = this;

      debug$2('Validating all fields');
      var values = this.getValues(); // Validate schema if needed

      if (this.options.validationSchema) {
        var errors = validateYupSchema(this.options.validationSchema, values); // So we because all fields controll themselves and, "inform", this controller
        // of their changes, we need to literally itterate through all registered fields
        // and set them. Not a big deal but very important to remember that you cant simply
        // set this controllers state!

        this.fieldsById.forEach(function (field) {
          // Check to see if there is an error to set
          // Note: we use has becuause value may be there but undefined
          if (ObjectMap.has(errors, field.field)) {
            var error = ObjectMap.get(errors, field.field); // If there is an error then set it

            _this3.setError(field.field, error);
          } else {
            // If we are doing schema validation then we need to clear out any old errors
            _this3.setError(field.field, undefined);
          }
        });
      } // Validate AJV schema if needed


      if (this.options.schema && this.options.ajv) {
        var _errors = validateAjvSchema(this.ajvValidate, values); // So we because all fields controll themselves and, "inform", this controller
        // of their changes, we need to literally itterate through all registered fields
        // and set them. Not a big deal but very important to remember that you cant simply
        // set this controllers state!


        this.fieldsById.forEach(function (field) {
          // Check to see if there is an error to set
          // Note: we use has becuause value may be there but undefined
          if (ObjectMap.has(_errors, field.field)) {
            var error = ObjectMap.get(_errors, field.field); // If there is an error then set it

            _this3.setError(field.field, error);
          } else {
            // If we are doing schema validation then we need to clear out any old errors
            _this3.setError(field.field, undefined);
          }
        });
      } // Itterate through and call validate on every field


      this.fieldsById.forEach(function (field) {
        field.fieldApi.validate(values); // Second param to prevent validation

        field.fieldApi.setTouched(true, true);
      }); // Call the form level validation if its present

      if (this.options.validate) {
        var res = this.options.validate(values);
        this.setFormError(res);
      } // Call the forms field level validation


      if (this.options.validateFields) {
        var _errors2 = this.options.validateFields(values); // So we because all fields controll themselves and, "inform", this controller
        // of their changes, we need to literally itterate through all registered fields
        // and set them. Not a big deal but very important to remember that you cant simply
        // set this controllers state!


        this.fieldsById.forEach(function (field) {
          // Check to see if there is an error to set
          // Note: we use has becuause value may be there but undefined
          if (ObjectMap.has(_errors2, field.field)) {
            var error = ObjectMap.get(_errors2, field.field); // If there is an error then set it

            _this3.setError(field.field, error);
          }
        });
      }
    }
  }, {
    key: "asyncValidate",
    value: function asyncValidate() {
      debug$2('Async Validating all fields');
      var values = this.getValues(); // Itterate through and call validate on every field

      this.fieldsById.forEach(function (field) {
        field.fieldApi.asyncValidate(values);
      });
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      // If preventEnter then return
      if (e.keyCode == 13 && this.options.preventEnter) {
        e.preventDefault(e);
        return false;
      }
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      // Incriment number of submit attempts
      this.state.submits = this.state.submits + 1;
      this.state.submitting = true;

      if (!this.options.dontPreventDefault && e) {
        // Prevent default browser form submission
        e.preventDefault(e);
      } // Validate the form


      this.validate(); // Emit a change

      this.emit('change'); // Trigger all async validations

      this.asyncValidate(); // If we are async validating then dont submit yet

      if (this.state.validating > 0) {
        return;
      } // Check validity and perform submission if valid


      if (this.valid()) {
        debug$2('Submit', this.state);
        this.emit('submit');
      } else {
        debug$2('Submit', this.state);
        this.emit('failure');
      }

      this.state.submitting = false;
      this.emit('change');
    }
  }, {
    key: "mount",
    value: function mount() {
      var _this4 = this;

      this.fieldsById.forEach(function (value) {
        _this4.emit('field', value.field);
      });
    }
    /* ---------------- Updater Functions (used by fields) ---------------- */
    // ADDED initialRender parameter because of react 16.13.0 warning that does not like
    // setting initial value during first render

  }, {
    key: "register",
    value: function register(id, field, initialRender) {
      var name = field.field,
          state = field.state;
      debug$2('Register ID:', id, 'Name:', name, state, 'Initial', initialRender); // Example foo.bar.baz[3].baz >>>> foo.bar.baz[3]

      var magicValue = name.slice(0, name.lastIndexOf('[') != -1 ? name.lastIndexOf(']') + 1 : name.length); // Field might be coming back after render remove old field

      var alreadyRegistered;
      this.fieldsById.forEach(function (value, key) {
        if (value && value.field === name) {
          alreadyRegistered = key;
        }
      });

      if ( //!this.expectedRemovals[magicValue] &&
      alreadyRegistered && (field.keepState || field.inMultistep)) {
        debug$2('Already Registered', name);
        this.fieldsById["delete"](alreadyRegistered);
      } else if ( //!this.expectedRemovals[magicValue] &&
      alreadyRegistered && (!field.keepState || !field.inMultistep)) {
        // eslint-disable-next-line no-console
        console.warn('Check to make sure you have not registered two fields with the fieldName', name);
      }

      debug$2('Fields Registered', this.fieldsById.size); // The field is on the screen

      this.onScreen[id] = field; // Always register the field

      this.fieldsById.set(id, field); // Always clear out expected removals when a reregistering array field comes in

      debug$2('clearing expected removal', magicValue);
      delete this.expectedRemovals[magicValue];
      delete this.pulledOut[magicValue]; // The field is a shadow field ooo spooky so dont set anything

      if (field.shadow) {
        return;
      } // Update the forms state right away


      this.updater.setValue(id, field.fieldApi.getValue(), false);
      this.updater.setError(id, field.fieldApi.getError(), false);
      this.updater.setTouched(id, field.fieldApi.getTouched(), false); // We register field right away but dont want it to triger a rerender

      if (!initialRender) {
        this.emit('change');
      }

      this.emit('field', name);
    }
  }, {
    key: "deregister",
    value: function deregister(id) {
      var field = this.fieldsById.get(id);
      var name = field.field;
      debug$2('Deregister', id, name); // The field is off the screen

      delete this.onScreen[id]; // Example foo.bar.baz[3] --> foo.bar.baz[3].baz && foo.bar.baz[3].taz.raz[4].naz

      var expectedRemoval = isExpected(name, this.expectedRemovals); // Example foo.bar.baz[3].baz >>>> foo.bar.baz[3]

      var magicValue = name.slice(0, name.lastIndexOf('[') != -1 ? name.lastIndexOf(']') + 1 : name.length); // If the fields state is to be kept then save the value

      if ( // We are in a multistep or want to keep the state
      (field.keepState || field.inMultistep) && // We are NOT expected to be removed
      !expectedRemoval) {
        // TODO ?? Exception where the field is irrelivant AND keep state was not passed ??
        debug$2("Saving field ".concat(name, "'s value"), field.fieldApi.getFieldState());

        if (!field.shadow) {
          ObjectMap.set(this.savedValues, name, field.fieldApi.getFieldState());
        } else {
          // We are shadow field and will store this value in the shadows
          ObjectMap.set(this.savedValues, "shadow-".concat(name), field.fieldApi.getFieldState());
        }
      } // Remove if its an expected removal OR we dont have keep state


      if ( // This field was expected to be removed
      expectedRemoval || // This field does not have keepstate and is NOT within a multistep
      !field.keepState && !field.inMultistep || // If field is in multistep then we would always keep due to field.inMultistep
      // BUT.. we need to also check if the field is irrelivant
      // because if it gets unmounted, even if its part of a multistep, we want to remove
      // the field completley, unless keep state was passed.
      !field.fieldApi.getIsRelevant() && !field.keepState) {
        // Remove the field completley
        debug$2('Removing field', name);
        this.fieldsById["delete"](id); // Clean up state only if its not expected removal, otherwise we will just pull it out

        if (!expectedRemoval) {
          ObjectMap["delete"](this.state.values, name);
          ObjectMap["delete"](this.state.touched, name);
          ObjectMap["delete"](this.state.errors, name);

          if (!field.shadow) {
            ObjectMap["delete"](this.savedValues, name);
          } else {
            ObjectMap["delete"](this.savedValues, "shadow-".concat(name));
          }
        } // If we expected this removal then pullOut


        if (expectedRemoval && this.pulledOut[magicValue]) {
          debug$2('Pulling out', name, 'with magic value', magicValue);
          ObjectMap.pullOut(this.state.values, magicValue);
          ObjectMap.pullOut(this.state.touched, magicValue);
          ObjectMap.pullOut(this.state.errors, magicValue);
          ObjectMap.pullOut(this.savedValues, magicValue); // console.log('Pull1', this.state.values);
          // console.log('Pull2', this.savedValues);

          delete this.pulledOut[magicValue];
        }
      }

      this.emit('change');
    }
  }, {
    key: "expectRemoval",
    value: function expectRemoval(name) {
      debug$2('Expecting removal of', name);
      this.expectedRemovals[name] = true;
      this.pulledOut[name] = true;
    }
  }, {
    key: "update",
    value: function update(id, field, oldName) {
      debug$2('Update', id, field.field, oldName, field.fieldState.value); // Update the error touched and values of this field

      var value = field.fieldApi.getValue();
      var error = field.fieldApi.getError();
      var t = field.fieldApi.getTouched(); // Clear the old value out

      var oldField = this.fieldsByName.get(oldName); // Only clear if we had an old name ( our name changed )
      // %% the oldField is gone!

      if (oldName && !oldField) {
        // Setting nothing sets to undefined and does NOT pull out
        ObjectMap.set(this.state.values, oldName);
        ObjectMap.set(this.state.errors, oldName);
        ObjectMap.set(this.state.touched, oldName);
      } // Set the value


      ObjectMap.set(this.state.values, field.field, value);
      ObjectMap.set(this.state.errors, field.field, error);
      ObjectMap.set(this.state.touched, field.field, t);
      this.emit('change');
    }
  }]);

  return FormController;
}();

var logger$5 = debug('informed:FormProvider' + '\t\t');

var FormProvider = function FormProvider(_ref) {
  var children = _ref.children,
      formApi = _ref.formApi,
      formController = _ref.formController,
      formState = _ref.formState,
      rest = _objectWithoutProperties(_ref, ["children", "formApi", "formController", "formState"]);

  logger$5('Render FormProvider');

  if (formApi) {
    logger$5('Render FormProvider with given values');
    /* --- Create Provider with given values and render Content --- */

    return /*#__PURE__*/React.createElement(FormRegisterContext.Provider, {
      value: formController.updater
    }, /*#__PURE__*/React.createElement(FormApiContext.Provider, {
      value: formApi
    }, /*#__PURE__*/React.createElement(FormStateContext.Provider, {
      value: formState
    }, children)));
  }

  logger$5('Render FormProvider with generated values');
  /* --- User did not pass values so create them --- */

  var value = useForm(rest);
  return /*#__PURE__*/React.createElement(FormRegisterContext.Provider, {
    value: value.formController.updater
  }, /*#__PURE__*/React.createElement(FormApiContext.Provider, {
    value: value.formApi
  }, /*#__PURE__*/React.createElement(FormStateContext.Provider, {
    value: value.formState
  }, children)));
};

var logger$6 = debug('informed:useForm' + '\t\t');

var useForm = function useForm(_ref) {
  var dontPreventDefault = _ref.dontPreventDefault,
      initialValues = _ref.initialValues,
      validate = _ref.validate,
      validateFields = _ref.validateFields,
      allowEmptyStrings = _ref.allowEmptyStrings,
      preventEnter = _ref.preventEnter,
      getApi = _ref.getApi,
      apiRef = _ref.apiRef,
      onChange = _ref.onChange,
      onReset = _ref.onReset,
      onSubmit = _ref.onSubmit,
      onValueChange = _ref.onValueChange,
      onSubmitFailure = _ref.onSubmitFailure,
      validationSchema = _ref.validationSchema,
      schema = _ref.schema,
      ajv = _ref.ajv,
      fieldMap = _ref.fieldMap,
      onlyValidateSchema = _ref.onlyValidateSchema,
      userProps = _objectWithoutProperties(_ref, ["dontPreventDefault", "initialValues", "validate", "validateFields", "allowEmptyStrings", "preventEnter", "getApi", "apiRef", "onChange", "onReset", "onSubmit", "onValueChange", "onSubmitFailure", "validationSchema", "schema", "ajv", "fieldMap", "onlyValidateSchema"]);

  logger$6('Render useForm'); // Generate form controller options

  var formControllerOptions = useMemo(function () {
    return {
      dontPreventDefault: dontPreventDefault,
      initialValues: initialValues,
      validate: validate,
      validateFields: validateFields,
      allowEmptyStrings: allowEmptyStrings,
      preventEnter: preventEnter,
      validationSchema: validationSchema,
      schema: schema,
      ajv: ajv,
      fieldMap: fieldMap
    };
  }, [dontPreventDefault, initialValues, validate, validateFields, allowEmptyStrings, preventEnter, validationSchema, schema, ajv, fieldMap]); // Create form controller

  var _useState = useState(function () {
    return new FormController(formControllerOptions);
  }),
      _useState2 = _slicedToArray(_useState, 1),
      formController = _useState2[0]; // Update the options when they change


  useEffect(function () {
    formController.setOptions(formControllerOptions);
  }, [formControllerOptions]);
  useIsomorphicLayoutEffect(function () {
    formController.mount();
  }, []); // Form state will be used to trigger rerenders

  var _useState3 = useState(function () {
    return formController.getFormState();
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1]; // Register for events


  useIsomorphicLayoutEffect(function () {
    var onChangeHandler = function onChangeHandler() {
      return onChange && onChange(formController.getFormState());
    };

    var onResetHandler = function onResetHandler() {
      return onReset && onReset();
    };

    var onSubmitHandler = function onSubmitHandler() {
      return onSubmit && onSubmit(formController.getFormState().values);
    };

    var onValueHandler = function onValueHandler() {
      return onValueChange && onValueChange(formController.getFormState().values);
    };

    var onFailureHandler = function onFailureHandler() {
      return onSubmitFailure && onSubmitFailure(formController.getFormState().errors);
    }; // Register for events


    formController.on('change', onChangeHandler);
    formController.on('reset', onResetHandler);
    formController.on('submit', onSubmitHandler);
    formController.on('value', onValueHandler);
    formController.on('failure', onFailureHandler); // Unregister events

    return function () {
      formController.removeListener('change', onChangeHandler);
      formController.removeListener('reset', onResetHandler);
      formController.removeListener('submit', onSubmitHandler);
      formController.removeListener('value', onValueHandler);
      formController.removeListener('failure', onFailureHandler);
    };
  }, [onChange, onReset, onSubmit, onValueChange, onSubmitFailure]); // Initialize code like constructor but not muhahah

  useState(function () {
    // Update the form state to trigger rerender!
    var onChangeHandlerRerender = function onChangeHandlerRerender() {
      logger$6('Setting form state');
      setFormState(formController.getFormState());
    }; // const debounced = debounce(onChangeHandlerRerender, 250);


    formController.on('change', onChangeHandlerRerender); // Give access to api outside

    if (getApi) {
      getApi(formController.getFormApi());
    }

    if (apiRef) {
      apiRef.current = formController.getFormApi();
    }
  }); // We dont want this to happen on every render so thats why useState is used here

  var _useState5 = useState(function () {
    return formController.getFormApi();
  }),
      _useState6 = _slicedToArray(_useState5, 1),
      formApi = _useState6[0]; // TODO technically speaking this can be unsafe as there is circular dependency
  // between form provider and useForm.. Its ok because anyone that in theory
  // Uses a form provider and a use form hook themselves will never call the render
  // function created here... that being said I will look into fixing that warning
  // at some point :)


  var render = function render(children) {
    return /*#__PURE__*/React.createElement(FormProvider, {
      formApi: formApi,
      formState: formState,
      formController: formController
    }, /*#__PURE__*/React.createElement(React.Fragment, null, !children ? /*#__PURE__*/React.createElement(FormFields, {
      schema: schema,
      onlyValidateSchema: onlyValidateSchema
    }) : children));
  };

  return {
    formApi: formApi,
    formState: formState,
    formController: formController,
    render: render,
    userProps: userProps
  };
};

var debug$3 = debug('informed:Form' + '\t\t');

var Form = function Form(_ref) {
  var children = _ref.children,
      renderProp = _ref.render,
      component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["children", "render", "component"]);

  debug$3('Render FORM');

  var _useForm = useForm(rest),
      formApi = _useForm.formApi,
      formController = _useForm.formController,
      formState = _useForm.formState,
      render = _useForm.render,
      userProps = _useForm.userProps;

  var getContent = function getContent() {
    var props = {
      formState: formState,
      formApi: formApi
    };

    if (component) {
      return /*#__PURE__*/React.createElement(component, props, children);
    }

    if (renderProp) {
      return renderProp(props);
    }

    if (typeof children === 'function') {
      return children(props);
    }

    return children;
  };
  /* --- Render Content --- */


  return render( /*#__PURE__*/React.createElement("form", _extends({}, userProps, {
    onReset: formController.reset,
    onSubmit: formController.submitForm,
    onKeyDown: formController.keyDown
  }), getContent()));
};

var buildScopedFormApi$1 = function buildScopedFormApi(scope, formApi) {
  return _objectSpread2(_objectSpread2({}, formApi), {}, {
    getValue: function getValue(field) {
      return formApi.getValue("".concat(scope, ".").concat(field));
    },
    getTouched: function getTouched(field) {
      return formApi.getTouched("".concat(scope, ".").concat(field));
    },
    getError: function getError(field) {
      return formApi.getError("".concat(scope, ".").concat(field));
    },
    setValue: function setValue(field, value) {
      return formApi.setValue("".concat(scope, ".").concat(field), value);
    },
    setTouched: function setTouched(field, value) {
      return formApi.setTouched("".concat(scope, ".").concat(field), value);
    },
    setError: function setError(field, value) {
      return formApi.setError("".concat(scope, ".").concat(field), value);
    },
    getInitialValue: function getInitialValue(field) {
      return formApi.getInitialValue("".concat(scope, ".").concat(field));
    },
    getFullField: function getFullField(field) {
      return "".concat(formApi.getFullField(scope), ".").concat(field);
    }
  });
};

var buildScopedRegister = function buildScopedRegister(scope, formRegister) {
  var _register = formRegister.register,
      _deregister = formRegister.deregister,
      _setValue = formRegister.setValue,
      _setTouched = formRegister.setTouched,
      _setError = formRegister.setError,
      _update = formRegister.update,
      _getField = formRegister.getField,
      _expectRemoval = formRegister.expectRemoval,
      _getInitialValue = formRegister.getInitialValue,
      fieldMap = formRegister.fieldMap,
      _getSavedValue = formRegister.getSavedValue;
  return {
    register: function register(field) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return _register.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    deregister: function deregister(field) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return _deregister.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    update: function update(field) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return _update.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    setValue: function setValue(field) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      return _setValue.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    setTouched: function setTouched(field) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      return _setTouched.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    setError: function setError(field) {
      for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }

      return _setError.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    getField: function getField(field) {
      for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        args[_key7 - 1] = arguments[_key7];
      }

      return _getField.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    expectRemoval: function expectRemoval(field) {
      for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        args[_key8 - 1] = arguments[_key8];
      }

      return _expectRemoval.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    getInitialValue: function getInitialValue(field) {
      return _getInitialValue("".concat(scope, ".").concat(field));
    },
    getSavedValue: function getSavedValue(field) {
      return _getSavedValue("".concat(scope, ".").concat(field));
    },
    fieldMap: fieldMap
  };
};

var Scope = function Scope(_ref) {
  var scope = _ref.scope,
      children = _ref.children;
  var formRegister = useContext(FormRegisterContext);
  var formApi = useFormApi();
  var formState = useFormState(); // VERY important to memoize the builders!

  var scopedFormApi = useMemo(function () {
    return buildScopedFormApi$1(scope, formApi);
  }, [scope]);
  var scopedRegister = useMemo(function () {
    return buildScopedRegister(scope, formRegister);
  }, [scope]);
  return /*#__PURE__*/React.createElement(FormRegisterContext.Provider, {
    value: scopedRegister
  }, /*#__PURE__*/React.createElement(FormApiContext.Provider, {
    value: scopedFormApi
  }, /*#__PURE__*/React.createElement(FormStateContext.Provider, {
    value: formState
  }, children)));
};

var FormState = function FormState(props) {
  var formState = useFormState();
  var displayState = {};

  if (Object.keys(props).length > 0) {
    Object.keys(props).forEach(function (key) {
      displayState[key] = formState[key];
    });
  } else {
    displayState = formState;
  }

  var _displayState = displayState,
      pristine = _displayState.pristine,
      dirty = _displayState.dirty,
      invalid = _displayState.invalid,
      values = _displayState.values,
      errors = _displayState.errors,
      touched = _displayState.touched,
      validating = _displayState.validating,
      submitting = _displayState.submitting;
  return /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, JSON.stringify({
    pristine: pristine,
    dirty: dirty,
    invalid: invalid,
    values: values,
    errors: errors,
    touched: touched,
    validating: validating,
    submitting: submitting
  }, null, 2)));
};

var useMultistep = function useMultistep(_ref) {
  var initialStep = _ref.initialStep,
      multistepApiRef = _ref.multistepApiRef;

  // Get the formApi
  var _useFormApi = useFormApi(),
      getValues = _useFormApi.getValues,
      validate = _useFormApi.validate,
      screenValid = _useFormApi.screenValid; // Track our steps by name


  var _useState = useState(new Map()),
      _useState2 = _slicedToArray(_useState, 1),
      stepsByName = _useState2[0]; // Track number of steps


  var nSteps = useRef(0); // Define our state

  var _useStateWithGetter = useStateWithGetter({
    current: initialStep,
    steps: [],
    goal: null
  }),
      _useStateWithGetter2 = _slicedToArray(_useStateWithGetter, 3),
      multistepState = _useStateWithGetter2[0],
      setMultistepState = _useStateWithGetter2[1],
      getMultistepState = _useStateWithGetter2[2]; // Define our api


  var _useState3 = useState(function () {
    var getCurrentStep = function getCurrentStep() {
      // Get the current state
      var _getMultistepState = getMultistepState(),
          current = _getMultistepState.current; // Get the current step


      var currentStep = stepsByName.get(current); // Return it

      return currentStep;
    };

    var api = {
      // Gets the whole state
      getState: function getState() {
        return getMultistepState();
      },
      // Gets just the current
      getCurrentStep: getCurrentStep,
      // Gets that step
      getStep: function getStep(name) {
        return stepsByName.get(name);
      },
      // gets the current number of steps
      getNumberOfSteps: function getNumberOfSteps() {
        return stepsByName.size;
      },
      // Goes to next step
      next: function next() {
        // Validate the entire form
        validate(); // If fields on the screen ( currently rendered ) are valid move on

        if (screenValid()) {
          // Get the current step
          var _getCurrentStep = getCurrentStep(),
              getNext = _getCurrentStep.getNext;

          var next = getNext(); // Determine what the next step should be

          var nextStep = typeof next === 'function' ? next(getValues()) : next; // Determine if it has a next

          if (nextStep) {
            setMultistepState(function (prev) {
              return _objectSpread2(_objectSpread2({}, prev), {}, {
                current: nextStep
              });
            });
          }
        }
      },
      // Goes to previous step
      back: function back() {
        // Get the current step
        var _getCurrentStep2 = getCurrentStep(),
            getPrevious = _getCurrentStep2.getPrevious;

        var previous = getPrevious(); // Determine what the previous step should be

        var previousStep = typeof previous === 'function' ? previous(getValues()) : previous; // Determine if it has a previous

        if (previousStep) {
          setMultistepState(function (prev) {
            return _objectSpread2(_objectSpread2({}, prev), {}, {
              current: previousStep
            });
          });
        }
      },
      // Goes to specified step
      setCurrent: function setCurrent(stp) {
        if (stp) {
          var goalIndex = stepsByName.get(stp).index; // console.log(
          //   'GOAL INDEX',
          //   goalIndex,
          //   'STPINDEX',
          //   getCurrentStep().index
          // );

          if (goalIndex < getCurrentStep().index) {
            setMultistepState(function (prev) {
              return _objectSpread2(_objectSpread2({}, prev), {}, {
                current: stp,
                goal: null
              });
            });
          } else {
            setMultistepState(function (prev) {
              return _objectSpread2(_objectSpread2({}, prev), {}, {
                // current: stp,
                goal: stp
              });
            });
          }
        }
      },
      // Registers the step
      register: function register(name, step, initial) {
        if (initial) {
          nSteps.current = nSteps.current + 1;
          stepsByName.set(name, _objectSpread2(_objectSpread2({}, step), {}, {
            index: nSteps.current
          }));
        } else {
          setMultistepState(function (prev) {
            return _objectSpread2(_objectSpread2({}, prev), {}, {
              steps: Array.from(stepsByName.keys())
            });
          });
        }
      },
      // Deregisters the step
      deregister: function deregister(name) {
        stepsByName["delete"](name);
        nSteps.current = nSteps.current - 1;
        setMultistepState(function (prev) {
          return _objectSpread2(_objectSpread2({}, prev), {}, {
            steps: Array.from(stepsByName.keys())
          });
        });
      }
    };

    if (multistepApiRef) {
      multistepApiRef.current = api;
    }

    return api;
  }),
      _useState4 = _slicedToArray(_useState3, 1),
      multistepApi = _useState4[0]; // Render funtion that will provide state and api


  var render = function render(children) {
    return /*#__PURE__*/React.createElement(MultistepApiContext.Provider, {
      value: multistepApi
    }, /*#__PURE__*/React.createElement(MultistepStateContext.Provider, {
      value: multistepState
    }, children));
  };

  return _objectSpread2(_objectSpread2(_objectSpread2({}, multistepApi), multistepState), {}, {
    render: render
  });
};

function useMultistepState() {
  return useContext(MultistepStateContext);
}

function useMultistepApi() {
  return useContext(MultistepApiContext);
}

var useMultistepStep = function useMultistepStep(_ref) {
  var step = _ref.step,
      next = _ref.next,
      previous = _ref.previous,
      relevant = _ref.relevant;

  var _useFormState = useFormState(),
      values = _useFormState.values;

  var _useMultistepState = useMultistepState(),
      current = _useMultistepState.current,
      goal = _useMultistepState.goal;

  var _useMultistepApi = useMultistepApi(),
      register = _useMultistepApi.register,
      deregister = _useMultistepApi.deregister,
      goToNext = _useMultistepApi.next;

  var isCurrent = step === current;
  var isRelevant = relevant ? relevant(values) : true;
  var nextRef = useRef(next);
  var prevRef = useRef(previous);
  var relevantRef = useRef();
  nextRef.current = next;
  prevRef.current = previous;
  relevantRef.current = relevant;
  useState(function () {
    register(step, {
      name: step,
      getNext: function getNext() {
        return nextRef.current;
      },
      getPrevious: function getPrevious() {
        return prevRef.current;
      }
    }, true);
  });
  useEffect(function () {
    register(step, {
      name: step,
      getNext: function getNext() {
        return nextRef.current;
      },
      getPrevious: function getPrevious() {
        return prevRef.current;
      }
    });
    return function () {
      deregister(step);
    };
  }, [step]);
  useEffect(function () {
    // if we are NOT at the goal go to the next step
    if (goal && isCurrent && goal !== step) {
      // console.log('GOAL', goal, 'STEP', step, 'INDEX', getStep(step).index);
      // console.log('GOING TO NEXT STEP');
      goToNext();
    }
  }, [goal, isCurrent]);

  var render = function render(children) {
    return /*#__PURE__*/React.createElement(MultistepStepContext.Provider, {
      value: {
        relevant: function relevant(params) {
          return relevantRef.current ? relevantRef.current(params) : true;
        },
        multistep: true
      }
    }, isCurrent && isRelevant ? children : null);
  };

  return {
    isCurrent: isCurrent,
    isRelevant: isRelevant,
    step: step,
    render: render
  };
};

function Multistep(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _useMultistep = useMultistep(props),
      render = _useMultistep.render,
      context = _objectWithoutProperties(_useMultistep, ["render"]);

  if (typeof children === 'function') {
    return render(children(context));
  }

  return render(children);
}

Multistep.Step = function MultistepStep(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  var _useMultistepStep = useMultistepStep(props),
      render = _useMultistepStep.render;

  return render(children);
};

var FormField = function FormField(_ref) {
  var field = _ref.field;

  // Get the field map off the forms context
  var _useContext = useContext(FormRegisterContext),
      fieldMap = _useContext.fieldMap; // Grab the form api ( we need it to get the actual field name because might be in scope )


  var _useFormApi = useFormApi(),
      getFullField = _useFormApi.getFullField,
      getOptions = _useFormApi.getOptions; // Grab the full field


  var fullField = getFullField(field); // Grap the schema

  var _getOptions = getOptions(),
      schema = _getOptions.schema; // First find property from the schema via the path to that field
  // Examples
  // field = "name" ---> properties.name
  // field = "brother.name" ---> properties.brother.properties.name
  // field = "brother.siblings[1].friend.name" ---> properties.brother.properties.siblings.items[1].properties.friend.properties.name


  var path = getSchemaPathFromJsonPath(fullField);
  var property = ObjectMap.get(schema, path); // If property was not found return null

  if (!property) {
    return null;
  } // Next compute the field from property


  var schemaField = computeFieldFromProperty(field, property);
  var props = schemaField.props,
      componentType = schemaField.componentType;
  var Component = fieldMap[componentType];
  return /*#__PURE__*/React.createElement(Component, _extends({
    field: field
  }, props));
};

var SchemaFields = function SchemaFields() {
  var _useFormApi = useFormApi(),
      getOptions = _useFormApi.getOptions; // Grap the schema


  var _getOptions = getOptions(),
      schema = _getOptions.schema;

  return /*#__PURE__*/React.createElement(FormFields, {
    schema: schema
  });
};

var withFormApi = function withFormApi(Component) {
  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(FormApiContext.Consumer, null, function (formApi) {
      return /*#__PURE__*/React.createElement(Component, _extends({
        formApi: formApi,
        ref: ref
      }, props));
    });
  });
};

var withFormState = function withFormState(Component) {
  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(FormStateContext.Consumer, null, function (formState) {
      return /*#__PURE__*/React.createElement(Component, _extends({
        formState: formState,
        ref: ref
      }, props));
    });
  });
};

// eslint-disable-next-line no-unused-vars

var buildFieldApi = function buildFieldApi(formApi, field) {
  return {
    // TODO refactor to use field api from updater.. need to make sure this
    // will be stable
    getValue: function getValue() {
      return formApi.getValue(field);
    },
    setValue: function setValue(value) {
      return formApi.setValue(field, value);
    },
    getTouched: function getTouched() {
      return formApi.getTouched(field);
    },
    setTouched: function setTouched(value) {
      return formApi.setTouched(field, value);
    },
    getError: function getError() {
      return formApi.getError(field);
    },
    setError: function setError(value) {
      return formApi.setError(field, value);
    },
    reset: function reset() {
      return formApi.resetField(field);
    },
    validate: function validate() {
      return formApi.validateField(field);
    },
    exists: function exists() {
      return formApi.fieldExists(field);
    },
    getDirty: function getDirty() {
      return formApi.getDirty(field);
    },
    getPristine: function getPristine() {
      return formApi.getPristine(field);
    },
    getFieldState: function getFieldState() {
      return formApi.getField(field).fieldApi.getFieldState();
    }
  };
};

function useFieldApi(field) {
  var formApi = useFormApi();
  var fieldApi = useMemo(function () {
    return buildFieldApi(formApi, field);
  }, [field]);
  return fieldApi;
}

function useFieldState(name) {
  var fieldApi = useFieldApi(name);
  var formApi = useFormApi();

  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      updateState = _React$useState2[1];

  var forceUpdate = React.useCallback(function () {
    return updateState({});
  }, []);
  useIsomorphicLayoutEffect(function () {
    var listener = function listener(target) {
      if (target === name) {
        forceUpdate();
      }
    };

    formApi.emitter.on('field', listener);
    return function () {
      formApi.emitter.removeListener('field', listener);
    };
  }, []);
  useIsomorphicLayoutEffect(function () {
    forceUpdate();
  }, []); // useEffect(() => {
  //   forceUpdate();
  // }, []);

  return fieldApi.getFieldState() || {};
}

var withFieldState = function withFieldState(field) {
  return function (Component) {
    return function (props) {
      var fieldState = useFieldState(field);
      return /*#__PURE__*/React.createElement(Component, _extends({
        fieldState: fieldState
      }, props));
    };
  };
};

var withFieldApi = function withFieldApi(field) {
  return function (Component) {
    return function (props) {
      var fieldApi = useFieldApi(field);
      return /*#__PURE__*/React.createElement(Component, _extends({
        fieldApi: fieldApi
      }, props));
    };
  };
};

var Option = function Option(_ref) {
  var value = _ref.value,
      forwardedRef = _ref.forwardedRef,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["value", "forwardedRef", "children"]);

  return /*#__PURE__*/React.createElement("option", _extends({
    ref: forwardedRef,
    value: value,
    key: value
  }, rest), children);
};

var Input = Text$1;

export { ArrayField, Checkbox as BasicCheckbox, Radio as BasicRadio, RadioGroup as BasicRadioGroup, Select as BasicSelect, Text as BasicText, TextArea as BasicTextArea, Checkbox$1 as Checkbox, Form, FormComponents, FormField, FormFields, FormProvider, FormState, Input, Multistep, Option, Radio$1 as Radio, RadioGroup$1 as RadioGroup, Relevant, SchemaFields, Scope, Select$1 as Select, Text$1 as Text, TextArea$1 as TextArea, asField, useArrayField, useArrayFieldApi, useArrayFieldItemApi, useCursorPosition, useField, useFieldApi, useFieldState, useForm, useFormApi, useFormState, useMultistepApi, useMultistepState, utils, withFieldApi, withFieldState, withFormApi, withFormState, withRadioGroup };
