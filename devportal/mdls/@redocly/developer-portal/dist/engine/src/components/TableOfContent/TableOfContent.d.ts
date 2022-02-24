/// <reference types="react" />
import { MarkdownHeading } from '../../graphql-types';
interface TableOfContentProps {
    headings?: Array<MarkdownHeading | null> | null | undefined;
    contentWrapper: HTMLDivElement | null;
    tocMaxDepth: number;
}
export default function TableOfContent(props: TableOfContentProps): JSX.Element;
export {};
