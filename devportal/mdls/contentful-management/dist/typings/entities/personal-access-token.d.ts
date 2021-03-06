import { MetaSysProps, DefaultElements, MakeRequest } from '../common-types';
export declare type PersonalAccessTokenProp = {
    sys: MetaSysProps;
    name: string;
    scopes: 'content_management_manage'[];
    revokedAt: null | string;
    token?: string;
};
export declare type CreatePersonalAccessTokenProps = Pick<PersonalAccessToken, 'name' | 'scopes'>;
export interface PersonalAccessToken extends PersonalAccessTokenProp, DefaultElements<PersonalAccessTokenProp> {
    /**
     * Revokes a personal access token
     * @return Object the revoked personal access token
     * @example ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *  accessToken: <content_management_api_key>
     * })
     *
     * client.getPersonalAccessToken('<token-id>')
     *  .then((personalAccessToken) => {
     *    return personalAccessToken.revoke()
     *  })
     *  .catch(console.error)
     * ```
     */
    revoke(): Promise<PersonalAccessToken>;
}
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw  personal access token data
 * @return Wrapped personal access token
 */
export declare function wrapPersonalAccessToken(makeRequest: MakeRequest, data: PersonalAccessTokenProp): PersonalAccessToken;
/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @param data - Raw personal access collection data
 * @return Wrapped personal access token collection data
 */
export declare const wrapPersonalAccessTokenCollection: (makeRequest: MakeRequest, data: import("../common-types").CollectionProp<PersonalAccessTokenProp>) => import("../common-types").Collection<PersonalAccessToken, PersonalAccessTokenProp>;
