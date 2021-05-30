window.onload = function () {
    var i = 1;
    var textOut = "";
    while (i < 10) {
        textOut += "The number is  " + i + "<br>";
        i++;
    }
    //document.getElementById('content').innerHTML = textOut;
    var y = 1;
    var textOutTwo = "";
    do {
        textOutTwo += "The number is in the new variable " + y + "<br>";
        y++;
    } while (y < 10);
    document.getElementById('content').innerHTML = textOutTwo;
};
