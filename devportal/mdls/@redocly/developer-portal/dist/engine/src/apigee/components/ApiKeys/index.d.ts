/// <reference types="react" />
import { Attribute, Credential } from '../../services/apigee-api-types';
export default function ApiKeys(props: {
    credentials: Credential[];
    attributes: Attribute[];
}): JSX.Element;
