"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measureAsync = exports.count = exports.name = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const lint_1 = require("../../lint");
const config_1 = require("../../config/config");
const resolve_1 = require("../../resolve");
const utils_1 = require("../utils");
const builtIn_1 = require("../../config/builtIn");
exports.name = 'Validate with recommended rules';
exports.count = 10;
const rebillyDefinitionRef = path_1.resolve(path_1.join(__dirname, 'rebilly.yaml'));
const rebillyDocument = utils_1.parseYamlToDocument(fs_1.readFileSync(rebillyDefinitionRef, 'utf-8'), rebillyDefinitionRef);
function measureAsync() {
    return lint_1.lintDocument({
        externalRefResolver: new resolve_1.BaseResolver(),
        document: rebillyDocument,
        config: new config_1.LintConfig({ plugins: [builtIn_1.defaultPlugin] }),
    });
}
exports.measureAsync = measureAsync;
