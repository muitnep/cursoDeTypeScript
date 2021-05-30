interface ClockInterface {

    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) { }
}
//////////////

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}


window.onload = () => {

    var square = <Square>{};
    square.color = "blue";
    square.penWidth = 5.0;
    square.sideLength = 10;

    alert(square.color + " " + square.penWidth + " " + square.sideLength);
};