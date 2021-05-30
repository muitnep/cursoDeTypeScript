window.onload = function () {
    var mySearch;
    mySearch = function (src, sub) {
        var result = src.search(sub);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    };
    alert("Result is " + mySearch("Rodrigo Rodrigues", "Rodrigo"));
    var myArray;
    myArray = ["Lívia", "Rodrigo"];
    alert(myArray[0]);
};
