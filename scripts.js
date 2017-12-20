function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var GalaxyS6 = new Phone("Samsung", 1950, "black");
var Mi6 = new Phone("Xiaomi", 1900, "silver");

iPhone6S.printInfo();
GalaxyS6.printInfo();
Mi6.printInfo();