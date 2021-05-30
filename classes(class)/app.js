var Hello = /** @class */ (function () {
    function Hello(textIn) {
        this.helloText = textIn;
    }
    Hello.prototype.message = function () {
        return "Hello" + this.helloText;
    };
    return Hello;
}());
var Areas = /** @class */ (function () {
    function Areas() {
        this.pi = 3.14;
    }
    Areas.prototype.circle = function (radius) {
        return this.pi * radius * radius;
    };
    Areas.prototype.rectangle = function (heigth, width) {
        return heigth * width;
    };
    Areas.prototype.square = function (side) {
        return side * side;
    };
    return Areas;
}());
window.onload = function () {
    var myHello = new Hello(" World!!!");
    var helloMsg = new Hello(" Rodrigo");
    alert(helloMsg.message());
    alert(myHello.message());
    var myAreas = new Areas();
    alert(myAreas.circle(4));
    alert(myAreas.rectangle(5, 5));
    alert(myAreas.square(6));
};
