"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var fs = _interopRequireWildcard(require("fs"));

var path = _interopRequireWildcard(require("path"));

var _safeSharp = _interopRequireDefault(require("./safe-sharp"));

var _gatsbyCoreUtils = require("gatsby-core-utils");

var _common = require("./common");

var _nodeHelpers = require("./node-helpers");

var _pluginOptionsSchema = _interopRequireDefault(require("./pluginOptionsSchema"));

_safeSharp.default.simd(true); // Handle Sharp's concurrency based on the Gatsby CPU count
// See: http://sharp.pixelplumbing.com/en/stable/api-utility/#concurrency
// See: https://www.gatsbyjs.org/docs/multi-core-builds/


_safeSharp.default.concurrency((0, _gatsbyCoreUtils.cpuCoreCount)());

function generateIcon(_x, _x2) {
  return _generateIcon.apply(this, arguments);
}

function _generateIcon() {
  _generateIcon = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(icon, srcIcon) {
    var imgPath, size, density;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            imgPath = path.join("public", icon.src); // console.log(`generating icon: `, icon.src)
            // if (fs.existsSync(imgPath)) {
            //   console.log(`icon already Exists, not regenerating`)
            //   return true
            // }

            size = parseInt(icon.sizes.substring(0, icon.sizes.lastIndexOf("x"))); // For vector graphics, instruct sharp to use a pixel density
            // suitable for the resolution we're rasterizing to.
            // For pixel graphics sources this has no effect.
            // Sharp accept density from 1 to 2400

            density = Math.min(2400, Math.max(1, size));
            return _context4.abrupt("return", (0, _safeSharp.default)(srcIcon, {
              density: density
            }).resize({
              width: size,
              height: size,
              fit: "contain",
              background: {
                r: 255,
                g: 255,
                b: 255,
                alpha: 0
              }
            }).toFile(imgPath));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _generateIcon.apply(this, arguments);
}

function checkCache(_x3, _x4, _x5, _x6, _x7) {
  return _checkCache.apply(this, arguments);
}

function _checkCache() {
  _checkCache = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(cache, icon, srcIcon, srcIconDigest, callback) {
    var cacheKey, created;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            cacheKey = (0, _gatsbyCoreUtils.createContentDigest)("" + icon.src + srcIcon + srcIconDigest);
            created = cache.get(cacheKey, srcIcon);

            if (created) {
              _context5.next = 13;
              break;
            }

            cache.set(cacheKey, true);
            _context5.prev = 4;
            _context5.next = 7;
            return callback(icon, srcIcon);

          case 7:
            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](4);
            cache.set(cacheKey, false);
            throw _context5.t0;

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 9]]);
  }));
  return _checkCache.apply(this, arguments);
}

exports.pluginOptionsSchema = _pluginOptionsSchema.default;
/**
 * Setup pluginOption defaults
 * TODO: Remove once pluginOptionsSchema is stable
 */

exports.onPreInit = function (_, pluginOptions) {
  var _pluginOptions$cache_, _pluginOptions$includ, _pluginOptions$legacy, _pluginOptions$theme_;

  pluginOptions.cache_busting_mode = (_pluginOptions$cache_ = pluginOptions.cache_busting_mode) !== null && _pluginOptions$cache_ !== void 0 ? _pluginOptions$cache_ : "query";
  pluginOptions.include_favicon = (_pluginOptions$includ = pluginOptions.include_favicon) !== null && _pluginOptions$includ !== void 0 ? _pluginOptions$includ : true;
  pluginOptions.legacy = (_pluginOptions$legacy = pluginOptions.legacy) !== null && _pluginOptions$legacy !== void 0 ? _pluginOptions$legacy : true;
  pluginOptions.theme_color_in_head = (_pluginOptions$theme_ = pluginOptions.theme_color_in_head) !== null && _pluginOptions$theme_ !== void 0 ? _pluginOptions$theme_ : true;
  pluginOptions.cacheDigest = null;

  if (pluginOptions.cache_busting_mode !== "none" && pluginOptions.icon) {
    pluginOptions.cacheDigest = (0, _gatsbyCoreUtils.createContentDigest)(fs.readFileSync(pluginOptions.icon));
  }
};

exports.onPostBootstrap = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref, _ref2) {
    var reporter, parentSpan, basePath, localize, manifest, activity, cache, locales;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reporter = _ref.reporter, parentSpan = _ref.parentSpan, basePath = _ref.basePath;
            localize = _ref2.localize, manifest = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["localize"]);
            activity = reporter.activityTimer("Build manifest and related icons", {
              parentSpan: parentSpan
            });
            activity.start();
            cache = new Map();
            _context.next = 7;
            return makeManifest({
              cache: cache,
              reporter: reporter,
              pluginOptions: manifest,
              basePath: basePath
            });

          case 7:
            if (!Array.isArray(localize)) {
              _context.next = 11;
              break;
            }

            locales = [].concat(localize);
            _context.next = 11;
            return Promise.all(locales.map(function (locale) {
              var cacheModeOverride = {};
              /* localization requires unique filenames for output files if a different src Icon is defined.
                 otherwise one language would override anothers icons in automatic mode.
              */

              if (locale.hasOwnProperty("icon") && !locale.hasOwnProperty("icons")) {
                // console.debug(`OVERRIDING CACHE BUSTING`, locale)
                cacheModeOverride = {
                  cache_busting_mode: "name"
                };
              }

              return makeManifest({
                cache: cache,
                reporter: reporter,
                pluginOptions: (0, _extends2.default)({}, manifest, locale, cacheModeOverride),
                shouldLocalize: true,
                basePath: basePath
              });
            }));

          case 11:
            activity.end();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} makeManifestArgs
 * @property {Object} cache - from gatsby-node api
 * @property {Object} reporter - from gatsby-node api
 * @property {Object} pluginOptions - from gatsby-node api/gatsby config
 * @property {boolean?} shouldLocalize
 * @property {string?} basePath - string of base path frpvided by gatsby node
 */

/**
 * Build manifest
 * @param {makeManifestArgs}
 */


var makeManifest = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref4) {
    var _pluginOptions$includ2;

    var cache, reporter, pluginOptions, _ref4$shouldLocalize, shouldLocalize, _ref4$basePath, basePath, icon, manifest, suffix, faviconIsEnabled, paths, processIconSet, sharpIcon, metadata, cacheMode, iconDigest;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            cache = _ref4.cache, reporter = _ref4.reporter, pluginOptions = _ref4.pluginOptions, _ref4$shouldLocalize = _ref4.shouldLocalize, shouldLocalize = _ref4$shouldLocalize === void 0 ? false : _ref4$shouldLocalize, _ref4$basePath = _ref4.basePath, basePath = _ref4$basePath === void 0 ? "" : _ref4$basePath;
            icon = pluginOptions.icon, manifest = (0, _objectWithoutPropertiesLoose2.default)(pluginOptions, ["icon"]);
            suffix = shouldLocalize && pluginOptions.lang ? "_" + pluginOptions.lang : "";
            faviconIsEnabled = (_pluginOptions$includ2 = pluginOptions.include_favicon) !== null && _pluginOptions$includ2 !== void 0 ? _pluginOptions$includ2 : true; // Delete options we won't pass to the manifest.webmanifest.

            delete manifest.plugins;
            delete manifest.legacy;
            delete manifest.theme_color_in_head;
            delete manifest.cache_busting_mode;
            delete manifest.crossOrigin;
            delete manifest.icon_options;
            delete manifest.include_favicon; // If icons are not manually defined, use the default icon set.

            if (!manifest.icons) {
              manifest.icons = [].concat(_common.defaultIcons);
            } // Specify extra options for each icon (if requested).


            if (pluginOptions.icon_options) {
              manifest.icons = manifest.icons.map(function (icon) {
                return (0, _extends2.default)({}, pluginOptions.icon_options, icon);
              });
            } // Determine destination path for icons.


            paths = {};
            manifest.icons.forEach(function (icon) {
              var iconPath = path.join("public", path.dirname(icon.src));

              if (!paths[iconPath]) {
                var exists = fs.existsSync(iconPath); // create destination directory if it doesn't exist

                if (!exists) {
                  fs.mkdirSync(iconPath, {
                    recursive: true
                  });
                }

                paths[iconPath] = true;
              }
            }); // Only auto-generate icons if a src icon is defined.

            if (!(typeof icon !== "undefined")) {
              _context3.next = 33;
              break;
            }

            /**
             * Given an array of icon configs, generate the various output sizes from
             * the source icon image.
             */
            processIconSet = /*#__PURE__*/function () {
              var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(iconSet) {
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!(cacheMode === "query")) {
                          _context2.next = 3;
                          break;
                        }

                        _context2.next = 3;
                        return Promise.all(iconSet.map(function (dstIcon) {
                          return checkCache(cache, dstIcon, icon, iconDigest, generateIcon);
                        }));

                      case 3:
                        if (cacheMode !== "none") {
                          iconSet = iconSet.map(function (icon) {
                            var newIcon = (0, _extends2.default)({}, icon);
                            newIcon.src = (0, _common.addDigestToPath)(icon.src, iconDigest, cacheMode);
                            return newIcon;
                          });
                        } // if file names are being modified by cacheBusting icons must be generated after cache busting runs


                        if (!(cacheMode !== "query")) {
                          _context2.next = 7;
                          break;
                        }

                        _context2.next = 7;
                        return Promise.all(iconSet.map(function (dstIcon) {
                          return checkCache(cache, dstIcon, icon, iconDigest, generateIcon);
                        }));

                      case 7:
                        return _context2.abrupt("return", iconSet);

                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function processIconSet(_x11) {
                return _ref6.apply(this, arguments);
              };
            }();

            if ((0, _nodeHelpers.doesIconExist)(icon)) {
              _context3.next = 19;
              break;
            }

            throw new Error("icon (" + icon + ") does not exist as defined in gatsby-config.js. Make sure the file exists relative to the root of the site.");

          case 19:
            sharpIcon = (0, _safeSharp.default)(icon);
            _context3.next = 22;
            return sharpIcon.metadata();

          case 22:
            metadata = _context3.sent;

            if (metadata.width !== metadata.height) {
              reporter.warn("The icon(" + icon + ") you provided to 'gatsby-plugin-manifest' is not square.\n" + "The icons we generate will be square and for the best results we recommend you provide a square icon.\n");
            } // add cache busting


            cacheMode = typeof pluginOptions.cache_busting_mode !== "undefined" ? pluginOptions.cache_busting_mode : "query";
            iconDigest = (0, _gatsbyCoreUtils.createContentDigest)(fs.readFileSync(icon));
            _context3.next = 28;
            return processIconSet(manifest.icons);

          case 28:
            manifest.icons = _context3.sent;

            if (!faviconIsEnabled) {
              _context3.next = 33;
              break;
            }

            _context3.next = 32;
            return processIconSet(_common.favicons);

          case 32:
            if (metadata.format === "svg") {
              fs.copyFileSync(icon, path.join("public", "favicon.svg"));
            }

          case 33:
            // Fix #18497 by prefixing paths
            manifest.icons = manifest.icons.map(function (icon) {
              return (0, _extends2.default)({}, icon, {
                src: (0, _gatsbyCoreUtils.slash)(path.join(basePath, icon.src))
              });
            });

            if (manifest.start_url) {
              manifest.start_url = path.posix.join(basePath, manifest.start_url);
            } // Write manifest


            fs.writeFileSync(path.join("public", "manifest" + suffix + ".webmanifest"), JSON.stringify(manifest));

          case 36:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function makeManifest(_x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.onCreateWebpackConfig = function (_ref7, pluginOptions) {
  var actions = _ref7.actions,
      plugins = _ref7.plugins;
  actions.setWebpackConfig({
    plugins: [plugins.define({
      __MANIFEST_PLUGIN_HAS_LOCALISATION__: pluginOptions.localize && pluginOptions.localize.length
    })]
  });
};