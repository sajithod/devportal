import{__awaiter,__generator}from"tslib";import{bundle}from"@redocly/openapi-core/lib/bundle";import{Config}from"@redocly/openapi-core/lib/config/config";import{convertObj}from"swagger2openapi";import{IS_BROWSER}from"./dom";export function loadAndBundleDefinition(e){return __awaiter(this,void 0,void 0,(function(){var o,n,r;return __generator(this,(function(t){switch(t.label){case 0:return o=new Config({}),n={config:o,base:IS_BROWSER?window.location.href:process.cwd()},IS_BROWSER&&(o.resolve.http.customFetch=global.fetch),"object"==typeof e&&null!==e?n.doc=createParsedDocument(e):n.ref=e,[4,bundle(n)];case 1:return[2,void 0!==(r=t.sent().bundle.parsed).swagger?convertSwagger2OpenAPI(r):r]}}))}))}export function createParsedDocument(e){return{source:{absoluteRef:""},parsed:e}}export function convertSwagger2OpenAPI(e){return console.warn("[ReDoc Compatibility mode]: Converting OpenAPI 2.0 to OpenAPI 3.0"),e.paths||(e.paths={}),new Promise((function(o,n){return convertObj(e,{patch:!0,warnOnly:!0,text:"{}",anchors:!0},(function(e,r){if(e)return n(e);o(null==r?void 0:r.openapi)}))}))}
//# sourceMappingURL=loadAndBundleSpec.js.map