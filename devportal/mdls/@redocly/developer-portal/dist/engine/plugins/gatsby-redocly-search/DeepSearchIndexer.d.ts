export class DeepSearchIndexer {
    constructor(options: any);
    operationTitleBoost: number;
    tagTitleBoost: number;
    fieldLevelBoost: number;
    searchMaxDepth: number;
    indexOperation(operation: any, add: any): void;
    indexSchema(schema: any, menuId: any, place: any, isResponse: any, add: any, path?: any[], depth?: number): void;
    setOptions(options: any): void;
}
