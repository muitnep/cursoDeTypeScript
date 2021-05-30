class Greeter {
    /*
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }*/

    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>"
    }

    /*
        start() {
            this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
        }
    
        stop() {
            clearTimeout(this.timerToken);
        }
    */
}

/*
window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
*/

var greeter = new Greeter("Hello World");
var str = greeter.greet();

document.body.innerHTML = str;