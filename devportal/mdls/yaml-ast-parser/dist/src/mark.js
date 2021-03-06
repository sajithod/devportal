'use strict';
var common = require("./common");
var Mark = (function () {
    function Mark(name, buffer, position, line, column) {
        this.name = name;
        this.buffer = buffer;
        this.position = position;
        this.line = line;
        this.column = column;
    }
    Mark.prototype.getSnippet = function (indent, maxLength) {
        if (indent === void 0) { indent = 0; }
        if (maxLength === void 0) { maxLength = 75; }
        var head, start, tail, end, snippet;
        if (!this.buffer) {
            return null;
        }
        indent = indent || 4;
        maxLength = maxLength || 75;
        head = '';
        start = this.position;
        while (start > 0 && -1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1))) {
            start -= 1;
            if (this.position - start > (maxLength / 2 - 1)) {
                head = ' ... ';
                start += 5;
                break;
            }
        }
        tail = '';
        end = this.position;
        while (end < this.buffer.length && -1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end))) {
            end += 1;
            if (end - this.position > (maxLength / 2 - 1)) {
                tail = ' ... ';
                end -= 5;
                break;
            }
        }
        snippet = this.buffer.slice(start, end);
        return common.repeat(' ', indent) + head + snippet + tail + '\n' +
            common.repeat(' ', indent + this.position - start + head.length) + '^';
    };
    Mark.prototype.toString = function (compact) {
        if (compact === void 0) { compact = true; }
        var snippet, where = '';
        if (this.name) {
            where += 'in "' + this.name + '" ';
        }
        where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);
        if (!compact) {
            snippet = this.getSnippet();
            if (snippet) {
                where += ':\n' + snippet;
            }
        }
        return where;
    };
    return Mark;
}());
module.exports = Mark;
//# sourceMappingURL=mark.js.map