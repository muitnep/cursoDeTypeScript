class Fruits {
    name: string;
    color: string;
    size: number;
}

window.onload = () => {

    var i: number;
    var textOut: string = "";

    for (i = 0; i < 5; i++) {
        textOut += "The number in for loop is " + i + "<br>";
    }

    //document.getElementById('content').innerHTML = textOut;

    var myArray: string[] = ["Guitar", "Pedals", "Amps", "Cases", "Exercises", "Workshops", "Acoustic guitars"];
    var textOut2: string = "";

    for (var y: number = 1; y < myArray.length; y++) {
        textOut2 += "My list of musical things " + myArray[y] + "<br>";
    }

    //document.getElementById('content').innerHTML = textOut2;

    var fruit: Fruits = { name: "PineApple", color: "Yellow", size: 2 };
    var textOut3 = "";
    for (var c in fruit) {
        textOut3 += fruit[c] + " ";
    }

    document.getElementById('content').innerHTML = textOut3;

};