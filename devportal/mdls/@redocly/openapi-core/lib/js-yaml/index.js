"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyYaml = exports.parseYaml = void 0;
// TODO: add a type for "types" https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/js-yaml/index.d.ts
// @ts-ignore
const js_yaml_1 = require("js-yaml");
const DEFAULT_SCHEMA_WITHOUT_TIMESTAMP = js_yaml_1.JSON_SCHEMA.extend({
    implicit: [js_yaml_1.types.merge],
    explicit: [
        js_yaml_1.types.binary,
        js_yaml_1.types.omap,
        js_yaml_1.types.pairs,
        js_yaml_1.types.set,
    ],
});
const parseYaml = (str, opts) => js_yaml_1.load(str, Object.assign({ schema: DEFAULT_SCHEMA_WITHOUT_TIMESTAMP }, opts));
exports.parseYaml = parseYaml;
const stringifyYaml = (obj, opts) => js_yaml_1.dump(obj, Object.assign({ schema: DEFAULT_SCHEMA_WITHOUT_TIMESTAMP }, opts));
exports.stringifyYaml = stringifyYaml;
