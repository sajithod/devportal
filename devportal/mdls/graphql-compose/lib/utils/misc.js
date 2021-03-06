"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveMaybeThunk = resolveMaybeThunk;
exports.camelCase = camelCase;
exports.getPluralName = getPluralName;
exports.upperFirst = upperFirst;
exports.clearName = clearName;
exports.omit = omit;
exports.only = only;
exports.inspect = inspect;
exports.forEachKey = forEachKey;
exports.mapEachKey = mapEachKey;

var _is = require("./is");

var _pluralize = require("./pluralize");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function resolveMaybeThunk(thingOrThunk) {
  // eslint-disable-line
  return typeof thingOrThunk === 'function' ? thingOrThunk() : thingOrThunk;
}

function camelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => index === 0 ? letter.toLowerCase() : letter.toUpperCase()).replace(/\s+/g, '');
}

function getPluralName(name) {
  return (0, _pluralize.pluralize)(camelCase(name));
}

function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function clearName(str) {
  return str.replace(/[^_a-zA-Z0-9]/g, '');
}

function omit(obj, keys) {
  if (!obj) {
    return {};
  }

  const result = _objectSpread({}, obj);

  if (Array.isArray(keys)) {
    keys.forEach(k => {
      delete result[k];
    });
  } else {
    delete result[keys];
  }

  return result;
}

function only(obj, keys) {
  if (!obj) {
    return {};
  }

  const result = {};

  if (Array.isArray(keys)) {
    keys.forEach(k => {
      if ({}.hasOwnProperty.call(obj, k)) {
        result[k] = obj[k];
      }
    });
  } else if ({}.hasOwnProperty.call(obj, keys)) {
    result[keys] = obj[keys];
  }

  return result;
}

function inspectObject(value) {
  let name;

  if (value && value.constructor && value.constructor.name) {
    name = value.constructor.name;
  }

  const props = `{ ${Object.keys(value).map(k => `${k}: ${inspect(value[k])}`).join(', ')} }`;
  return name ? `${name}(${props})` : props;
}
/**
 * Used to print values in error messages.
 */


function inspect(value) {
  return value && typeof value === 'object' ? typeof value.inspect === 'function' ? value.inspect() : Array.isArray(value) ? `[${value.map(inspect).join(', ')}]` : inspectObject(value) : typeof value === 'string' ? `"${value}"` : typeof value === 'function' ? `[function ${value.name}]` : String(value);
}
/**
 * Traverse object like Array.forEach
 *
 * @example
 *     const obj = { a: 1, b: 2, c: 3 };
 *     let result = '';
 *     forEachKey(obj, (v, k) => { result += `${v},${k};`; });
 *     // result = '1,a;2,b;3,c;'
 */


function forEachKey(obj, callback) {
  Object.keys(obj).forEach(key => {
    callback(obj[key], key);
  });
}
/**
 * Traverse object like Array.map
 *
 * @example
 *      const obj = { a: 1, b: 2, c: 3 };
 *      const result = mapEachKey(obj, (v, k) => `${v}${k}`);
 *      // result = { a: '1a', b: '2b', c: '3c' }
 */


function mapEachKey(obj, callback) {
  if (!(0, _is.isObject)(obj)) return obj;
  const result = {};
  Object.keys(obj).forEach(key => {
    result[key] = callback(obj[key], key);
  });
  return result;
}