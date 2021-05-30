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
var TV = /** @class */ (function (_super) {
    __extends(TV, _super);
    function TV(name, price, theSize) {
        var _this = _super.call(this, name, price) || this;
        _this.size = theSize;
        return _this;
    }
    TV.prototype.PriceWithDiscount = function (discount) {
        alert("TV size: " + this.size + " pol");
        _super.prototype.PriceWithDiscount.call(this, discount);
    };
    return TV;
}(Product));
window.onload = function () {
    var myProduct = new Product("Livro", 59.9);
    myProduct.PriceWithDiscount(0.1);
    var myTV = new TV("Smart TV", 2999.00, 52);
    myTV.PriceWithDiscount(0.2);
};
