window.onload = function () {
    /* function calculateArea(x: number): number;
    function calculateArea(x: number, y: number): number;
    function calculateArea(x: number, y: number): any {
        var result: number;

        if(y > 0) {
            result = x * y;
        } else {
            result = x * x;
        }

        return result;
    }

    document.getElementById('content').innerHTML = "The calculateArea result is " + calculateArea(5,6);
 */
    function calcDiscount(price, discount) {
        var discountResult;
        if (discount > 0) {
            discountResult = price * discount;
        }
        else {
            discountResult = price * 0.10;
        }
        return discountResult;
    }
    var result = calcDiscount(20.00);
    document.getElementById('content').innerHTML = "The discount is: " + result;
};
