var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    //static seller: string;
    function Product(theName, thePrice) {
        this.name = theName;
        this.price = thePrice;
    }
    Product.prototype.PriceWithDiscount = function (discount) {
        if (discount === void 0) { discount = 0; }
        var priceFinal = this.price - (this.price * discount);
        alert(this.name + " : $" + priceFinal);
    };
    return Product;
}());
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone(name, price, theOpSystem) {
        var _this = _super.call(this, name, price) || this;
        _this.opsystem = theOpSystem;
        return _this;
    }
    Smartphone.prototype.PriceWithDiscount = function (discount) {
        alert("Plataform " + this.opsystem);
        _super.prototype.PriceWithDiscount.call(this, discount);
    };
    return Smartphone;
}(Product));
window.onload = function () {
    var mySmartphone = new Smartphone('Xaomi ', 1999.00, ' Android');
    mySmartphone.PriceWithDiscount(0.2);
    /* var myProduct = new Product('Chair ', 199.00);
    myProduct.seller = 'Rodrigo'; */
};
