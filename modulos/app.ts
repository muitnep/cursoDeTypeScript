
window.onload = () => {

    var strings = ['Rodrigo', '72145000', '321'];

    var validators: { [s: string]: Validation.StringValidator; } = {};

    validators['ZIP code'] = new Validation.CepValidator();
    validators['Letters only'] = new Validation.LettersOnlyValidator();

    var result: string = "";

    strings.forEach(s => {
        for (var name in validators) {
            result = result + ' " ' + s + ' " ' + (validators[name].isValidate(s) ? ' matches' : ' does not match ' + name + "<br>");
        }
    });
    document.getElementById('content').innerHTML = result;
};