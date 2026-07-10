class Product {

    name: string;
    price: number;
    pId: number;

    inCart: boolean = false;
    isOrdered: boolean = false;


    constructor(
        name: string,
        price: number,
        pid: number
    ) {

        this.name = name;
        this.price = price;
        this.pId = pid;

    }


    addToCart(): void {

        this.inCart = true;

        console.log(`${this.name} added to cart`);

    }


    buyProduct(): void {

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

let product = new Product(
    "Samsung",
    100000,
    101
);



product.buyProduct();


product.addToCart();


product.buyProduct();