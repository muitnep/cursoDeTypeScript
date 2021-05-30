class Product {
    name: string;
    price: number;

    //static seller: string;

    constructor(theName: string, thePrice: number) {
        this.name = theName;
        this.price = thePrice;
    }

    PriceWithDiscount(discount: number = 0) {
        var priceFinal: number = this.price - (this.price * discount)
        alert(this.name + " : $" + priceFinal)
    }
}

class Smartphone extends Product {

    opsystem: string;

    constructor(name: string, price: number, theOpSystem: string) {
        super(name, price);
        this.opsystem = theOpSystem;
    }

    public PriceWithDiscount(discount: number) {
        alert("Plataform " + this.opsystem);
        super.PriceWithDiscount(discount);
    }
}

window.onload = () => {
    var mySmartphone = new Smartphone('Xaomi ', 1999.00, ' Android');
    mySmartphone.PriceWithDiscount(0.2);

    /* var myProduct = new Product('Chair ', 199.00);
    myProduct.seller = 'Rodrigo'; */
};