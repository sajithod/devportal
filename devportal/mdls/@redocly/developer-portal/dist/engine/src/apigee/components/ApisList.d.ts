/// <reference types="react" />
import { ApiProduct } from '../services/apigee-api-types';
export default function ApisList(props: {
    products?: ApiProduct[];
    enabledApis: string[];
    onChange: (enabledApis: string[]) => void;
}): JSX.Element;
