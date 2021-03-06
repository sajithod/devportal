# is-invalid-path [![NPM version](https://badge.fury.io/js/is-invalid-path.svg)](http://badge.fury.io/js/is-invalid-path)

> Returns true if a file path has invalid characters.

Install with [npm](https://www.npmjs.com/)

```bash
npm i is-invalid-path --save
```

## Usage

```js
var isInvalid = require('is-invalid-path');

isInvalid('abc.js');
//=> 'false'
isInvalid('abc/def/ghi.js');
//=> 'false'
isInvalid('foo.js');
//=> 'false'

isInvalid();
//=> 'true'
isInvalid(null);
//=> 'true'
isInvalid('!foo.js');
//=> 'true'
isInvalid('*.js');
//=> 'true'
isInvalid('**/abc.js');
//=> 'true'
isInvalid('abc/*.js');
//=> 'true'
isInvalid('abc/(aaa|bbb).js');
//=> 'true'
isInvalid('abc/[a-z].js');
//=> 'true'
isInvalid('abc/{a,b}.js');
//=> 'true'
isInvalid('abc/?.js');
//=> 'true'
```

## Related

* [is-glob](https://github.com/jonschlinkert/is-glob): Returns `true` if the given string looks like a glob pattern.
* [is-git-url](https://github.com/jonschlinkert/is-git-url): Regex to validate that a URL is a git url.
* [micromatch](https://github.com/jonschlinkert/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. Just… [more](https://github.com/jonschlinkert/micromatch)
* [parse-glob](https://github.com/jonschlinkert/parse-glob): Parse a glob pattern into an object of tokens.

## Run tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/is-invalid-path/issues)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright (c) 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on May 06, 2015._

[assemble]: http://assemble.io
[template]: https://github.com/jonschlinkert/template
[verb]: https://github.com/assemble/verb
