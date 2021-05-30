import validation = require('./Validation');
import letterValidator = require('./LettersOnlyValidator');
import zipValidator = require('./ZipCodeValidator');

var strings = ['Hello', '72145606', '001'];

var validators: { [s: string]: validation.StringValidator; } = {};
validators['Zip code'] = new zipValidator();
validators['Letter only'] = new letterValidator();

var result: string = "";
strings.forEach(s => {
    for (var name in validators) {
        result = result + ' " ' + s + ' " ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not matches ' + name + "<br>");
    }
});

document.getElementById('content').innerHTML = result;
