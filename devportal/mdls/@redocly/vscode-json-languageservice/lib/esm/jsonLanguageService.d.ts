import { Thenable, ASTNode, Color, ColorInformation, ColorPresentation, LanguageServiceParams, LanguageSettings, DocumentLanguageSettings, FoldingRange, JSONSchema, SelectionRange, FoldingRangesContext, DocumentSymbolsContext, ColorInformationContext as DocumentColorsContext, TextDocument, Position, CompletionList, Hover, Range, SymbolInformation, Diagnostic, TextEdit, FormattingOptions, DocumentSymbol } from './jsonLanguageTypes';
export declare type JSONDocument = {};
export * from './jsonLanguageTypes';
export interface LanguageService {
    configure(settings: LanguageSettings): void;
    doValidation(document: TextDocument, jsonDocument: JSONDocument, documentSettings?: DocumentLanguageSettings, schema?: JSONSchema): Thenable<Diagnostic[]>;
    parseJSONDocument(document: TextDocument): JSONDocument;
    newJSONDocument(rootNode: ASTNode, syntaxDiagnostics?: Diagnostic[]): JSONDocument;
    resetSchema(uri: string): boolean;
    doComplete(document: TextDocument, position: Position, doc: JSONDocument): Thenable<CompletionList | null>;
    findDocumentSymbols(document: TextDocument, doc: JSONDocument, context?: DocumentSymbolsContext): SymbolInformation[];
    findDocumentSymbols2(document: TextDocument, doc: JSONDocument, context?: DocumentSymbolsContext): DocumentSymbol[];
    /** deprecated, use findDocumentColors instead */
    findColorSymbols(document: TextDocument, doc: JSONDocument): Thenable<Range[]>;
    findDocumentColors(document: TextDocument, doc: JSONDocument, context?: DocumentColorsContext): Thenable<ColorInformation[]>;
    getColorPresentations(document: TextDocument, doc: JSONDocument, color: Color, range: Range): ColorPresentation[];
    doHover(document: TextDocument, position: Position, doc: JSONDocument): Thenable<Hover | null>;
    format(document: TextDocument, range: Range, options: FormattingOptions): TextEdit[];
    getFoldingRanges(document: TextDocument, context?: FoldingRangesContext): FoldingRange[];
    getSelectionRanges(document: TextDocument, positions: Position[], doc: JSONDocument): SelectionRange[];
}
export declare function getLanguageService(params: LanguageServiceParams): LanguageService;
