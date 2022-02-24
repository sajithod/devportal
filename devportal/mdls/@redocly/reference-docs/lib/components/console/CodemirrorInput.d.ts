import * as React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Editor } from 'codemirror';
import './codemirror-helpers';
export interface CodemirrorInputBase {
    forwardedRef?: React.Ref<any>;
    mode?: string;
    field: string;
    initialValue: any;
    validate: any;
    schema: any;
    id: string;
    onChange?: (e: any) => any;
    onBlur?: (e: any) => any;
}
export interface CodemirrorInputProps extends CodemirrorInputBase {
    fieldApi: any;
    fieldState: any;
    render: any;
    userProps: any;
    ref: any;
}
export declare class CodemirrorInput extends React.Component<CodemirrorInputProps> {
    editor: Editor;
    _onKeyUp: (_cm: CodeMirror.Doc, event: {
        key: string;
    }) => void;
    initEditor: (editor: Editor) => void;
    refreshEditor: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<CodemirrorInputBase>;
export default _default;
