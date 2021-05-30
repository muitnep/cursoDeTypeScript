//Generic Class
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
function loggingIdentify(arg) {
    alert(arg.length);
    return arg;
}
window.onload = function () {
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 2;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    document.getElementById('content').innerHTML = "The zero Value is " + myGenericNumber.zeroValue + "<br>The add function is " + myGenericNumber.add(10, 7);
    //Constraint
    var myLog = loggingIdentify(["yellow", "red", "black", "white"]);
    alert(myLog);
};
