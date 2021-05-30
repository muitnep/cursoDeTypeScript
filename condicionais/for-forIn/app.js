var Fruits = /** @class */ (function () {
    function Fruits() {
    }
    return Fruits;
}());
window.onload = function () {
    var i;
    var textOut = "";
    for (i = 0; i < 5; i++) {
        textOut += "The number in for loop is " + i + "<br>";
    }
    //document.getElementById('content').innerHTML = textOut;
    var myArray = ["Guitar", "Pedals", "Amps", "Cases", "Exercises", "Workshops", "Acoustic guitars"];
    var textOut2 = "";
    for (var y = 1; y < myArray.length; y++) {
        textOut2 += "My list of musical things " + myArray[y] + "<br>";
    }
    //document.getElementById('content').innerHTML = textOut2;
    var fruit = { name: "PineApple", color: "Yellow", size: 2 };
    var textOut3 = "";
    for (var c in fruit) {
        textOut3 += fruit[c] + " ";
    }
    document.getElementById('content').innerHTML = textOut3;
};
