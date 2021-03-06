"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkDocument = void 0;
const ref_utils_1 = require("./ref-utils");
const resolve_1 = require("./resolve");
const utils_1 = require("./utils");
const types_1 = require("./types");
function collectParents(ctx) {
    var _a;
    const parents = {};
    while (ctx.parent) {
        parents[ctx.parent.type.name] = (_a = ctx.parent.activatedOn) === null || _a === void 0 ? void 0 : _a.value.node;
        ctx = ctx.parent;
    }
    return parents;
}
function collectParentsLocations(ctx) {
    var _a, _b;
    const locations = {};
    while (ctx.parent) {
        if ((_a = ctx.parent.activatedOn) === null || _a === void 0 ? void 0 : _a.value.location) {
            locations[ctx.parent.type.name] = (_b = ctx.parent.activatedOn) === null || _b === void 0 ? void 0 : _b.value.location;
        }
        ctx = ctx.parent;
    }
    return locations;
}
function walkDocument(opts) {
    const { document, rootType, normalizedVisitors, resolvedRefMap, ctx } = opts;
    const seenNodesPerType = {};
    const seenRefs = new Set();
    walkNode(document.parsed, rootType, new ref_utils_1.Location(document.source, '#/'), undefined, '');
    function walkNode(node, type, location, parent, key) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        let currentLocation = location;
        const { node: resolvedNode, location: resolvedLocation, error } = resolve(node);
        const enteredContexts = new Set();
        if (ref_utils_1.isRef(node)) {
            const refEnterVisitors = normalizedVisitors.ref.enter;
            for (const { visit: visitor, ruleId, severity, context } of refEnterVisitors) {
                if (!seenRefs.has(node)) {
                    enteredContexts.add(context);
                    const report = reportFn.bind(undefined, ruleId, severity);
                    visitor(node, {
                        report,
                        resolve,
                        location,
                        type,
                        parent,
                        key,
                        parentLocations: {},
                        oasVersion: ctx.oasVersion,
                    }, { node: resolvedNode, location: resolvedLocation, error });
                    if ((resolvedLocation === null || resolvedLocation === void 0 ? void 0 : resolvedLocation.source.absoluteRef) && ctx.refTypes) {
                        ctx.refTypes.set(resolvedLocation === null || resolvedLocation === void 0 ? void 0 : resolvedLocation.source.absoluteRef, type);
                    }
                }
            }
        }
        if (resolvedNode !== undefined && resolvedLocation && type.name !== 'scalar') {
            currentLocation = resolvedLocation;
            const isNodeSeen = (_b = (_a = seenNodesPerType[type.name]) === null || _a === void 0 ? void 0 : _a.has) === null || _b === void 0 ? void 0 : _b.call(_a, resolvedNode);
            let visitedBySome = false;
            const anyEnterVisitors = normalizedVisitors.any.enter;
            const currentEnterVisitors = anyEnterVisitors.concat(((_c = normalizedVisitors[type.name]) === null || _c === void 0 ? void 0 : _c.enter) || []);
            const activatedContexts = [];
            for (const { context, visit, skip, ruleId, severity } of currentEnterVisitors) {
                if (context.isSkippedLevel) {
                    if (context.parent.activatedOn &&
                        !context.parent.activatedOn.value.nextLevelTypeActivated &&
                        !context.seen.has(node)) {
                        // TODO: test for walk through duplicated $ref-ed node
                        context.seen.add(node);
                        visitedBySome = true;
                        activatedContexts.push(context);
                    }
                }
                else {
                    if ((context.parent && // if nested
                        context.parent.activatedOn &&
                        ((_d = context.activatedOn) === null || _d === void 0 ? void 0 : _d.value.withParentNode) !== context.parent.activatedOn.value.node &&
                        // do not enter if visited by parent children (it works thanks because deeper visitors are sorted before)
                        ((_e = context.parent.activatedOn.value.nextLevelTypeActivated) === null || _e === void 0 ? void 0 : _e.value) !== type) ||
                        (!context.parent && !isNodeSeen) // if top-level visit each node just once
                    ) {
                        activatedContexts.push(context);
                        const activatedOn = {
                            node: resolvedNode,
                            location: resolvedLocation,
                            nextLevelTypeActivated: null,
                            withParentNode: (_g = (_f = context.parent) === null || _f === void 0 ? void 0 : _f.activatedOn) === null || _g === void 0 ? void 0 : _g.value.node,
                            skipped: (_k = (((_j = (_h = context.parent) === null || _h === void 0 ? void 0 : _h.activatedOn) === null || _j === void 0 ? void 0 : _j.value.skipped) || (skip === null || skip === void 0 ? void 0 : skip(resolvedNode, key)))) !== null && _k !== void 0 ? _k : false,
                        };
                        context.activatedOn = utils_1.pushStack(context.activatedOn, activatedOn);
                        let ctx = context.parent;
                        while (ctx) {
                            ctx.activatedOn.value.nextLevelTypeActivated = utils_1.pushStack(ctx.activatedOn.value.nextLevelTypeActivated, type);
                            ctx = ctx.parent;
                        }
                        if (!activatedOn.skipped) {
                            visitedBySome = true;
                            enteredContexts.add(context);
                            const ignoreNextVisitorsOnNode = visitWithContext(visit, resolvedNode, context, ruleId, severity);
                            if (ignoreNextVisitorsOnNode) {
                                break;
                            }
                        }
                    }
                }
            }
            if (visitedBySome || !isNodeSeen) {
                seenNodesPerType[type.name] = seenNodesPerType[type.name] || new Set();
                seenNodesPerType[type.name].add(resolvedNode);
                if (Array.isArray(resolvedNode)) {
                    const itemsType = type.items;
                    if (itemsType !== undefined) {
                        for (let i = 0; i < resolvedNode.length; i++) {
                            walkNode(resolvedNode[i], itemsType, resolvedLocation.child([i]), resolvedNode, i);
                        }
                    }
                }
                else if (typeof resolvedNode === 'object' && resolvedNode !== null) {
                    // visit in order from type-tree first
                    const props = Object.keys(type.properties);
                    if (type.additionalProperties) {
                        props.push(...Object.keys(resolvedNode).filter((k) => !props.includes(k)));
                    }
                    if (ref_utils_1.isRef(node)) {
                        props.push(...Object.keys(node).filter((k) => k !== '$ref' && !props.includes(k))); // properties on the same level as $ref
                    }
                    for (const propName of props) {
                        let value = resolvedNode[propName];
                        let loc = resolvedLocation;
                        if (value === undefined) {
                            value = node[propName];
                            loc = location; // properties on the same level as $ref should resolve against original location, not target
                        }
                        let propType = type.properties[propName];
                        if (propType === undefined)
                            propType = type.additionalProperties;
                        if (typeof propType === 'function')
                            propType = propType(value, propName);
                        if (!types_1.isNamedType(propType) && (propType === null || propType === void 0 ? void 0 : propType.directResolveAs)) {
                            propType = propType.directResolveAs;
                            value = { $ref: value };
                        }
                        if (propType && propType.name === undefined && propType.resolvable !== false) {
                            propType = { name: 'scalar', properties: {} };
                        }
                        if (!types_1.isNamedType(propType) || (propType.name === 'scalar' && !ref_utils_1.isRef(value))) {
                            continue;
                        }
                        walkNode(value, propType, loc.child([propName]), resolvedNode, propName);
                    }
                }
            }
            const anyLeaveVisitors = normalizedVisitors.any.leave;
            const currentLeaveVisitors = (((_l = normalizedVisitors[type.name]) === null || _l === void 0 ? void 0 : _l.leave) || []).concat(anyLeaveVisitors);
            for (const context of activatedContexts.reverse()) {
                if (context.isSkippedLevel) {
                    context.seen.delete(resolvedNode);
                }
                else {
                    context.activatedOn = utils_1.popStack(context.activatedOn);
                    if (context.parent) {
                        let ctx = context.parent;
                        while (ctx) {
                            ctx.activatedOn.value.nextLevelTypeActivated = utils_1.popStack(ctx.activatedOn.value.nextLevelTypeActivated);
                            ctx = ctx.parent;
                        }
                    }
                }
            }
            for (const { context, visit, ruleId, severity } of currentLeaveVisitors) {
                if (!context.isSkippedLevel && enteredContexts.has(context)) {
                    visitWithContext(visit, resolvedNode, context, ruleId, severity);
                }
            }
        }
        currentLocation = location;
        if (ref_utils_1.isRef(node)) {
            const refLeaveVisitors = normalizedVisitors.ref.leave;
            for (const { visit: visitor, ruleId, severity, context } of refLeaveVisitors) {
                if (enteredContexts.has(context)) {
                    const report = reportFn.bind(undefined, ruleId, severity);
                    visitor(node, {
                        report,
                        resolve,
                        location,
                        type,
                        parent,
                        key,
                        parentLocations: {},
                        oasVersion: ctx.oasVersion,
                    }, { node: resolvedNode, location: resolvedLocation, error });
                }
            }
        }
        // returns true ignores all the next visitors on the specific node
        function visitWithContext(visit, node, context, ruleId, severity) {
            const report = reportFn.bind(undefined, ruleId, severity);
            let ignoreNextVisitorsOnNode = false;
            visit(node, {
                report,
                resolve,
                location: currentLocation,
                type,
                parent,
                key,
                parentLocations: collectParentsLocations(context),
                oasVersion: ctx.oasVersion,
                ignoreNextVisitorsOnNode: () => {
                    ignoreNextVisitorsOnNode = true;
                },
            }, collectParents(context), context);
            return ignoreNextVisitorsOnNode;
        }
        function resolve(ref, from = currentLocation.source.absoluteRef) {
            if (!ref_utils_1.isRef(ref))
                return { location, node: ref };
            const refId = from + '::' + ref.$ref;
            const resolvedRef = resolvedRefMap.get(refId);
            if (!resolvedRef) {
                return {
                    location: undefined,
                    node: undefined,
                };
            }
            const { resolved, node, document, nodePointer, error } = resolvedRef;
            const newLocation = resolved
                ? new ref_utils_1.Location(document.source, nodePointer)
                : error instanceof resolve_1.YamlParseError
                    ? new ref_utils_1.Location(error.source, '')
                    : undefined;
            return { location: newLocation, node, error };
        }
        function reportFn(ruleId, severity, opts) {
            const loc = opts.location
                ? Array.isArray(opts.location)
                    ? opts.location
                    : [opts.location]
                : [Object.assign(Object.assign({}, currentLocation), { reportOnKey: false })];
            ctx.problems.push(Object.assign(Object.assign({ ruleId, severity: opts.forceSeverity || severity }, opts), { suggest: opts.suggest || [], location: loc.map((loc) => {
                    return Object.assign(Object.assign(Object.assign({}, currentLocation), { reportOnKey: false }), loc);
                }) }));
        }
    }
}
exports.walkDocument = walkDocument;
