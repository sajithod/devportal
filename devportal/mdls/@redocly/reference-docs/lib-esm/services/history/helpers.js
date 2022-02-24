import{stringify as stringifyQueryString}from"query-string";export function isSameHash(e,i){return e===i||"#"+e===i||e==="#"+i}function getContentTypeName(e){var i,o,n,d,t,l,r,s,v,p,u,a,c,y,f;if(!e.in)return"request"===e.deps.type&&(null===(n=null===(o=null===(i=e.deps.operation)||void 0===i?void 0:i.requestBody)||void 0===o?void 0:o.content)||void 0===n?void 0:n.mediaTypes)?(null===(l=null===(t=null===(d=e.deps.operation)||void 0===d?void 0:d.requestBody)||void 0===t?void 0:t.content)||void 0===l?void 0:l.mediaTypes.length)>1?null===(v=null===(s=null===(r=e.deps.operation)||void 0===r?void 0:r.requestBody)||void 0===s?void 0:s.content)||void 0===v?void 0:v.active.name:void 0:"response"===e.deps.type&&(null===(u=null===(p=e.deps.response)||void 0===p?void 0:p.content)||void 0===u?void 0:u.mediaTypes)&&(null===(c=null===(a=e.deps.response)||void 0===a?void 0:a.content)||void 0===c?void 0:c.mediaTypes.length)>1?null===(f=null===(y=e.deps.response)||void 0===y?void 0:y.content)||void 0===f?void 0:f.active.name:void 0}export function constructFieldDeepFragment(e){var i,o,n,d;if(!e)return null;if(!e.deps.operation)return null;if(null===(i=e.deps.operation)||void 0===i?void 0:i.isCallback)return null;var t={t:e.deps.type,in:e.in||e.deps.in,c:"response"===e.deps.type?null===(o=e.deps.response)||void 0===o?void 0:o.code:void 0,cb:(null===(n=e.deps.operation)||void 0===n?void 0:n.isCallback)?null===(d=e.deps.operation)||void 0===d?void 0:d.id:void 0,ct:getContentTypeName(e),path:e.fieldFullPath};return stringifyQueryString(t,{encode:!1})}export function joinWithSeparator(e,i,o){return void 0===e&&(e=""),void 0===i&&(i=""),void 0===o&&(o="/"),e.endsWith(o)&&(e=e.slice(0,-o.length)),i.startsWith(o)&&(i=i.slice(o.length)),e&&i?e+o+i:e+i}
//# sourceMappingURL=helpers.js.map