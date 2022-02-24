# Redocly Portal

## Install

```
$: npm install
```

## Run locally

```
$: npm start
```

## Run tests locally.

- modify package.json by adding to scripts -> test -> PERCY_TOKEN=\<token>. Use token from Percy.io
- run server `npm run start-test-server`
- run tests `npm run test`

## Run cypress tests on PR before merge
Add label `run_tests_cypress` to the PR. It will start running cypress tests.