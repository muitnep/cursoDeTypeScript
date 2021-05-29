window.onload = () => {
    var myAny: any = 987;

    console.log("The content in my any now is " + myAny);
    myAny = "Rodrigo Rodrigues";
    console.log("The content in myAny variable is " + myAny);
    myAny = false;
    console.log("The content in myAny variable is " + myAny);

    var notSure: any;
    notSure = true;
    console.log("The content in my notSure content is " + notSure);

    notSure = "Hello World";
    console.log("The content in my notSure variable is " + notSure);

    notSure = 123;
    console.log("The content in my notSure variable is " + notSure);


    function alertUserMessage(): void {
        console.log("This is my console message!!!");
    }

    alertUserMessage();


    function calc(): void {
        var number1: number = 6;
        var number2: number = 7;
        var result: number = number1 + number2;
        console.log(result);
    }
    calc();
};
