window.onload = function () {
    //step 1
    /* var resultSum1 = function calculateSum1(x: number, y: number, z: number):number {
        var result: number
        result = x + y + z;
        return result;
    }

   
    document.getElementById('content').innerHTML = "The result of resultSum1 is " + resultSum1( 10, 9, 7);*/
    //step 2
    /* var resultSum2 = (x: number, y: number, z: number) => {
        var result: number;
        result = x + y + z;
        return result;
    }

    document.getElementById('content').innerHTML = "The result of resultSum2 is " + resultSum2( 20, 9, 9);
 */
    //step 3
    var resultSum3 = function (x, y, z) { return x + y + z; };
    document.getElementById('content').innerHTML = "The result of resultSum3 is " + resultSum3(9, 8, 7);
};
