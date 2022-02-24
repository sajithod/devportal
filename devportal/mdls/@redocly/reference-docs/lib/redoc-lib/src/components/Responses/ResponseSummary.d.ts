/// <reference types="react" />
import { PanelHeaderProps } from '../../../../components/Panel';
import { ResponseModel } from '../../services';
export interface ResponseTitleProps extends PanelHeaderProps {
    response: ResponseModel;
}
export declare const ResponseSummary: ({ expanded, toggle, response, }: ResponseTitleProps) => JSX.Element;
