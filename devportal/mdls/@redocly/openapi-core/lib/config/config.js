"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = exports.LintConfig = exports.IGNORE_FILE = void 0;
const fs = require("fs");
const path = require("path");
const path_1 = require("path");
const colorette_1 = require("colorette");
const js_yaml_1 = require("../js-yaml");
const utils_1 = require("../utils");
const oas_types_1 = require("../oas-types");
const recommended_1 = require("./recommended");
exports.IGNORE_FILE = '.redocly.lint-ignore.yaml';
const IGNORE_BANNER = `# This file instructs Redocly's linter to ignore the rules contained for specific parts of your API.\n` +
    `# See https://redoc.ly/docs/cli/ for more information.\n`;
class LintConfig {
    constructor(rawConfig, configFile) {
        this.rawConfig = rawConfig;
        this.configFile = configFile;
        this.ignore = {};
        this._usedRules = new Set();
        this._usedVersions = new Set();
        this.recommendedFallback = false;
        this.plugins = rawConfig.plugins ? resolvePlugins(rawConfig.plugins, configFile) : [];
        this.doNotResolveExamples = !!rawConfig.doNotResolveExamples;
        if (!rawConfig.extends) {
            this.recommendedFallback = true;
        }
        const extendConfigs = rawConfig.extends
            ? resolvePresets(rawConfig.extends, this.plugins)
            : [recommended_1.default];
        if (rawConfig.rules || rawConfig.preprocessors || rawConfig.decorators) {
            extendConfigs.push({
                rules: rawConfig.rules,
                preprocessors: rawConfig.preprocessors,
                decorators: rawConfig.decorators,
            });
        }
        const merged = mergeExtends(extendConfigs);
        this.rules = {
            [oas_types_1.OasVersion.Version2]: Object.assign(Object.assign({}, merged.rules), merged.oas2Rules),
            [oas_types_1.OasVersion.Version3_0]: Object.assign(Object.assign({}, merged.rules), merged.oas3_0Rules),
            [oas_types_1.OasVersion.Version3_1]: Object.assign(Object.assign({}, merged.rules), merged.oas3_1Rules),
        };
        this.preprocessors = {
            [oas_types_1.OasVersion.Version2]: Object.assign(Object.assign({}, merged.preprocessors), merged.oas2Preprocessors),
            [oas_types_1.OasVersion.Version3_0]: Object.assign(Object.assign({}, merged.preprocessors), merged.oas3_0Preprocessors),
            [oas_types_1.OasVersion.Version3_1]: Object.assign(Object.assign({}, merged.preprocessors), merged.oas3_1Preprocessors),
        };
        this.decorators = {
            [oas_types_1.OasVersion.Version2]: Object.assign(Object.assign({}, merged.decorators), merged.oas2Decorators),
            [oas_types_1.OasVersion.Version3_0]: Object.assign(Object.assign({}, merged.decorators), merged.oas3_0Decorators),
            [oas_types_1.OasVersion.Version3_1]: Object.assign(Object.assign({}, merged.decorators), merged.oas3_1Decorators),
        };
        const dir = this.configFile ? path.dirname(this.configFile) : (typeof process !== 'undefined' && process.cwd() || '');
        const ignoreFile = path.join(dir, exports.IGNORE_FILE);
        /* no crash when using it on the client */
        if (fs.hasOwnProperty('existsSync') && fs.existsSync(ignoreFile)) {
            // TODO: parse errors
            this.ignore =
                js_yaml_1.parseYaml(fs.readFileSync(ignoreFile, 'utf-8')) || {};
            // resolve ignore paths
            for (const fileName of Object.keys(this.ignore)) {
                this.ignore[path.resolve(path_1.dirname(ignoreFile), fileName)] = this.ignore[fileName];
                for (const ruleId of Object.keys(this.ignore[fileName])) {
                    this.ignore[fileName][ruleId] = new Set(this.ignore[fileName][ruleId]);
                }
                delete this.ignore[fileName];
            }
        }
    }
    saveIgnore() {
        const dir = this.configFile ? path.dirname(this.configFile) : process.cwd();
        const ignoreFile = path.join(dir, exports.IGNORE_FILE);
        const mapped = {};
        for (const absFileName of Object.keys(this.ignore)) {
            const ignoredRules = (mapped[utils_1.slash(path.relative(dir, absFileName))] = this.ignore[absFileName]);
            for (const ruleId of Object.keys(ignoredRules)) {
                ignoredRules[ruleId] = Array.from(ignoredRules[ruleId]);
            }
        }
        fs.writeFileSync(ignoreFile, IGNORE_BANNER + js_yaml_1.stringifyYaml(mapped));
    }
    addIgnore(problem) {
        const ignore = this.ignore;
        const loc = problem.location[0];
        if (loc.pointer === undefined)
            return;
        const fileIgnore = (ignore[loc.source.absoluteRef] = ignore[loc.source.absoluteRef] || {});
        const ruleIgnore = (fileIgnore[problem.ruleId] = fileIgnore[problem.ruleId] || new Set());
        ruleIgnore.add(loc.pointer);
    }
    addProblemToIgnore(problem) {
        const loc = problem.location[0];
        if (loc.pointer === undefined)
            return problem;
        const fileIgnore = this.ignore[loc.source.absoluteRef] || {};
        const ruleIgnore = fileIgnore[problem.ruleId];
        const ignored = ruleIgnore && ruleIgnore.has(loc.pointer);
        return ignored
            ? Object.assign(Object.assign({}, problem), { ignored }) : problem;
    }
    extendTypes(types, version) {
        let extendedTypes = types;
        for (const plugin of this.plugins) {
            if (plugin.typeExtension !== undefined) {
                switch (version) {
                    case oas_types_1.OasVersion.Version3_0:
                    case oas_types_1.OasVersion.Version3_1:
                        if (!plugin.typeExtension.oas3)
                            continue;
                        extendedTypes = plugin.typeExtension.oas3(extendedTypes, version);
                    case oas_types_1.OasVersion.Version2:
                        if (!plugin.typeExtension.oas2)
                            continue;
                        extendedTypes = plugin.typeExtension.oas2(extendedTypes, version);
                    default:
                        throw new Error('Not implemented');
                }
            }
        }
        return extendedTypes;
    }
    getRuleSettings(ruleId, oasVersion) {
        this._usedRules.add(ruleId);
        this._usedVersions.add(oasVersion);
        const settings = this.rules[oasVersion][ruleId] || 'off';
        if (typeof settings === 'string') {
            return {
                severity: settings,
            };
        }
        else {
            return Object.assign({ severity: 'error' }, settings);
        }
    }
    getPreprocessorSettings(ruleId, oasVersion) {
        this._usedRules.add(ruleId);
        this._usedVersions.add(oasVersion);
        const settings = this.preprocessors[oasVersion][ruleId] || 'off';
        if (typeof settings === 'string') {
            return {
                severity: settings === 'on' ? 'error' : settings,
            };
        }
        else {
            return Object.assign({ severity: 'error' }, settings);
        }
    }
    getDecoratorSettings(ruleId, oasVersion) {
        this._usedRules.add(ruleId);
        this._usedVersions.add(oasVersion);
        const settings = this.decorators[oasVersion][ruleId] || 'off';
        if (typeof settings === 'string') {
            return {
                severity: settings === 'on' ? 'error' : settings,
            };
        }
        else {
            return Object.assign({ severity: 'error' }, settings);
        }
    }
    getUnusedRules() {
        const rules = [];
        const decorators = [];
        const preprocessors = [];
        for (const usedVersion of Array.from(this._usedVersions)) {
            rules.push(...Object.keys(this.rules[usedVersion]).filter((name) => !this._usedRules.has(name)));
            decorators.push(...Object.keys(this.decorators[usedVersion]).filter((name) => !this._usedRules.has(name)));
            preprocessors.push(...Object.keys(this.preprocessors[usedVersion]).filter((name) => !this._usedRules.has(name)));
        }
        return {
            rules,
            preprocessors,
            decorators,
        };
    }
    getRulesForOasVersion(version) {
        switch (version) {
            case oas_types_1.OasMajorVersion.Version3:
                const oas3Rules = []; // default ruleset
                this.plugins.forEach((p) => { var _a; return ((_a = p.preprocessors) === null || _a === void 0 ? void 0 : _a.oas3) && oas3Rules.push(p.preprocessors.oas3); });
                this.plugins.forEach((p) => { var _a; return ((_a = p.rules) === null || _a === void 0 ? void 0 : _a.oas3) && oas3Rules.push(p.rules.oas3); });
                this.plugins.forEach((p) => { var _a; return ((_a = p.decorators) === null || _a === void 0 ? void 0 : _a.oas3) && oas3Rules.push(p.decorators.oas3); });
                return oas3Rules;
            case oas_types_1.OasMajorVersion.Version2:
                const oas2Rules = []; // default ruleset
                this.plugins.forEach((p) => { var _a; return ((_a = p.preprocessors) === null || _a === void 0 ? void 0 : _a.oas2) && oas2Rules.push(p.preprocessors.oas2); });
                this.plugins.forEach((p) => { var _a; return ((_a = p.rules) === null || _a === void 0 ? void 0 : _a.oas2) && oas2Rules.push(p.rules.oas2); });
                this.plugins.forEach((p) => { var _a; return ((_a = p.decorators) === null || _a === void 0 ? void 0 : _a.oas2) && oas2Rules.push(p.decorators.oas2); });
                return oas2Rules;
        }
    }
    skipRules(rules) {
        for (const ruleId of rules || []) {
            for (const version of Object.values(oas_types_1.OasVersion)) {
                if (this.rules[version][ruleId]) {
                    this.rules[version][ruleId] = 'off';
                }
            }
        }
    }
    skipPreprocessors(preprocessors) {
        for (const preprocessorId of preprocessors || []) {
            for (const version of Object.values(oas_types_1.OasVersion)) {
                if (this.preprocessors[version][preprocessorId]) {
                    this.preprocessors[version][preprocessorId] = 'off';
                }
            }
        }
    }
    skipDecorators(decorators) {
        for (const decoratorId of decorators || []) {
            for (const version of Object.values(oas_types_1.OasVersion)) {
                if (this.decorators[version][decoratorId]) {
                    this.decorators[version][decoratorId] = 'off';
                }
            }
        }
    }
}
exports.LintConfig = LintConfig;
class Config {
    constructor(rawConfig, configFile) {
        var _a, _b, _c;
        this.rawConfig = rawConfig;
        this.configFile = configFile;
        this.apiDefinitions = rawConfig.apiDefinitions || {};
        this.lint = new LintConfig(rawConfig.lint || {}, configFile);
        this.referenceDocs = rawConfig.referenceDocs || {};
        this.resolve = {
            http: {
                headers: (_c = (_b = (_a = rawConfig === null || rawConfig === void 0 ? void 0 : rawConfig.resolve) === null || _a === void 0 ? void 0 : _a.http) === null || _b === void 0 ? void 0 : _b.headers) !== null && _c !== void 0 ? _c : [],
                customFetch: undefined,
            },
        };
    }
}
exports.Config = Config;
function resolvePresets(presets, plugins) {
    return presets.map((presetName) => {
        var _a;
        const { pluginId, configName } = parsePresetName(presetName);
        const plugin = plugins.find((p) => p.id === pluginId);
        if (!plugin) {
            throw new Error(`Invalid config ${colorette_1.red(presetName)}: plugin ${pluginId} is not included.`);
        }
        const preset = (_a = plugin.configs) === null || _a === void 0 ? void 0 : _a[configName];
        if (!preset) {
            throw new Error(pluginId
                ? `Invalid config ${colorette_1.red(presetName)}: plugin ${pluginId} doesn't export config with name ${configName}.`
                : `Invalid config ${colorette_1.red(presetName)}: there is no such built-in config.`);
        }
        return preset;
    });
}
function parsePresetName(presetName) {
    if (presetName.indexOf('/') > -1) {
        const [pluginId, configName] = presetName.split('/');
        return { pluginId, configName };
    }
    else {
        return { pluginId: '', configName: presetName };
    }
}
function resolvePlugins(plugins, configPath = '') {
    if (!plugins)
        return [];
    // @ts-ignore
    const requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require;
    const seenPluginIds = new Map();
    return plugins
        .map((p) => {
        // TODO: resolve npm packages similar to eslint
        const pluginModule = typeof p === 'string'
            ? requireFunc(path.resolve(path.dirname(configPath), p))
            : p;
        const id = pluginModule.id;
        if (typeof id !== 'string') {
            throw new Error(colorette_1.red(`Plugin must define \`id\` property in ${colorette_1.blue(p.toString())}.`));
        }
        if (seenPluginIds.has(id)) {
            const pluginPath = seenPluginIds.get(id);
            throw new Error(colorette_1.red(`Plugin "id" must be unique. Plugin ${colorette_1.blue(p.toString())} uses id "${colorette_1.blue(id)}" already seen in ${colorette_1.blue(pluginPath)}`));
        }
        seenPluginIds.set(id, p.toString());
        const plugin = Object.assign(Object.assign({ id }, (pluginModule.configs ? { configs: pluginModule.configs } : {})), (pluginModule.typeExtension ? { typeExtension: pluginModule.typeExtension } : {}));
        if (pluginModule.rules) {
            if (!pluginModule.rules.oas3 && !pluginModule.rules.oas2) {
                throw new Error(`Plugin rules must have \`oas3\` or \`oas2\` rules "${p}.`);
            }
            plugin.rules = {};
            if (pluginModule.rules.oas3) {
                plugin.rules.oas3 = prefixRules(pluginModule.rules.oas3, id);
            }
            if (pluginModule.rules.oas2) {
                plugin.rules.oas2 = prefixRules(pluginModule.rules.oas2, id);
            }
        }
        if (pluginModule.preprocessors) {
            if (!pluginModule.preprocessors.oas3 && !pluginModule.preprocessors.oas2) {
                throw new Error(`Plugin \`preprocessors\` must have \`oas3\` or \`oas2\` preprocessors "${p}.`);
            }
            plugin.preprocessors = {};
            if (pluginModule.preprocessors.oas3) {
                plugin.preprocessors.oas3 = prefixRules(pluginModule.preprocessors.oas3, id);
            }
            if (pluginModule.preprocessors.oas2) {
                plugin.preprocessors.oas2 = prefixRules(pluginModule.preprocessors.oas2, id);
            }
        }
        if (pluginModule.decorators) {
            if (!pluginModule.decorators.oas3 && !pluginModule.decorators.oas2) {
                throw new Error(`Plugin \`decorators\` must have \`oas3\` or \`oas2\` decorators "${p}.`);
            }
            plugin.decorators = {};
            if (pluginModule.decorators.oas3) {
                plugin.decorators.oas3 = prefixRules(pluginModule.decorators.oas3, id);
            }
            if (pluginModule.decorators.oas2) {
                plugin.decorators.oas2 = prefixRules(pluginModule.decorators.oas2, id);
            }
        }
        return plugin;
    })
        .filter(utils_1.notUndefined);
}
function prefixRules(rules, prefix) {
    if (!prefix)
        return rules;
    const res = {};
    for (const name of Object.keys(rules)) {
        res[`${prefix}/${name}`] = rules[name];
    }
    return res;
}
function mergeExtends(rulesConfList) {
    const result = {
        rules: {},
        oas2Rules: {},
        oas3_0Rules: {},
        oas3_1Rules: {},
        preprocessors: {},
        oas2Preprocessors: {},
        oas3_0Preprocessors: {},
        oas3_1Preprocessors: {},
        decorators: {},
        oas2Decorators: {},
        oas3_0Decorators: {},
        oas3_1Decorators: {},
    };
    for (let rulesConf of rulesConfList) {
        if (rulesConf.extends) {
            throw new Error(`\`extends\` is not supported in shared configs yet: ${JSON.stringify(rulesConf, null, 2)}.`);
        }
        Object.assign(result.rules, rulesConf.rules);
        Object.assign(result.oas2Rules, rulesConf.oas2Rules);
        assignExisting(result.oas2Rules, rulesConf.rules || {});
        Object.assign(result.oas3_0Rules, rulesConf.oas3_0Rules);
        assignExisting(result.oas3_0Rules, rulesConf.rules || {});
        Object.assign(result.oas3_1Rules, rulesConf.oas3_1Rules);
        assignExisting(result.oas3_1Rules, rulesConf.rules || {});
        Object.assign(result.preprocessors, rulesConf.preprocessors);
        Object.assign(result.oas2Preprocessors, rulesConf.oas2Preprocessors);
        assignExisting(result.oas2Preprocessors, rulesConf.preprocessors || {});
        Object.assign(result.oas3_0Preprocessors, rulesConf.oas3_0Preprocessors);
        assignExisting(result.oas3_0Preprocessors, rulesConf.preprocessors || {});
        Object.assign(result.oas3_1Preprocessors, rulesConf.oas3_1Preprocessors);
        assignExisting(result.oas3_1Preprocessors, rulesConf.preprocessors || {});
        Object.assign(result.decorators, rulesConf.decorators);
        Object.assign(result.oas2Decorators, rulesConf.oas2Decorators);
        assignExisting(result.oas2Decorators, rulesConf.decorators || {});
        Object.assign(result.oas3_0Decorators, rulesConf.oas3_0Decorators);
        assignExisting(result.oas3_0Decorators, rulesConf.decorators || {});
        Object.assign(result.oas3_1Decorators, rulesConf.oas3_1Decorators);
        assignExisting(result.oas3_1Decorators, rulesConf.decorators || {});
    }
    return result;
}
function assignExisting(target, obj) {
    for (let k of Object.keys(obj)) {
        if (target.hasOwnProperty(k)) {
            target[k] = obj[k];
        }
    }
}
