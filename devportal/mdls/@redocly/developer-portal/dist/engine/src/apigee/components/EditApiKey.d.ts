/// <reference types="react" />
import { Attribute, Credential } from '../services/apigee-api-types';
export default function EditApiKey(props: {
    credential: Credential;
    attributes: Attribute[];
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
}): JSX.Element;
