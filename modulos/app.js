var Validation;
(function (Validation) {
    var charsRegexp = /^[A-Za-z]+$/;
    var cepRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isValidate = function (s) {
            return charsRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var CepValidator = /** @class */ (function () {
        function CepValidator() {
        }
        CepValidator.prototype.isValidate = function (s) {
            return s.length === 8 && cepRegexp.test(s);
        };
        return CepValidator;
    }());
    Validation.CepValidator = CepValidator;
})(Validation || (Validation = {}));
window.onload = function () {
    var strings = ['Rodrigo', '72145000', '321'];
    var validators = {};
    validators['ZIP code'] = new Validation.CepValidator();
    validators['Letters only'] = new Validation.LettersOnlyValidator();
    var result = "";
    strings.forEach(function (s) {
        for (var name in validators) {
            result = result + ' " ' + s + ' " ' + (validators[name].isValidate(s) ? ' matches' : ' does not match ' + name + "<br>");
        }
    });
    document.getElementById('content').innerHTML = result;
};
