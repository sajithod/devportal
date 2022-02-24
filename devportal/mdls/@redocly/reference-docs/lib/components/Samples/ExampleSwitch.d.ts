/// <reference types="react" />
import { ExampleModel } from '../../redoc-lib/src/services';
interface ExampleModelsMap {
    [key: string]: ExampleModel;
}
export interface ExampleSwitchOptions {
    exampleKey?: string;
}
export interface ExampleSwitchProps extends ExampleSwitchOptions {
    examples: ExampleModelsMap;
    onChange: (key: string) => void;
}
export declare const ExampleSwitch: ({ exampleKey, examples, onChange, }: ExampleSwitchProps) => JSX.Element;
export {};
