"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Store = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = require("fs");

class Store {
  constructor(baseDir) {
    this.eventsJsonFileName = `events.json`;
    this.bufferFilePath = _path.default.join(baseDir, this.eventsJsonFileName);
    this.baseDir = baseDir;
  }

  appendToBuffer(event) {
    try {
      (0, _fs.appendFileSync)(this.bufferFilePath, event, `utf8`);
    } catch (e) {// ignore
    }
  }

  async flushFile(filePath, flushOperation) {
    const now = `${Date.now()}-${process.pid}`;
    let success = false;
    let contents = ``;

    try {
      if (!(0, _fs.existsSync)(filePath)) {
        return true;
      } // Unique temporary file name across multiple concurrent Gatsby instances


      const newPath = `${this.bufferFilePath}-${now}`;
      (0, _fs.renameSync)(filePath, newPath);
      contents = (0, _fs.readFileSync)(newPath, `utf8`);
      (0, _fs.unlinkSync)(newPath); // There is still a chance process dies while sending data and some events are lost
      // This will be ok for now, however

      success = await flushOperation(contents);
    } catch (e) {// ignore
    } finally {
      // if sending fails, we write the data back to the log
      if (!success) {
        this.appendToBuffer(contents);
      }
    }

    return true;
  }

  async startFlushEvents(flushOperation) {
    try {
      await this.flushFile(this.bufferFilePath, flushOperation);
      const files = (0, _fs.readdirSync)(this.baseDir);
      const filtered = files.filter(p => p.startsWith(`events.json`));

      for (const file of filtered) {
        await this.flushFile(_path.default.join(this.baseDir, file), flushOperation);
      }

      return true;
    } catch (e) {// ignore
    }

    return false;
  }

}

exports.Store = Store;