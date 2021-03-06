"use strict";

exports.__esModule = true;
exports.defaultError = exports.errorMap = exports.ErrorCategory = void 0;

var _commonTags = require("common-tags");

var _types = require("./types");

const optionalGraphQLInfo = context => `${context.codeFrame ? `\n\n${context.codeFrame}` : ``}${context.filePath ? `\n\nFile path: ${context.filePath}` : ``}${context.urlPath ? `\nUrl path: ${context.urlPath}` : ``}${context.plugin ? `\nPlugin: ${context.plugin}` : ``}`;

const getSharedNodeManifestWarning = inputManifest => `Plugin ${inputManifest.pluginName} called unstable_createNodeManifest() for node id "${inputManifest.node.id}" with a manifest id of "${inputManifest.manifestId}"`;

let ErrorCategory;
exports.ErrorCategory = ErrorCategory;

(function (ErrorCategory) {
  ErrorCategory["USER"] = "USER";
  ErrorCategory["SYSTEM"] = "SYSTEM";
  ErrorCategory["THIRD_PARTY"] = "THIRD_PARTY";
})(ErrorCategory || (exports.ErrorCategory = ErrorCategory = {}));

const errors = {
  "": {
    text: context => {
      const sourceMessage = context && context.sourceMessage ? context.sourceMessage : `There was an unhandled error and we could not retrieve more information. Please run the command with the --verbose flag again.`;
      return sourceMessage;
    },
    level: _types.Level.ERROR
  },
  "95312": {
    text: context => `"${context.ref}" is not available during server side rendering.`,
    level: _types.Level.ERROR,
    docsUrl: `https://gatsby.dev/debug-html`,
    category: ErrorCategory.USER
  },
  "95313": {
    text: context => `Building static HTML failed${context.errorPath ? ` for path "${context.errorPath}"` : ``}`,
    level: _types.Level.ERROR,
    docsUrl: `https://gatsby.dev/debug-html`
  },
  "95314": {
    text: context => context.errorMessage,
    level: _types.Level.ERROR,
    docsUrl: `https://gatsby.dev/debug-html`
  },
  "98123": {
    text: context => {
      var _context$sourceMessag;

      return `${context.stageLabel} failed\n\n${(_context$sourceMessag = context.sourceMessage) !== null && _context$sourceMessag !== void 0 ? _context$sourceMessag : context.message}`;
    },
    type: _types.Type.WEBPACK,
    level: _types.Level.ERROR
  },
  "98124": {
    text: context => {
      let message = `${context.stageLabel} failed\n\n${context.sourceMessage}\n\nIf you're trying to use a package make sure that '${context.packageName}' is installed. If you're trying to use a local file make sure that the path is correct.`;

      if (context.deprecationReason) {
        message += `\n\n${context.deprecationReason}`;
      }

      return message;
    },
    type: _types.Type.WEBPACK,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "85901": {
    text: context => (0, _commonTags.stripIndent)(`
        There was an error in your GraphQL query:\n\n${context.sourceMessage}${optionalGraphQLInfo(context)}`),
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR
  },
  // Deprecated
  "85907": {
    text: context => `There was an error in your GraphQL query:\n\n${context.message}`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR
  },
  "85908": {
    text: context => {
      const closestFragment = context.closestFragment ? `\n\nDid you mean to use ` + `"${context.closestFragment}"?` : ``;
      return `There was an error in your GraphQL query:\n\nThe fragment "${context.fragmentName}" does not exist.\n\n${context.codeFrame}${closestFragment}`;
    },
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  // Deprecated
  "85909": {
    text: context => context.sourceMessage,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR
  },
  "85910": {
    text: context => (0, _commonTags.stripIndents)(`
        Multiple "root" queries found: "${context.name}" and "${context.otherName}".
        Only the first ("${context.otherName}") will be registered.

        Instead of:

        ${context.beforeCodeFrame}

        Do:

        ${context.afterCodeFrame}

        This can happen when you use two page/static queries in one file. Please combine those into one query.
        If you're defining multiple components (each with a static query) in one file, you'll need to move each component to its own file.
      `),
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    docsUrl: `https://www.gatsbyjs.com/docs/graphql/`,
    category: ErrorCategory.USER
  },
  "85911": {
    text: context => (0, _commonTags.stripIndent)(`
        There was a problem parsing "${context.filePath}"; any GraphQL
        fragments or queries in this file were not processed.

        This may indicate a syntax error in the code, or it may be a file type
        that Gatsby does not know how to parse.
      `),
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "85912": {
    text: context => `Failed to parse preprocessed file ${context.filePath}`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR
  },
  "85913": {
    text: context => `There was a problem reading the file: ${context.filePath}`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR
  },
  "85914": {
    text: context => `There was a problem reading the file: ${context.filePath}`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR
  },
  // default parsing error
  "85915": {
    text: context => `There was a problem parsing the GraphQL query in file: ${context.filePath}`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR
  },
  "85916": {
    text: context => `String interpolation is not allowed in graphql tag:\n\n${context.codeFrame}`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "85917": {
    text: context => `Unexpected empty graphql tag${context.codeFrame ? `\n\n${context.codeFrame}` : ``}`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR
  },
  "85918": {
    text: context => (0, _commonTags.stripIndent)(`
        GraphQL syntax error in query:\n\n${context.sourceMessage}${context.codeFrame ? `\n\n${context.codeFrame}` : ``}`),
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  // Duplicate fragment
  "85919": {
    text: context => (0, _commonTags.stripIndent)(`
      Found two different GraphQL fragments with identical name "${context.fragmentName}". Fragment names must be unique

      File: ${context.leftFragment.filePath}
      ${context.leftFragment.codeFrame}

      File: ${context.rightFragment.filePath}
      ${context.rightFragment.codeFrame}
    `),
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  // Undefined variables in Queries
  "85920": {
    text: context => {
      const staticQueryMessage = (0, _commonTags.stripIndents)(`Suggestion 1:

      If you're not using a page query but a useStaticQuery / StaticQuery you see this error because they currently don't support variables. To learn more about the limitations of useStaticQuery / StaticQuery, please visit these docs:

      https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
      https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/`);
      const generalMessage = (0, _commonTags.stripIndents)(`Suggestion 2:

      You might have a typo in the variable name "${context.variableName}" or you didn't provide the variable via context to this page query. Have a look at the docs to learn how to add data to context:

      https://www.gatsbyjs.com/docs/how-to/querying-data/page-query#how-to-add-query-variables-to-a-page-query`);
      return (0, _commonTags.stripIndent)(`
        There was an error in your GraphQL query:\n\n${context.sourceMessage}${optionalGraphQLInfo(context)}\n\n${staticQueryMessage}\n\n${generalMessage}`);
    },
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "85921": {
    text: context => `There was an error in your GraphQL query:\n\n${context.sourceMessage}\n\nIf you're e.g. filtering for specific nodes make sure that you choose the correct field (that has the same type "${context.inputType}") or adjust the context variable to the type "${context.expectedType}".`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "85922": {
    text: context => `There was an error in your GraphQL query:

      ${context.sourceMessage}

      This can happen if you e.g. accidentally added { } to the field "${context.fieldName}". If you didn't expect "${context.fieldName}" to be of type "${context.fieldType}" make sure that your input source and/or plugin is correct.
      However, if you expect "value" to exist, the field might be accessible in another subfield. Please try your query in GraphiQL and use the GraphiQL explorer to see which fields you can query and what shape they have.

      It is recommended to explicitly type your GraphQL schema if you want to use optional fields. This way you don't have to add the mentioned
      "dummy content". Visit our docs to learn how you can define the schema for "${context.type}":
      https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization#creating-type-definitions`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "85923": {
    text: context => `There was an error in your GraphQL query:\n\n${context.sourceMessage}\n\nIf you don't expect "${context.field}" to exist on the type "${context.type}" it is most likely a typo.\nHowever, if you expect "${context.field}" to exist there are a couple of solutions to common problems:\n\n- If you added a new data source and/or changed something inside gatsby-node.js/gatsby-config.js, please try a restart of your development server\n- The field might be accessible in another subfield, please try your query in GraphiQL and use the GraphiQL explorer to see which fields you can query and what shape they have\n- You want to optionally use your field "${context.field}" and right now it is not used anywhere. Therefore Gatsby can't infer the type and add it to the GraphQL schema. A quick fix is to add at least one entry with that field ("dummy content")\n\nIt is recommended to explicitly type your GraphQL schema if you want to use optional fields. This way you don't have to add the mentioned "dummy content". Visit our docs to learn how you can define the schema for "${context.type}":\nhttps://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization#creating-type-definitions`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "85924": {
    text: context => `There was an error in your GraphQL query:\n\n${context.sourceMessage}\n\nThis can happen when you or a plugin/theme explicitly defined the GraphQL schema for this GraphQL object type via the schema customization API and "${context.value}" doesn't match the (scalar) type of "${context.type}".${optionalGraphQLInfo(context)}`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "85925": {
    text: context => `There was an error in your GraphQL query:\n\n${context.sourceMessage}\n\nThe field "${context.field}" was explicitly defined as non-nullable via the schema customization API (by yourself or a plugin/theme). This means that this field is not optional and you have to define a value. If this is not your desired behavior and you defined the schema yourself, go to "createTypes" in gatsby-node.js. If you're using a plugin/theme, you can learn more here on how to fix field types:\nhttps://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization#fixing-field-types${optionalGraphQLInfo(context)}`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "85926": {
    text: context => `There was an error in your GraphQL query:\n\n${context.sourceMessage}\n\nThis can happen when you used graphql\`{ ...yourQuery }\` instead of graphql(\`{ ...yourQuery }\`) inside gatsby-node.js\n\nYou can't use the template literal function you're used to (from page queries) and rather have to call graphql() as a normal function.`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "85927": {
    text: context => `There was an error in your GraphQL query:\n\n${context.sourceMessage}\n\nSee if ${context.variable} has a typo or ${context.operation} doesn't actually require this variable.`,
    type: _types.Type.GRAPHQL,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  // Config errors
  "10122": {
    text: context => `The site's gatsby-config.js failed validation:\n\n${context.sourceMessage}`,
    type: _types.Type.CONFIG,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "10123": {
    text: context => `We encountered an error while trying to load your site's ${context.configName}. Please fix the error and try again.`,
    type: _types.Type.CONFIG,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "10124": {
    text: context => `It looks like you were trying to add the config file? Please rename "${context.nearMatch}" to "${context.configName}.js"`,
    type: _types.Type.CONFIG,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "10125": {
    text: context => `Your ${context.configName} file is in the wrong place. You've placed it in the src/ directory. It must instead be at the root of your site next to your package.json file.`,
    type: _types.Type.CONFIG,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "10126": {
    text: context => `${context.path}/${context.configName} cannot export a function.` + `\n\nA ${context.configName} exported as a Function can only be used as a theme and not run directly.` + `\nIf you are trying to run a theme directly, use the theme in an example site or starter instead and run that site to test.` + `\nIf you are in the root gatsby-config.js for your site, change the export to be an object and not a function as functions` + `\nare not supported in the root gatsby-config.`,
    type: _types.Type.CONFIG,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "10226": {
    text: context => [`Couldn't find the "${context.themeName}" plugin declared in "${context.configFilePath}".`, context.pathToLocalTheme && `Tried looking for a local plugin in ${context.pathToLocalTheme}.`, `Tried looking for an installed package in the following paths:\n${context.nodeResolutionPaths.map(potentialLocationPath => ` - ${potentialLocationPath}`).join(`\n`)}`].filter(Boolean).join(`\n\n`),
    type: _types.Type.CONFIG,
    level: _types.Level.ERROR
  },
  // Plugin errors
  "11321": {
    text: context => {
      var _context$sourceMessag2;

      return `"${context.pluginName}" threw an error while running the ${context.api} lifecycle:\n\n${(_context$sourceMessag2 = context.sourceMessage) !== null && _context$sourceMessag2 !== void 0 ? _context$sourceMessag2 : context.message}${optionalGraphQLInfo(context)}`;
    },
    type: _types.Type.PLUGIN,
    level: _types.Level.ERROR
  },
  "11322": {
    text: context => `${context.pluginName} created a page and didn't pass the path to the component.\n\nThe page object passed to createPage:\n${JSON.stringify(context.pageObject, null, 4)}\n\nSee the documentation for the "createPage" action ??? https://www.gatsbyjs.com/docs/reference/config-files/actions#createPage`,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "11323": {
    text: context => `${context.pluginName} must set the page path when creating a page.\n\nThe page object passed to createPage:\n${JSON.stringify(context.pageObject, null, 4)}\n\nSee the documentation for the "createPage" action ??? https://www.gatsbyjs.com/docs/reference/config-files/actions#createPage`,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "11324": {
    text: context => `${context.message}\n\nSee the documentation for the "createPage" action ??? https://www.gatsbyjs.com/docs/reference/config-files/actions#createPage`,
    level: _types.Level.ERROR
  },
  "11325": {
    text: context => `${context.pluginName} created a page with a component that doesn't exist.\n\nThe path to the missing component is "${context.component}"\n\nThe page object passed to createPage:\n${JSON.stringify(context.pageObject, null, 4)}\n\nSee the documentation for the "createPage" action ??? https://www.gatsbyjs.com/docs/reference/config-files/actions#createPage`,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "11326": {
    text: context => `${context.pluginName} must set the absolute path to the page component when create creating a page.\n\nThe (relative) path you used for the component is "${context.component}"\n\nYou can convert a relative path to an absolute path by requiring the path module and calling path.resolve() e.g.\n\nconst path = require("path")\npath.resolve("${context.component}")\n\nThe page object passed to createPage:\n${JSON.stringify(context.pageObject, null, 4)}\n\nSee the documentation for the "createPage" action ??? https://www.gatsbyjs.com/docs/reference/config-files/actions#createPage`,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "11327": {
    text: context => `You have an empty file in the "src/pages" directory at "${context.relativePath}". Please remove it or make it a valid component`,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  "11328": {
    text: context => `A page component must export a React component for it to be valid. Please make sure this file exports a React component:\n\n${context.fileName}`,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  // invalid or deprecated APIs
  "11329": {
    text: context => [(0, _commonTags.stripIndent)(`
          Your plugins must export known APIs from their gatsby-${context.exportType}.js.

          See https://www.gatsbyjs.com/docs/reference/config-files/gatsby-${context.exportType}/ for the list of Gatsby ${context.exportType} APIs.
        `)].concat([``].concat(context.errors)).concat(context.fixes.length > 0 ? [``, `Some of the following may help fix the error(s):`, ``, ...context.fixes.map(fix => `- ${fix}`)] : []).join(`\n`),
    level: _types.Level.ERROR
  },
  // "X" is not defined in Gatsby's node APIs
  "11330": {
    text: context => {
      var _context$sourceMessag3;

      return `"${context.pluginName}" threw an error while running the ${context.api} lifecycle:\n\n${(_context$sourceMessag3 = context.sourceMessage) !== null && _context$sourceMessag3 !== void 0 ? _context$sourceMessag3 : context.message}\n\n${context.codeFrame}\n\nMake sure that you don't have a typo somewhere and use valid arguments in ${context.api} lifecycle.\nLearn more about ${context.api} here: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#${context.api}`;
    },
    type: _types.Type.PLUGIN,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  // Invalid plugin options
  "11331": {
    text: context => [(0, _commonTags.stripIndent)(`
          Invalid plugin options for "${context.pluginName}"${context.configDir ? `, configured by ${context.configDir}` : ``}:
        `)].concat([``]).concat(context.validationErrors.map(error => `- ${error.message}`).join(`\n`)).join(`\n`),
    type: _types.Type.PLUGIN,
    level: _types.Level.ERROR,
    category: ErrorCategory.USER
  },
  // node object didn't pass validation
  "11467": {
    text: context => [`The new node didn't pass validation: ${context.validationErrorMessage}`, `Failing node:`, JSON.stringify(context.node, null, 4), `Note: there might be more nodes that failed validation. Output is limited to one node per type of validation failure to limit terminal spam.`, context.codeFrame].filter(Boolean).join(`\n\n`),
    level: _types.Level.ERROR,
    docsUrl: `https://www.gatsbyjs.com/docs/reference/config-files/actions#createNode`
  },
  // local SSL certificate errors
  "11521": {
    text: () => `for custom ssl --https, --cert-file, and --key-file must be used together`,
    level: _types.Level.ERROR,
    docsUrl: `https://www.gatsbyjs.com/docs/local-https#custom-key-and-certificate-files`,
    category: ErrorCategory.USER
  },
  "11522": {
    text: () => `Failed to generate dev SSL certificate`,
    level: _types.Level.ERROR,
    docsUrl: `https://www.gatsbyjs.com/docs/local-https#setup`
  },
  // cli new command errors
  "11610": {
    text: context => `It looks like you gave wrong argument orders . Try running instead "gatsby new ${context.starter} ${context.rootPath}"`,
    level: _types.Level.ERROR,
    docsUrl: `https://www.gatsbyjs.com/docs/reference/gatsby-cli#new`,
    category: ErrorCategory.USER
  },
  "11611": {
    text: context => `It looks like you passed a URL to your project name. Try running instead "gatsby new new-gatsby-project ${context.rootPath}"`,
    level: _types.Level.ERROR,
    docsUrl: `https://www.gatsbyjs.com/docs/reference/gatsby-cli#new`,
    category: ErrorCategory.USER
  },
  "11612": {
    text: context => `Could not create a project in "${context.path}" because it's not a valid path`,
    level: _types.Level.ERROR,
    docsUrl: `https://www.gatsbyjs.com/docs/reference/gatsby-cli#new`,
    category: ErrorCategory.USER
  },
  "11613": {
    text: context => `Directory ${context.rootPath} is already an npm project`,
    level: _types.Level.ERROR,
    docsUrl: `https://www.gatsbyjs.com/docs/reference/gatsby-cli#new`
  },
  "11614": {
    text: context => (0, _commonTags.stripIndent)(`
        The path "${context.path}" errored during SSR.
        Edit its component ${context.filePath}${context.line ? `:${context.line}:${context.column}` : ``} to resolve the error.`),
    level: _types.Level.WARNING
  },
  "11615": {
    text: context => (0, _commonTags.stripIndent)(`
        There was an error while trying to load dev-404-page:
        ${context.sourceMessage}`),
    level: _types.Level.ERROR,
    category: ErrorCategory.SYSTEM
  },
  "11616": {
    text: context => (0, _commonTags.stripIndent)(`
        There was an error while trying to create the client-only shell for displaying SSR errors:
        ${context.sourceMessage}`),
    level: _types.Level.ERROR,
    category: ErrorCategory.SYSTEM
  },
  // Watchdog
  "11701": {
    text: context => `Terminating the process (due to GATSBY_WATCHDOG_STUCK_STATUS_TIMEOUT):\n\nGatsby is in "${context.status}" state without any updates for ${(context.stuckStatusWatchdogTimeoutDelay / 1000).toFixed(3)} seconds. Activities preventing Gatsby from transitioning to idle state:\n\n${context.stuckStatusDiagnosticMessage}`,
    level: _types.Level.ERROR
  },

  /** Node Manifest warnings */
  "11801": {
    // @todo add docs link to "using Preview" once it's updated with an explanation of ownerNodeId
    text: ({
      inputManifest
    }) => `${getSharedNodeManifestWarning(inputManifest)} but Gatsby couldn't find a page for this node.
      If you want a manifest to be created for this node (for previews or other purposes), ensure that a page was created (and that a ownerNodeId is added to createPage() if you're not using the Filesystem Route API).\n`,
    level: _types.Level.WARNING,
    category: ErrorCategory.USER
  },
  "11802": {
    // @todo add docs link to "using Preview" once it's updated with an explanation of ownerNodeId
    text: ({
      inputManifest,
      pagePath
    }) => `${getSharedNodeManifestWarning(inputManifest)} but Gatsby didn't find a ownerNodeId for the page at ${pagePath}\nUsing the first page that was found with the node manifest id set in pageContext.id in createPage().\nThis may result in an inaccurate node manifest (for previews or other purposes).`,
    level: _types.Level.WARNING,
    category: ErrorCategory.USER
  },
  "11803": {
    // @todo add docs link to "using Preview" once it's updated with an explanation of ownerNodeId
    text: ({
      inputManifest,
      pagePath
    }) => `${getSharedNodeManifestWarning(inputManifest)} but Gatsby didn't find a ownerNodeId for the page at ${pagePath}\nUsing the first page where this node is queried.\nThis may result in an inaccurate node manifest (for previews or other purposes).`,
    level: _types.Level.WARNING,
    category: ErrorCategory.USER
  }
  /** End Node Manifest warnings */

};
const errorMap = errors;
exports.errorMap = errorMap;
const defaultError = errorMap[``];
exports.defaultError = defaultError;