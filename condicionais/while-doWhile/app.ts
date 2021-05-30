window.onload = () => {

    var i: number = 1;
    var textOut: string = "";

    while (i < 10) {
        textOut += "The number is  " + i + "<br>";
        i++;
    }

    //document.getElementById('content').innerHTML = textOut;

    var y: number = 1;
    var textOutTwo: string = "";

    do {
        textOutTwo += "The number is in the new variable " + y + "<br>";
        y++;
    } while (y < 10)

    document.getElementById('content').innerHTML = textOutTwo;
};