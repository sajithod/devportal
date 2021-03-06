"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

// Add Babel plugin
try {
  require.resolve("babel-plugin-styled-components");
} catch (e) {
  throw new Error("'babel-plugin-styled-components' is not installed which is needed by plugin 'gatsby-plugin-styled-components'");
}

exports.pluginOptionsSchema = function (_ref) {
  var Joi = _ref.Joi;
  return Joi.object({
    displayName: Joi.boolean().default(true).description("This option enhances the attached CSS class name on each component with richer output to help identify your components in the DOM without React DevTools. In your page source you'll see: <button class=\"Button-asdf123 asdf123\" /> instead of just <button class=\"asdf123\" />"),
    fileName: Joi.boolean().default(true).description("Prefix the displayName of a component with the filename."),
    minify: Joi.boolean().default(true).description("Remove the whitespace from the CSS."),
    namespace: Joi.string().default("").description("The namespace will ensure that your class names will be unique; this setting is handy when you are working with micro frontends where class name collision can occur."),
    transpileTemplateLiterals: Joi.boolean().default(true).description("Transpile tagged template literals into optimized code."),
    topLevelImportPaths: Joi.array().default([]).items(Joi.string()).description("Top level import paths allowed to identify library"),
    pure: Joi.boolean().default(false).description("By default minifiers cannot properly perform dead code elimination on styled components because they are assumed to have side effects. This enables \"pure annotations\" to tell the compiler that they do not have side effects.")
  });
};

exports.onCreateBabelConfig = function (_ref2, pluginOptions) {
  var stage = _ref2.stage,
      actions = _ref2.actions;
  var ssr = stage === "build-html" || stage === "build-javascript";
  actions.setBabelPlugin({
    name: "babel-plugin-styled-components",
    stage: stage,
    options: (0, _extends2.default)({}, pluginOptions, {
      ssr: ssr
    })
  });
};