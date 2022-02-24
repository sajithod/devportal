import React from"react";import PropTypes from"prop-types";export default function HTML(a){return React.createElement("html",Object.assign({},a.htmlAttributes),React.createElement("head",null,React.createElement("meta",{charSet:"utf-8"}),React.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),React.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"}),React.createElement("script",{dangerouslySetInnerHTML:{__html:getInitScript()}}),a.headComponents),React.createElement("body",Object.assign({},a.bodyAttributes),a.preBodyComponents,React.createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:a.body}}),a.postBodyComponents))}HTML.propTypes={htmlAttributes:PropTypes.object,headComponents:PropTypes.array,bodyAttributes:PropTypes.object,preBodyComponents:PropTypes.array,body:PropTypes.string,postBodyComponents:PropTypes.array};function getInitScript(){return`window._onRedoclyRouteChange = function (cb) {
    window.__redoclyRouteChangeListenres = window.__redoclyRouteChangeListenres || [];
    window.__redoclyRouteChangeListenres.push(cb);
  }
  window._onRedoclyLoginResult = function(cb) {
    window.__redoclyLoginResultListenres =  window.__redoclyLoginResultListenres || [];
    window.__redoclyLoginResultListenres.push(cb);
  }`}