class Product {
    name: string;
    price: number;

    constructor(theName: string, thePrice: number) {
        this.name = theName;
        this.price = thePrice;
    }

    PriceWithDiscount(discount: number = 0) {
        var priceFinal: number = this.price - (this.price * discount);
        alert(this.name + " : $" + priceFinal);
    }
}

class TV extends Product {
    size: number;

    constructor(name: string, price: number, theSize: number) {
        super(name, price);
        this.size = theSize;
    }

    PriceWithDiscount(discount: number) {
        alert("TV size: " + this.size + " pol");
        super.PriceWithDiscount(discount);
    }
}

window.onload = () => {
    var myProduct = new Product("Livro", 59.9);
    myProduct.PriceWithDiscount(0.1);

    var myTV = new TV("Smart TV", 2999.00, 52);
    myTV.PriceWithDiscount(0.2);
};