class Hello {
    helloText: string;

    constructor(textIn: string) {
        this.helloText = textIn;
    }

    message(): string {
        return "Hello" + this.helloText;
    }
}

class Areas {
    pi: number;

    constructor() {
        this.pi = 3.14;
    }

    circle(radius: number): number {
        return this.pi * radius * radius;
    }

    rectangle(heigth: number, width: number) {
        return heigth * width;
    }

    square(side: number): number {
        return side * side;
    }
}


window.onload = () => {

    var myHello = new Hello(" World!!!");
    var helloMsg = new Hello(" Rodrigo");

    alert(helloMsg.message())
    alert(myHello.message());

    var myAreas = new Areas();
    alert(myAreas.circle(4));
    alert(myAreas.rectangle(5, 5));
    alert(myAreas.square(6));
};