/// <reference types="react" />
import { ApiProduct } from '../services/apigee-api-types';
export default function ApiItem(props: {
    product: ApiProduct;
    enabled: boolean;
    onChange: (apiName: string, enabled: boolean) => void;
}): JSX.Element;
