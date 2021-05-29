window.onload = () => {

    //parameros opcionais
    /* function addSum2(number1: number, number2:number, number3: number):number {
        var result:number;

        if(isNaN(number3)){
            result = number1 + number2;
        }else {
            result = number1 + number2 + number3;
        }
        
        return result;

    }

    document.getElementById('content').innerHTML = "The sum of those 3 values are: " + addSum2(5,3,100);
 */

    //parametros default

    /* function multiplyNumbers(number1: number, number2: number, number3 = 1): number {
        var result:number;
        result = number1 * number2 * number3;
        return result;
    }

    var resultMultiply: number = multiplyNumbers(6,3);
    document.getElementById('content').innerHTML = "The multiplication value of numbers is: " + resultMultiply;
 */

    //parametros Rest

    function buildName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" "); 
    }

    var name = buildName("Rodrigo", "Santos", "Bonifacio", "Rodrigues");
    document.getElementById('content').innerHTML = "The result of buildName is " + name;

    
};