"use strict";

exports.__esModule = true;
exports.clearCache = clearCache;
exports.default = resolve;
exports.makeFetchJSON = makeFetchJSON;

var _index = _interopRequireDefault(require("./http/index.js"));

var _index2 = _interopRequireWildcard(require("./specmap/index.js"));

var _helpers = require("./helpers.js");

var _constants = require("./constants.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeFetchJSON(http, opts = {}) {
  const {
    requestInterceptor,
    responseInterceptor
  } = opts; // Set credentials with 'http.withCredentials' value

  const credentials = http.withCredentials ? 'include' : 'same-origin';
  return docPath => http({
    url: docPath,
    loadSpec: true,
    requestInterceptor,
    responseInterceptor,
    headers: {
      Accept: _constants.ACCEPT_HEADER_VALUE_FOR_DOCUMENTS
    },
    credentials
  }).then(res => res.body);
} // Wipe out the http cache


function clearCache() {
  _index2.plugins.refs.clearCache();
}

function resolve(obj) {
  const {
    fetch,
    spec,
    url,
    mode,
    allowMetaPatches = true,
    pathDiscriminator,
    modelPropertyMacro,
    parameterMacro,
    requestInterceptor,
    responseInterceptor,
    skipNormalization,
    useCircularStructures
  } = obj;
  let {
    http,
    baseDoc
  } = obj; // @TODO Swagger-UI uses baseDoc instead of url, this is to allow both
  // need to fix and pick one.

  baseDoc = baseDoc || url; // Provide a default fetch implementation
  // TODO fetch should be removed, and http used instead

  http = fetch || http || _index.default;

  if (!spec) {
    return makeFetchJSON(http, {
      requestInterceptor,
      responseInterceptor
    })(baseDoc).then(doResolve);
  }

  return doResolve(spec);

  function doResolve(_spec) {
    if (baseDoc) {
      _index2.plugins.refs.docCache[baseDoc] = _spec;
    } // Build a json-fetcher ( ie: give it a URL and get json out )


    _index2.plugins.refs.fetchJSON = makeFetchJSON(http, {
      requestInterceptor,
      responseInterceptor
    });
    const plugs = [_index2.plugins.refs];

    if (typeof parameterMacro === 'function') {
      plugs.push(_index2.plugins.parameters);
    }

    if (typeof modelPropertyMacro === 'function') {
      plugs.push(_index2.plugins.properties);
    }

    if (mode !== 'strict') {
      plugs.push(_index2.plugins.allOf);
    } // mapSpec is where the hard work happens


    return (0, _index2.default)({
      spec: _spec,
      context: {
        baseDoc
      },
      plugins: plugs,
      allowMetaPatches,
      // allows adding .meta patches, which include adding `$$ref`s to the spec
      pathDiscriminator,
      // for lazy resolution
      parameterMacro,
      modelPropertyMacro,
      useCircularStructures
    }).then(skipNormalization ? async a => a : _helpers.normalizeSwagger);
  }
}