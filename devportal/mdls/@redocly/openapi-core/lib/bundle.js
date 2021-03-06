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
exports.bundleDocument = exports.bundle = exports.OasVersion = void 0;
const isEqual = require("lodash.isequal");
const resolve_1 = require("./resolve");
const visitors_1 = require("./visitors");
const oas3_1 = require("./types/oas3");
const oas2_1 = require("./types/oas2");
const oas3_1_1 = require("./types/oas3_1");
const types_1 = require("./types");
const walk_1 = require("./walk");
const oas_types_1 = require("./oas-types");
const ref_utils_1 = require("./ref-utils");
const rules_1 = require("./config/rules");
const no_unresolved_refs_1 = require("./rules/no-unresolved-refs");
const utils_1 = require("./utils");
var OasVersion;
(function (OasVersion) {
    OasVersion["Version2"] = "oas2";
    OasVersion["Version3_0"] = "oas3_0";
    OasVersion["Version3_1"] = "oas3_1";
})(OasVersion = exports.OasVersion || (exports.OasVersion = {}));
function bundle(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const { ref, doc, externalRefResolver = new resolve_1.BaseResolver(opts.config.resolve), base = null, } = opts;
        if (!(ref || doc)) {
            throw new Error('Document or reference is required.\n');
        }
        const document = doc !== undefined ? doc : yield externalRefResolver.resolveDocument(base, ref, true);
        if (document instanceof Error) {
            throw document;
        }
        return bundleDocument(Object.assign(Object.assign({ document }, opts), { config: opts.config.lint, externalRefResolver }));
    });
}
exports.bundle = bundle;
function bundleDocument(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const { document, config, customTypes, externalRefResolver, dereference = false } = opts;
        const oasVersion = oas_types_1.detectOpenAPI(document.parsed);
        const oasMajorVersion = oas_types_1.openAPIMajor(oasVersion);
        const rules = config.getRulesForOasVersion(oasMajorVersion);
        const types = types_1.normalizeTypes(config.extendTypes((customTypes !== null && customTypes !== void 0 ? customTypes : oasMajorVersion === oas_types_1.OasMajorVersion.Version3) ? (oasVersion === OasVersion.Version3_1 ? oas3_1_1.Oas3_1Types : oas3_1.Oas3Types) : oas2_1.Oas2Types, oasVersion), config);
        const preprocessors = rules_1.initRules(rules, config, 'preprocessors', oasVersion);
        const decorators = rules_1.initRules(rules, config, 'decorators', oasVersion);
        const ctx = {
            problems: [],
            oasVersion: oasVersion,
            refTypes: new Map(),
        };
        const bundleVisitor = visitors_1.normalizeVisitors([
            ...preprocessors,
            {
                severity: 'error',
                ruleId: 'bundler',
                visitor: makeBundleVisitor(oasMajorVersion, dereference, document),
            },
            ...decorators,
        ], types);
        const resolvedRefMap = yield resolve_1.resolveDocument({
            rootDocument: document,
            rootType: types.DefinitionRoot,
            externalRefResolver,
        });
        walk_1.walkDocument({
            document,
            rootType: types.DefinitionRoot,
            normalizedVisitors: bundleVisitor,
            resolvedRefMap,
            ctx,
        });
        return {
            bundle: document,
            problems: ctx.problems.map((problem) => config.addProblemToIgnore(problem)),
            fileDependencies: externalRefResolver.getFiles(),
            rootType: types.DefinitionRoot,
            refTypes: ctx.refTypes,
        };
    });
}
exports.bundleDocument = bundleDocument;
function mapTypeToComponent(typeName, version) {
    switch (version) {
        case oas_types_1.OasMajorVersion.Version3:
            switch (typeName) {
                case 'Schema':
                    return 'schemas';
                case 'Parameter':
                    return 'parameters';
                case 'Response':
                    return 'responses';
                case 'Example':
                    return 'examples';
                case 'RequestBody':
                    return 'requestBodies';
                case 'Header':
                    return 'headers';
                case 'SecuritySchema':
                    return 'securitySchemes';
                case 'Link':
                    return 'links';
                case 'Callback':
                    return 'callbacks';
                default:
                    return null;
            }
        case oas_types_1.OasMajorVersion.Version2:
            switch (typeName) {
                case 'Schema':
                    return 'definitions';
                case 'Parameter':
                    return 'parameters';
                case 'Response':
                    return 'responses';
                default:
                    return null;
            }
    }
}
// function oas3Move
function makeBundleVisitor(version, dereference, rootDocument) {
    let components;
    const visitor = {
        ref: {
            leave(node, ctx, resolved) {
                if (!resolved.location || resolved.node === undefined) {
                    no_unresolved_refs_1.reportUnresolvedRef(resolved, ctx.report, ctx.location);
                    return;
                }
                if (resolved.location.source === rootDocument.source &&
                    resolved.location.source === ctx.location.source &&
                    ctx.type.name !== 'scalar' &&
                    !dereference) {
                    return;
                }
                const componentType = mapTypeToComponent(ctx.type.name, version);
                if (!componentType) {
                    replaceRef(node, resolved, ctx);
                }
                else {
                    if (dereference) {
                        saveComponent(componentType, resolved, ctx);
                        replaceRef(node, resolved, ctx);
                    }
                    else {
                        node.$ref = saveComponent(componentType, resolved, ctx);
                    }
                }
            },
        },
        DefinitionRoot: {
            enter(root) {
                if (version === oas_types_1.OasMajorVersion.Version3) {
                    components = root.components = root.components || {};
                }
                else if (version === oas_types_1.OasMajorVersion.Version2) {
                    components = root;
                }
            },
        },
    };
    if (version === oas_types_1.OasMajorVersion.Version3) {
        visitor.DiscriminatorMapping = {
            leave(mapping, ctx) {
                for (const name of Object.keys(mapping)) {
                    const $ref = mapping[name];
                    const resolved = ctx.resolve({ $ref });
                    if (!resolved.location || resolved.node === undefined) {
                        no_unresolved_refs_1.reportUnresolvedRef(resolved, ctx.report, ctx.location.child(name));
                        return;
                    }
                    const componentType = mapTypeToComponent('Schema', version);
                    if (dereference) {
                        saveComponent(componentType, resolved, ctx);
                    }
                    else {
                        mapping[name] = saveComponent(componentType, resolved, ctx);
                    }
                }
            },
        };
    }
    function replaceRef(ref, resolved, ctx) {
        if (!utils_1.isPlainObject(resolved.node)) {
            ctx.parent[ctx.key] = resolved.node;
        }
        else {
            // @ts-ignore
            delete ref.$ref;
            Object.assign(ref, resolved.node);
        }
    }
    function saveComponent(componentType, target, ctx) {
        components[componentType] = components[componentType] || {};
        const name = getComponentName(target, componentType, ctx);
        components[componentType][name] = target.node;
        if (version === oas_types_1.OasMajorVersion.Version3) {
            return `#/components/${componentType}/${name}`;
        }
        else {
            return `#/${componentType}/${name}`;
        }
    }
    function getComponentName(target, componentType, ctx) {
        const [fileRef, pointer] = [target.location.source.absoluteRef, target.location.pointer];
        const componentsGroup = components[componentType];
        let name = '';
        const refParts = pointer.slice(2).split('/').filter(Boolean); // slice(2) removes "#/"
        while (refParts.length > 0) {
            name = refParts.pop() + (name ? `-${name}` : '');
            if (!componentsGroup ||
                !componentsGroup[name] ||
                isEqual(componentsGroup[name], target.node)) {
                return name;
            }
        }
        name = ref_utils_1.refBaseName(fileRef) + (name ? `_${name}` : '');
        if (!componentsGroup[name] || isEqual(componentsGroup[name], target.node)) {
            return name;
        }
        const prevName = name;
        let serialId = 2;
        while (componentsGroup[name] && !isEqual(componentsGroup[name], target.node)) {
            name = `${prevName}-${serialId}`;
            serialId++;
        }
        if (!componentsGroup[name]) {
            ctx.report({
                message: `Two schemas are referenced with the same name but different content. Renamed ${prevName} to ${name}.`,
                location: ctx.location,
                forceSeverity: 'warn',
            });
        }
        return name;
    }
    return visitor;
}
