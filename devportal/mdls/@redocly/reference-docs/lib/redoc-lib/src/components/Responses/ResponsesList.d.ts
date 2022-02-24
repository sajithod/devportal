import * as React from 'react';
import { ResponseModel } from '../../services';
export interface ResponseListProps {
    responses: ResponseModel[];
}
export declare class ResponsesList extends React.PureComponent<ResponseListProps> {
    render(): JSX.Element | null;
}
