import{__assign,__spreadArray}from"tslib";import{isOperationName,SECURITY_DEFINITIONS_COMPONENT_NAME,setSecuritySchemePrefix,JsonPointer,alphabeticallyByProp}from"../utils";import{MarkdownRenderer}from"./MarkdownRenderer";import{GroupModel,OperationModel}from"./models";export var GROUP_DEPTH=0;var MenuBuilder=function(){function e(){}return Object.defineProperty(e,"buildStructure",{enumerable:!1,configurable:!0,writable:!0,value:function(r,t){var a=r.definition,n=[],o=e.getTagsWithOperations(r);return n.push.apply(n,e.addMarkdownItems(a.info.description||"",void 0,1,t)),a["x-tagGroups"]&&a["x-tagGroups"].length>0?n.push.apply(n,e.getTagGroupsItems(r,void 0,a["x-tagGroups"],o,t)):n.push.apply(n,e.getTagsItems(r,o,void 0,void 0,t)),n}}),Object.defineProperty(e,"addMarkdownItems",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,t,a){var n=new MarkdownRenderer(a).extractHeadings(e||"");n.length&&r&&r.description&&(r.description=MarkdownRenderer.getTextBeforeHading(r.description,n[0].name));var o=function(e,r,t){return void 0===t&&(t=1),r.map((function(r){var a=new GroupModel("section",r,e);return a.depth=t,r.items&&(a.items=o(a,r.items,t+1)),MarkdownRenderer.containsComponent(a.description||"",SECURITY_DEFINITIONS_COMPONENT_NAME)&&setSecuritySchemePrefix(a.id+"/"),a}))};return o(r,n,t)}}),Object.defineProperty(e,"getTagGroupsItems",{enumerable:!1,configurable:!0,writable:!0,value:function(r,t,a,n,o){for(var i=[],s=0,p=a;s<p.length;s++){var d=p[s],l=new GroupModel("group",d,t);l.depth=GROUP_DEPTH,l.items=e.getTagsItems(r,n,l,d,o),i.push(l)}return i}}),Object.defineProperty(e,"getTagsItems",{enumerable:!1,configurable:!0,writable:!0,value:function(r,t,a,n,o){for(var i=[],s=0,p=(void 0===n?Object.keys(t):n.tags).map((function(e){return t[e]?(t[e].used=!0,t[e]):(console.warn('Non-existing tag "'+e+'" is added to the group "'+(null==n?void 0:n.name)+'"'),null)}));s<p.length;s++){var d=p[s];if(d){var l=new GroupModel("tag",d,a);if(l.depth=GROUP_DEPTH+1,""!==d.name)l.items=__spreadArray(__spreadArray([],e.addMarkdownItems(d.description||"",l,l.depth+1,o),!0),this.getOperationsItems(r,l,d,l.depth+1,o),!0),i.push(l);else{var u=__spreadArray(__spreadArray([],e.addMarkdownItems(d.description||"",l,l.depth+1,o),!0),this.getOperationsItems(r,void 0,d,l.depth+1,o),!0);i.push.apply(i,u)}}}return o.sortTagsAlphabetically&&i.sort(alphabeticallyByProp("name")),i}}),Object.defineProperty(e,"getOperationsItems",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,t,a,n){if(0===t.operations.length)return[];for(var o=[],i=0,s=t.operations;i<s.length;i++){var p=s[i],d=new OperationModel(e,p,r,n);d.depth=a,o.push(d)}return n.sortOperationsAlphabetically&&o.sort(alphabeticallyByProp("name")),o}}),Object.defineProperty(e,"getTagsWithOperations",{enumerable:!1,configurable:!0,writable:!0,value:function(e){for(var r={},t=e.definition,a=t["x-webhooks"]||t.webhooks,n=0,o=t.tags||[];n<o.length;n++){var i=o[n];r[i.name]=__assign(__assign({},i),{operations:[]})}function s(e,t,a){for(var n,o=0,i=Object.keys(t||{});o<i.length;o++)for(var p=i[o],d=t[p],l=0,u=Object.keys(d).filter(isOperationName);l<u.length;l++){var g=u[l],m=d[g];if(d.$ref){var c=e.deref(d);s(e,((n={})[p]=c,n),a)}else{var h=null==m?void 0:m.tags;h&&h.length||(h=[""]);for(var f=0,v=h;f<v.length;f++){var b=v[f],_=r[b];void 0===_&&(_={name:b,operations:[]},r[b]=_),_["x-traitTag"]||_.operations.push(__assign(__assign({},m),{pathName:p,pointer:JsonPointer.compile(["paths",p,g]),httpVerb:g,pathParameters:d.parameters||[],pathServers:d.servers,isWebhook:!!a}))}}}}return t.paths&&s(e,t.paths),a&&s(e,a,!0),r}}),e}();export{MenuBuilder};
//# sourceMappingURL=MenuBuilder.js.map