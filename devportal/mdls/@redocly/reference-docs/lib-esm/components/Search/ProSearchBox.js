import{__extends}from"tslib";import*as React from"react";import hotkeys from"hotkeys-js";import{debounce}from"../../utils";import{PerfectScrollbarWrap}from"../../redoc-lib/src/common-elements/perfect-scrollbar";import{MenuItemPro}from"./MenuItemProSearch";import{SearchPopUpBG,SearchPopUpWrap,SearchPopUpHeader,TextContainer,SearchResultsBox,SearchResultsItems,ButtonClose,ButtonClear,CrossIcon,SearchIcon,SearchInput}from"./styled";function expandDeep(e,t){if(e)for(var r=function(e){var r=t.find((function(t){return t.name===e}));if(!r)return"break";r.expand(),t=getFields(r.schema)},a=0,n=e;a<n.length;a++){if("break"===r(n[a]))break}}function getFields(e){return e?e.oneOf?getFields(e.oneOf[e.activeOneOf]):e.items?getFields(e.items):e.fields||[]:[]}function enhanceResults(e,t){var r={};e.forEach((function(e){var a=e.meta,n=e.score,o=a.menuId,l=r[o];if(n=a.boost?n*a.boost:n,l){if(l.score=Math.max(n,l.score),a.place&&l.count++,a.place){var i=l.places.find((function(e){return e.place===a.place}));i&&a.path?i.paths.find((function(e){var t;return(e&&e.join("->"))===(null===(t=a.path)||void 0===t?void 0:t.join("->"))}))||i.paths.push(a.path):l.places.push({place:a.place,paths:[a.path]})}}else r[o]={item:t(o),places:a.place?[{place:a.place,paths:[a.path]}]:[],score:n,count:a.place?1:0}}));var a=Object.keys(r).map((function(e){return r[e]}));return a.forEach((function(e,t){return e.index=t})),a.sort((function(e,t){return t.score-e.score})),a}function expandResults(e){for(var t=function(t){if("request fields"===t.place)for(var r=e.item.requestBody,a=getFields(r&&r.content&&r.content.active&&r.content.active.schema),n=0,o=t.paths;n<o.length;n++){if(!(u=o[n]))return{value:void 0};expandDeep(u.slice(0,u.length-1),a)}else if(t.place.startsWith("response ")){var l=t.place.split(" ")[1],i=e.item.responses.find((function(e){return e.code===l}));i&&(i.expanded=!0);a=getFields(i&&i.content&&i.content.active&&i.content.active.schema);for(var c=0,s=t.paths;c<s.length;c++){var u;if(!(u=s[c]))return{value:void 0};expandDeep(u.slice(0,u.length-1),a)}}},r=0,a=e.places;r<a.length;r++){var n=t(a[r]);if("object"==typeof n)return n.value}}var ProSearchBox=function(e){function t(t){var r=e.call(this,t)||this;return Object.defineProperty(r,"activeItemRef",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(r,"prevCancel",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(r,"loadingTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(r,"inputRef",{enumerable:!0,configurable:!0,writable:!0,value:React.createRef()}),Object.defineProperty(r,"clear",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.setState({results:null,term:"",activeItemIdx:-1}),r.props.setSearchValue(""),r.props.marker.unmark()}}),Object.defineProperty(r,"handleKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:function(e){if(27===e.keyCode&&r.inputRef.current&&(r.inputRef.current.blur(),r.props.hidePopUp()),r.state.results&&(27===e.keyCode&&r.clear(),40===e.keyCode&&(r.setState({activeItemIdx:Math.min(r.state.activeItemIdx+1,r.state.results.length-1)}),e.preventDefault()),38===e.keyCode&&(r.setState({activeItemIdx:Math.max(0,r.state.activeItemIdx-1)}),e.preventDefault()),13===e.keyCode)){var t=r.state.results[r.state.activeItemIdx];t&&r.onActivate(t)}}}),Object.defineProperty(r,"_queryWorker",{enumerable:!0,configurable:!0,writable:!0,value:debounce((function(e,t){r.props.search.search(e).then((function(e){t(e)}))}),200,!0)}),Object.defineProperty(r,"search",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var t=e.target.value;if(t.length<3)return r.clearResults(t),void r.props.setSearchValue("");r.updateSearchTerm(t),r.prevCancel&&r.prevCancel(),r.prevCancel=r.queryWorker(t)}}),Object.defineProperty(r,"onActivate",{enumerable:!0,configurable:!0,writable:!0,value:function(e){if(r.props.hidePopUp(),r.props.onActivate(e.item),r.props.options.searchAutoExpand)try{expandResults(e)}catch(e){console.warn("Failed to autoexpand schema:",e.message)}}}),Object.defineProperty(r,"closeByWrapper",{enumerable:!0,configurable:!0,writable:!0,value:function(e){"search"===e.target.getAttribute("role")&&(r.clear(),r.props.hidePopUp())}}),Object.defineProperty(r,"closeByButton",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.clear(),r.props.hidePopUp()}}),r.state={results:null,term:"",activeItemIdx:-1,loading:!1},r}return __extends(t,e),Object.defineProperty(t.prototype,"componentDidUpdate",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this.props,r=t.search,a=t.shown,n=t.searchValue,o=e.search!==r,l=!e.shown&&a&&!n&&this.state.term;(o||l)&&this.clearResults("")}}),Object.defineProperty(t.prototype,"clearResults",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.loadingTimer&&(clearTimeout(this.loadingTimer),this.loadingTimer=null),this.setState({results:null,term:e,loading:!1}),this.props.marker.unmark()}}),Object.defineProperty(t.prototype,"setResults",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.loadingTimer&&(clearTimeout(this.loadingTimer),this.loadingTimer=null),this.setState({results:enhanceResults(e,this.props.menu.getItemById),loading:!1})}}),Object.defineProperty(t.prototype,"updateSearchTerm",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this;this.setState({term:e}),this.props.setSearchValue(e),this.loadingTimer&&(clearTimeout(this.loadingTimer),this.loadingTimer=null),this.loadingTimer=setTimeout((function(){t.setState({loading:!0})}),500),this.props.marker.mark(e)}}),Object.defineProperty(t.prototype,"queryWorker",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this,r=!1;return this._queryWorker(e,(function(a){e.length<3&&t.clearResults(e),r||t.state.term===e&&t.setResults(a)})),function(){r=!0}}}),Object.defineProperty(t.prototype,"componentDidMount",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this;this.props.options.ctrlFHijack&&hotkeys("cmd+f,ctrl+f",(function(t){return t.preventDefault(),t.stopPropagation(),e.props.options.disableSearch||e.props.showPopUp(),!1}))}}),Object.defineProperty(t.prototype,"componentWillUnmount",{enumerable:!1,configurable:!0,writable:!0,value:function(){hotkeys.unbind("cmd+f,ctrl+f")}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,t=this.state,r=t.activeItemIdx,a=t.loading,n=t.results,o=this.props,l=o.shown,i=o.menu;return l?React.createElement(SearchPopUpBG,{role:"search",onClick:this.closeByWrapper},React.createElement(SearchPopUpWrap,null,React.createElement(SearchPopUpHeader,null,React.createElement(SearchInput,{ref:this.inputRef,value:this.state.term,onKeyDown:this.handleKeyDown,placeholder:"Search...",type:"text",onChange:this.search,autoFocus:!0}),React.createElement(SearchIcon,null),this.state.term&&React.createElement(ButtonClear,{onClick:this.clear},"Clear"),React.createElement(ButtonClose,{onClick:this.closeByButton},React.createElement(CrossIcon,null))),React.createElement(SearchResultsBox,{"data-role":"search:results"},a&&React.createElement(TextContainer,null,"Loading..."),!a&&!(null==n?void 0:n.length)&&React.createElement(TextContainer,null,"No results found"),(null==n?void 0:n.length)?React.createElement(PerfectScrollbarWrap,{options:{wheelPropagation:!1}},React.createElement(SearchResultsItems,null,n.slice(0,50).map((function(t,a){return React.createElement(MenuItemPro,{key:t.index+t.item.id,result:t,active:a===r,onActivate:e.onActivate,term:e.state.term,history:i.history})})))):null))):null}}),t}(React.PureComponent);export{ProSearchBox};
//# sourceMappingURL=ProSearchBox.js.map