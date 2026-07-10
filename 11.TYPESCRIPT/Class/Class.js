"use strict";
class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pid) {
        this.name = name;
        this.price = price;
        this.pId = pid;
    }
    addToCart() {
        this.inCart = true;
        console.log(`${this.name} added to cart`);
    }
    buyProduct() {
        if (this.inCart) {
            this.isOrdered = true;
            console.log(`${this.name} purchased successfully`);
        }
        else {
            console.log("Please add product to cart first");
        }
    }
}
// creating object
let product = new Product("Samsung", 100000, 101);
product.buyProduct();
product.addToCart();
product.buyProduct();
