"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measureAsync = exports.count = exports.name = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const lint_1 = require("../../lint");
const resolve_1 = require("../../resolve");
const utils_1 = require("../utils");
exports.name = 'Validate with single nested rule';
exports.count = 10;
const rebillyDefinitionRef = path_1.resolve(path_1.join(__dirname, 'rebilly.yaml'));
const rebillyDocument = utils_1.parseYamlToDocument(fs_1.readFileSync(rebillyDefinitionRef, 'utf-8'), rebillyDefinitionRef);
const visitor = {
    test: () => {
        let count = 0;
        return {
            PathItem: {
                Parameter() {
                    count++;
                },
                Operation: {
                    Parameter() {
                        count++;
                        if (count === -1)
                            throw new Error('Disable optimization');
                    },
                },
            },
        };
    },
};
const config = utils_1.makeConfigForRuleset(visitor);
function measureAsync() {
    return lint_1.lintDocument({
        externalRefResolver: new resolve_1.BaseResolver(),
        document: rebillyDocument,
        config,
    });
}
exports.measureAsync = measureAsync;
