window.onload = function () {
    function showMessage(text) {
        console.log("The message is: " + text);
    }
    //showMessage("Oi, meu nome é Goku.");
    function addSum(x, y) {
        return x + y;
    }
    //var resultSum: number;
    //resultSum =addSum(5, 9);
    //document.getElementById('content').innerHTML = "The result of addSum(5,9) is" + resultSum;
    function checkNumberBelowOfTen(myNumber) {
        if (myNumber < 10) {
            return true;
        }
        else {
            return false;
        }
    }
    //document.getElementById('content').innerHTML = "The value of my numbers is below of 10? " + checkNumberBelowOfTen(9);
    var myAdd = function (x, y) {
        return x + y;
    };
    document.getElementById('content').innerHTML = "The result in myAdd is " + myAdd(8, 6);
};
