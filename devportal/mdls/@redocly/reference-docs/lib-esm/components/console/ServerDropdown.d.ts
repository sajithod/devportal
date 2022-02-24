import * as React from 'react';
import { DropdownProps } from '@redocly/react-dropdown-aria';
import { OperationModel, Server } from '../../redoc-lib';
export interface ServerDropdownProps {
    operation: OperationModel;
    onChange: (server: Server) => void;
}
export interface ServerDropdownState {
    activeIdx: number;
    variables?: {
        [name: string]: string;
    };
}
export declare class ServerChooser extends React.Component<ServerDropdownProps, ServerDropdownState> {
    state: {
        activeIdx: number;
        variables: {};
    };
    static getDerivedStateFromProps(props: ServerDropdownProps): ServerDropdownState;
    handleServerChange: (option: DropdownProps & {
        serverUrl: string;
    }) => void;
    handleVariableChange: (name: string, value: string) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
