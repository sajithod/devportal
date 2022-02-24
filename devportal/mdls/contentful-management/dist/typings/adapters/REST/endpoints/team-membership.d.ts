import type { AxiosInstance } from 'contentful-sdk-core';
import { CollectionProp, GetOrganizationParams, QueryParams } from '../../../common-types';
import { TeamMembershipProps } from '../../../entities/team-membership';
import { RestEndpoint } from '../types';
export declare const get: RestEndpoint<'TeamMembership', 'get'>;
export declare const getManyForOrganization: (http: AxiosInstance, params: GetOrganizationParams & QueryParams) => Promise<CollectionProp<TeamMembershipProps>>;
export declare const getManyForTeam: RestEndpoint<'TeamMembership', 'getManyForTeam'>;
export declare const create: RestEndpoint<'TeamMembership', 'create'>;
export declare const update: RestEndpoint<'TeamMembership', 'update'>;
export declare const del: RestEndpoint<'TeamMembership', 'delete'>;
