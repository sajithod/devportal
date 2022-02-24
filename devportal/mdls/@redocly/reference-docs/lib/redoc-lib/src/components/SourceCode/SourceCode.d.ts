import * as React from 'react';
import { ExternalSource } from '../../services/RedocNormalizedOptions';
import { FileInfo } from '../../common-elements/Download';
export interface SourceCodeProps {
    lang: string;
    source?: string;
    externalSource?: ExternalSource;
}
export declare class SourceCode extends React.PureComponent<Required<Omit<SourceCodeProps, 'externalSource'>>> {
    render(): JSX.Element;
}
export declare function SourceCodeWithText(props: SourceCodeProps): JSX.Element;
export declare function SourceCodeWithFile(props: FileInfo): JSX.Element;
