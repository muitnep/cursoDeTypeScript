"use strict";
var lettersRegexp = /^[A-Za-z]+$/;
var LettesOnlyValidator = /** @class */ (function () {
    function LettesOnlyValidator() {
    }
    LettesOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettesOnlyValidator;
}());
module.exports = LettesOnlyValidator;
