interface SearchConf {
    (source: string, subString: string): boolean;
}

interface StringArray {
    [index: number]: string;
}

window.onload = () => {

    var mySearch: SearchConf;

    mySearch = function (src: string, sub: string) {
        var result = src.search(sub);

        if (result == -1) {
            return false;
        } else {
            return true;
        }
    }

    alert("Result is " + mySearch("Rodrigo Rodrigues", "Rodrigo"));

    var myArray: StringArray;

    myArray = ["Lívia", "Rodrigo"];
    alert(myArray[0]);
};