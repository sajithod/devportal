"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterByDotPaths = filterByDotPaths;
exports.preparePathsFilter = preparePathsFilter;
exports.hideComplexValue = hideComplexValue;
exports.isPresentInDotFilter = isPresentInDotFilter;
exports.partialCloneSubpath = partialCloneSubpath;
exports.hideField = hideField;

var _objectPath = _interopRequireDefault(require("object-path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function filterByDotPaths(obj, pathsFilter, opts) {
  let result;
  const paths = preparePathsFilter(pathsFilter);

  if (paths) {
    result = {};
    paths.forEach(path => {
      result[path] = _objectPath.default.get(obj, path);
    });
  } else {
    result = _objectSpread({}, obj);
  }

  if (opts && opts.hideFields) {
    const hiddenFields = [];
    const optsHideFields = opts.hideFields;
    Object.keys(optsHideFields).forEach(key => {
      const msg = optsHideFields[key];
      hiddenFields.push(...hideField(result, key, msg, pathsFilter));
    });

    if (hiddenFields.length > 0 && opts.hideFieldsNote) {
      result['[debug note]'] = opts.hideFieldsNote.replace('%fieldNames%', hiddenFields.join(' '));
    }
  }

  return result;
}

function preparePathsFilter(pathsFilter) {
  if (!pathsFilter) return null;
  if (Array.isArray(pathsFilter)) return pathsFilter;
  const tmp = pathsFilter.split(/\s|,/).filter(s => s !== '');
  if (tmp.length > 0) return tmp;
  return null;
}

function hideComplexValue(val, msg = 'was hidden') {
  if (val === null || val === undefined) return val;
  const t = typeof val;

  if (t === 'boolean' || t === 'number') {
    return val;
  }

  if (t === 'string') {
    if (val.length < 500) {
      return val;
    }

    return `String(length:${val.length}) ${msg}`;
  }

  if (t === 'object' && val.constructor) {
    if (val.constructor.name === 'Array') {
      return `Array(length:${val.length}) ${msg}`;
    }

    if (val.constructor.name === 'Object') {
      return `Object {} ${msg}`;
    }

    return `Object(${val.constructor.name}) ${msg}`;
  }

  return t;
}

function isPresentInDotFilter(name, pathsFilter) {
  if (!pathsFilter) return false;

  if (Array.isArray(pathsFilter)) {
    for (let i = 0; i < pathsFilter.length; i++) {
      if (pathsFilter[i] === name || pathsFilter[i].indexOf(`${name}.`) === 0) return true;
    }
  } else {
    return pathsFilter === name || pathsFilter.indexOf(`${name}.`) === 0;
  }

  return false;
}

function partialCloneSubpath(res, path) {
  if (!res) return;
  let key = path.shift();
  const idx = parseInt(key, 10);
  key = idx >= 0 ? idx : key;
  if (!res[key]) return;

  if (Array.isArray(res[key])) {
    res[key] = res[key].slice(0); // clone array

    partialCloneSubpath(res[key], path);
  } else if (typeof res[key] === 'object') {
    res[key] = _objectSpread({}, res[key]); // clone object

    partialCloneSubpath(res[key], path);
  }
}

function hideField(result, key, msg, pathsFilter) {
  const hiddenFields = [];
  const wildcardMatch = key.match(/(.*)\.\*$/);

  if (wildcardMatch) {
    const k = wildcardMatch[1];
    partialCloneSubpath(result, k.split('.'));

    const res = _objectPath.default.get(result, k, result[k]);

    if (res && typeof res === 'object') {
      Object.keys(res).forEach(kk => {
        if (res[kk] && !isPresentInDotFilter(`${k}.${kk}`, pathsFilter)) {
          const tmp = hideComplexValue(res[kk], msg ? msg.replace(new RegExp(`${k}.*`.replace(/([.*])/g, '\\$1'), 'g'), `${k}.${kk}`) : msg);

          if (tmp !== res[kk]) {
            res[kk] = tmp;
            hiddenFields.push(`${k}.${kk}`);
          }
        }
      });
      return hiddenFields;
    }
  }

  if (result[key] && !isPresentInDotFilter(key, pathsFilter)) {
    const tmp = hideComplexValue(result[key], msg);

    if (tmp !== result[key]) {
      result[key] = tmp;
      hiddenFields.push(key);
    }
  }

  return hiddenFields;
}