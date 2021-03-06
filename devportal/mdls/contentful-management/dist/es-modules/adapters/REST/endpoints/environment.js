function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import copy from 'fast-copy';
import * as raw from './raw';
export var get = function get(http, params) {
  return raw.get(http, "/spaces/".concat(params.spaceId, "/environments/").concat(params.environmentId));
};
export var getMany = function getMany(http, params) {
  return raw.get(http, "/spaces/".concat(params.spaceId, "/environments"), {
    params: params.query
  });
};
export var update = function update(http, params, rawData, headers) {
  var _rawData$sys$version;

  var data = copy(rawData);
  delete data.sys;
  return raw.put(http, "/spaces/".concat(params.spaceId, "/environments/").concat(params.environmentId), data, {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      'X-Contentful-Version': (_rawData$sys$version = rawData.sys.version) !== null && _rawData$sys$version !== void 0 ? _rawData$sys$version : 0
    })
  });
};
export var del = function del(http, params) {
  return raw.del(http, "/spaces/".concat(params.spaceId, "/environments/").concat(params.environmentId));
};
export var create = function create(http, params, rawData, headers) {
  var data = copy(rawData);
  return raw.post(http, "/spaces/".concat(params.spaceId, "/environments"), data, {
    headers: headers
  });
};
export var createWithId = function createWithId(http, params, rawData, headers) {
  var data = copy(rawData);
  return raw.put(http, "/spaces/".concat(params.spaceId, "/environments/").concat(params.environmentId), data, {
    headers: _objectSpread(_objectSpread({}, headers), params.sourceEnvironmentId ? {
      'X-Contentful-Source-Environment': params.sourceEnvironmentId
    } : {})
  });
};