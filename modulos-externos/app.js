"use strict";
exports.__esModule = true;
var letterValidator = require("./LettersOnlyValidator");
var zipValidator = require("./ZipCodeValidator");
var strings = ['Hello', '72145606', '001'];
var validators = {};
validators['Zip code'] = new zipValidator();
validators['Letter only'] = new letterValidator();
var result = "";
strings.forEach(function (s) {
    for (var name in validators) {
        result = result + ' " ' + s + ' " ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not matches ' + name + "<br>");
    }
});
document.getElementById('content').innerHTML = result;
