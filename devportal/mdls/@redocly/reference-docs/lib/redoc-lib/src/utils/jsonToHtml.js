"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.jsonToHTML=void 0;var level=1;function jsonToHTML(e,t){level=1;var n="";return n+='<div class="redoc-json">',n+="<code>",n+=valueToHTML(e,t),n+="</code>",n+="</div>"}function htmlEncode(e){return void 0!==e?e.toString().replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function stringifyStringLiteral(e){return JSON.stringify(e).slice(1,-1)}function decorateWithSpan(e,t){return'<span class="'+t+'">'+htmlEncode(e)+"</span>"}function punctuation(e){return'<span class="token punctuation">'+e+"</span>"}function valueToHTML(e,t){var n=typeof e,o="";return null==e?o+=decorateWithSpan("null","token keyword"):e&&e.constructor===Array?(level++,o+=arrayToHTML(e,t),level--):e&&e.constructor===Date?o+=decorateWithSpan('"'+e.toISOString()+'"',"token string"):"object"===n?(level++,o+=objectToHTML(e,t),level--):"number"===n?o+=decorateWithSpan(e,"token number"):"string"===n?/^(http|https):\/\/[^\s]+$/.test(e)?o+=decorateWithSpan('"',"token string")+'<a href="'+encodeURI(e)+'">'+htmlEncode(stringifyStringLiteral(e))+"</a>"+decorateWithSpan('"',"token string"):o+=decorateWithSpan('"'+stringifyStringLiteral(e)+'"',"token string"):"boolean"===n&&(o+=decorateWithSpan(e,"token boolean")),o}function arrayToHTML(e,t){for(var n=level>t?"collapsed":"",o='<button class="collapser" aria-label="'+(level>t+1?"expand":"collapse")+'"></button>'+punctuation("[")+'<span class="ellipsis"></span><ul class="array collapsible">',a=!1,l=e.length,r=0;r<l;r++)a=!0,o+='<li><div class="hoverable '+n+'">',o+=valueToHTML(e[r],t),r<l-1&&(o+=","),o+="</div></li>";return o+="</ul>"+punctuation("]"),a||(o=punctuation("[ ]")),o}function objectToHTML(e,t){for(var n=level>t?"collapsed":"",o=Object.keys(e),a=o.length,l='<button class="collapser" aria-label="'+(level>t+1?"expand":"collapse")+'"></button>'+punctuation("{")+'<span class="ellipsis"></span><ul class="obj collapsible">',r=!1,s=0;s<a;s++){var i=o[s];r=!0,l+='<li><div class="hoverable '+n+'">',l+='<span class="property token string">"'+htmlEncode(i)+'"</span>: ',l+=valueToHTML(e[i],t),s<a-1&&(l+=punctuation(",")),l+="</div></li>"}return l+="</ul>"+punctuation("}"),r||(l=punctuation("{ }")),l}exports.jsonToHTML=jsonToHTML;
//# sourceMappingURL=jsonToHtml.js.map