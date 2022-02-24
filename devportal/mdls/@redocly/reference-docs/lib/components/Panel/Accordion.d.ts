import * as React from 'react';
export interface AccordionProps {
    initialActiveIdx?: number;
}
export declare const Accordion: ({ initialActiveIdx, children, }: React.PropsWithChildren<AccordionProps>) => JSX.Element;
