"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EventStorage = void 0;

var _path = _interopRequireDefault(require("path"));

var _configstore = _interopRequireDefault(require("configstore"));

var _fetch = _interopRequireDefault(require("@turist/fetch"));

var _store = require("./store");

var _fsExtra = require("fs-extra");

var _gatsbyCoreUtils = require("gatsby-core-utils");

var _inMemoryStore = require("./in-memory-store");

const fetch = (0, _fetch.default)();
/* The events data collection is a spooled process that
 * buffers events to a local fs based buffer
 * which then is asynchronously flushed to the server.
 * This both increases the fault tolerance and allows collection
 * to continue even when working offline.
 */

class EventStorage {
  constructor() {
    this.analyticsApi = process.env.GATSBY_TELEMETRY_API || `https://analytics.gatsbyjs.com/events`;

    try {
      this.config = new _configstore.default(`gatsby`, {}, {
        globalConfigPath: true
      });
    } catch (e) {
      this.config = new _inMemoryStore.InMemoryConfigStore();
    }

    const baseDir = _path.default.dirname(this.config.path);

    try {
      (0, _fsExtra.ensureDirSync)(baseDir);
    } catch (e) {// TODO: Log this event
    }

    this.store = new _store.Store(baseDir);
    this.verbose = (0, _gatsbyCoreUtils.isTruthy)(process.env.GATSBY_TELEMETRY_VERBOSE);
    this.debugEvents = (0, _gatsbyCoreUtils.isTruthy)(process.env.GATSBY_TELEMETRY_DEBUG);
    this.disabled = (0, _gatsbyCoreUtils.isTruthy)(process.env.GATSBY_TELEMETRY_DISABLED);
  }

  isTrackingDisabled() {
    return this.disabled;
  }

  addEvent(event) {
    if (this.disabled) {
      return;
    }

    const eventString = JSON.stringify(event);

    if (this.debugEvents || this.verbose) {
      console.log(`Captured event:`, JSON.parse(eventString));

      if (this.debugEvents) {
        // Bail because we don't want to send debug events
        return;
      }
    }

    this.store.appendToBuffer(eventString + `\n`);
  }

  async sendEvents() {
    return this.store.startFlushEvents(async eventsData => {
      const events = eventsData.split(`\n`).filter(e => e && e.length > 2) // drop empty lines
      .map(e => JSON.parse(e));
      return this.submitEvents(events);
    });
  }

  async submitEvents(events) {
    try {
      const res = await fetch(this.analyticsApi, {
        method: `POST`,
        headers: {
          "content-type": `application/json`,
          "user-agent": this.getUserAgent()
        },
        body: JSON.stringify(events)
      });
      return res.ok;
    } catch (e) {
      return false;
    }
  }

  getUserAgent() {
    try {
      const {
        name,
        version
      } = require(`../package.json`);

      return `${name}:${version}`;
    } catch (e) {
      return `Gatsby Telemetry`;
    }
  }

  getConfig(key) {
    if (key) {
      return this.config.get(key);
    }

    return this.config.all;
  }

  updateConfig(key, value) {
    return this.config.set(key, value);
  }

}

exports.EventStorage = EventStorage;