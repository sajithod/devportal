"use strict";function alphabeticallyByProp(e){var a=1;return"-"===e[0]&&(a=-1,e=e.substr(1)),function(l,r){return-1==a?r[e].localeCompare(l[e]):l[e].localeCompare(r[e])}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.alphabeticallyByProp=void 0,exports.alphabeticallyByProp=alphabeticallyByProp;
//# sourceMappingURL=sort.js.map