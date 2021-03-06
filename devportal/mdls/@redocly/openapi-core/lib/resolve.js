"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveDocument = exports.BaseResolver = exports.makeDocumentFromString = exports.YamlParseError = exports.ResolveError = exports.Source = void 0;
const fs = require("fs");
const path = require("path");
const url = require("url");
const ref_utils_1 = require("./ref-utils");
const types_1 = require("./types");
const utils_1 = require("./utils");
class Source {
    constructor(absoluteRef, body, mimeType) {
        this.absoluteRef = absoluteRef;
        this.body = body;
        this.mimeType = mimeType;
    }
    // pass safeLoad as argument to separate it from browser bundle
    getAst(safeLoad) {
        var _a;
        if (this._ast === undefined) {
            this._ast = (_a = safeLoad(this.body, { filename: this.absoluteRef })) !== null && _a !== void 0 ? _a : undefined;
            // fix ast representation of file with newlines only
            if (this._ast &&
                this._ast.kind === 0 && // KIND.scalar = 0
                this._ast.value === '' &&
                this._ast.startPosition !== 1) {
                this._ast.startPosition = 1;
                this._ast.endPosition = 1;
            }
        }
        return this._ast;
    }
    getLines() {
        if (this._lines === undefined) {
            this._lines = this.body.split(/\r\n|[\n\r]/g);
        }
        return this._lines;
    }
}
exports.Source = Source;
class ResolveError extends Error {
    constructor(originalError) {
        super(originalError.message);
        this.originalError = originalError;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ResolveError.prototype);
    }
}
exports.ResolveError = ResolveError;
const jsYamlErrorLineColRegexp = /\((\d+):(\d+)\)$/;
class YamlParseError extends Error {
    constructor(originalError, source) {
        super(originalError.message.split('\n')[0]);
        this.originalError = originalError;
        this.source = source;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, YamlParseError.prototype);
        const [, line, col] = this.message.match(jsYamlErrorLineColRegexp) || [];
        this.line = parseInt(line, 10);
        this.col = parseInt(col, 10);
    }
}
exports.YamlParseError = YamlParseError;
function makeDocumentFromString(sourceString, absoluteRef) {
    const source = new Source(absoluteRef, sourceString);
    try {
        return {
            source,
            parsed: utils_1.parseYaml(sourceString, { filename: absoluteRef }),
        };
    }
    catch (e) {
        throw new YamlParseError(e, source);
    }
}
exports.makeDocumentFromString = makeDocumentFromString;
class BaseResolver {
    constructor(config = { http: { headers: [] } }) {
        this.config = config;
        this.cache = new Map();
    }
    getFiles() {
        return new Set(Array.from(this.cache.keys()));
    }
    resolveExternalRef(base, ref) {
        if (ref_utils_1.isAbsoluteUrl(ref)) {
            return ref;
        }
        if (base && ref_utils_1.isAbsoluteUrl(base)) {
            return url.resolve(base, ref);
        }
        return path.resolve(base ? path.dirname(base) : process.cwd(), ref);
    }
    loadExternalRef(absoluteRef) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (ref_utils_1.isAbsoluteUrl(absoluteRef)) {
                    const { body, mimeType } = yield utils_1.readFileFromUrl(absoluteRef, this.config.http);
                    return new Source(absoluteRef, body, mimeType);
                }
                else {
                    return new Source(absoluteRef, yield fs.promises.readFile(absoluteRef, 'utf-8'));
                }
            }
            catch (error) {
                throw new ResolveError(error);
            }
        });
    }
    parseDocument(source, isRoot = false) {
        var _a;
        const ext = source.absoluteRef.substr(source.absoluteRef.lastIndexOf('.'));
        if (!['.json', '.json', '.yml', '.yaml'].includes(ext) &&
            !((_a = source.mimeType) === null || _a === void 0 ? void 0 : _a.match(/(json|yaml|openapi)/)) &&
            !isRoot // always parse root
        ) {
            return { source, parsed: source.body };
        }
        try {
            return {
                source,
                parsed: utils_1.parseYaml(source.body, { filename: source.absoluteRef }),
            };
        }
        catch (e) {
            throw new YamlParseError(e, source);
        }
    }
    resolveDocument(base, ref, isRoot = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const absoluteRef = this.resolveExternalRef(base, ref);
            const cachedDocument = this.cache.get(absoluteRef);
            if (cachedDocument) {
                return cachedDocument;
            }
            const doc = this.loadExternalRef(absoluteRef).then((source) => {
                return this.parseDocument(source, isRoot);
            });
            this.cache.set(absoluteRef, doc);
            return doc;
        });
    }
}
exports.BaseResolver = BaseResolver;
function pushRef(head, node) {
    return {
        prev: head,
        node,
    };
}
function hasRef(head, node) {
    while (head) {
        if (head.node === node) {
            return true;
        }
        head = head.prev;
    }
    return false;
}
const unknownType = { name: 'unknown', properties: {} };
const resolvableScalarType = { name: 'scalar', properties: {} };
function resolveDocument(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const { rootDocument, externalRefResolver, rootType } = opts;
        const resolvedRefMap = new Map();
        const seedNodes = new Set(); // format "${type}::${absoluteRef}${pointer}"
        const resolvePromises = [];
        resolveRefsInParallel(rootDocument.parsed, rootDocument, '#/', rootType);
        let resolved;
        do {
            resolved = yield Promise.all(resolvePromises);
        } while (resolvePromises.length !== resolved.length);
        return resolvedRefMap;
        function resolveRefsInParallel(rootNode, rootNodeDocument, rootNodePointer, type) {
            const rootNodeDocAbsoluteRef = rootNodeDocument.source.absoluteRef;
            walk(rootNode, type, rootNodeDocAbsoluteRef + rootNodePointer);
            function walk(node, type, nodeAbsoluteRef) {
                if (typeof node !== 'object' || node === null) {
                    return;
                }
                const nodeId = `${type.name}::${nodeAbsoluteRef}`;
                if (seedNodes.has(nodeId)) {
                    return;
                }
                seedNodes.add(nodeId);
                if (Array.isArray(node)) {
                    const itemsType = type.items;
                    // we continue resolving unknown types, but stop early on known scalars
                    if (type !== unknownType && itemsType === undefined) {
                        return;
                    }
                    for (let i = 0; i < node.length; i++) {
                        walk(node[i], itemsType || unknownType, ref_utils_1.joinPointer(nodeAbsoluteRef, i));
                    }
                    return;
                }
                for (const propName of Object.keys(node)) {
                    let propValue = node[propName];
                    let propType = type.properties[propName];
                    if (propType === undefined)
                        propType = type.additionalProperties;
                    if (typeof propType === 'function')
                        propType = propType(propValue, propName);
                    if (propType === undefined)
                        propType = unknownType;
                    if (!types_1.isNamedType(propType) && (propType === null || propType === void 0 ? void 0 : propType.directResolveAs)) {
                        propType = propType.directResolveAs;
                        propValue = { $ref: propValue };
                    }
                    if (propType && propType.name === undefined && propType.resolvable !== false) {
                        propType = resolvableScalarType;
                    }
                    if (!types_1.isNamedType(propType) || typeof propValue !== 'object') {
                        continue;
                    }
                    walk(propValue, propType, ref_utils_1.joinPointer(nodeAbsoluteRef, ref_utils_1.escapePointer(propName)));
                }
                if (ref_utils_1.isRef(node)) {
                    const promise = followRef(rootNodeDocument, node, {
                        prev: null,
                        node,
                    }).then((resolvedRef) => {
                        if (resolvedRef.resolved) {
                            resolveRefsInParallel(resolvedRef.node, resolvedRef.document, resolvedRef.nodePointer, type);
                        }
                    });
                    resolvePromises.push(promise);
                }
            }
            function followRef(document, ref, refStack) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (hasRef(refStack.prev, ref)) {
                        throw new Error('Self-referencing circular pointer');
                    }
                    const { uri, pointer } = ref_utils_1.parseRef(ref.$ref);
                    const isRemote = uri !== null;
                    let targetDoc;
                    try {
                        targetDoc = isRemote
                            ? (yield externalRefResolver.resolveDocument(document.source.absoluteRef, uri))
                            : document;
                    }
                    catch (error) {
                        const resolvedRef = {
                            resolved: false,
                            isRemote,
                            document: undefined,
                            error: error,
                        };
                        const refId = document.source.absoluteRef + '::' + ref.$ref;
                        resolvedRefMap.set(refId, resolvedRef);
                        return resolvedRef;
                    }
                    let resolvedRef = {
                        resolved: true,
                        document: targetDoc,
                        isRemote,
                        node: document.parsed,
                        nodePointer: '#/',
                    };
                    let target = targetDoc.parsed;
                    const segments = pointer;
                    for (let segment of segments) {
                        if (typeof target !== 'object') {
                            target = undefined;
                            break;
                        }
                        else if (target[segment] !== undefined) {
                            target = target[segment];
                            resolvedRef.nodePointer = ref_utils_1.joinPointer(resolvedRef.nodePointer, ref_utils_1.escapePointer(segment));
                        }
                        else if (ref_utils_1.isRef(target)) {
                            resolvedRef = yield followRef(targetDoc, target, pushRef(refStack, target));
                            targetDoc = resolvedRef.document || targetDoc;
                            if (typeof resolvedRef.node !== 'object') {
                                target = undefined;
                                break;
                            }
                            target = resolvedRef.node[segment];
                            resolvedRef.nodePointer = ref_utils_1.joinPointer(resolvedRef.nodePointer, ref_utils_1.escapePointer(segment));
                        }
                        else {
                            target = undefined;
                            break;
                        }
                    }
                    resolvedRef.node = target;
                    resolvedRef.document = targetDoc;
                    const refId = document.source.absoluteRef + '::' + ref.$ref;
                    if (resolvedRef.document && ref_utils_1.isRef(target)) {
                        resolvedRef = yield followRef(resolvedRef.document, target, pushRef(refStack, target));
                    }
                    resolvedRefMap.set(refId, resolvedRef);
                    return Object.assign({}, resolvedRef);
                });
            }
        }
    });
}
exports.resolveDocument = resolveDocument;
