/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Digit0 = 48;
    var Digit9 = 57;
    var A = 65;
    var a = 97;
    var f = 102;
    function hexDigit(charCode) {
        if (charCode < Digit0) {
            return 0;
        }
        if (charCode <= Digit9) {
            return charCode - Digit0;
        }
        if (charCode < a) {
            charCode += (a - A);
        }
        if (charCode >= a && charCode <= f) {
            return charCode - a + 10;
        }
        return 0;
    }
    exports.hexDigit = hexDigit;
    function colorFromHex(text) {
        if (text[0] !== '#') {
            return null;
        }
        switch (text.length) {
            case 4:
                return {
                    red: (hexDigit(text.charCodeAt(1)) * 0x11) / 255.0,
                    green: (hexDigit(text.charCodeAt(2)) * 0x11) / 255.0,
                    blue: (hexDigit(text.charCodeAt(3)) * 0x11) / 255.0,
                    alpha: 1
                };
            case 5:
                return {
                    red: (hexDigit(text.charCodeAt(1)) * 0x11) / 255.0,
                    green: (hexDigit(text.charCodeAt(2)) * 0x11) / 255.0,
                    blue: (hexDigit(text.charCodeAt(3)) * 0x11) / 255.0,
                    alpha: (hexDigit(text.charCodeAt(4)) * 0x11) / 255.0,
                };
            case 7:
                return {
                    red: (hexDigit(text.charCodeAt(1)) * 0x10 + hexDigit(text.charCodeAt(2))) / 255.0,
                    green: (hexDigit(text.charCodeAt(3)) * 0x10 + hexDigit(text.charCodeAt(4))) / 255.0,
                    blue: (hexDigit(text.charCodeAt(5)) * 0x10 + hexDigit(text.charCodeAt(6))) / 255.0,
                    alpha: 1
                };
            case 9:
                return {
                    red: (hexDigit(text.charCodeAt(1)) * 0x10 + hexDigit(text.charCodeAt(2))) / 255.0,
                    green: (hexDigit(text.charCodeAt(3)) * 0x10 + hexDigit(text.charCodeAt(4))) / 255.0,
                    blue: (hexDigit(text.charCodeAt(5)) * 0x10 + hexDigit(text.charCodeAt(6))) / 255.0,
                    alpha: (hexDigit(text.charCodeAt(7)) * 0x10 + hexDigit(text.charCodeAt(8))) / 255.0
                };
        }
        return null;
    }
    exports.colorFromHex = colorFromHex;
    function colorFrom256RGB(red, green, blue, alpha) {
        if (alpha === void 0) { alpha = 1.0; }
        return {
            red: red / 255.0,
            green: green / 255.0,
            blue: blue / 255.0,
            alpha: alpha
        };
    }
    exports.colorFrom256RGB = colorFrom256RGB;
});
