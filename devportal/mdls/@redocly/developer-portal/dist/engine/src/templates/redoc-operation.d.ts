/// <reference types="react" />
import '../fragments';
export interface RedocProps {
    pageContext: any;
    data: {
        contentItem: {
            link: string;
            type: string;
            data: {
                redocInfoPageLink: string;
                redocStoreStr: string;
                redocItemId: string;
                redocHasInfoPage: boolean;
                redocHasSecurityDefinitions: string;
                settings: object;
            };
        };
    };
}
declare function RedocPage(props: RedocProps): JSX.Element;
declare const _default: typeof RedocPage;
export default _default;
export declare const pageQuery: void;
