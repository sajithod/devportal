function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import copy from 'fast-copy';
import * as raw from './raw';
import { normalizeSelect } from './utils';

var getBaseUrl = function getBaseUrl(params) {
  return "/organizations/".concat(params.organizationId, "/teams");
};

var getEntityUrl = function getEntityUrl(params) {
  return "".concat(getBaseUrl(params), "/").concat(params.teamId);
};

export var get = function get(http, params) {
  return raw.get(http, getEntityUrl(params));
};
export var getMany = function getMany(http, params) {
  return raw.get(http, getBaseUrl(params), {
    params: normalizeSelect(params.query)
  });
};
export var getManyForSpace = function getManyForSpace(http, params) {
  return raw.get(http, "/spaces/".concat(params.spaceId, "/teams"), {
    params: normalizeSelect(params.query)
  });
};
export var create = function create(http, params, rawData, headers) {
  return raw.post(http, getBaseUrl(params), rawData, {
    headers: headers
  });
};
export var update = function update(http, params, rawData, headers) {
  var _rawData$sys$version;

  var data = copy(rawData);
  delete data.sys;
  return raw.put(http, getEntityUrl(params), data, {
    headers: _objectSpread({
      'X-Contentful-Version': (_rawData$sys$version = rawData.sys.version) !== null && _rawData$sys$version !== void 0 ? _rawData$sys$version : 0
    }, headers)
  });
};
export var del = function del(http, params) {
  return raw.del(http, getEntityUrl(params));
};