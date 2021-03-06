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
exports.slash = exports.isPathParameter = exports.readFileAsStringSync = exports.isSingular = exports.validateMimeTypeOAS3 = exports.validateMimeType = exports.splitCamelCaseIntoWords = exports.omitObjectProps = exports.pickObjectProps = exports.match = exports.readFileFromUrl = exports.isPlainObject = exports.notUndefined = exports.loadYaml = exports.popStack = exports.pushStack = exports.stringifyYaml = exports.parseYaml = void 0;
const fs = require("fs");
const minimatch = require("minimatch");
const node_fetch_1 = require("node-fetch");
const pluralize = require("pluralize");
const js_yaml_1 = require("./js-yaml");
var js_yaml_2 = require("./js-yaml");
Object.defineProperty(exports, "parseYaml", { enumerable: true, get: function () { return js_yaml_2.parseYaml; } });
Object.defineProperty(exports, "stringifyYaml", { enumerable: true, get: function () { return js_yaml_2.stringifyYaml; } });
function pushStack(head, value) {
    return { prev: head, value };
}
exports.pushStack = pushStack;
function popStack(head) {
    var _a;
    return (_a = head === null || head === void 0 ? void 0 : head.prev) !== null && _a !== void 0 ? _a : null;
}
exports.popStack = popStack;
function loadYaml(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        const contents = yield fs.promises.readFile(filename, 'utf-8');
        return js_yaml_1.parseYaml(contents);
    });
}
exports.loadYaml = loadYaml;
function notUndefined(x) {
    return x !== undefined;
}
exports.notUndefined = notUndefined;
function isPlainObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
exports.isPlainObject = isPlainObject;
function readFileFromUrl(url, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const headers = {};
        for (const header of config.headers) {
            if (match(url, header.matches)) {
                headers[header.name] =
                    header.envVariable !== undefined ? process.env[header.envVariable] || '' : header.value;
            }
        }
        const req = yield (config.customFetch || node_fetch_1.default)(url, {
            headers: headers,
        });
        if (!req.ok) {
            throw new Error(`Failed to load ${url}: ${req.status} ${req.statusText}`);
        }
        return { body: yield req.text(), mimeType: req.headers.get('content-type') };
    });
}
exports.readFileFromUrl = readFileFromUrl;
function match(url, pattern) {
    if (!pattern.match(/^https?:\/\//)) {
        // if pattern doesn't specify protocol directly, do not match against it
        url = url.replace(/^https?:\/\//, '');
    }
    return minimatch(url, pattern);
}
exports.match = match;
function pickObjectProps(object, keys) {
    return Object.fromEntries(keys.filter((key) => key in object).map((key) => [key, object[key]]));
}
exports.pickObjectProps = pickObjectProps;
function omitObjectProps(object, keys) {
    return Object.fromEntries(Object.entries(object).filter(([key]) => !keys.includes(key)));
}
exports.omitObjectProps = omitObjectProps;
function splitCamelCaseIntoWords(str) {
    const camel = str
        .split(/(?:[-._])|([A-Z][a-z]+)/)
        .filter(Boolean)
        .map((item) => item.toLocaleLowerCase());
    const caps = str
        .split(/([A-Z]{2,})/)
        .filter((e) => e && e === e.toUpperCase())
        .map((item) => item.toLocaleLowerCase());
    return new Set([...camel, ...caps]);
}
exports.splitCamelCaseIntoWords = splitCamelCaseIntoWords;
function validateMimeType({ type, value }, { report, location }, allowedValues) {
    const ruleType = type === 'consumes' ? 'request' : 'response';
    if (!allowedValues)
        throw new Error(`Parameter "allowedValues" is not provided for "${ruleType}-mime-type" rule`);
    if (!value[type])
        return;
    for (const mime of value[type]) {
        if (!allowedValues.includes(mime)) {
            report({
                message: `Mime type "${mime}" is not allowed`,
                location: location.child(value[type].indexOf(mime)).key(),
            });
        }
    }
}
exports.validateMimeType = validateMimeType;
function validateMimeTypeOAS3({ type, value }, { report, location }, allowedValues) {
    const ruleType = type === 'consumes' ? 'request' : 'response';
    if (!allowedValues)
        throw new Error(`Parameter "allowedValues" is not provided for "${ruleType}-mime-type" rule`);
    if (!value.content)
        return;
    for (const mime of Object.keys(value.content)) {
        if (!allowedValues.includes(mime)) {
            report({
                message: `Mime type "${mime}" is not allowed`,
                location: location.child('content').child(mime).key(),
            });
        }
    }
}
exports.validateMimeTypeOAS3 = validateMimeTypeOAS3;
function isSingular(path) {
    return pluralize.isSingular(path);
}
exports.isSingular = isSingular;
function readFileAsStringSync(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}
exports.readFileAsStringSync = readFileAsStringSync;
function isPathParameter(pathSegment) {
    return pathSegment.startsWith('{') && pathSegment.endsWith('{');
}
exports.isPathParameter = isPathParameter;
/**
 * Convert Windows backslash paths to slash paths: foo\\bar ??? foo/bar
 */
function slash(path) {
    const isExtendedLengthPath = /^\\\\\?\\/.test(path);
    if (isExtendedLengthPath) {
        return path;
    }
    return path.replace(/\\/g, '/');
}
exports.slash = slash;
