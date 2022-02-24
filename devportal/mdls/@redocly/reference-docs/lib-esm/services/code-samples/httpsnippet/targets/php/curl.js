import{__assign}from"tslib";import{format}from"util";import{CodeBuilder}from"../../helpers/code-builder";import{HTTPSnippet}from"../..";import{Lang}from"../../helpers/constants";import{buildUrlExpression,printUrlVariablesDeclarations}from"../../helpers/code-helpers";import{startCase}from"../../helpers/lodash-int";import{normalizeMimeType}from"../../../../utils";import{objectToPhpArray}from"./utils";function getVariableName(e,a){return a?"$"+a+startCase(e):"$"+e}var handler=function(e,a,r){var n,t,i=r.target,s=r.client,o=__assign({showBoilerplate:!0,checkErrors:!1,printBody:!0,indent:"  ",noTags:!0,shortTags:!1,maxRedirects:10,namedErrors:!1,closingTag:!1},a),l=!1,p=new CodeBuilder({indentation:o.indent,capitalize:!0,lang:Lang.PHP}),u=null===(n=e.securityOAuth2ExtraCalls)||void 0===n?void 0:n[0],c=getVariableName("curl",o.variablesPrefix),h=getVariableName("response",o.variablesPrefix),d=getVariableName("error",o.variablesPrefix);if(o.noTags||p.push(o.shortTags?"<?":"<?php").blank(),u){var m="oAuth2",b=new HTTPSnippet(u).convert(i,s,__assign(__assign({},o),{showBoilerplate:!1,variablesPrefix:m}));p.push(b),p.blank(),e.allHeaders.Authorization='Bearer " . '+getVariableName("response",m)+".access_token"}var f=Object.keys(e.headersObj).sort().map((function(a){return"Authorization"===a&&u?format('"%s: %s',a,e.allHeaders.Authorization):format('"%s: %s"',a,e.headersObj[a])}));if(e.basicAuth){var v=e.basicAuth,T=v.username,_=v.password;f.push('"Authorization: Basic " . base64_encode("'+T+":"+_+'")')}o.showBoilerplate&&p.push("/**").push(" * Requires libcurl").push(" */").blank(),printUrlVariablesDeclarations(e,p);var g="";if(Object.keys(e.queryObj||{}).length){var P=objectToPhpArray(e.queryObj||{},{indent:o.indent});g="$query",p.push(g+" = "+P+";").blank()}if(p.push(c+" = curl_init();"),p.blank(),e.postData)switch(normalizeMimeType(e.postData.mimeType)){case"application/json":var y=objectToPhpArray(e.postData.jsonObj||{},{indent:o.indent});l=!0,t="json_encode($payload)",p.push("$payload = "+y+";").blank();break;case"multipart/form-data":var k=e.postData.params.map((function(e){var a=e.name,r=e.value;return o.indent+'"'+a+'" => "'+r+'",\n'})).join("");l=!0,t="$payload",p.push("$payload = array(\n"+k+");").blank();break;case"application/x-www-form-urlencoded":var O=e.postData.params.map((function(e){return e.name+"="+e.value})).join("&");l=!0,t="$payload",p.push('$payload = "'+O+'";').blank();break;default:t=e.postData.text}var R=buildUrlExpression(e,p);g&&(R.endsWith('"')?R=R.slice(0,-1)+'?" . http_build_query('+g+")":R+=' . "?" . http_build_query('+g+")");var j=[{escape:!l,name:"CURLOPT_POSTFIELDS",value:t},{escape:!0,name:"CURLOPT_PORT",value:e.uriObj.port},{escape:!1,name:"CURLOPT_URL",value:R},{escape:!1,name:"CURLOPT_RETURNTRANSFER",value:"true"},{escape:!0,name:"CURLOPT_CUSTOMREQUEST",value:e.method.toUpperCase()}];p.push("curl_setopt_array("+c+", [");var U=new CodeBuilder({indentation:o.indent,lineJoin:"\n"+o.indent,variablesPrefix:o.variablesPrefix,capitalize:!0,lang:Lang.PHP});f.length&&U.push("CURLOPT_HTTPHEADER => [").push(1,f.join(",\n"+o.indent+o.indent)).push("],"),j.forEach((function(e){[null,void 0].includes(e.value)||U.push(format("%s => %s,",e.name,e.escape?JSON.stringify(e.value):e.value))}));var C=e.cookies.map((function(e){return encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)}));return C.length&&U.push(format('CURLOPT_COOKIE => "%s",',C.join("; "))),p.push(1,U.join()).push("]);").blank().push(h+" = curl_exec("+c+");").push(d+" = curl_error("+c+");").blank().push("curl_close("+c+");").blank().push("if ("+d+") {"),o.namedErrors?p.push(1,'echo array_flip(get_defined_constants(true)["curl"])['+d+"];"):p.push(1,'echo "cURL Error #:" . '+d+";"),p.push("} else {").push(1,"echo "+h+";").push("}"),!o.noTags&&o.closingTag&&p.blank().push("?>"),p.join()};export var info={key:"curl",title:"cURL",link:"http://php.net/manual/en/book.curl.php",description:"PHP with ext-curl"};export default handler;
//# sourceMappingURL=curl.js.map