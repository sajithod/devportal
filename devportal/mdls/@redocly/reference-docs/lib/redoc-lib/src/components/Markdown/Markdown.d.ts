/// <reference types="react" />
export interface StylingMarkdownProps {
    compact?: boolean;
    inline?: boolean;
}
export interface BaseMarkdownProps {
    sanitize?: boolean;
    source: string;
}
export declare type MarkdownProps = BaseMarkdownProps & StylingMarkdownProps & {
    source: string;
    className?: string;
    'data-role'?: string;
};
export declare const Markdown: ({ source, ...props }: MarkdownProps) => JSX.Element;
