//Generic Class
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

//Generic Constraints
interface LengthInterf {
    length: number;
}

function loggingIdentify<T extends LengthInterf>(arg: T) {
    alert(arg.length);
    return arg;
}

window.onload = () => {

    var myGenericNumber = new GenericNumber<number>();

    myGenericNumber.zeroValue = 2;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };

    document.getElementById('content').innerHTML = "The zero Value is " + myGenericNumber.zeroValue + "<br>The add function is " + myGenericNumber.add(10, 7);

    //Constraint
    var myLog = loggingIdentify(["yellow", "red", "black", "white"]);
    alert(myLog);
};