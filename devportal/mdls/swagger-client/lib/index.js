"use strict";

exports.__esModule = true;
exports.helpers = exports.default = void 0;

var _url = _interopRequireDefault(require("url"));

var _index = _interopRequireWildcard(require("./http/index.js"));

var _resolver = _interopRequireWildcard(require("./resolver.js"));

var _index2 = _interopRequireDefault(require("./subtree-resolver/index.js"));

var _interfaces = require("./interfaces.js");

var _index3 = require("./execute/index.js");

var _helpers = require("./helpers.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Swagger.http = _index.default;
Swagger.makeHttp = _index.makeHttp.bind(null, Swagger.http);
Swagger.resolve = _resolver.default;
Swagger.resolveSubtree = _index2.default;
Swagger.execute = _index3.execute;
Swagger.serializeRes = _index.serializeRes;
Swagger.serializeHeaders = _index.serializeHeaders;
Swagger.clearCache = _resolver.clearCache;
Swagger.makeApisTagOperation = _interfaces.makeApisTagOperation;
Swagger.buildRequest = _index3.buildRequest;
Swagger.helpers = {
  opId: _helpers.opId
};
Swagger.getBaseUrl = _index3.baseUrl;

function Swagger(url, opts = {}) {
  // Allow url as a separate argument
  if (typeof url === 'string') {
    opts.url = url;
  } else {
    opts = url;
  }

  if (!(this instanceof Swagger)) {
    return new Swagger(opts);
  }

  Object.assign(this, opts);
  const prom = this.resolve().then(() => {
    if (!this.disableInterfaces) {
      Object.assign(this, Swagger.makeApisTagOperation(this));
    }

    return this;
  }); // Expose this instance on the promise that gets returned

  prom.client = this;
  return prom;
}

Swagger.prototype = {
  http: _index.default,

  execute(options) {
    this.applyDefaults();
    return Swagger.execute(_objectSpread({
      spec: this.spec,
      http: this.http,
      securities: {
        authorized: this.authorizations
      },
      contextUrl: typeof this.url === 'string' ? this.url : undefined,
      requestInterceptor: this.requestInterceptor || null,
      responseInterceptor: this.responseInterceptor || null
    }, options));
  },

  resolve(options = {}) {
    return Swagger.resolve(_objectSpread({
      spec: this.spec,
      url: this.url,
      http: this.http || this.fetch,
      allowMetaPatches: this.allowMetaPatches,
      useCircularStructures: this.useCircularStructures,
      requestInterceptor: this.requestInterceptor || null,
      responseInterceptor: this.responseInterceptor || null,
      skipNormalization: this.skipNormalization || false
    }, options)).then(obj => {
      this.originalSpec = this.spec;
      this.spec = obj.spec;
      this.errors = obj.errors;
      return this;
    });
  }

};

Swagger.prototype.applyDefaults = function applyDefaults() {
  const {
    spec
  } = this;
  const specUrl = this.url; // TODO: OAS3: support servers here

  if (specUrl && specUrl.startsWith('http')) {
    const parsed = _url.default.parse(specUrl);

    if (!spec.host) {
      spec.host = parsed.host;
    }

    if (!spec.schemes) {
      spec.schemes = [parsed.protocol.replace(':', '')];
    }

    if (!spec.basePath) {
      spec.basePath = '/';
    }
  }
}; // add backwards compatibility with older versions of swagger-ui
// Refs https://github.com/swagger-api/swagger-ui/issues/6210


const {
  helpers
} = Swagger;
exports.helpers = helpers;
var _default = Swagger;
exports.default = _default;