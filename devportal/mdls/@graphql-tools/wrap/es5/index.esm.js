import { __assign, __spreadArray, __read, __extends } from 'tslib';
import { GraphQLObjectType, GraphQLInterfaceType, GraphQLUnionType, isSpecifiedScalarType, isScalarType, visit, Kind, TypeInfo, visitWithTypeInfo, isObjectType, isInterfaceType, typeFromAST, isLeafType, valueFromAST, getNullableType, BREAK, buildSchema, parse, getIntrospectionQuery, buildClientSchema } from 'graphql';
import { getResponseKeyFromInfo, mapSchema, MapperKind, renameType, visitData, transformInputValue, visitResult, updateArgument, relocatedError, getArgumentValues, valueMatchesCriteria, getDirectives, pruneSchema, selectObjectFields, appendObjectFields, modifyObjectFields, removeObjectFields } from '@graphql-tools/utils/es5';
import { applySchemaTransforms, delegateToSchema, isExternalObject, getUnpathedErrors, getSubschema, resolveExternalValue, defaultMergedResolver } from '@graphql-tools/delegate/es5';
import { ValueOrPromise } from 'value-or-promise';

function generateProxyingResolvers(subschemaConfig) {
    var _a;
    var targetSchema = subschemaConfig.schema;
    var createProxyingResolver = (_a = subschemaConfig.createProxyingResolver) !== null && _a !== void 0 ? _a : defaultCreateProxyingResolver;
    var transformedSchema = applySchemaTransforms(targetSchema, subschemaConfig);
    var operationTypes = {
        query: targetSchema.getQueryType(),
        mutation: targetSchema.getMutationType(),
        subscription: targetSchema.getSubscriptionType(),
    };
    var resolvers = {};
    Object.keys(operationTypes).forEach(function (operation) {
        var rootType = operationTypes[operation];
        if (rootType != null) {
            var typeName_1 = rootType.name;
            var fields = rootType.getFields();
            resolvers[typeName_1] = {};
            Object.keys(fields).forEach(function (fieldName) {
                var proxyingResolver = createProxyingResolver({
                    subschemaConfig: subschemaConfig,
                    transformedSchema: transformedSchema,
                    operation: operation,
                    fieldName: fieldName,
                });
                var finalResolver = createPossiblyNestedProxyingResolver(subschemaConfig, proxyingResolver);
                if (operation === 'subscription') {
                    resolvers[typeName_1][fieldName] = {
                        subscribe: finalResolver,
                        resolve: function (payload, _, __, _a) {
                            var targetFieldName = _a.fieldName;
                            return payload[targetFieldName];
                        },
                    };
                }
                else {
                    resolvers[typeName_1][fieldName] = {
                        resolve: finalResolver,
                    };
                }
            });
        }
    });
    return resolvers;
}
function createPossiblyNestedProxyingResolver(subschemaConfig, proxyingResolver) {
    return function (parent, args, context, info) {
        if (parent != null) {
            var responseKey = getResponseKeyFromInfo(info);
            // Check to see if the parent contains a proxied result
            if (isExternalObject(parent)) {
                var unpathedErrors = getUnpathedErrors(parent);
                var subschema = getSubschema(parent, responseKey);
                // If there is a proxied result from this subschema, return it
                // This can happen even for a root field when the root type ia
                // also nested as a field within a different type.
                if (subschemaConfig === subschema && parent[responseKey] !== undefined) {
                    return resolveExternalValue(parent[responseKey], unpathedErrors, subschema, context, info);
                }
            }
        }
        return proxyingResolver(parent, args, context, info);
    };
}
function defaultCreateProxyingResolver(_a) {
    var subschemaConfig = _a.subschemaConfig, operation = _a.operation, transformedSchema = _a.transformedSchema;
    return function (_parent, _args, context, info) {
        return delegateToSchema({
            schema: subschemaConfig,
            operation: operation,
            context: context,
            info: info,
            transformedSchema: transformedSchema,
        });
    };
}

function wrapSchema(subschemaConfig) {
    var targetSchema = subschemaConfig.schema;
    var proxyingResolvers = generateProxyingResolvers(subschemaConfig);
    var schema = createWrappingSchema(targetSchema, proxyingResolvers);
    var transformedSchema = applySchemaTransforms(schema, subschemaConfig);
    return applySchemaTransforms(schema, subschemaConfig, transformedSchema);
}
function createWrappingSchema(schema, proxyingResolvers) {
    var _a;
    return mapSchema(schema, (_a = {},
        _a[MapperKind.ROOT_OBJECT] = function (type) {
            var config = type.toConfig();
            var fieldConfigMap = config.fields;
            Object.keys(fieldConfigMap).forEach(function (fieldName) {
                fieldConfigMap[fieldName] = __assign(__assign({}, fieldConfigMap[fieldName]), proxyingResolvers[type.name][fieldName]);
            });
            return new GraphQLObjectType(config);
        },
        _a[MapperKind.OBJECT_TYPE] = function (type) {
            var config = type.toConfig();
            config.isTypeOf = undefined;
            Object.keys(config.fields).forEach(function (fieldName) {
                config.fields[fieldName].resolve = defaultMergedResolver;
                config.fields[fieldName].subscribe = null;
            });
            return new GraphQLObjectType(config);
        },
        _a[MapperKind.INTERFACE_TYPE] = function (type) {
            var config = type.toConfig();
            delete config.resolveType;
            return new GraphQLInterfaceType(config);
        },
        _a[MapperKind.UNION_TYPE] = function (type) {
            var config = type.toConfig();
            delete config.resolveType;
            return new GraphQLUnionType(config);
        },
        _a));
}

var RenameTypes = /** @class */ (function () {
    function RenameTypes(renamer, options) {
        this.renamer = renamer;
        this.map = Object.create(null);
        this.reverseMap = Object.create(null);
        var _a = options != null ? options : {}, _b = _a.renameBuiltins, renameBuiltins = _b === void 0 ? false : _b, _c = _a.renameScalars, renameScalars = _c === void 0 ? true : _c;
        this.renameBuiltins = renameBuiltins;
        this.renameScalars = renameScalars;
    }
    RenameTypes.prototype.transformSchema = function (originalWrappingSchema, _subschemaConfig, _transformedSchema) {
        var _a;
        var _this = this;
        return mapSchema(originalWrappingSchema, (_a = {},
            _a[MapperKind.TYPE] = function (type) {
                if (isSpecifiedScalarType(type) && !_this.renameBuiltins) {
                    return undefined;
                }
                if (isScalarType(type) && !_this.renameScalars) {
                    return undefined;
                }
                var oldName = type.name;
                var newName = _this.renamer(oldName);
                if (newName !== undefined && newName !== oldName) {
                    _this.map[oldName] = newName;
                    _this.reverseMap[newName] = oldName;
                    return renameType(type, newName);
                }
            },
            _a[MapperKind.ROOT_OBJECT] = function () {
                return undefined;
            },
            _a));
    };
    RenameTypes.prototype.transformRequest = function (originalRequest, _delegationContext, _transformationContext) {
        var _a;
        var _this = this;
        var document = visit(originalRequest.document, (_a = {},
            _a[Kind.NAMED_TYPE] = function (node) {
                var name = node.name.value;
                if (name in _this.reverseMap) {
                    return __assign(__assign({}, node), { name: {
                            kind: Kind.NAME,
                            value: _this.reverseMap[name],
                        } });
                }
            },
            _a));
        return __assign(__assign({}, originalRequest), { document: document });
    };
    RenameTypes.prototype.transformResult = function (originalResult, _delegationContext, _transformationContext) {
        var _this = this;
        return __assign(__assign({}, originalResult), { data: visitData(originalResult.data, function (object) {
                var typeName = object === null || object === void 0 ? void 0 : object.__typename;
                if (typeName != null && typeName in _this.map) {
                    object.__typename = _this.map[typeName];
                }
                return object;
            }) });
    };
    return RenameTypes;
}());

var FilterTypes = /** @class */ (function () {
    function FilterTypes(filter) {
        this.filter = filter;
    }
    FilterTypes.prototype.transformSchema = function (originalWrappingSchema, _subschemaConfig, _transformedSchema) {
        var _a;
        var _this = this;
        return mapSchema(originalWrappingSchema, (_a = {},
            _a[MapperKind.TYPE] = function (type) {
                if (_this.filter(type)) {
                    return undefined;
                }
                return null;
            },
            _a));
    };
    return FilterTypes;
}());

var RenameRootTypes = /** @class */ (function () {
    function RenameRootTypes(renamer) {
        this.renamer = renamer;
        this.map = Object.create(null);
        this.reverseMap = Object.create(null);
    }
    RenameRootTypes.prototype.transformSchema = function (originalWrappingSchema, _subschemaConfig, _transformedSchema) {
        var _a;
        var _this = this;
        return mapSchema(originalWrappingSchema, (_a = {},
            _a[MapperKind.ROOT_OBJECT] = function (type) {
                var oldName = type.name;
                var newName = _this.renamer(oldName);
                if (newName !== undefined && newName !== oldName) {
                    _this.map[oldName] = newName;
                    _this.reverseMap[newName] = oldName;
                    return renameType(type, newName);
                }
            },
            _a));
    };
    RenameRootTypes.prototype.transformRequest = function (originalRequest, _delegationContext, _transformationContext) {
        var _a;
        var _this = this;
        var document = visit(originalRequest.document, (_a = {},
            _a[Kind.NAMED_TYPE] = function (node) {
                var name = node.name.value;
                if (name in _this.reverseMap) {
                    return __assign(__assign({}, node), { name: {
                            kind: Kind.NAME,
                            value: _this.reverseMap[name],
                        } });
                }
            },
            _a));
        return __assign(__assign({}, originalRequest), { document: document });
    };
    RenameRootTypes.prototype.transformResult = function (originalResult, _delegationContext, _transformationContext) {
        var _this = this;
        return __assign(__assign({}, originalResult), { data: visitData(originalResult.data, function (object) {
                var typeName = object === null || object === void 0 ? void 0 : object.__typename;
                if (typeName != null && typeName in _this.map) {
                    object.__typename = _this.map[typeName];
                }
                return object;
            }) });
    };
    return RenameRootTypes;
}());

var TransformCompositeFields = /** @class */ (function () {
    function TransformCompositeFields(fieldTransformer, fieldNodeTransformer, dataTransformer, errorsTransformer) {
        this.fieldTransformer = fieldTransformer;
        this.fieldNodeTransformer = fieldNodeTransformer;
        this.dataTransformer = dataTransformer;
        this.errorsTransformer = errorsTransformer;
        this.mapping = {};
    }
    TransformCompositeFields.prototype.transformSchema = function (originalWrappingSchema, _subschemaConfig, _transformedSchema) {
        var _a;
        var _this = this;
        var _b;
        this.transformedSchema = mapSchema(originalWrappingSchema, (_a = {},
            _a[MapperKind.COMPOSITE_FIELD] = function (fieldConfig, fieldName, typeName) {
                var transformedField = _this.fieldTransformer(typeName, fieldName, fieldConfig);
                if (Array.isArray(transformedField)) {
                    var newFieldName = transformedField[0];
                    if (newFieldName !== fieldName) {
                        if (!(typeName in _this.mapping)) {
                            _this.mapping[typeName] = {};
                        }
                        _this.mapping[typeName][newFieldName] = fieldName;
                    }
                }
                return transformedField;
            },
            _a));
        this.typeInfo = new TypeInfo(this.transformedSchema);
        this.subscriptionTypeName = (_b = originalWrappingSchema.getSubscriptionType()) === null || _b === void 0 ? void 0 : _b.name;
        return this.transformedSchema;
    };
    TransformCompositeFields.prototype.transformRequest = function (originalRequest, _delegationContext, transformationContext) {
        var document = originalRequest.document;
        var fragments = Object.create(null);
        document.definitions.forEach(function (def) {
            if (def.kind === Kind.FRAGMENT_DEFINITION) {
                fragments[def.name.value] = def;
            }
        });
        return __assign(__assign({}, originalRequest), { document: this.transformDocument(document, fragments, transformationContext) });
    };
    TransformCompositeFields.prototype.transformResult = function (result, _delegationContext, transformationContext) {
        var _this = this;
        if (this.dataTransformer != null) {
            result.data = visitData(result.data, function (value) { return _this.dataTransformer(value, transformationContext); });
        }
        if (this.errorsTransformer != null) {
            result.errors = this.errorsTransformer(result.errors, transformationContext);
        }
        return result;
    };
    TransformCompositeFields.prototype.transformDocument = function (document, fragments, transformationContext) {
        var _a;
        var _this = this;
        return visit(document, visitWithTypeInfo(this.typeInfo, {
            leave: (_a = {},
                _a[Kind.SELECTION_SET] = function (node) {
                    return _this.transformSelectionSet(node, _this.typeInfo, fragments, transformationContext);
                },
                _a),
        }));
    };
    TransformCompositeFields.prototype.transformSelectionSet = function (node, typeInfo, fragments, transformationContext) {
        var _this = this;
        var parentType = typeInfo.getParentType();
        if (parentType == null) {
            return undefined;
        }
        var parentTypeName = parentType.name;
        var newSelections = [];
        node.selections.forEach(function (selection) {
            var _a, _b;
            if (selection.kind !== Kind.FIELD) {
                newSelections.push(selection);
                return;
            }
            var newName = selection.name.value;
            // See https://github.com/ardatan/graphql-tools/issues/2282
            if ((_this.dataTransformer != null || _this.errorsTransformer != null) &&
                (_this.subscriptionTypeName == null || parentTypeName !== _this.subscriptionTypeName)) {
                newSelections.push({
                    kind: Kind.FIELD,
                    name: {
                        kind: Kind.NAME,
                        value: '__typename',
                    },
                });
            }
            var transformedSelection;
            if (_this.fieldNodeTransformer == null) {
                transformedSelection = selection;
            }
            else {
                transformedSelection = _this.fieldNodeTransformer(parentTypeName, newName, selection, fragments, transformationContext);
                transformedSelection = transformedSelection === undefined ? selection : transformedSelection;
            }
            if (transformedSelection == null) {
                return;
            }
            else if (Array.isArray(transformedSelection)) {
                newSelections = newSelections.concat(transformedSelection);
                return;
            }
            else if (transformedSelection.kind !== Kind.FIELD) {
                newSelections.push(transformedSelection);
                return;
            }
            var typeMapping = _this.mapping[parentTypeName];
            if (typeMapping == null) {
                newSelections.push(transformedSelection);
                return;
            }
            var oldName = _this.mapping[parentTypeName][newName];
            if (oldName == null) {
                newSelections.push(transformedSelection);
                return;
            }
            newSelections.push(__assign(__assign({}, transformedSelection), { name: {
                    kind: Kind.NAME,
                    value: oldName,
                }, alias: {
                    kind: Kind.NAME,
                    value: (_b = (_a = transformedSelection.alias) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : newName,
                } }));
        });
        return __assign(__assign({}, node), { selections: newSelections });
    };
    return TransformCompositeFields;
}());

var TransformObjectFields = /** @class */ (function () {
    function TransformObjectFields(objectFieldTransformer, fieldNodeTransformer) {
        this.objectFieldTransformer = objectFieldTransformer;
        this.fieldNodeTransformer = fieldNodeTransformer;
    }
    TransformObjectFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        var _this = this;
        var compositeToObjectFieldTransformer = function (typeName, fieldName, fieldConfig) {
            if (isObjectType(originalWrappingSchema.getType(typeName))) {
                return _this.objectFieldTransformer(typeName, fieldName, fieldConfig);
            }
            return undefined;
        };
        this.transformer = new TransformCompositeFields(compositeToObjectFieldTransformer, this.fieldNodeTransformer);
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    TransformObjectFields.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    TransformObjectFields.prototype.transformResult = function (originalResult, delegationContext, transformationContext) {
        return this.transformer.transformResult(originalResult, delegationContext, transformationContext);
    };
    return TransformObjectFields;
}());

var TransformRootFields = /** @class */ (function () {
    function TransformRootFields(rootFieldTransformer, fieldNodeTransformer) {
        this.rootFieldTransformer = rootFieldTransformer;
        this.fieldNodeTransformer = fieldNodeTransformer;
    }
    TransformRootFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        var _this = this;
        var _a, _b, _c;
        var queryTypeName = (_a = originalWrappingSchema.getQueryType()) === null || _a === void 0 ? void 0 : _a.name;
        var mutationTypeName = (_b = originalWrappingSchema.getMutationType()) === null || _b === void 0 ? void 0 : _b.name;
        var subscriptionTypeName = (_c = originalWrappingSchema.getSubscriptionType()) === null || _c === void 0 ? void 0 : _c.name;
        var rootToObjectFieldTransformer = function (typeName, fieldName, fieldConfig) {
            if (typeName === queryTypeName) {
                return _this.rootFieldTransformer('Query', fieldName, fieldConfig);
            }
            if (typeName === mutationTypeName) {
                return _this.rootFieldTransformer('Mutation', fieldName, fieldConfig);
            }
            if (typeName === subscriptionTypeName) {
                return _this.rootFieldTransformer('Subscription', fieldName, fieldConfig);
            }
            return undefined;
        };
        this.transformer = new TransformObjectFields(rootToObjectFieldTransformer, this.fieldNodeTransformer);
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    TransformRootFields.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    TransformRootFields.prototype.transformResult = function (originalResult, delegationContext, transformationContext) {
        return this.transformer.transformResult(originalResult, delegationContext, transformationContext);
    };
    return TransformRootFields;
}());

var RenameRootFields = /** @class */ (function () {
    function RenameRootFields(renamer) {
        this.transformer = new TransformRootFields(function (operation, fieldName, fieldConfig) { return [renamer(operation, fieldName, fieldConfig), fieldConfig]; });
    }
    RenameRootFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    RenameRootFields.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    return RenameRootFields;
}());

var FilterRootFields = /** @class */ (function () {
    function FilterRootFields(filter) {
        this.transformer = new TransformRootFields(function (operation, fieldName, fieldConfig) {
            if (filter(operation, fieldName, fieldConfig)) {
                return undefined;
            }
            return null;
        });
    }
    FilterRootFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    return FilterRootFields;
}());

var RenameObjectFields = /** @class */ (function () {
    function RenameObjectFields(renamer) {
        this.transformer = new TransformObjectFields(function (typeName, fieldName, fieldConfig) { return [
            renamer(typeName, fieldName, fieldConfig),
            fieldConfig,
        ]; });
    }
    RenameObjectFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    RenameObjectFields.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    return RenameObjectFields;
}());

var FilterObjectFields = /** @class */ (function () {
    function FilterObjectFields(filter) {
        this.transformer = new TransformObjectFields(function (typeName, fieldName, fieldConfig) {
            return filter(typeName, fieldName, fieldConfig) ? undefined : null;
        });
    }
    FilterObjectFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    return FilterObjectFields;
}());

var TransformInterfaceFields = /** @class */ (function () {
    function TransformInterfaceFields(interfaceFieldTransformer, fieldNodeTransformer) {
        this.interfaceFieldTransformer = interfaceFieldTransformer;
        this.fieldNodeTransformer = fieldNodeTransformer;
    }
    TransformInterfaceFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        var _this = this;
        var compositeToObjectFieldTransformer = function (typeName, fieldName, fieldConfig) {
            if (isInterfaceType(originalWrappingSchema.getType(typeName))) {
                return _this.interfaceFieldTransformer(typeName, fieldName, fieldConfig);
            }
            return undefined;
        };
        this.transformer = new TransformCompositeFields(compositeToObjectFieldTransformer, this.fieldNodeTransformer);
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    TransformInterfaceFields.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    TransformInterfaceFields.prototype.transformResult = function (originalResult, delegationContext, transformationContext) {
        return this.transformer.transformResult(originalResult, delegationContext, transformationContext);
    };
    return TransformInterfaceFields;
}());

var RenameInterfaceFields = /** @class */ (function () {
    function RenameInterfaceFields(renamer) {
        this.transformer = new TransformInterfaceFields(function (typeName, fieldName, fieldConfig) { return [
            renamer(typeName, fieldName, fieldConfig),
            fieldConfig,
        ]; });
    }
    RenameInterfaceFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    RenameInterfaceFields.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    return RenameInterfaceFields;
}());

var FilterInterfaceFields = /** @class */ (function () {
    function FilterInterfaceFields(filter) {
        this.transformer = new TransformInterfaceFields(function (typeName, fieldName, fieldConfig) {
            return filter(typeName, fieldName, fieldConfig) ? undefined : null;
        });
    }
    FilterInterfaceFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    return FilterInterfaceFields;
}());

var TransformInputObjectFields = /** @class */ (function () {
    function TransformInputObjectFields(inputFieldTransformer, inputFieldNodeTransformer, inputObjectNodeTransformer) {
        this.inputFieldTransformer = inputFieldTransformer;
        this.inputFieldNodeTransformer = inputFieldNodeTransformer;
        this.inputObjectNodeTransformer = inputObjectNodeTransformer;
        this.mapping = {};
    }
    TransformInputObjectFields.prototype.transformSchema = function (originalWrappingSchema, _subschemaConfig, _transformedSchema) {
        var _a;
        var _this = this;
        this.transformedSchema = mapSchema(originalWrappingSchema, (_a = {},
            _a[MapperKind.INPUT_OBJECT_FIELD] = function (inputFieldConfig, fieldName, typeName) {
                var transformedInputField = _this.inputFieldTransformer(typeName, fieldName, inputFieldConfig);
                if (Array.isArray(transformedInputField)) {
                    var newFieldName = transformedInputField[0];
                    if (newFieldName !== fieldName) {
                        if (!(typeName in _this.mapping)) {
                            _this.mapping[typeName] = {};
                        }
                        _this.mapping[typeName][newFieldName] = fieldName;
                    }
                }
                return transformedInputField;
            },
            _a));
        return this.transformedSchema;
    };
    TransformInputObjectFields.prototype.transformRequest = function (originalRequest, delegationContext, _transformationContext) {
        var _this = this;
        var variableValues = originalRequest.variables;
        var fragments = Object.create(null);
        var operations = [];
        originalRequest.document.definitions.forEach(function (def) {
            if (def.kind === Kind.OPERATION_DEFINITION) {
                operations.push(def);
            }
            else {
                fragments[def.name.value] = def;
            }
        });
        operations.forEach(function (def) {
            var variableDefs = def.variableDefinitions;
            if (variableDefs != null) {
                variableDefs.forEach(function (variableDef) {
                    var varName = variableDef.variable.name.value;
                    // requirement for 'as NamedTypeNode' appears to be a bug within types, as function should take any TypeNode
                    var varType = typeFromAST(delegationContext.transformedSchema, variableDef.type);
                    variableValues[varName] = transformInputValue(varType, variableValues[varName], undefined, function (type, originalValue) {
                        var newValue = Object.create(null);
                        var fields = type.getFields();
                        Object.keys(originalValue).forEach(function (key) {
                            var _a;
                            var field = fields[key];
                            if (field != null) {
                                var newFieldName = (_a = _this.mapping[type.name]) === null || _a === void 0 ? void 0 : _a[field.name];
                                if (newFieldName != null) {
                                    newValue[newFieldName] = originalValue[field.name];
                                }
                                else {
                                    newValue[field.name] = originalValue[field.name];
                                }
                            }
                        });
                        return newValue;
                    });
                });
            }
        });
        originalRequest.document.definitions
            .filter(function (def) { return def.kind === Kind.FRAGMENT_DEFINITION; })
            .forEach(function (def) {
            fragments[def.name.value] = def;
        });
        var document = this.transformDocument(originalRequest.document, this.mapping, this.inputFieldNodeTransformer, this.inputObjectNodeTransformer, originalRequest, delegationContext);
        return __assign(__assign({}, originalRequest), { document: document, variables: variableValues });
    };
    TransformInputObjectFields.prototype.transformDocument = function (document, mapping, inputFieldNodeTransformer, inputObjectNodeTransformer, request, delegationContext) {
        var _a;
        var typeInfo = new TypeInfo(this.transformedSchema);
        var newDocument = visit(document, visitWithTypeInfo(typeInfo, {
            leave: (_a = {},
                _a[Kind.OBJECT] = function (node) {
                    var parentType = typeInfo.getInputType();
                    if (parentType != null) {
                        var parentTypeName_1 = parentType.name;
                        var newInputFields_1 = [];
                        node.fields.forEach(function (inputField) {
                            var newName = inputField.name.value;
                            var transformedInputField = inputFieldNodeTransformer != null
                                ? inputFieldNodeTransformer(parentTypeName_1, newName, inputField, request, delegationContext)
                                : inputField;
                            if (Array.isArray(transformedInputField)) {
                                transformedInputField.forEach(function (individualTransformedInputField) {
                                    var typeMapping = mapping[parentTypeName_1];
                                    if (typeMapping == null) {
                                        newInputFields_1.push(individualTransformedInputField);
                                        return;
                                    }
                                    var oldName = typeMapping[newName];
                                    if (oldName == null) {
                                        newInputFields_1.push(individualTransformedInputField);
                                        return;
                                    }
                                    newInputFields_1.push(__assign(__assign({}, individualTransformedInputField), { name: __assign(__assign({}, individualTransformedInputField.name), { value: oldName }) }));
                                });
                                return;
                            }
                            var typeMapping = mapping[parentTypeName_1];
                            if (typeMapping == null) {
                                newInputFields_1.push(transformedInputField);
                                return;
                            }
                            var oldName = typeMapping[newName];
                            if (oldName == null) {
                                newInputFields_1.push(transformedInputField);
                                return;
                            }
                            newInputFields_1.push(__assign(__assign({}, transformedInputField), { name: __assign(__assign({}, transformedInputField.name), { value: oldName }) }));
                        });
                        var newNode = __assign(__assign({}, node), { fields: newInputFields_1 });
                        return inputObjectNodeTransformer != null
                            ? inputObjectNodeTransformer(parentTypeName_1, newNode, request, delegationContext)
                            : newNode;
                    }
                },
                _a),
        }));
        return newDocument;
    };
    return TransformInputObjectFields;
}());

var RenameInputObjectFields = /** @class */ (function () {
    function RenameInputObjectFields(renamer) {
        var _this = this;
        this.renamer = renamer;
        this.transformer = new TransformInputObjectFields(function (typeName, inputFieldName, inputFieldConfig) {
            var newName = renamer(typeName, inputFieldName, inputFieldConfig);
            if (newName !== undefined && newName !== inputFieldName) {
                return [renamer(typeName, inputFieldName, inputFieldConfig), inputFieldConfig];
            }
        }, function (typeName, inputFieldName, inputFieldNode) {
            if (!(typeName in _this.reverseMap)) {
                return inputFieldNode;
            }
            var inputFieldNameMap = _this.reverseMap[typeName];
            if (!(inputFieldName in inputFieldNameMap)) {
                return inputFieldNode;
            }
            return __assign(__assign({}, inputFieldNode), { name: __assign(__assign({}, inputFieldNode.name), { value: inputFieldNameMap[inputFieldName] }) });
        });
        this.reverseMap = Object.create(null);
    }
    RenameInputObjectFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        var _a;
        var _this = this;
        mapSchema(originalWrappingSchema, (_a = {},
            _a[MapperKind.INPUT_OBJECT_FIELD] = function (inputFieldConfig, fieldName, typeName) {
                var newName = _this.renamer(typeName, fieldName, inputFieldConfig);
                if (newName !== undefined && newName !== fieldName) {
                    if (_this.reverseMap[typeName] == null) {
                        _this.reverseMap[typeName] = Object.create(null);
                    }
                    _this.reverseMap[typeName][newName] = fieldName;
                }
                return undefined;
            },
            _a[MapperKind.ROOT_OBJECT] = function () {
                return undefined;
            },
            _a));
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    RenameInputObjectFields.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    return RenameInputObjectFields;
}());

var FilterInputObjectFields = /** @class */ (function () {
    function FilterInputObjectFields(filter, inputObjectNodeTransformer) {
        this.transformer = new TransformInputObjectFields(function (typeName, fieldName, inputFieldConfig) {
            return filter(typeName, fieldName, inputFieldConfig) ? undefined : null;
        }, undefined, inputObjectNodeTransformer);
    }
    FilterInputObjectFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    FilterInputObjectFields.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    return FilterInputObjectFields;
}());

var MapLeafValues = /** @class */ (function () {
    function MapLeafValues(inputValueTransformer, outputValueTransformer) {
        this.inputValueTransformer = inputValueTransformer;
        this.outputValueTransformer = outputValueTransformer;
        this.resultVisitorMap = Object.create(null);
    }
    MapLeafValues.prototype.transformSchema = function (originalWrappingSchema, _subschemaConfig, _transformedSchema) {
        var _this = this;
        this.originalWrappingSchema = originalWrappingSchema;
        var typeMap = originalWrappingSchema.getTypeMap();
        Object.keys(typeMap).forEach(function (typeName) {
            var type = typeMap[typeName];
            if (!typeName.startsWith('__')) {
                if (isLeafType(type)) {
                    _this.resultVisitorMap[typeName] = function (value) { return _this.outputValueTransformer(typeName, value); };
                }
            }
        });
        this.typeInfo = new TypeInfo(originalWrappingSchema);
        return originalWrappingSchema;
    };
    MapLeafValues.prototype.transformRequest = function (originalRequest, _delegationContext, transformationContext) {
        var document = originalRequest.document;
        var variableValues = originalRequest.variables;
        var operations = document.definitions.filter(function (def) { return def.kind === Kind.OPERATION_DEFINITION; });
        var fragments = document.definitions.filter(function (def) { return def.kind === Kind.FRAGMENT_DEFINITION; });
        var newOperations = this.transformOperations(operations, variableValues);
        var transformedRequest = __assign(__assign({}, originalRequest), { document: __assign(__assign({}, document), { definitions: __spreadArray(__spreadArray([], __read(newOperations)), __read(fragments)) }), variables: variableValues });
        transformationContext.transformedRequest = transformedRequest;
        return transformedRequest;
    };
    MapLeafValues.prototype.transformResult = function (originalResult, _delegationContext, transformationContext) {
        return visitResult(originalResult, transformationContext.transformedRequest, this.originalWrappingSchema, this.resultVisitorMap);
    };
    MapLeafValues.prototype.transformOperations = function (operations, variableValues) {
        var _this = this;
        return operations.map(function (operation) {
            var _a;
            var variableDefinitionMap = operation.variableDefinitions.reduce(function (prev, def) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[def.variable.name.value] = def, _a)));
            }, {});
            var newOperation = visit(operation, visitWithTypeInfo(_this.typeInfo, (_a = {},
                _a[Kind.FIELD] = function (node) { return _this.transformFieldNode(node, variableDefinitionMap, variableValues); },
                _a)));
            return __assign(__assign({}, newOperation), { variableDefinitions: Object.keys(variableDefinitionMap).map(function (varName) { return variableDefinitionMap[varName]; }) });
        });
    };
    MapLeafValues.prototype.transformFieldNode = function (field, variableDefinitionMap, variableValues) {
        var _this = this;
        var targetField = this.typeInfo.getFieldDef();
        if (!targetField.name.startsWith('__')) {
            var argumentNodes = field.arguments;
            if (argumentNodes != null) {
                var argumentNodeMap_1 = argumentNodes.reduce(function (prev, argument) {
                    var _a;
                    return (__assign(__assign({}, prev), (_a = {}, _a[argument.name.value] = argument, _a)));
                }, Object.create(null));
                targetField.args.forEach(function (argument) {
                    var argName = argument.name;
                    var argType = argument.type;
                    var argumentNode = argumentNodeMap_1[argName];
                    var argValue = argumentNode === null || argumentNode === void 0 ? void 0 : argumentNode.value;
                    var value;
                    if (argValue != null) {
                        value = valueFromAST(argValue, argType, variableValues);
                    }
                    updateArgument(argName, argType, argumentNodeMap_1, variableDefinitionMap, variableValues, transformInputValue(argType, value, function (t, v) {
                        var newValue = _this.inputValueTransformer(t.name, v);
                        return newValue === undefined ? v : newValue;
                    }));
                });
                return __assign(__assign({}, field), { arguments: Object.keys(argumentNodeMap_1).map(function (argName) { return argumentNodeMap_1[argName]; }) });
            }
        }
    };
    return MapLeafValues;
}());

var TransformEnumValues = /** @class */ (function () {
    function TransformEnumValues(enumValueTransformer, inputValueTransformer, outputValueTransformer) {
        this.enumValueTransformer = enumValueTransformer;
        this.mapping = Object.create(null);
        this.reverseMapping = Object.create(null);
        this.transformer = new MapLeafValues(generateValueTransformer(inputValueTransformer, this.reverseMapping), generateValueTransformer(outputValueTransformer, this.mapping));
    }
    TransformEnumValues.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        var _a;
        var _this = this;
        var mappingSchema = this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
        this.transformedSchema = mapSchema(mappingSchema, (_a = {},
            _a[MapperKind.ENUM_VALUE] = function (valueConfig, typeName, _schema, externalValue) {
                return _this.transformEnumValue(typeName, externalValue, valueConfig);
            },
            _a));
        return this.transformedSchema;
    };
    TransformEnumValues.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    TransformEnumValues.prototype.transformResult = function (originalResult, delegationContext, transformationContext) {
        return this.transformer.transformResult(originalResult, delegationContext, transformationContext);
    };
    TransformEnumValues.prototype.transformEnumValue = function (typeName, externalValue, enumValueConfig) {
        var transformedEnumValue = this.enumValueTransformer(typeName, externalValue, enumValueConfig);
        if (Array.isArray(transformedEnumValue)) {
            var newExternalValue = transformedEnumValue[0];
            if (newExternalValue !== externalValue) {
                if (!(typeName in this.mapping)) {
                    this.mapping[typeName] = Object.create(null);
                    this.reverseMapping[typeName] = Object.create(null);
                }
                this.mapping[typeName][externalValue] = newExternalValue;
                this.reverseMapping[typeName][newExternalValue] = externalValue;
            }
        }
        return transformedEnumValue;
    };
    return TransformEnumValues;
}());
function mapEnumValues(typeName, value, mapping) {
    var _a;
    var newExternalValue = (_a = mapping[typeName]) === null || _a === void 0 ? void 0 : _a[value];
    return newExternalValue != null ? newExternalValue : value;
}
function generateValueTransformer(valueTransformer, mapping) {
    if (valueTransformer == null) {
        return function (typeName, value) { return mapEnumValues(typeName, value, mapping); };
    }
    else {
        return function (typeName, value) { return mapEnumValues(typeName, valueTransformer(typeName, value), mapping); };
    }
}

var TransformQuery = /** @class */ (function () {
    function TransformQuery(_a) {
        var path = _a.path, queryTransformer = _a.queryTransformer, _b = _a.resultTransformer, resultTransformer = _b === void 0 ? function (result) { return result; } : _b, _c = _a.errorPathTransformer, errorPathTransformer = _c === void 0 ? function (errorPath) { return [].concat(errorPath); } : _c, _d = _a.fragments, fragments = _d === void 0 ? {} : _d;
        this.path = path;
        this.queryTransformer = queryTransformer;
        this.resultTransformer = resultTransformer;
        this.errorPathTransformer = errorPathTransformer;
        this.fragments = fragments;
    }
    TransformQuery.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        var _a;
        var _this = this;
        var pathLength = this.path.length;
        var index = 0;
        var document = visit(originalRequest.document, (_a = {},
            _a[Kind.FIELD] = {
                enter: function (node) {
                    if (index === pathLength || node.name.value !== _this.path[index]) {
                        return false;
                    }
                    index++;
                    if (index === pathLength) {
                        var selectionSet = _this.queryTransformer(node.selectionSet, _this.fragments, delegationContext, transformationContext);
                        return __assign(__assign({}, node), { selectionSet: selectionSet });
                    }
                },
                leave: function () {
                    index--;
                },
            },
            _a));
        return __assign(__assign({}, originalRequest), { document: document });
    };
    TransformQuery.prototype.transformResult = function (originalResult, delegationContext, transformationContext) {
        var data = this.transformData(originalResult.data, delegationContext, transformationContext);
        var errors = originalResult.errors;
        return {
            data: data,
            errors: errors != null ? this.transformErrors(errors) : undefined,
        };
    };
    TransformQuery.prototype.transformData = function (data, delegationContext, transformationContext) {
        var leafIndex = this.path.length - 1;
        var index = 0;
        var newData = data;
        if (newData) {
            var next = this.path[index];
            while (index < leafIndex) {
                if (data[next]) {
                    newData = newData[next];
                }
                else {
                    break;
                }
                index++;
                next = this.path[index];
            }
            newData[next] = this.resultTransformer(newData[next], delegationContext, transformationContext);
        }
        return newData;
    };
    TransformQuery.prototype.transformErrors = function (errors) {
        var _this = this;
        return errors.map(function (error) {
            var path = error.path;
            var match = true;
            var index = 0;
            while (index < _this.path.length) {
                if (path[index] !== _this.path[index]) {
                    match = false;
                    break;
                }
                index++;
            }
            var newPath = match ? path.slice(0, index).concat(_this.errorPathTransformer(path.slice(index))) : path;
            return relocatedError(error, newPath);
        });
    };
    return TransformQuery;
}());

var FilterObjectFieldDirectives = /** @class */ (function () {
    function FilterObjectFieldDirectives(filter) {
        this.filter = filter;
    }
    FilterObjectFieldDirectives.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        var _this = this;
        var transformer = new TransformObjectFields(function (_typeName, _fieldName, fieldConfig) {
            var keepDirectives = fieldConfig.astNode.directives.filter(function (dir) {
                var directiveDef = originalWrappingSchema.getDirective(dir.name.value);
                var directiveValue = directiveDef ? getArgumentValues(directiveDef, dir) : undefined;
                return _this.filter(dir.name.value, directiveValue);
            });
            if (keepDirectives.length !== fieldConfig.astNode.directives.length) {
                fieldConfig = __assign(__assign({}, fieldConfig), { astNode: __assign(__assign({}, fieldConfig.astNode), { directives: keepDirectives }) });
                return fieldConfig;
            }
        });
        return transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    return FilterObjectFieldDirectives;
}());

var RemoveObjectFieldDirectives = /** @class */ (function () {
    function RemoveObjectFieldDirectives(directiveName, args) {
        if (args === void 0) { args = {}; }
        this.transformer = new FilterObjectFieldDirectives(function (dirName, dirValue) {
            return !(valueMatchesCriteria(dirName, directiveName) && valueMatchesCriteria(dirValue, args));
        });
    }
    RemoveObjectFieldDirectives.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    return RemoveObjectFieldDirectives;
}());

var RemoveObjectFieldsWithDirective = /** @class */ (function () {
    function RemoveObjectFieldsWithDirective(directiveName, args) {
        if (args === void 0) { args = {}; }
        this.directiveName = directiveName;
        this.args = args;
    }
    RemoveObjectFieldsWithDirective.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        var _this = this;
        var transformer = new FilterObjectFields(function (_typeName, _fieldName, fieldConfig) {
            var valueMap = getDirectives(originalWrappingSchema, fieldConfig);
            return !Object.keys(valueMap).some(function (directiveName) {
                return valueMatchesCriteria(directiveName, _this.directiveName) &&
                    ((Array.isArray(valueMap[directiveName]) &&
                        valueMap[directiveName].some(function (value) { return valueMatchesCriteria(value, _this.args); })) ||
                        valueMatchesCriteria(valueMap[directiveName], _this.args));
            });
        });
        return transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    return RemoveObjectFieldsWithDirective;
}());

var RemoveObjectFieldDeprecations = /** @class */ (function () {
    function RemoveObjectFieldDeprecations(reason) {
        var args = { reason: reason };
        this.removeDirectives = new FilterObjectFieldDirectives(function (dirName, dirValue) {
            return !(dirName === 'deprecated' && valueMatchesCriteria(dirValue, args));
        });
        this.removeDeprecations = new TransformObjectFields(function (_typeName, _fieldName, fieldConfig) {
            if (fieldConfig.deprecationReason && valueMatchesCriteria(fieldConfig.deprecationReason, reason)) {
                fieldConfig = __assign({}, fieldConfig);
                delete fieldConfig.deprecationReason;
            }
            return fieldConfig;
        });
    }
    RemoveObjectFieldDeprecations.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.removeDeprecations.transformSchema(this.removeDirectives.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema), subschemaConfig, transformedSchema);
    };
    return RemoveObjectFieldDeprecations;
}());

var RemoveObjectFieldsWithDeprecation = /** @class */ (function () {
    function RemoveObjectFieldsWithDeprecation(reason) {
        this.transformer = new FilterObjectFields(function (_typeName, _fieldName, fieldConfig) {
            if (fieldConfig.deprecationReason) {
                return !valueMatchesCriteria(fieldConfig.deprecationReason, reason);
            }
            return true;
        });
    }
    RemoveObjectFieldsWithDeprecation.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    return RemoveObjectFieldsWithDeprecation;
}());

var PruneTypes = /** @class */ (function () {
    function PruneTypes(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
    }
    PruneTypes.prototype.transformSchema = function (originalWrappingSchema, _subschemaConfig, _transformedSchema) {
        return pruneSchema(originalWrappingSchema, this.options);
    };
    return PruneTypes;
}());

var MapFields = /** @class */ (function () {
    function MapFields(fieldNodeTransformerMap, objectValueTransformerMap, errorsTransformer) {
        this.fieldNodeTransformerMap = fieldNodeTransformerMap;
        this.objectValueTransformerMap = objectValueTransformerMap;
        this.errorsTransformer = errorsTransformer;
    }
    MapFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        var _this = this;
        var _a;
        var subscriptionTypeName = (_a = originalWrappingSchema.getSubscriptionType()) === null || _a === void 0 ? void 0 : _a.name;
        this.transformer = new TransformCompositeFields(function () { return undefined; }, function (typeName, fieldName, fieldNode, fragments, transformationContext) {
            var typeTransformers = _this.fieldNodeTransformerMap[typeName];
            if (typeTransformers == null) {
                return undefined;
            }
            var fieldNodeTransformer = typeTransformers[fieldName];
            if (fieldNodeTransformer == null) {
                return undefined;
            }
            return fieldNodeTransformer(fieldNode, fragments, transformationContext);
        }, this.objectValueTransformerMap != null
            ? function (data, transformationContext) {
                if (data == null) {
                    return data;
                }
                var typeName = data.__typename;
                if (typeName == null) {
                    // see https://github.com/ardatan/graphql-tools/issues/2282
                    typeName = subscriptionTypeName;
                    if (typeName == null) {
                        return data;
                    }
                }
                var transformer = _this.objectValueTransformerMap[typeName];
                if (transformer == null) {
                    return data;
                }
                return transformer(data, transformationContext);
            }
            : undefined, this.errorsTransformer != null ? this.errorsTransformer : undefined);
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    MapFields.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    MapFields.prototype.transformResult = function (originalResult, delegationContext, transformationContext) {
        return this.transformer.transformResult(originalResult, delegationContext, transformationContext);
    };
    return MapFields;
}());

var WrapFields = /** @class */ (function () {
    function WrapFields(outerTypeName, wrappingFieldNames, wrappingTypeNames, fieldNames, prefix) {
        var _a, _b, _c;
        if (prefix === void 0) { prefix = 'gqtld'; }
        this.outerTypeName = outerTypeName;
        this.wrappingFieldNames = wrappingFieldNames;
        this.wrappingTypeNames = wrappingTypeNames;
        this.numWraps = wrappingFieldNames.length;
        this.fieldNames = fieldNames;
        var remainingWrappingFieldNames = this.wrappingFieldNames.slice();
        var outerMostWrappingFieldName = remainingWrappingFieldNames.shift();
        this.transformer = new MapFields((_a = {},
            _a[outerTypeName] = (_b = {},
                _b[outerMostWrappingFieldName] = function (fieldNode, fragments, transformationContext) {
                    return hoistFieldNodes({
                        fieldNode: fieldNode,
                        path: remainingWrappingFieldNames,
                        fieldNames: fieldNames,
                        fragments: fragments,
                        transformationContext: transformationContext,
                        prefix: prefix,
                    });
                },
                _b),
            _a), (_c = {},
            _c[outerTypeName] = function (value, context) { return dehoistValue(value, context); },
            _c), function (errors, context) { return dehoistErrors(errors, context); });
    }
    WrapFields.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        var _a, _b, _c;
        var _this = this;
        var _d, _e, _f;
        var targetFieldConfigMap = selectObjectFields(originalWrappingSchema, this.outerTypeName, !this.fieldNames ? function () { return true; } : function (fieldName) { return _this.fieldNames.includes(fieldName); });
        var newTargetFieldConfigMap = Object.create(null);
        Object.keys(targetFieldConfigMap).forEach(function (fieldName) {
            var field = targetFieldConfigMap[fieldName];
            var newField = __assign(__assign({}, field), { resolve: defaultMergedResolver });
            newTargetFieldConfigMap[fieldName] = newField;
        });
        var wrapIndex = this.numWraps - 1;
        var wrappingTypeName = this.wrappingTypeNames[wrapIndex];
        var wrappingFieldName = this.wrappingFieldNames[wrapIndex];
        var newSchema = appendObjectFields(originalWrappingSchema, wrappingTypeName, newTargetFieldConfigMap);
        for (wrapIndex--; wrapIndex > -1; wrapIndex--) {
            var nextWrappingTypeName = this.wrappingTypeNames[wrapIndex];
            newSchema = appendObjectFields(newSchema, nextWrappingTypeName, (_a = {},
                _a[wrappingFieldName] = {
                    type: newSchema.getType(wrappingTypeName),
                    resolve: defaultMergedResolver,
                },
                _a));
            wrappingTypeName = nextWrappingTypeName;
            wrappingFieldName = this.wrappingFieldNames[wrapIndex];
        }
        var wrappingRootField = this.outerTypeName === ((_d = originalWrappingSchema.getQueryType()) === null || _d === void 0 ? void 0 : _d.name) ||
            this.outerTypeName === ((_e = originalWrappingSchema.getMutationType()) === null || _e === void 0 ? void 0 : _e.name);
        var resolve;
        if (transformedSchema) {
            if (wrappingRootField) {
                var targetSchema = subschemaConfig.schema;
                var operation = this.outerTypeName === targetSchema.getQueryType().name ? 'query' : 'mutation';
                var createProxyingResolver = (_f = subschemaConfig.createProxyingResolver) !== null && _f !== void 0 ? _f : defaultCreateProxyingResolver;
                resolve = createProxyingResolver({
                    subschemaConfig: subschemaConfig,
                    transformedSchema: transformedSchema,
                    operation: operation,
                    fieldName: wrappingFieldName,
                });
            }
            else {
                resolve = defaultMergedResolver;
            }
        }
        var selectedFieldNames = Object.keys(newTargetFieldConfigMap);
        _c = __read(modifyObjectFields(newSchema, this.outerTypeName, function (fieldName) { return selectedFieldNames.includes(fieldName); }, (_b = {},
            _b[wrappingFieldName] = {
                type: newSchema.getType(wrappingTypeName),
                resolve: resolve,
            },
            _b)), 1), newSchema = _c[0];
        return this.transformer.transformSchema(newSchema, subschemaConfig, transformedSchema);
    };
    WrapFields.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        transformationContext.nextIndex = 0;
        transformationContext.paths = Object.create(null);
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    WrapFields.prototype.transformResult = function (originalResult, delegationContext, transformationContext) {
        return this.transformer.transformResult(originalResult, delegationContext, transformationContext);
    };
    return WrapFields;
}());
function collectFields(selectionSet, fragments, fields, visitedFragmentNames) {
    if (fields === void 0) { fields = []; }
    if (visitedFragmentNames === void 0) { visitedFragmentNames = {}; }
    if (selectionSet != null) {
        selectionSet.selections.forEach(function (selection) {
            switch (selection.kind) {
                case Kind.FIELD:
                    fields.push(selection);
                    break;
                case Kind.INLINE_FRAGMENT:
                    collectFields(selection.selectionSet, fragments, fields, visitedFragmentNames);
                    break;
                case Kind.FRAGMENT_SPREAD: {
                    var fragmentName = selection.name.value;
                    if (!visitedFragmentNames[fragmentName]) {
                        visitedFragmentNames[fragmentName] = true;
                        collectFields(fragments[fragmentName].selectionSet, fragments, fields, visitedFragmentNames);
                    }
                    break;
                }
            }
        });
    }
    return fields;
}
function aliasFieldNode(fieldNode, str) {
    return __assign(__assign({}, fieldNode), { alias: {
            kind: Kind.NAME,
            value: str,
        } });
}
function hoistFieldNodes(_a) {
    var fieldNode = _a.fieldNode, fieldNames = _a.fieldNames, path = _a.path, fragments = _a.fragments, transformationContext = _a.transformationContext, prefix = _a.prefix, _b = _a.index, index = _b === void 0 ? 0 : _b, _c = _a.wrappingPath, wrappingPath = _c === void 0 ? [] : _c;
    var alias = fieldNode.alias != null ? fieldNode.alias.value : fieldNode.name.value;
    var newFieldNodes = [];
    if (index < path.length) {
        var pathSegment_1 = path[index];
        collectFields(fieldNode.selectionSet, fragments).forEach(function (possibleFieldNode) {
            if (possibleFieldNode.name.value === pathSegment_1) {
                var newWrappingPath = wrappingPath.concat([alias]);
                newFieldNodes = newFieldNodes.concat(hoistFieldNodes({
                    fieldNode: possibleFieldNode,
                    fieldNames: fieldNames,
                    path: path,
                    fragments: fragments,
                    transformationContext: transformationContext,
                    prefix: prefix,
                    index: index + 1,
                    wrappingPath: newWrappingPath,
                }));
            }
        });
    }
    else {
        collectFields(fieldNode.selectionSet, fragments).forEach(function (possibleFieldNode) {
            if (!fieldNames || fieldNames.includes(possibleFieldNode.name.value)) {
                var nextIndex = transformationContext.nextIndex;
                transformationContext.nextIndex++;
                var indexingAlias = "__" + prefix + nextIndex + "__";
                transformationContext.paths[indexingAlias] = {
                    pathToField: wrappingPath.concat([alias]),
                    alias: possibleFieldNode.alias != null ? possibleFieldNode.alias.value : possibleFieldNode.name.value,
                };
                newFieldNodes.push(aliasFieldNode(possibleFieldNode, indexingAlias));
            }
        });
    }
    return newFieldNodes;
}
function dehoistValue(originalValue, context) {
    if (originalValue == null) {
        return originalValue;
    }
    var newValue = Object.create(null);
    Object.keys(originalValue).forEach(function (alias) {
        var obj = newValue;
        var path = context.paths[alias];
        if (path == null) {
            newValue[alias] = originalValue[alias];
            return;
        }
        var pathToField = path.pathToField;
        var fieldAlias = path.alias;
        pathToField.forEach(function (key) {
            obj = obj[key] = obj[key] || Object.create(null);
        });
        obj[fieldAlias] = originalValue[alias];
    });
    return newValue;
}
function dehoistErrors(errors, context) {
    if (errors === undefined) {
        return undefined;
    }
    return errors.map(function (error) {
        var originalPath = error.path;
        if (originalPath == null) {
            return error;
        }
        var newPath = [];
        originalPath.forEach(function (pathSegment) {
            if (typeof pathSegment !== 'string') {
                newPath.push(pathSegment);
                return;
            }
            var path = context.paths[pathSegment];
            if (path == null) {
                newPath.push(pathSegment);
                return;
            }
            newPath = newPath.concat(path.pathToField, [path.alias]);
        });
        return relocatedError(error, newPath);
    });
}

var WrapType = /** @class */ (function () {
    function WrapType(outerTypeName, innerTypeName, fieldName) {
        this.transformer = new WrapFields(outerTypeName, [fieldName], [innerTypeName]);
    }
    WrapType.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        return this.transformer.transformSchema(originalWrappingSchema, subschemaConfig, transformedSchema);
    };
    WrapType.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    WrapType.prototype.transformResult = function (originalResult, delegationContext, transformationContext) {
        return this.transformer.transformResult(originalResult, delegationContext, transformationContext);
    };
    return WrapType;
}());

var HoistField = /** @class */ (function () {
    function HoistField(typeName, pathConfig, newFieldName, alias) {
        var _a, _b, _c;
        if (alias === void 0) { alias = '__gqtlw__'; }
        this.typeName = typeName;
        this.newFieldName = newFieldName;
        var path = pathConfig.map(function (segment) { return (typeof segment === 'string' ? segment : segment.fieldName); });
        this.argFilters = pathConfig.map(function (segment, index) {
            if (typeof segment === 'string' || segment.argFilter == null) {
                return index === pathConfig.length - 1 ? function () { return true; } : function () { return false; };
            }
            return segment.argFilter;
        });
        var pathToField = path.slice();
        var oldFieldName = pathToField.pop();
        this.oldFieldName = oldFieldName;
        this.pathToField = pathToField;
        var argLevels = Object.create(null);
        this.transformer = new MapFields((_a = {},
            _a[typeName] = (_b = {},
                _b[newFieldName] = function (fieldNode) {
                    return wrapFieldNode(renameFieldNode(fieldNode, oldFieldName), pathToField, alias, argLevels);
                },
                _b),
            _a), (_c = {},
            _c[typeName] = function (value) { return unwrapValue(value, alias); },
            _c), function (errors) { return unwrapErrors(errors, alias); });
        this.argLevels = argLevels;
    }
    HoistField.prototype.transformSchema = function (originalWrappingSchema, subschemaConfig, transformedSchema) {
        var _a;
        var _this = this;
        var _b, _c, _d;
        var argsMap = Object.create(null);
        var innerType = this.pathToField.reduce(function (acc, pathSegment, index) {
            var field = acc.getFields()[pathSegment];
            field.args.forEach(function (arg) {
                if (_this.argFilters[index](arg)) {
                    argsMap[arg.name] = arg;
                    _this.argLevels[arg.name] = index;
                }
            });
            return getNullableType(field.type);
        }, originalWrappingSchema.getType(this.typeName));
        var _e = __read(removeObjectFields(originalWrappingSchema, innerType.name, function (fieldName) { return fieldName === _this.oldFieldName; }), 2), newSchema = _e[0], targetFieldConfigMap = _e[1];
        var targetField = targetFieldConfigMap[this.oldFieldName];
        var resolve;
        if (transformedSchema) {
            var hoistingToRootField = this.typeName === ((_b = originalWrappingSchema.getQueryType()) === null || _b === void 0 ? void 0 : _b.name) ||
                this.typeName === ((_c = originalWrappingSchema.getMutationType()) === null || _c === void 0 ? void 0 : _c.name);
            if (hoistingToRootField) {
                var targetSchema = subschemaConfig.schema;
                var operation = this.typeName === targetSchema.getQueryType().name ? 'query' : 'mutation';
                var createProxyingResolver = (_d = subschemaConfig.createProxyingResolver) !== null && _d !== void 0 ? _d : defaultCreateProxyingResolver;
                resolve = createProxyingResolver({
                    subschemaConfig: subschemaConfig,
                    transformedSchema: transformedSchema,
                    operation: operation,
                    fieldName: this.newFieldName,
                });
            }
            else {
                resolve = defaultMergedResolver;
            }
        }
        var newTargetField = __assign(__assign({}, targetField), { resolve: resolve });
        var level = this.pathToField.length;
        Object.keys(targetField.args).forEach(function (argName) {
            var argConfig = targetField.args[argName];
            var arg = __assign(__assign({}, argConfig), { name: argName, description: argConfig.description, defaultValue: argConfig.defaultValue, extensions: argConfig.extensions, astNode: argConfig.astNode });
            if (_this.argFilters[level](arg)) {
                argsMap[argName] = arg;
                _this.argLevels[arg.name] = level;
            }
        });
        newTargetField.args = argsMap;
        newSchema = appendObjectFields(newSchema, this.typeName, (_a = {},
            _a[this.newFieldName] = newTargetField,
            _a));
        return this.transformer.transformSchema(newSchema, subschemaConfig, transformedSchema);
    };
    HoistField.prototype.transformRequest = function (originalRequest, delegationContext, transformationContext) {
        return this.transformer.transformRequest(originalRequest, delegationContext, transformationContext);
    };
    HoistField.prototype.transformResult = function (originalResult, delegationContext, transformationContext) {
        return this.transformer.transformResult(originalResult, delegationContext, transformationContext);
    };
    return HoistField;
}());
function wrapFieldNode(fieldNode, path, alias, argLevels) {
    return path.reduceRight(function (acc, fieldName, index) { return ({
        kind: Kind.FIELD,
        alias: {
            kind: Kind.NAME,
            value: alias,
        },
        name: {
            kind: Kind.NAME,
            value: fieldName,
        },
        selectionSet: {
            kind: Kind.SELECTION_SET,
            selections: [acc],
        },
        arguments: fieldNode.arguments.filter(function (arg) { return argLevels[arg.name.value] === index; }),
    }); }, __assign(__assign({}, fieldNode), { arguments: fieldNode.arguments.filter(function (arg) { return argLevels[arg.name.value] === path.length; }) }));
}
function renameFieldNode(fieldNode, name) {
    return __assign(__assign({}, fieldNode), { alias: {
            kind: Kind.NAME,
            value: fieldNode.alias != null ? fieldNode.alias.value : fieldNode.name.value,
        }, name: {
            kind: Kind.NAME,
            value: name,
        } });
}
function unwrapValue(originalValue, alias) {
    var newValue = originalValue;
    var object = newValue[alias];
    while (object != null) {
        newValue = object;
        object = newValue[alias];
    }
    delete originalValue[alias];
    Object.assign(originalValue, newValue);
    return originalValue;
}
function unwrapErrors(errors, alias) {
    if (errors === undefined) {
        return undefined;
    }
    return errors.map(function (error) {
        var originalPath = error.path;
        if (originalPath == null) {
            return error;
        }
        var newPath = originalPath.filter(function (pathSegment) { return pathSegment !== alias; });
        return relocatedError(error, newPath);
    });
}

var WrapQuery = /** @class */ (function () {
    function WrapQuery(path, wrapper, extractor) {
        this.path = path;
        this.wrapper = wrapper;
        this.extractor = extractor;
    }
    WrapQuery.prototype.transformRequest = function (originalRequest, _delegationContext, _transformationContext) {
        var _a;
        var _this = this;
        var fieldPath = [];
        var ourPath = JSON.stringify(this.path);
        var document = visit(originalRequest.document, (_a = {},
            _a[Kind.FIELD] = {
                enter: function (node) {
                    fieldPath.push(node.name.value);
                    if (ourPath === JSON.stringify(fieldPath)) {
                        var wrapResult = _this.wrapper(node.selectionSet);
                        // Selection can be either a single selection or a selection set. If it's just one selection,
                        // let's wrap it in a selection set. Otherwise, keep it as is.
                        var selectionSet = wrapResult != null && wrapResult.kind === Kind.SELECTION_SET
                            ? wrapResult
                            : {
                                kind: Kind.SELECTION_SET,
                                selections: [wrapResult],
                            };
                        return __assign(__assign({}, node), { selectionSet: selectionSet });
                    }
                },
                leave: function () {
                    fieldPath.pop();
                },
            },
            _a));
        return __assign(__assign({}, originalRequest), { document: document });
    };
    WrapQuery.prototype.transformResult = function (originalResult, _delegationContext, _transformationContext) {
        var rootData = originalResult.data;
        if (rootData != null) {
            var data = rootData;
            var path = __spreadArray([], __read(this.path));
            while (path.length > 1) {
                var next = path.shift();
                if (data[next]) {
                    data = data[next];
                }
            }
            data[path[0]] = this.extractor(data[path[0]]);
        }
        return {
            data: rootData,
            errors: originalResult.errors,
        };
    };
    return WrapQuery;
}());

var ExtractField = /** @class */ (function () {
    function ExtractField(_a) {
        var from = _a.from, to = _a.to;
        this.from = from;
        this.to = to;
    }
    ExtractField.prototype.transformRequest = function (originalRequest, _delegationContext, _transformationContext) {
        var _a, _b;
        var fromSelection;
        var ourPathFrom = JSON.stringify(this.from);
        var ourPathTo = JSON.stringify(this.to);
        var fieldPath = [];
        visit(originalRequest.document, (_a = {},
            _a[Kind.FIELD] = {
                enter: function (node) {
                    fieldPath.push(node.name.value);
                    if (ourPathFrom === JSON.stringify(fieldPath)) {
                        fromSelection = node.selectionSet;
                        return BREAK;
                    }
                },
                leave: function () {
                    fieldPath.pop();
                },
            },
            _a));
        fieldPath = [];
        var document = visit(originalRequest.document, (_b = {},
            _b[Kind.FIELD] = {
                enter: function (node) {
                    fieldPath.push(node.name.value);
                    if (ourPathTo === JSON.stringify(fieldPath) && fromSelection != null) {
                        return __assign(__assign({}, node), { selectionSet: fromSelection });
                    }
                },
                leave: function () {
                    fieldPath.pop();
                },
            },
            _b));
        return __assign(__assign({}, originalRequest), { document: document });
    };
    return ExtractField;
}());

function makeRemoteExecutableSchema(_a) {
    var schemaOrTypeDefs = _a.schema, executor = _a.executor, subscriber = _a.subscriber, _b = _a.createResolver, createResolver = _b === void 0 ? defaultCreateRemoteResolver : _b, buildSchemaOptions = _a.buildSchemaOptions;
    var targetSchema = typeof schemaOrTypeDefs === 'string' ? buildSchema(schemaOrTypeDefs, buildSchemaOptions) : schemaOrTypeDefs;
    return wrapSchema({
        schema: targetSchema,
        createProxyingResolver: function () { return createResolver(executor, subscriber); },
    });
}
function defaultCreateRemoteResolver(executor, subscriber) {
    return function (_parent, _args, context, info) {
        return delegateToSchema({
            schema: { schema: info.schema, executor: executor, subscriber: subscriber },
            context: context,
            info: info,
        });
    };
}

var cleanInternalStack = function (stack) { return stack.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, ''); };

/**
Escape RegExp special characters.
You can also use this to escape a string that is inserted into the middle of a regex, for example, into a character class.
@example
```
import escapeStringRegexp = require('escape-string-regexp');
const escapedString = escapeStringRegexp('How much $ for a ?????');
//=> 'How much \\$ for a ????\\?'
new RegExp(escapedString);
```
*/
var escapeStringRegexp = function (string) {
    if (typeof string !== 'string') {
        throw new TypeError('Expected a string');
    }
    // Escape characters with special meaning either inside or outside character sets.
    // Use a simple backslash escape when it???s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns??? stricter grammar.
    return string
        .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        .replace(/-/g, '\\x2d');
};

var extractPathRegex = /\s+at.*[(\s](.*)\)?/;
var pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/;
/**
Clean up error stack traces. Removes the mostly unhelpful internal Node.js entries.
@param stack - The `stack` property of an `Error`.
@example
```
import cleanStack = require('clean-stack');
const error = new Error('Missing unicorn');
console.log(error.stack);
// Error: Missing unicorn
//     at Object.<anonymous> (/Users/sindresorhus/dev/clean-stack/unicorn.js:2:15)
//     at Module._compile (module.js:409:26)
//     at Object.Module._extensions..js (module.js:416:10)
//     at Module.load (module.js:343:32)
//     at Function.Module._load (module.js:300:12)
//     at Function.Module.runMain (module.js:441:10)
//     at startup (node.js:139:18)
console.log(cleanStack(error.stack));
// Error: Missing unicorn
//     at Object.<anonymous> (/Users/sindresorhus/dev/clean-stack/unicorn.js:2:15)
```
*/
var cleanStack = function (stack, basePath) {
    var basePathRegex = basePath && new RegExp("(at | \\()" + escapeStringRegexp(basePath), 'g');
    return stack.replace(/\\/g, '/')
        .split('\n')
        .filter(function (line) {
        var pathMatches = line.match(extractPathRegex);
        if (pathMatches === null || !pathMatches[1]) {
            return true;
        }
        var match = pathMatches[1];
        // Electron
        if (match.includes('.app/Contents/Resources/electron.asar') ||
            match.includes('.app/Contents/Resources/default_app.asar')) {
            return false;
        }
        return !pathRegex.test(match);
    })
        .filter(function (line) { return line.trim() !== ''; })
        .map(function (line) {
        if (basePathRegex) {
            line = line.replace(basePathRegex, '$1');
        }
        return line;
    })
        .join('\n');
};

/**
Indent each line in a string.
@param string - The string to indent.
@param count - How many times you want `options.indent` repeated. Default: `1`.
@example
```
import indentString = require('indent-string');
indentString('Unicorns\nRainbows', 4);
//=> '    Unicorns\n    Rainbows'
indentString('Unicorns\nRainbows', 4, {indent: '???'});
//=> '????????????Unicorns\n????????????Rainbows'
```
*/
var indentString = function (string, count, options) {
    if (count === void 0) { count = 1; }
    options = Object.assign({
        indent: ' ',
        includeEmptyLines: false,
    }, options);
    if (typeof string !== 'string') {
        throw new TypeError("Expected `input` to be a `string`, got `" + typeof string + "`");
    }
    if (typeof count !== 'number') {
        throw new TypeError("Expected `count` to be a `number`, got `" + typeof count + "`");
    }
    if (count < 0) {
        throw new RangeError("Expected `count` to be at least 0, got `" + count + "`");
    }
    if (typeof options.indent !== 'string') {
        throw new TypeError("Expected `options.indent` to be a `string`, got `" + typeof options.indent + "`");
    }
    if (count === 0) {
        return string;
    }
    var regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return string.replace(regex, options.indent.repeat(count));
};

var AggregateError = /** @class */ (function (_super) {
    __extends(AggregateError, _super);
    function AggregateError(errors) {
        var _this = this;
        if (!Array.isArray(errors)) {
            throw new TypeError("Expected input to be an Array, got " + typeof errors);
        }
        var normalizedErrors = errors.map(function (error) {
            if (error instanceof Error) {
                return error;
            }
            if (error !== null && typeof error === 'object') {
                // Handle plain error objects with message property and/or possibly other metadata
                return Object.assign(new Error(error.message), error);
            }
            return new Error(error);
        });
        var message = normalizedErrors
            .map(function (error) {
            // The `stack` property is not standardized, so we can't assume it exists
            return typeof error.stack === 'string' ? cleanInternalStack(cleanStack(error.stack)) : String(error);
        })
            .join('\n');
        message = '\n' + indentString(message, 4);
        _this = _super.call(this, message) || this;
        _this.name = 'AggregateError';
        Object.defineProperty(_this, Symbol.iterator, {
            get: function () { return function () { return normalizedErrors[Symbol.iterator](); }; },
        });
        return _this;
    }
    return AggregateError;
}(Error));

function getSchemaFromIntrospection(introspectionResult) {
    var _a, _b;
    if ((_a = introspectionResult === null || introspectionResult === void 0 ? void 0 : introspectionResult.data) === null || _a === void 0 ? void 0 : _a.__schema) {
        return buildClientSchema(introspectionResult.data);
    }
    else if ((_b = introspectionResult === null || introspectionResult === void 0 ? void 0 : introspectionResult.errors) === null || _b === void 0 ? void 0 : _b.length) {
        if (introspectionResult.errors.length > 1) {
            var combinedError = new AggregateError(introspectionResult.errors);
            throw combinedError;
        }
        var error = introspectionResult.errors[0];
        throw error.originalError || error;
    }
    else {
        throw new Error('Could not obtain introspection result, received: ' + JSON.stringify(introspectionResult));
    }
}
function introspectSchema(executor, context, options) {
    var parsedIntrospectionQuery = parse(getIntrospectionQuery(options));
    return new ValueOrPromise(function () { return executor({
        document: parsedIntrospectionQuery,
        context: context,
    }); }).then(function (introspection) { return getSchemaFromIntrospection(introspection); }).resolve();
}
// Keep for backwards compatibility. Will be removed on next release.
function introspectSchemaSync(executor, context, options) {
    return introspectSchema(executor, context, options);
}

export { ExtractField, FilterInputObjectFields, FilterInterfaceFields, FilterObjectFieldDirectives, FilterObjectFields, FilterRootFields, FilterTypes, HoistField, MapFields, MapLeafValues, PruneTypes as PruneSchema, RemoveObjectFieldDeprecations, RemoveObjectFieldDirectives, RemoveObjectFieldsWithDeprecation, RemoveObjectFieldsWithDirective, RenameInputObjectFields, RenameInterfaceFields, RenameObjectFields, RenameRootFields, RenameRootTypes, RenameTypes, TransformCompositeFields, TransformEnumValues, TransformInputObjectFields, TransformInterfaceFields, TransformObjectFields, TransformQuery, TransformRootFields, WrapFields, WrapQuery, WrapType, defaultCreateProxyingResolver, defaultCreateRemoteResolver, generateProxyingResolvers, introspectSchema, introspectSchemaSync, makeRemoteExecutableSchema, wrapSchema };
//# sourceMappingURL=index.esm.js.map
