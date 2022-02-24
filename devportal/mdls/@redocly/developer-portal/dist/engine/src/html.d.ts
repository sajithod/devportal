declare function HTML(props: any): JSX.Element;
declare namespace HTML {
    namespace propTypes {
        const htmlAttributes: PropTypes.Requireable<object>;
        const headComponents: PropTypes.Requireable<any[]>;
        const bodyAttributes: PropTypes.Requireable<object>;
        const preBodyComponents: PropTypes.Requireable<any[]>;
        const body: PropTypes.Requireable<string>;
        const postBodyComponents: PropTypes.Requireable<any[]>;
    }
}
export default HTML;
import PropTypes from "prop-types";
