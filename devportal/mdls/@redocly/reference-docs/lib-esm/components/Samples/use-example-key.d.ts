import { OperationModel } from '../../redoc-lib/src/services/models/Operation';
interface ExampleName {
    exampleKey: string;
    defaultExampleName?: string | false;
}
export declare function useExampleKey({ activeExampleName, defaultExampleName }: OperationModel | undefined, examples: Record<string, unknown>): ExampleName;
export {};
