import{__awaiter,__generator}from"tslib";import*as lunr from"lunr";var Worker=function(){Object.defineProperty(this,"add",{enumerable:!0,configurable:!0,writable:!0,value:add}),Object.defineProperty(this,"done",{enumerable:!0,configurable:!0,writable:!0,value:done}),Object.defineProperty(this,"search",{enumerable:!0,configurable:!0,writable:!0,value:search}),Object.defineProperty(this,"toJS",{enumerable:!0,configurable:!0,writable:!0,value:toJS}),Object.defineProperty(this,"load",{enumerable:!0,configurable:!0,writable:!0,value:load}),Object.defineProperty(this,"dispose",{enumerable:!0,configurable:!0,writable:!0,value:dispose}),Object.defineProperty(this,"fromExternalJS",{enumerable:!0,configurable:!0,writable:!0,value:fromExternalJS})};export default Worker;var builder,resolveIndex,index,store=[];function initEmpty(){(builder=new lunr.Builder).field("title"),builder.field("description"),builder.ref("ref"),builder.pipeline.add(lunr.trimmer,lunr.stopWordFilter,lunr.stemmer),index=new Promise((function(e){resolveIndex=e}))}lunr.tokenizer.separator=/\s+/,initEmpty();var expandTerm=function(e){return"*"+lunr.stemmer(new lunr.Token(e,{}))+"*"};export function add(e,r,t){var n=store.push(t)-1,i={title:e.toLowerCase(),description:r.toLowerCase(),ref:n};builder.add(i)}export function done(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return resolveIndex(builder.build()),[2]}))}))}export function toJS(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return e={store:store},[4,index];case 1:return[2,(e.index=r.sent().toJSON(),e)]}}))}))}export function fromExternalJS(e,r){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:if(n.trys.push([0,2,,3]),importScripts(e),!self[r])throw new Error("Broken index file format");return[4,load(self[r])];case 1:return n.sent(),[3,3];case 2:return t=n.sent(),console.error("Failed to load search index: "+t.message),[3,3];case 3:return[2]}}))}))}export function load(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){return store=e.store,resolveIndex(lunr.Index.load(e.index)),[2]}))}))}export function dispose(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return store=[],initEmpty(),[2]}))}))}export function search(e,r){return void 0===r&&(r=0),__awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:return 0===e.trim().length?[2,[]]:[4,index];case 1:return t=n.sent().query((function(r){e.trim().toLowerCase().split(/\s+/).forEach((function(e){if(1!==e.length){var t=expandTerm(e);r.term(t,{})}}))})),r>0&&(t=t.slice(0,r)),[2,t.map((function(e){return{meta:store[e.ref],score:e.score}}))]}}))}))}
//# sourceMappingURL=SearchWorker.worker.js.map