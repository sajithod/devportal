"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeConfigForRuleset = exports.parseYamlToDocument = void 0;
const js_yaml_1 = require("../js-yaml");
const resolve_1 = require("../resolve");
const config_1 = require("../config/config");
function parseYamlToDocument(body, absoluteRef = '') {
    return {
        source: new resolve_1.Source(absoluteRef, body),
        parsed: js_yaml_1.parseYaml(body, { filename: absoluteRef }),
    };
}
exports.parseYamlToDocument = parseYamlToDocument;
function makeConfigForRuleset(rules, plugin) {
    const rulesConf = {};
    const ruleId = 'test';
    Object.keys(rules).forEach((name) => {
        rulesConf[`${ruleId}/${name}`] = 'error';
    });
    return new config_1.LintConfig({
        plugins: [
            Object.assign(Object.assign({}, plugin), { id: ruleId, rules: { oas3: rules } }),
        ],
        extends: [],
        rules: rulesConf,
    });
}
exports.makeConfigForRuleset = makeConfigForRuleset;
