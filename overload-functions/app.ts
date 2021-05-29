window.onload = () => {

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

    function calcDiscount(price: number): number;
    function calcDiscount(price: number, discount: number): number;
    function calcDiscount(price: number, discount: number): any {
        var discountResult: number;

        if(discount > 0) {
            discountResult = price * discount;
        } else {
            discountResult = price * 0.10;
        }

        return discountResult;
    }

    var result: number = calcDiscount(20.00);

    document.getElementById('content').innerHTML = "The discount is: " + result;

};