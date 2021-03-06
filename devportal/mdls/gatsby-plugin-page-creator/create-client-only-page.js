"use strict";

exports.__esModule = true;
exports.createClientOnlyPage = createClientOnlyPage;

var _gatsbyPageUtils = require("gatsby-page-utils");

var _gatsbyCoreUtils = require("gatsby-core-utils");

// Create a client side page with a matchPath
// based on the `[]` existing in it's file path.
// e.g., a file named `src/pages/foo/[bar].js`
// gets created at the url: `foo/:bar`
function createClientOnlyPage(filePath, absolutePath, actions) {
  var path = (0, _gatsbyPageUtils.createPath)(filePath);
  actions.createPage({
    path: path,
    matchPath: (0, _gatsbyCoreUtils.getMatchPath)(path),
    component: absolutePath,
    context: {}
  });
}