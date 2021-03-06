"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getRepositoryId = exports.getRepoMetadata = void 0;

var _path = _interopRequireWildcard(require("path"));

var _crypto = require("crypto");

var _child_process = require("child_process");

var _fs = require("fs");

var _gitUp = _interopRequireDefault(require("git-up"));

var _gatsbyCoreUtils = require("gatsby-core-utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// there are no types for git-up, so we create our own
// based on https://github.com/IonicaBizau/git-up/blob/60e6a4ff93d50360bbb80953bfab2f82d3418900/lib/index.js#L8-L28
const typedGitUp = _gitUp.default;

const hash = str => (0, _crypto.createHash)(`sha256`).update(str).digest(`hex`);

const getRepoMetadata = url => {
  try {
    // This throws for invalid urls
    const {
      resource: provider,
      pathname
    } = typedGitUp(url);
    const res = {
      provider: hash(provider)
    };
    const userAndRepo = pathname.split(`/`);

    if (userAndRepo.length >= 3) {
      res.owner = hash(userAndRepo[1]);
      res.name = hash(userAndRepo[2].replace(`.git`, ``));
    }

    return res;
  } catch (e) {// ignore
  }

  return null;
};

exports.getRepoMetadata = getRepoMetadata;

const getRepositoryIdFromPath = () => (0, _path.basename)(process.cwd());

const getGitRemoteWithGit = () => {
  try {
    // we may live multiple levels in git repo
    const originBuffer = (0, _child_process.execSync)(`git config --local --get remote.origin.url`, {
      timeout: 1000,
      stdio: `pipe`,
      windowsHide: true
    });
    const repo = String(originBuffer).trim();

    if (repo) {
      return {
        repositoryId: `git:${hash(repo)}`,
        repositoryData: getRepoMetadata(repo)
      };
    }
  } catch (e) {// ignore
  }

  return null;
};

const getRepositoryFromNetlifyEnv = () => {
  if (process.env.NETLIFY) {
    try {
      const url = process.env.REPOSITORY_URL;
      const repoPart = url.split(`@`)[1];

      if (repoPart) {
        return {
          repositoryId: `git:${hash(repoPart)}`,
          repositoryData: getRepoMetadata(url)
        };
      }
    } catch (e) {// ignore
    }
  }

  return null;
};

function getRepositoryFromHerokuEnv() {
  if ((0, _gatsbyCoreUtils.getCIName)() !== `Heroku`) {
    return null;
  } // Parse repository metadata from /proc/*/environ. This is a naive glob approach to only
  // look pids in procfs.


  const proc = (0, _fs.readdirSync)(`/proc`).filter(dir => Number.isFinite(Number(dir)));
  const len = proc.length;

  for (let i = 0; i < len; i++) {
    const dir = proc[i];

    try {
      var _readFileSync, _readFileSync$toStrin, _readFileSync$toStrin2, _readFileSync$toStrin3, _data$push_metadata;

      // Piggyback on internal datastructures for control processes to see the git repo info
      const environData = (_readFileSync = (0, _fs.readFileSync)(_path.default.join(`/proc`, dir, `environ`))) === null || _readFileSync === void 0 ? void 0 : (_readFileSync$toStrin = _readFileSync.toString(`utf8`)) === null || _readFileSync$toStrin === void 0 ? void 0 : (_readFileSync$toStrin2 = _readFileSync$toStrin.split(/\0/)) === null || _readFileSync$toStrin2 === void 0 ? void 0 : (_readFileSync$toStrin3 = _readFileSync$toStrin2.find(e => e.indexOf(`RECEIVE_DATA`) >= 0)) === null || _readFileSync$toStrin3 === void 0 ? void 0 : _readFileSync$toStrin3.replace(`RECEIVE_DATA=`, ``);

      if (!environData) {
        continue;
      }

      const data = JSON.parse(environData);
      const url = data === null || data === void 0 ? void 0 : (_data$push_metadata = data.push_metadata) === null || _data$push_metadata === void 0 ? void 0 : _data$push_metadata.source_url;

      if (url) {
        return {
          repositoryId: `heroku:${hash(url)}`,
          repositoryData: getRepoMetadata(url)
        };
      }
    } catch (e) {// ignore
    }
  }

  return null;
}

const getRepositoryId = () => {
  const gitRepo = getGitRemoteWithGit() || getRepositoryFromNetlifyEnv() || getRepositoryFromHerokuEnv();

  if (gitRepo) {
    return gitRepo;
  } else {
    const repo = getRepositoryIdFromPath();
    return {
      repositoryId: `pwd:${hash(repo)}`
    };
  }
};

exports.getRepositoryId = getRepositoryId;