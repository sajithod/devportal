import{format}from"util";export default{quote:function(e){return/^[a-z0-9-_/.@%^=:]+$/i.test(e)?e:format("'%s'",e.replace(/'/g,"'\\''"))},escape:function(e){return e.replace(/\r/g,"\\r").replace(/\n/g,"\\n")}};
//# sourceMappingURL=shell.js.map