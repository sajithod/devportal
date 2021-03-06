"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measureAsync = exports.count = exports.name = void 0;
const path = require("path");
const fs_1 = require("fs");
const resolve_1 = require("../../resolve");
const utils_1 = require("../utils");
const oas3_1 = require("../../types/oas3");
const types_1 = require("../../types");
exports.name = 'Resolve with no external refs';
exports.count = 10;
const rebillyDefinitionRef = path.resolve(path.join(__dirname, 'rebilly.yaml'));
const rebillyDocument = utils_1.parseYamlToDocument(fs_1.readFileSync(rebillyDefinitionRef, 'utf-8'), rebillyDefinitionRef);
const externalRefResolver = new resolve_1.BaseResolver();
function measureAsync() {
    return resolve_1.resolveDocument({
        rootDocument: rebillyDocument,
        externalRefResolver,
        rootType: types_1.normalizeTypes(oas3_1.Oas3Types).DefinitionRoot,
    });
}
exports.measureAsync = measureAsync;
