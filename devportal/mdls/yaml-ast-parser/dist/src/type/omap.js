'use strict';
var type_1 = require("../type");
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString = Object.prototype.toString;
function resolveYamlOmap(data) {
    if (null === data) {
        return true;
    }
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
    for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        pairHasKey = false;
        if ('[object Object]' !== _toString.call(pair)) {
            return false;
        }
        for (pairKey in pair) {
            if (_hasOwnProperty.call(pair, pairKey)) {
                if (!pairHasKey) {
                    pairHasKey = true;
                }
                else {
                    return false;
                }
            }
        }
        if (!pairHasKey) {
            return false;
        }
        if (-1 === objectKeys.indexOf(pairKey)) {
            objectKeys.push(pairKey);
        }
        else {
            return false;
        }
    }
    return true;
}
function constructYamlOmap(data) {
    return null !== data ? data : [];
}
module.exports = new type_1.Type('tag:yaml.org,2002:omap', {
    kind: 'sequence',
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
});
//# sourceMappingURL=omap.js.map