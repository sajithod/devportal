import * as React from 'react';
interface ExplainStepProps {
    id?: string;
    needs?: string[];
    placeholder: (...args: any[]) => React.ReactNode;
}
export declare const ExplainStep: ({ id, needs, placeholder }: ExplainStepProps) => JSX.Element;
export {};
