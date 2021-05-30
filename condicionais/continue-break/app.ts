window.onload = () => {

    var i: number;
    var textOut: string = "";

    for (i = 0; i < 10; i++) {
        if (i == 3) {
            break;
        } else {
            textOut += "The number is " + i + "<br>";
        }
    }

    //document.getElementById('content').innerHTML = textOut;

    var y: number;
    var textOut2: string = "";

    for (y = 0; y < 10; y++) {
        if (y == 7) {
            continue;
        } else {
            textOut2 += "The number is " + y + "<br>";
        }
    }

    document.getElementById('content').innerHTML = textOut2;

};