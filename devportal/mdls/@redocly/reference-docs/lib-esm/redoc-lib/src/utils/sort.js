export function alphabeticallyByProp(r){var a=1;return"-"===r[0]&&(a=-1,r=r.substr(1)),function(e,o){return-1==a?o[r].localeCompare(e[r]):e[r].localeCompare(o[r])}}
//# sourceMappingURL=sort.js.map