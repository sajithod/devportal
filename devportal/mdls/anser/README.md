<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# anser

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/anser.svg)](https://travis-ci.org/IonicaBizau/anser/) [![Version](https://img.shields.io/npm/v/anser.svg)](https://www.npmjs.com/package/anser) [![Downloads](https://img.shields.io/npm/dt/anser.svg)](https://www.npmjs.com/package/anser) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> A low level parser for ANSI sequences.






## :rocket: Features


 - Converts text containing [ANSI color escape codes](http://en.wikipedia.org/wiki/ANSI_escape_code#Colors) into equivalent HTML elements.
 - Allows converting the input into JSON output.
 - HTML escaping
 - Converts links into HTML elements
 - Friendly APIs to use with  virtual dom libraries













## :cloud: Installation

```sh
# Using npm
npm install --save anser

# Using yarn
yarn add anser
```













## :clipboard: Example



```js
const Anser = require("anser");

const txt = "\u001b[38;5;196mHello\u001b[39m \u001b[48;5;226mWorld\u001b[49m";

console.log(Anser.ansiToHtml(txt));
// <span style="color:rgb(255, 0, 0)">Hello</span> <span style="background-color:rgb(255, 255, 0)">World</span>

console.log(Anser.ansiToHtml(txt, { use_classes: true }));
// <span class="ansi-palette-196-fg">Hello</span> <span class="ansi-palette-226-bg">World</span>

console.log(Anser.ansiToJson(txt));
// [ { content: '',
//     fg: null,
//     bg: null,
//     fg_truecolor: null,
//     bg_truecolor: null,
//     clearLine: undefined,
//     decoration: null,
//     was_processed: false,
//     isEmpty: [Function: isEmpty] },
//   { content: 'Hello',
//     fg: '255, 0, 0',
//     bg: null,
//     fg_truecolor: null,
//     bg_truecolor: null,
//     clearLine: false,
//     decoration: null,
//     was_processed: true,
//     isEmpty: [Function: isEmpty] },
//   { content: ' ',
//     fg: null,
//     bg: null,
//     fg_truecolor: null,
//     bg_truecolor: null,
//     clearLine: false,
//     decoration: null,
//     was_processed: false,
//     isEmpty: [Function: isEmpty] },
//   { content: 'World',
//     fg: null,
//     bg: '255, 255, 0',
//     fg_truecolor: null,
//     bg_truecolor: null,
//     clearLine: false,
//     decoration: null,
//     was_processed: true,
//     isEmpty: [Function: isEmpty] },
//   { content: '',
//     fg: null,
//     bg: null,
//     fg_truecolor: null,
//     bg_truecolor: null,
//     clearLine: false,
//     decoration: null,
//     was_processed: false,
//     isEmpty: [Function: isEmpty] } ]
```






When using **TypeScript** without --esModuleInterop enabled you can do the following:
```ts
import Anser = require('anser');
const txt = "\u001b[38;5;196mHello\u001b[39m \u001b[48;5;226mWorld\u001b[49m";
console.log(Anser.ansiToHtml(txt));
// <span style="color:rgb(255, 0, 0)">Hello</span> <span style="background-color:rgb(255, 255, 0)">World</span>
```

Or with --esModuleInterop enabled you can do the following:
```ts
import Anser from 'anser';
const txt = "\u001b[38;5;196mHello\u001b[39m \u001b[48;5;226mWorld\u001b[49m";
console.log(Anser.ansiToHtml(txt));
// <span style="color:rgb(255, 0, 0)">Hello</span> <span style="background-color:rgb(255, 255, 0)">World</span>
```







## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:





## :memo: Documentation


### `Anser.escapeForHtml(txt)`
Escape the input HTML.

This does the minimum escaping of text to make it compliant with HTML.
In particular, the '&','<', and '>' characters are escaped. This should
be run prior to `ansiToHtml`.

#### Params

- **String** `txt`: The input text (containing the ANSI snippets).

#### Return
- **String** The escaped html.

### `Anser.linkify(txt)`
Adds the links in the HTML.

This replaces any links in the text with anchor tags that display the
link. The links should have at least one whitespace character
surrounding it. Also, you should apply this after you have run
`ansiToHtml` on the text.

#### Params

- **String** `txt`: The input text.

#### Return
- **String** The HTML containing the <a> tags (unescaped).

### `Anser.ansiToHtml(txt, options)`
This replaces ANSI terminal escape codes with SPAN tags that wrap the
content.

This function only interprets ANSI SGR (Select Graphic Rendition) codes
that can be represented in HTML.
For example, cursor movement codes are ignored and hidden from output.
The default style uses colors that are very close to the prescribed
standard. The standard assumes that the text will have a black
background. These colors are set as inline styles on the SPAN tags.

Another option is to set `use_classes: true` in the options argument.
This will instead set classes on the spans so the colors can be set via
CSS. The class names used are of the format `ansi-*-fg/bg` and
`ansi-bright-*-fg/bg` where `*` is the color name,
i.e black/red/green/yellow/blue/magenta/cyan/white.

#### Params

- **String** `txt`: The input text.
- **Object** `options`: The options passed to the ansiToHTML method.

#### Return
- **String** The HTML output.

### `Anser.ansiToJson(txt, options)`
Converts ANSI input into JSON output.

#### Params

- **String** `txt`: The input text.
- **Object** `options`: The options passed to the ansiToHTML method.

#### Return
- **String** The HTML output.

### `Anser.ansiToText(txt)`
Converts ANSI input into text output.

#### Params

- **String** `txt`: The input text.

#### Return
- **String** The text output.

### `Anser()`
The `Anser` class.

#### Return
- **Anser**

### `setupPalette()`
Sets up the palette.

### `escapeForHtml(txt)`
Escapes the input text.

#### Params

- **String** `txt`: The input text.

#### Return
- **String** The escpaed HTML output.














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:









## :cake: Thanks
This project is highly based on [`ansi_up`](https://github.com/drudru/ansi_up), by [@drudru](https://github.com/drudru/). Thanks! :cake:








## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `react-native`
 - `gatsby`
 - `ansi-to-react`
 - `react-native-windows`
 - `@next/react-dev-overlay`
 - `@cubejs-client/react`
 - `mesh-devtool`
 - `nuclide-commons-ui`
 - `@redux-devtools/inspector-monitor-trace-tab`
 - `@atom-ide-community/nuclide-commons-ui`
 - `@theia/console`
 - `transformime`
 - `@viankakrisna/react-dev-utils`
 - `ansi-to-json`
 - `redux-devtools-trace-monitor`
 - `@opensumi/ide-debug`
 - `@kui-shell/plugin-client-common`
 - `react-webpack-build-helper`
 - `timer-react-dev-utils`
 - `react-native-macos`
 - `@axio/react-dev-utils`
 - `react-dev-utils-extra`
 - `ansi-html-themed`
 - `webpack-isomorphic-dev-middleware`
 - `react-native-okhttp-fork`
 - `uyun-react-dev-utils`
 - `ipynb2html-fix`
 - `react-dev-utils-sebfl-update`
 - `lambda-dev-utils`
 - `ipynb2html`
 - `react-error-overlay-canary`
 - `@classflow/react-dev-utils`
 - `react-error-overlay-dangerous`
 - `@devpodio/console`
 - `native-kakao-login`
 - `linklog`
 - `react-native-ytximkit`
 - `cycle-dev-utils`
 - `@viankakrisna/react-error-overlay`
 - `callstack-task-react-dev-utils`
 - `webpack-universal-compiler`
 - `@codewars/jest-reporter`
 - `react-native-kakao-maps`
 - `@hemith/react-native-tnk`
 - `react-native-contact-list`
 - `react-native-is7`
 - `react-native-biometric-authenticate`
 - `react-native-tvos-nz`
 - `@mindinventory/rn-top-navbar`
 - `rn-adyen-dropin`
 - `@classyllama/code-style`
 - `react-native-ansi-view`
 - `@corelmax/react-native-my2c2p-sdk`
 - `@proteria/react-scripts`
 - `native-apple-login`
 - `react-ansi`
 - `rn-custom-tabview`
 - `@felipesimmi/react-native-datalogic-module`
 - `@blkmarketco/components-library`
 - `ansi-to-react-with-options`
 - `callstack-task-react-error-overlay`
 - `@datalogic/react-native-datalogic-module`
 - `@tasumaniadiabori/react-native-draggable-flatlist`
 - `react-native-flyy`
 - `@prague-digi/react-error-overlay`
 - `@geeky-apo/react-native-advanced-clipboard`
 - `@apardellass/react-native-audio-stream`
 - `kunai`
 - `react-native-responsive-size`
 - `rn-flatlist-fork`
 - `@unforgiven/react-native`
 - `react-native-dsphoto-module`
 - `react-error-guard`
 - `react-native-sayhello-module`
 - `@plansys/react-dev-utils`
 - `singularityui-tailer`
 - `react-native-tvos`
 - `@saad27/react-native-bottom-tab-tour`
 - `react-native-plugpag-wrapper`
 - `react-native-pulsator-native`
 - `react-native-hlf-wrapper`
 - `@alloc/react-error-overlay`
 - `birken-react-native-community-image-editor`
 - `react-dev-utils-custom-hmr`
 - `nuclide`
 - `@ehyland-org/react-error-overlay`
 - `@naze/error`
 - `ada-pack`
 - `@jjavery/react-error-overlay`
 - `@office-iss/react-native-win32`
 - `react-native-sf`
 - `native-google-login`
 - `zc-react-dev-utils`
 - `react-native-dm-player`
 - `react-native-test-module-hhh`
 - `@openpolitica/matomo-next`
 - `@ryfow/react-native-windows`
 - `react-native-modal-progress-bar`
 - `stack-frame-overlay`
 - `@digibear/socket-bridge`
 - `userfetch`











## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW