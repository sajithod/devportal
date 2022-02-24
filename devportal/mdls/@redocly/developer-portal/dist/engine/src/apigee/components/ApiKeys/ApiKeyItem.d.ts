/// <reference types="react" />
import { Attribute, Credential } from '../../services/apigee-api-types';
export default function ApiKeyItem(props: {
    credential: Credential;
    attributes: Attribute[];
}): JSX.Element;
