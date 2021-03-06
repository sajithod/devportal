import{__assign}from"tslib";import stringifyObject from"stringify-object";import{CodeBuilder}from"../../helpers/code-builder";import{HTTPSnippet}from"../..";import{Lang}from"../../helpers/constants";import{buildUrlExpression,printUrlVariablesDeclarations}from"../../helpers/code-helpers";import{normalizeMimeType}from"../../../../utils";var indent=1,contentType={X_FORM_URLENCODED:"application/x-www-form-urlencoded",JSON:"application/json",FORM_DATA:"multipart/form-data"};function hasMimeType(e,t){return void 0===e&&(e={}),normalizeMimeType(e.mimeType)===t}var handler=function(e,t,r){var a,s,i,n,o,p=r.target,l=r.client,u=e.method.toUpperCase(),c=null===(a=e.securityOAuth2ExtraCalls)||void 0===a?void 0:a[0],h=__assign({capitalize:!0,showBoilerplate:!0,indent:"  "},t),d=new CodeBuilder({indentation:h.indent,variablesPrefix:h.variablesPrefix,capitalize:h.capitalize,lang:Lang.RUBY});h.showBoilerplate&&(d.push("require 'uri'").push("require 'net/http'"),"https:"===e.uriObj.protocol&&d.push("require 'openssl'"),(hasMimeType(e.postData,contentType.JSON)||c)&&d.unshift("require 'json'"),d.blank()),Object.keys(e.allHeaders).length&&Object.keys(e.allHeaders).forEach((function(t){e.allHeaders[t]="'"+e.allHeaders[t]+"'"}));var v=u.charAt(0)+u.substring(1).toLowerCase();if(["GET","POST","HEAD","DELETE","PATCH","PUT","OPTIONS","COPY","LOCK","UNLOCK","MOVE","TRACE"].indexOf(u)<0&&d.push("class Net::HTTP::%s < Net::HTTPRequest",v).push("  METHOD = '%s'",u.toUpperCase()).push("  REQUEST_HAS_BODY = '%s'",(null===(s=e.postData)||void 0===s?void 0:s.text)?"true":"false").push("  RESPONSE_HAS_BODY = true").push("end").blank(),c){var m="oAuth2",b=new HTTPSnippet(c).convert(p,l,__assign(__assign({},h),{variablesPrefix:m,showBoilerplate:!1})),T="oAuth2"+(h.capitalize?"Response":"response");d.push(b).push("access_token = JSON.parse("+T+".body)['access_token']").blank(),e.allHeaders.Authorization='"Bearer " + access_token'}if(printUrlVariablesDeclarations(e,d),d.push(d.var("url")+" = URI("+buildUrlExpression(e,d)+")"),Object.getOwnPropertyNames(e.queryObj).length&&(d.push(d.var("params")+" = "+stringifyObject(e.queryObj,{indent:h.indent,inlineCharacterLimit:25})),d.push(d.var("url")+".query = URI.encode_www_form("+d.var("params")+")")),d.blank().push(d.var("http")+" = Net::HTTP.new("+d.var("url")+".host, "+d.var("url")+".port)"),"https:"===e.uriObj.protocol&&d.push(d.var("http")+".use_ssl = true"),d.blank().push(d.var("request")+" = Net::HTTP::%s.new("+d.var("url")+")",v),Object.keys(e.allHeaders).length&&Object.keys(e.allHeaders).forEach((function(t){e.allHeaders[t]!=="'"+contentType.FORM_DATA+"'"&&d.push(d.var("request")+"['%s'] = %s",t,e.allHeaders[t])})),null==e?void 0:e.postData){var f={};switch(normalizeMimeType(null===(i=null==e?void 0:e.postData)||void 0===i?void 0:i.mimeType)){case contentType.X_FORM_URLENCODED:e.postData.params.forEach((function(e){f[e.name]=e.value})),d.push(d.var("request")+".body = URI.encode_www_form("+stringifyObject(f,{indent:h.indent,inlineCharacterLimit:25})+")");break;case contentType.JSON:d.push(d.var("request")+".body = "+stringifyObject(e.postData.jsonObj,{indent:h.indent,inlineCharacterLimit:25}).replace(/null/g,"nil")+".to_json");break;case contentType.FORM_DATA:e.postData.params&&(d.push(d.var("form_data")+" = ["),e.postData.params.forEach((function(e){d.push(indent,"['"+e.name+"', '"+e.value+"'],")})),d.push("]")),d.push(d.var("request")+".set_form("+d.var("form_data")+", '"+contentType.FORM_DATA+"')");break;default:(null===(n=e.postData)||void 0===n?void 0:n.text)&&d.push(d.var("request")+".body = "+JSON.stringify(null===(o=e.postData)||void 0===o?void 0:o.text))}}if(e.basicAuth){var O=e.basicAuth,y=O.username,_=O.password;d.push(d.var("request")+".basic_auth('"+y+"', '"+_+"')")}return d.blank().push(d.var("response")+" = "+d.var("http")+".request("+d.var("request")+")").push("puts "+d.var("response")+".read_body").blank(),d.join()};export var info={key:"native",title:"net::http",link:"http://ruby-doc.org/stdlib-2.2.1/libdoc/net/http/rdoc/Net/HTTP.html",description:"Ruby HTTP client"};export default handler;
//# sourceMappingURL=native.js.map