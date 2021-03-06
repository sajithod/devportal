"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMappingRef = exports.isAbsoluteUrl = exports.refBaseName = exports.pointerBaseName = exports.parsePointer = exports.parseRef = exports.escapePointer = exports.unescapePointer = exports.Location = exports.isRef = exports.joinPointer = void 0;
const path_1 = require("path");
function joinPointer(base, key) {
    if (base === '')
        base = '#/';
    return base[base.length - 1] === '/' ? base + key : base + '/' + key;
}
exports.joinPointer = joinPointer;
function isRef(node) {
    return node && typeof node.$ref === 'string';
}
exports.isRef = isRef;
class Location {
    constructor(source, pointer) {
        this.source = source;
        this.pointer = pointer;
    }
    child(components) {
        return new Location(this.source, joinPointer(this.pointer, (Array.isArray(components) ? components : [components]).map(escapePointer).join('/')));
    }
    key() {
        return Object.assign(Object.assign({}, this), { reportOnKey: true });
    }
    get absolutePointer() {
        return this.source.absoluteRef + (this.pointer === '#/' ? '' : this.pointer);
    }
}
exports.Location = Location;
function unescapePointer(fragment) {
    return decodeURIComponent(fragment.replace(/~1/g, '/').replace(/~0/g, '~'));
}
exports.unescapePointer = unescapePointer;
function escapePointer(fragment) {
    if (typeof fragment === 'number')
        return fragment;
    return fragment.replace(/~/g, '~0').replace(/\//g, '~1');
}
exports.escapePointer = escapePointer;
function parseRef(ref) {
    const [uri, pointer] = ref.split('#/');
    return {
        uri: uri || null,
        pointer: pointer ? pointer.split('/').map(unescapePointer).filter(Boolean) : [],
    };
}
exports.parseRef = parseRef;
function parsePointer(pointer) {
    return pointer.substr(2).split('/').map(unescapePointer);
}
exports.parsePointer = parsePointer;
function pointerBaseName(pointer) {
    const parts = pointer.split('/');
    return parts[parts.length - 1];
}
exports.pointerBaseName = pointerBaseName;
function refBaseName(ref) {
    const parts = ref.split(path_1.sep);
    return parts[parts.length - 1].split('.')[0];
}
exports.refBaseName = refBaseName;
function isAbsoluteUrl(ref) {
    return ref.startsWith('http://') || ref.startsWith('https://');
}
exports.isAbsoluteUrl = isAbsoluteUrl;
function isMappingRef(mapping) {
    // TODO: proper detection of mapping refs
    return (mapping.startsWith('#') ||
        mapping.startsWith('https://') ||
        mapping.startsWith('./') ||
        mapping.startsWith('../') ||
        mapping.indexOf('/') > -1);
}
exports.isMappingRef = isMappingRef;
