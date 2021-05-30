class Person {
    private personName: string = null;

    constructor() {

    }

    //get
    public get name(): string {
        return "The Person name is " + this.personName;
    }

    //set
    public set name(value: string) {
        this.personName = value;
    }
}

class Main {
    private personOne: Person = null;
    private personTwo: Person = null;

    constructor() {
        //using set
        this.personOne = new Person();
        this.personTwo = new Person();

        this.personOne.name = "Rodrigo";
        this.personTwo.name = "Lívia";

        //using get
        alert(this.personOne.name);
        alert(this.personTwo.name);

    }
}
window.onload = () => {
    var main = new Main();
};