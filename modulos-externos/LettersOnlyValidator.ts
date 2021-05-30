import validation = require('./Validation');

var lettersRegexp = /^[A-Za-z]+$/;

class LettesOnlyValidator implements validation.StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}

export = LettesOnlyValidator;
