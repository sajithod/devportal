import { Stream } from 'stream';
import { CreateTeamMembershipProps } from './entities/team-membership';
import { CreateTeamProps } from './entities/team';
import { CreateOrganizationInvitationProps } from './entities/organization-invitation';
import { MakeRequest, QueryOptions } from './common-types';
import { CreateAppDefinitionProps } from './entities/app-definition';
import { CreateAppActionProps } from './entities/app-action';
import { CreateAppSigningSecretProps } from './entities/app-signing-secret';
import { CreateAppDetailsProps } from './entities/app-details';
/**
 * @private
 */
export declare type ContentfulOrganizationAPI = ReturnType<typeof createOrganizationApi>;
/**
 * Creates API object with methods to access the Organization API
 * @param {MakeRequest} makeRequest - function to make requests via an adapter
 * @return {ContentfulOrganizationAPI}
 * @private
 */
export default function createOrganizationApi(makeRequest: MakeRequest): {
    /**
     * Gets a User
     * @return Promise for a User
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<organization_id>')
     * .then((organization) => organization.getUser('id'))
     * .then((user) => console.log(user))
     * .catch(console.error)
     * ```
     */
    getUser(id: string): Promise<import("./export-types").UserProps & {
        toPlainObject(): import("./export-types").UserProps;
    }>;
    /**
     * Gets a collection of Users in organization
     * @param query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
     * @return Promise a collection of Users in organization
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<organization_id>')
     * .then((organization) => organization.getUsers())
     * .then((user) => console.log(user))
     * .catch(console.error)
     * ```
     */
    getUsers(query?: QueryOptions): Promise<import("./common-types").Collection<import("./export-types").UserProps & {
        toPlainObject(): import("./export-types").UserProps;
    }, import("./export-types").UserProps>>;
    /**
     * Gets an Organization Membership
     * @param id - Organization Membership ID
     * @return Promise for an Organization Membership
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organization_id')
     * .then((organization) => organization.getOrganizationMembership('organizationMembership_id'))
     * .then((organizationMembership) => console.log(organizationMembership))
     * .catch(console.error)
     * ```
     */
    getOrganizationMembership(id: string): Promise<import("./export-types").OrganizationMembership>;
    /**
     * Gets a collection of Organization Memberships
     * @param  query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
     * @return Promise for a collection of Organization Memberships
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organization_id')
     * .then((organization) => organization.getOrganizationMemberships({'limit': 100})) // you can add more queries as 'key': 'value'
     * .then((response) => console.log(response.items))
     * .catch(console.error)
     * ```
     */
    getOrganizationMemberships(query?: QueryOptions): Promise<import("./common-types").Collection<import("./export-types").OrganizationMembership, import("./export-types").OrganizationMembershipProps>>;
    /**
     * Creates a Team
     * @param data representation of the Team to be created
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.createTeam({
     *    name: 'new team',
     *    description: 'new team description'
     *  }))
     * .then((team) => console.log(team))
     * .catch(console.error)
     * ```
     */
    createTeam(data: CreateTeamProps): Promise<import("./entities/team").Team>;
    /**
     * Gets an Team
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('orgId')
     * .then((organization) => organization.getTeam('teamId'))
     * .then((team) => console.log(team))
     * .catch(console.error)
     * ```
     */
    getTeam(teamId: string): Promise<import("./entities/team").Team>;
    /**
     * Gets all Teams in an organization
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('orgId')
     * .then((organization) => organization.getTeams())
     * .then((teams) => console.log(teams))
     * .catch(console.error)
     * ```
     */
    getTeams(query?: QueryOptions): Promise<import("./common-types").Collection<import("./entities/team").Team, import("./entities/team").TeamProps>>;
    /**
     * Creates a Team membership
     * @param teamId - Id of the team the membership will be created in
     * @param data - Object representation of the Team Membership to be created
     * @return Promise for the newly created TeamMembership
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organizationId')
     * .then((org) => org.createTeamMembership('teamId', {
     *    admin: true,
     *    organizationMembershipId: 'organizationMembershipId'
     *  }))
     * .then((teamMembership) => console.log(teamMembership))
     * .catch(console.error)
     * ```
     */
    createTeamMembership(teamId: string, data: CreateTeamMembershipProps): Promise<import("./entities/team-membership").TeamMembership>;
    /**
     * Gets an Team Membership from the team with given teamId
     * @return Promise for an Team Membership
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organizationId')
     * .then((organization) => organization.getTeamMembership('teamId', 'teamMembership_id'))
     * .then((teamMembership) => console.log(teamMembership))
     * .catch(console.error)
     * ```
     */
    getTeamMembership(teamId: string, teamMembershipId: string): Promise<import("./entities/team-membership").TeamMembership>;
    /**
     * Get all Team Memberships. If teamID is provided in the optional config object, it will return all Team Memberships in that team. By default, returns all team memberships for the organization.
     * @return Promise for a Team Membership Collection
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organizationId')
     * .then((organization) => organization.getTeamMemberships('teamId'))
     * .then((teamMemberships) => console.log(teamMemberships))
     * .catch(console.error)
     * ```
     */
    getTeamMemberships(opts?: {
        teamId?: string;
        query?: QueryOptions;
    }): Promise<import("./common-types").Collection<import("./entities/team-membership").TeamMembership, import("./entities/team-membership").TeamMembershipProps>>;
    /**
     * Get all Team Space Memberships. If teamID is provided in the optional config object, it will return all Team Space Memberships in that team. By default, returns all team space memberships across all teams in the organization.
     * @return Promise for a Team Space Membership Collection
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organizationId')
     * .then((organization) => organization.getTeamSpaceMemberships('teamId'))
     * .then((teamSpaceMemberships) => console.log(teamSpaceMemberships))
     * .catch(console.error)
     * ```
     */
    getTeamSpaceMemberships(opts?: {
        teamId?: string;
        query?: QueryOptions;
    }): Promise<import("./common-types").Collection<import("./export-types").TeamSpaceMembership, import("./export-types").TeamSpaceMembershipProps>>;
    /**
     * Get a Team Space Membership with given teamSpaceMembershipId
     * @return Promise for a Team Space Membership
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organizationId')
     * .then((organization) => organization.getTeamSpaceMembership('teamSpaceMembershipId'))
     * .then((teamSpaceMembership) => console.log(teamSpaceMembership))
     * .catch(console.error)]
     * ```
     */
    getTeamSpaceMembership(teamSpaceMembershipId: string): Promise<import("./export-types").TeamSpaceMembership>;
    /**
     * Gets an Space Membership in Organization
     * @param id - Organiztion Space Membership ID
     * @return Promise for a Space Membership in an organization
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organization_id')
     * .then((organization) => organization.getOrganizationSpaceMembership('organizationSpaceMembership_id'))
     * .then((organizationMembership) => console.log(organizationMembership))
     * .catch(console.error)
     * ```
     */
    getOrganizationSpaceMembership(id: string): Promise<import("./export-types").SpaceMembership>;
    /**
     * Gets a collection Space Memberships in organization
     * @param query - Object with search parameters. Check the <a href="https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters">JS SDK tutorial</a> and the <a href="https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters">REST API reference</a> for more details.
     * @return Promise for a Space Membership collection across all spaces in the organization
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('organization_id')
     * .then((organization) => organization.getOrganizationSpaceMemberships()) // you can add queries like 'limit': 100
     * .then((response) => console.log(response.items))
     * .catch(console.error)
     * ```
     */
    getOrganizationSpaceMemberships(query?: QueryOptions): Promise<import("./common-types").Collection<import("./export-types").SpaceMembership, import("./export-types").SpaceMembershipProps>>;
    /**
     * Gets an Invitation in Organization
     * @return Promise for a OrganizationInvitation in an organization
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((organization) => organization.getOrganizationInvitation('invitation_id'))
     * .then((invitation) => console.log(invitation))
     * .catch(console.error)
     * ```
     */
    getOrganizationInvitation(invitationId: string): Promise<import("./entities/organization-invitation").OrganizationInvitation>;
    /**
     * Create an Invitation in Organization
     * @return Promise for a OrganizationInvitation in an organization
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     *  .then((organization) => organization.createOrganizationInvitation({
     *    email: 'user.email@example.com'
     *    firstName: 'User First Name'
     *    lastName: 'User Last Name'
     *    role: 'developer'
     *  })
     * .catch(console.error)
     * ```
     */
    createOrganizationInvitation(data: CreateOrganizationInvitationProps): Promise<import("./entities/organization-invitation").OrganizationInvitation>;
    /**
     * Creates an app definition
     * @param Object representation of the App Definition to be created
     * @return Promise for the newly created AppDefinition
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.createAppDefinition({
     *    name: 'Example app',
     *    locations: [{ location: 'app-config' }],
     *    src: "http://my-app-host.com/my-app"
     *  }))
     * .then((appDefinition) => console.log(appDefinition))
     * .catch(console.error)
     * ```
     */
    createAppDefinition(data: CreateAppDefinitionProps): Promise<import("./entities/app-definition").AppDefinition>;
    /**
     * Gets all app definitions
     * @return Promise for a collection of App Definitions
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.getAppDefinitions())
     * .then((response) => console.log(response.items))
     * .catch(console.error)
     * ```
     */
    getAppDefinitions(query?: QueryOptions): Promise<import("./common-types").Collection<import("./entities/app-definition").AppDefinition, import("./entities/app-definition").AppDefinitionProps>>;
    /**
     * Gets an app definition
     * @return Promise for an App Definition
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.getAppDefinition('<app_definition_id>'))
     * .then((appDefinition) => console.log(appDefinition))
     * .catch(console.error)
     * ```
     */
    getAppDefinition(id: string): Promise<import("./entities/app-definition").AppDefinition>;
    /**
     * Gets an app upload
     * @return Promise for an App Upload
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.getAppUpload('<app_upload_id>'))
     * .then((appUpload) => console.log(appUpload))
     * .catch(console.error)
     * ```
     */
    getAppUpload(appUploadId: string): Promise<import("./export-types").AppUpload>;
    /**
     * Creates an app upload
     * @return Promise for an App Upload
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.createAppUpload('some_zip_file'))
     * .then((appUpload) => console.log(appUpload))
     * .catch(console.error)
     * ```
     */
    createAppUpload(file: string | ArrayBuffer | Stream): Promise<import("./export-types").AppUpload>;
    /**
     * Creates or updates an app signing secret
     * @return Promise for an App SigningSecret
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.upsertAppSigningSecret('app_definition_id', { value: 'tsren3s1....wn1e' }))
     * .then((appSigningSecret) => console.log(appSigningSecret))
     * .catch(console.error)
     * ```
     */
    upsertAppSigningSecret(appDefinitionId: string, data: CreateAppSigningSecretProps): Promise<import("./entities/app-signing-secret").AppSigningSecret>;
    /**
     * Gets an app signing secret
     * @return Promise for an App SigningSecret
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.getAppSigningSecret('app_definition_id'))
     * .then((appSigningSecret) => console.log(appSigningSecret))
     * .catch(console.error)
     * ```
     */
    getAppSigningSecret(appDefinitionId: string): Promise<import("./entities/app-signing-secret").AppSigningSecret>;
    /**
     * Deletes an app signing secret
     * @return Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.deleteAppSigningSecret('app_definition_id'))
     * .then((result) => console.log(result))
     * .catch(console.error)
     * ```
     */
    deleteAppSigningSecret(appDefinitionId: string): Promise<void>;
    /**
     * Creates or updates an app details entity
     * @return Promise for an App Details
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.upsertAppDetails('app_definition_id',
     *   { icon: { value: 'base_64_image', type: 'base64' }}
     *  ))
     * .then((appDetails) => console.log(appDetails))
     * .catch(console.error)
     * ```
     */
    upsertAppDetails(appDefinitionId: string, data: CreateAppDetailsProps): Promise<import("./entities/app-details").AppDetails>;
    /**
     * Gets an app details entity
     * @return Promise for an App Details
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.getAppDetails('app_definition_id'))
     * .then((appDetails) => console.log(appDetails))
     * .catch(console.error)
     * ```
     */
    getAppDetails(appDefinitionId: string): Promise<import("./entities/app-details").AppDetails>;
    /**
     * Deletes an app details entity.
     * @return Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.deleteAppDetails('app_definition_id'))
     * .then((result) => console.log(result))
     * .catch(console.error)
     * ```
     */
    deleteAppDetails(appDefinitionId: string): Promise<void>;
    /**
     * Creates an app action entity.
     * @return Promise that resolves an App Action entity
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.createAppAction('app_definition_id', {
     *    type: 'endpoint',
     *    name: 'my nice new app action',
     *    url: 'https://www.somewhere.com/action'
     *  }))
     * .then((appAction) => console.log(appAction))
     * .catch(console.error)
     * ```
     */
    createAppAction(appDefinitionId: string, data: CreateAppActionProps): Promise<import("./entities/app-action").AppAction>;
    /**
     * Updates an existing app action entity.
     * @return Promise that resolves an App Action entity
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.updateAppAction('app_definition_id', 'app_action_id', {
     *    type: 'endpoint',
     *    name: 'my nice updated app action',
     *    url: 'https://www.somewhere-else.com/action'
     *  }))
     * .then((appAction) => console.log(appAction))
     * .catch(console.error)
     * ```
     */
    updateAppAction(appDefinitionId: string, appActionId: string, data: CreateAppActionProps): Promise<import("./entities/app-action").AppAction>;
    /**
     * Deletes an app action entity.
     * @return Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.deleteAppAction('app_definition_id', 'app_action_id'))
     * .then((result) => console.log(result))
     * .catch(console.error)
     * ```
     */
    deleteAppAction(appDefinitionId: string, appActionId: string): Promise<void>;
    /**
     * Gets an existing app action entity.
     * @return Promise that resolves an App Action entity
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.getAppAction('app_definition_id', 'app_action_id'))
     * .then((appAction) => console.log(appAction))
     * .catch(console.error)
     * ```
     */
    getAppAction(appDefinitionId: string, appActionId: string): Promise<import("./entities/app-action").AppAction>;
    /**
     * Gets existing app actions for an App Definition.
     * @return Promise that resolves an App Action entity
     * @example ```javascript
     * const contentful = require('contentful-management')
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     *
     * client.getOrganization('<org_id>')
     * .then((org) => org.getAppActions('app_definition_id'))
     * .then((appActions) => console.log(appActions))
     * .catch(console.error)
     * ```
     */
    getAppActions(appDefinitionId: string): Promise<import("./common-types").Collection<import("./entities/app-action").AppAction, import("./entities/app-action").AppActionProps>>;
};
