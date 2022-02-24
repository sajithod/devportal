"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.info=void 0;var tslib_1=require("tslib"),code_builder_1=require("../../helpers/code-builder"),__1=require("../.."),utils_1=require("../../../../utils"),generator_1=require("../../../generator"),constants_1=require("../../helpers/constants"),code_helpers_1=require("../../helpers/code-helpers"),handler=function(t,e,a){var s,r,i=a.target,p=a.client,n=Object.assign({indent:"  ",withWrapper:!0},e),o=new code_builder_1.CodeBuilder({indentation:n.indent,variablesPrefix:n.variablesPrefix,capitalize:!0,lang:constants_1.Lang.JAVA8}),u=formatHttpMethod(t.method);if(n.withComments&&addComments(o),n.withImports&&addImports(o,t),n.withWrapper&&(o.push("public class App {"),o.push(1,"public static void main(String[] args ) throws java.io.IOException {"),o.push(2,"HttpClient httpClient = HttpClientBuilder.create().build();"),o.blank()),null===(s=t.securityOAuth2ExtraCalls)||void 0===s?void 0:s.length){var h=new __1.HTTPSnippet(null===(r=t.securityOAuth2ExtraCalls)||void 0===r?void 0:r[0]).convert(i,p,(0,tslib_1.__assign)((0,tslib_1.__assign)({},n),{withImports:!1,withWrapper:!1,withComments:!1,variablesPrefix:"oauth2"}));o.push(h),o.push(2,"JSONObject %s = new JSONObject(EntityUtils.toString(httpClient.execute(%s).getEntity()));","oauth2Response","oauth2Request"),o.push(2,'String accessToken = %s.getString("access_token");',"oauth2Response"),o.blank()}(0,code_helpers_1.printUrlVariablesDeclarations)(t,o,2);var l=(0,code_helpers_1.buildUrlExpression)(t,o);o.push(2,"%s "+o.var("request")+" = new %s(%s);",u,u,l);var c=Object.keys(t.allHeaders);if(!c.length||t.postData&&"multipart/form-data"==t.postData.mimeType||c.forEach((function(e){var a;o.push(2,'%s.setHeader("%s", %s);',o.var("request"),e,(null===(a=t.securityOAuth2ExtraCalls)||void 0===a?void 0:a.length)?'"Bearer " + accessToken':'"'+t.allHeaders[e]+'"')})),t.basicAuth){var d=t.basicAuth,m=d.username,g=d.password;o.push(2,'String encodedString = Base64.getEncoder().encodeToString("'+m+":"+g+'".getBytes());'),o.push(2,'%s.setHeader("%s", "%s"+encodedString);',o.var("request"),"Authorization","Basic ")}if(t.postData)switch((0,utils_1.normalizeMimeType)(t.postData.mimeType)){case"application/x-www-form-urlencoded":t.postData.params&&(o.blank(),o.push(2,"List<NameValuePair> params = new ArrayList<NameValuePair>();"),t.postData.params.forEach((function(t){o.push(2,'params.add(new BasicNameValuePair("%s", "%s"));',t.name,t.value)})),o.push(2,"%s.setEntity(new UrlEncodedFormEntity(params));",o.var("request")),o.blank());break;case"multipart/form-data":t.postData.params&&(o.push(2,"MultipartEntity reqEntity = new MultipartEntity();"),t.postData.params.forEach((function(t){o.push(2,'reqEntity.addPart("%s", %s);',t.name,isString(t.value)?'new StringBody("'+t.value+'")':t.value)})),o.push(2,"%s.setEntity(reqEntity);",o.var("request")));break;case"application/json":if(t.postData.jsonObj){o.push(2,"JSONObject payload = new JSONObject();");for(var y=0,b=Object.entries(t.postData.jsonObj);y<b.length;y++){var v=b[y],f=v[0],j=v[1];Array.isArray(j)?(o.push(2,'payload.put("%s", new JSONArray()',f),j.forEach((function(t){isObject(t)?(o.push(3,".put(new JSONObject()"),O(t,4),o.push(3,")")):o.push(3,".put(%s)",formatValue(t))})),o.push(2,");")):isObject(j)?(o.push(2,'payload.put("%s", new JSONObject()%s',f,(0,utils_1.isEmptyObject)(j)?");":""),O(j,3),(0,utils_1.isEmptyObject)(j)||o.push(2,");")):o.push(2,'payload.put("%s", %s);',f,formatValue(j))}o.push(2,"%s.setEntity(new StringEntity(payload.toString()));",o.var("request"))}break;case"application/xml":t.postData.text&&(o.push(2,'String payload = String.join("\\n"'),t.postData.text.trim().split("\n").forEach((function(t){var e=t.replace(/"/g,'\\"');o.push(3,', "'+e+'"')})),o.push(2,");"),o.push(2,"%s.setEntity(new StringEntity(payload));",o.var("request")))}return n.withWrapper&&(o.push(2,"String "+o.var("response")+" = EntityUtils.toString(httpClient.execute(request).getEntity());"),o.blank(),o.push(2,"System.out.println(response);"),o.push(1,"}"),o.push("}")),o.join();function O(t,e){for(var a=0,s=Object.entries(t);a<s.length;a++){var r=s[a],i=r[0],p=r[1];isObject(p)?(o.push(e,'.put("%s", new JSONObject()',i),O(p,e+1),o.push(e,")")):o.push(e,'.put("%s", %s)',i,formatValue(p))}}};function addComments(t){t.push("/**"),t.push(" * Requires JDK >= 8"),t.push(" *"),t.push(" * Requires Apache HttpComponents Client >= 4.3.5"),t.push(" * See here for installation details:"),t.push(" *   https://search.maven.org/artifact/org.apache.httpcomponents/httpcomponents-client"),t.push(" *"),t.push(' * Requires package "junit4"'),t.push(" * See here for installation details:"),t.push(" *   https://junit.org/junit4"),t.push(" *"),t.push(' * Requires package "org.json" >= 20180130'),t.push(" * See here for installation details:"),t.push(" *   https://search.maven.org/artifact/org.json/json"),t.push(" */"),t.blank()}function addImports(t,e){var a,s,r;t.push("import org.apache.http.util.EntityUtils;"),t.push("import org.apache.http.NameValuePair;"),t.push("import org.apache.http.client.HttpClient;"),t.push("import org.apache.http.client.entity.UrlEncodedFormEntity;"),e.method&&addHttpMethodImport(t,e.method),(null===(a=e.securityOAuth2ExtraCalls)||void 0===a?void 0:a.length)&&(null===(s=e.securityOAuth2ExtraCalls)||void 0===s?void 0:s[0].method.toLowerCase())!==e.method.toLowerCase()&&addHttpMethodImport(t,null===(r=e.securityOAuth2ExtraCalls)||void 0===r?void 0:r[0].method),t.push("import org.apache.http.impl.client.HttpClientBuilder;"),t.push("import org.apache.http.message.BasicNameValuePair;"),t.push("import org.apache.http.entity.StringEntity;"),t.push("import org.json.JSONObject;"),t.push("import org.json.JSONArray;"),t.push("import java.util.ArrayList;"),t.push("import java.util.List;"),t.push("import org.apache.http.entity.mime.MultipartEntity;"),t.push("import org.apache.http.entity.mime.content.StringBody;"),e.basicAuth&&t.push("import java.util.Base64;"),t.blank()}function addHttpMethodImport(t,e){var a=formatHttpMethod(e);t.push("import org.apache.http.client.methods."+a+";")}function formatHttpMethod(t){return"Http"+(0,generator_1.capitalizeFirst)(t.toLowerCase())}function isString(t){return"[object String]"===Object.prototype.toString.call(t)}function isObject(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function formatValue(t){return isString(t)?JSON.stringify(t):null==t?"JSONObject.NULL":t}exports.info={key:"apachehttp",title:"Apache http",link:"https://hc.apache.org/httpcomponents-client-4.5.x/",description:"Apache HttpClient"},exports.default=handler;
//# sourceMappingURL=apachehttp.js.map