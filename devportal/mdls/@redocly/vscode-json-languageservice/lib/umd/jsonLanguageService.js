/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./services/jsonCompletion", "./services/jsonHover", "./services/jsonValidation", "./services/jsonDocumentSymbols", "./parser/jsonParser", "./services/configuration", "./services/jsonSchemaService", "./services/jsonFolding", "./services/jsonSelectionRanges", "jsonc-parser", "./jsonLanguageTypes", "./jsonLanguageTypes"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    var jsonCompletion_1 = require("./services/jsonCompletion");
    var jsonHover_1 = require("./services/jsonHover");
    var jsonValidation_1 = require("./services/jsonValidation");
    var jsonDocumentSymbols_1 = require("./services/jsonDocumentSymbols");
    var jsonParser_1 = require("./parser/jsonParser");
    var configuration_1 = require("./services/configuration");
    var jsonSchemaService_1 = require("./services/jsonSchemaService");
    var jsonFolding_1 = require("./services/jsonFolding");
    var jsonSelectionRanges_1 = require("./services/jsonSelectionRanges");
    var jsonc_parser_1 = require("jsonc-parser");
    var jsonLanguageTypes_1 = require("./jsonLanguageTypes");
    __export(require("./jsonLanguageTypes"));
    function getLanguageService(params) {
        var promise = params.promiseConstructor || Promise;
        var jsonSchemaService = new jsonSchemaService_1.JSONSchemaService(params.schemaRequestService, params.workspaceContext, promise);
        jsonSchemaService.setSchemaContributions(configuration_1.schemaContributions);
        var jsonCompletion = new jsonCompletion_1.JSONCompletion(jsonSchemaService, params.contributions, promise, params.clientCapabilities);
        var jsonHover = new jsonHover_1.JSONHover(jsonSchemaService, params.contributions, promise);
        var jsonDocumentSymbols = new jsonDocumentSymbols_1.JSONDocumentSymbols(jsonSchemaService);
        var jsonValidation = new jsonValidation_1.JSONValidation(jsonSchemaService, promise);
        return {
            configure: function (settings) {
                jsonSchemaService.clearExternalSchemas();
                if (settings.schemas) {
                    settings.schemas.forEach(function (settings) {
                        jsonSchemaService.registerExternalSchema(settings.uri, settings.fileMatch, settings.schema);
                    });
                }
                jsonValidation.configure(settings);
            },
            resetSchema: function (uri) { return jsonSchemaService.onResourceChange(uri); },
            doValidation: jsonValidation.doValidation.bind(jsonValidation),
            parseJSONDocument: function (document) { return jsonParser_1.parse(document, { collectComments: true }); },
            newJSONDocument: function (root, diagnostics) { return jsonParser_1.newJSONDocument(root, diagnostics); },
            doComplete: jsonCompletion.doComplete.bind(jsonCompletion),
            findDocumentSymbols: jsonDocumentSymbols.findDocumentSymbols.bind(jsonDocumentSymbols),
            findDocumentSymbols2: jsonDocumentSymbols.findDocumentSymbols2.bind(jsonDocumentSymbols),
            findColorSymbols: function (d, s) { return jsonDocumentSymbols.findDocumentColors(d, s).then(function (s) { return s.map(function (s) { return s.range; }); }); },
            findDocumentColors: jsonDocumentSymbols.findDocumentColors.bind(jsonDocumentSymbols),
            getColorPresentations: jsonDocumentSymbols.getColorPresentations.bind(jsonDocumentSymbols),
            doHover: jsonHover.doHover.bind(jsonHover),
            getFoldingRanges: jsonFolding_1.getFoldingRanges,
            getSelectionRanges: jsonSelectionRanges_1.getSelectionRanges,
            format: function (d, r, o) {
                var range = void 0;
                if (r) {
                    var offset = d.offsetAt(r.start);
                    var length = d.offsetAt(r.end) - offset;
                    range = { offset: offset, length: length };
                }
                var options = { tabSize: o ? o.tabSize : 4, insertSpaces: o ? o.insertSpaces : true, eol: '\n' };
                return jsonc_parser_1.format(d.getText(), range, options).map(function (e) {
                    return jsonLanguageTypes_1.TextEdit.replace(jsonLanguageTypes_1.Range.create(d.positionAt(e.offset), d.positionAt(e.offset + e.length)), e.content);
                });
            }
        };
    }
    exports.getLanguageService = getLanguageService;
});
