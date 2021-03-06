"use strict";

exports.__esModule = true;
exports.applySecurities = applySecurities;
exports.default = buildRequest;

var _btoa = _interopRequireDefault(require("btoa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This function runs after the common function,
// `src/execute/index.js#buildRequest`
function buildRequest(options, req) {
  const {
    spec,
    operation,
    securities,
    requestContentType,
    responseContentType,
    attachContentTypeForEmptyPayload
  } = options; // Add securities, which are applicable

  req = applySecurities({
    request: req,
    securities,
    operation,
    spec
  });

  if (req.body || req.form || attachContentTypeForEmptyPayload) {
    // all following conditionals are Swagger2 only
    if (requestContentType) {
      req.headers['Content-Type'] = requestContentType;
    } else if (Array.isArray(operation.consumes)) {
      [req.headers['Content-Type']] = operation.consumes;
    } else if (Array.isArray(spec.consumes)) {
      [req.headers['Content-Type']] = spec.consumes;
    } else if (operation.parameters && operation.parameters.filter(p => p.type === 'file').length) {
      req.headers['Content-Type'] = 'multipart/form-data';
    } else if (operation.parameters && operation.parameters.filter(p => p.in === 'formData').length) {
      req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
  } else if (requestContentType) {
    const isBodyParamPresent = operation.parameters && operation.parameters.filter(p => p.in === 'body').length > 0;
    const isFormDataParamPresent = operation.parameters && operation.parameters.filter(p => p.in === 'formData').length > 0;

    if (isBodyParamPresent || isFormDataParamPresent) {
      req.headers['Content-Type'] = requestContentType;
    }
  }

  if (!responseContentType && Array.isArray(operation.produces) && operation.produces.length > 0) {
    req.headers.accept = operation.produces.join(', ');
  }

  return req;
} // Add security values, to operations - that declare their need on them


function applySecurities({
  request,
  securities = {},
  operation = {},
  spec
}) {
  const result = _objectSpread({}, request);

  const {
    authorized = {},
    specSecurity = []
  } = securities;
  const security = operation.security || specSecurity;
  const isAuthorized = authorized && !!Object.keys(authorized).length;
  const securityDef = spec.securityDefinitions;
  result.headers = result.headers || {};
  result.query = result.query || {};

  if (!Object.keys(securities).length || !isAuthorized || !security || Array.isArray(operation.security) && !operation.security.length) {
    return request;
  }

  security.forEach(securityObj => {
    Object.keys(securityObj).forEach(key => {
      const auth = authorized[key];

      if (!auth) {
        return;
      }

      const {
        token
      } = auth;
      const value = auth.value || auth;
      const schema = securityDef[key];
      const {
        type
      } = schema;
      const tokenName = schema['x-tokenName'] || 'access_token';
      const oauthToken = token && token[tokenName];
      let tokenType = token && token.token_type;

      if (auth) {
        if (type === 'apiKey') {
          const inType = schema.in === 'query' ? 'query' : 'headers';
          result[inType] = result[inType] || {};
          result[inType][schema.name] = value;
        } else if (type === 'basic') {
          if (value.header) {
            result.headers.authorization = value.header;
          } else {
            const username = value.username || '';
            const password = value.password || '';
            value.base64 = (0, _btoa.default)(`${username}:${password}`);
            result.headers.authorization = `Basic ${value.base64}`;
          }
        } else if (type === 'oauth2' && oauthToken) {
          tokenType = !tokenType || tokenType.toLowerCase() === 'bearer' ? 'Bearer' : tokenType;
          result.headers.authorization = `${tokenType} ${oauthToken}`;
        }
      }
    });
  });
  return result;
}