import * as React from 'react';
import { RedocNormalizedOptions } from '../../services';
import { BaseMarkdownProps } from './Markdown';
import { ProStore } from '../../../../services';
export interface AdvancedMarkdownProps extends BaseMarkdownProps {
    htmlWrap?: (part: JSX.Element) => JSX.Element;
}
export declare class AdvancedMarkdown extends React.Component<AdvancedMarkdownProps> {
    render(): JSX.Element;
    renderWithOptionsAndStore(options: RedocNormalizedOptions, store?: ProStore): (React.FunctionComponentElement<{
        key: number;
    }> | JSX.Element)[] | null;
}
