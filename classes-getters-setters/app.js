var Person = /** @class */ (function () {
    function Person() {
        this.personName = null;
    }
    Object.defineProperty(Person.prototype, "name", {
        //get
        get: function () {
            return "The Person name is " + this.personName;
        },
        //set
        set: function (value) {
            this.personName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Main = /** @class */ (function () {
    function Main() {
        this.personOne = null;
        this.personTwo = null;
        //using set
        this.personOne = new Person();
        this.personTwo = new Person();
        this.personOne.name = "Rodrigo";
        this.personTwo.name = "Lívia";
        //using get
        alert(this.personOne.name);
        alert(this.personTwo.name);
    }
    return Main;
}());
window.onload = function () {
    var main = new Main();
};
