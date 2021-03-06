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
exports.lintConfig = exports.lintDocument = exports.lintFromString = exports.lint = void 0;
const resolve_1 = require("./resolve");
const visitors_1 = require("./visitors");
const oas3_1_1 = require("./types/oas3_1");
const oas3_1 = require("./types/oas3");
const oas2_1 = require("./types/oas2");
const walk_1 = require("./walk");
const config_1 = require("./config/config");
const types_1 = require("./types");
const rules_1 = require("./config/rules");
const ajv_1 = require("./rules/ajv");
const oas_types_1 = require("./oas-types");
const redocly_yaml_1 = require("./types/redocly-yaml");
const spec_1 = require("./rules/common/spec");
const builtIn_1 = require("./config/builtIn");
function lint(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const { ref, externalRefResolver = new resolve_1.BaseResolver(opts.config.resolve) } = opts;
        const document = (yield externalRefResolver.resolveDocument(null, ref, true));
        return lintDocument(Object.assign(Object.assign({ document }, opts), { externalRefResolver, config: opts.config.lint }));
    });
}
exports.lint = lint;
function lintFromString(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const { source, absoluteRef, externalRefResolver = new resolve_1.BaseResolver(opts.config.resolve) } = opts;
        const document = resolve_1.makeDocumentFromString(source, absoluteRef || '/');
        return lintDocument(Object.assign(Object.assign({ document }, opts), { externalRefResolver, config: opts.config.lint }));
    });
}
exports.lintFromString = lintFromString;
function lintDocument(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        ajv_1.releaseAjvInstance(); // FIXME: preprocessors can modify nodes which are then cached to ajv-instance by absolute path
        const { document, customTypes, externalRefResolver, config } = opts;
        const oasVersion = oas_types_1.detectOpenAPI(document.parsed);
        const oasMajorVersion = oas_types_1.openAPIMajor(oasVersion);
        const rules = config.getRulesForOasVersion(oasMajorVersion);
        const types = types_1.normalizeTypes(config.extendTypes((customTypes !== null && customTypes !== void 0 ? customTypes : oasMajorVersion === oas_types_1.OasMajorVersion.Version3) ? (oasVersion === oas_types_1.OasVersion.Version3_1 ? oas3_1_1.Oas3_1Types : oas3_1.Oas3Types) : oas2_1.Oas2Types, oasVersion), config);
        const ctx = {
            problems: [],
            oasVersion: oasVersion,
        };
        const preprocessors = rules_1.initRules(rules, config, 'preprocessors', oasVersion);
        const regularRules = rules_1.initRules(rules, config, 'rules', oasVersion);
        const normalizedVisitors = visitors_1.normalizeVisitors([...preprocessors, ...regularRules], types);
        const resolvedRefMap = yield resolve_1.resolveDocument({
            rootDocument: document,
            rootType: types.DefinitionRoot,
            externalRefResolver
        });
        walk_1.walkDocument({
            document,
            rootType: types.DefinitionRoot,
            normalizedVisitors,
            resolvedRefMap,
            ctx,
        });
        return ctx.problems.map((problem) => config.addProblemToIgnore(problem));
    });
}
exports.lintDocument = lintDocument;
function lintConfig(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const { document } = opts;
        const ctx = {
            problems: [],
            oasVersion: oas_types_1.OasVersion.Version3_0,
        };
        const config = new config_1.LintConfig({
            plugins: [builtIn_1.defaultPlugin],
            extends: [],
            rules: { spec: 'error' },
        });
        const types = types_1.normalizeTypes(redocly_yaml_1.ConfigTypes, config);
        const rules = [{ severity: 'error', ruleId: 'spec', visitor: spec_1.OasSpec({ severity: 'error' }) }];
        const normalizedVisitors = visitors_1.normalizeVisitors(rules, types);
        walk_1.walkDocument({
            document,
            rootType: types.ConfigRoot,
            normalizedVisitors,
            resolvedRefMap: new Map(),
            ctx,
        });
        return ctx.problems;
    });
}
exports.lintConfig = lintConfig;
