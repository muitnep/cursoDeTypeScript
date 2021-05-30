window.onload = function () {
    var i;
    var textOut = "";
    for (i = 0; i < 10; i++) {
        if (i == 3) {
            break;
        }
        else {
            textOut += "The number is " + i + "<br>";
        }
    }
    //document.getElementById('content').innerHTML = textOut;
    var y;
    var textOut2 = "";
    for (y = 0; y < 10; y++) {
        if (y == 7) {
            continue;
        }
        else {
            textOut2 += "The number is " + y + "<br>";
        }
    }
    document.getElementById('content').innerHTML = textOut2;
};
