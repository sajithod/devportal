import { NormalizedProblem } from '../walk';
export declare type Totals = {
    errors: number;
    warnings: number;
    ignored: number;
};
export declare type OutputFormat = 'codeframe' | 'stylish' | 'json';
export declare function getTotals(problems: (NormalizedProblem & {
    ignored?: boolean;
})[]): Totals;
export declare function formatProblems(problems: (NormalizedProblem & {
    ignored?: boolean;
})[], opts: {
    maxProblems?: number;
    cwd?: string;
    format?: OutputFormat;
    color?: boolean;
    totals: Totals;
    version: string;
}): void;
