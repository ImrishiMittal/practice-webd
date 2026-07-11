"use strict";
/*namespace UserInfo {

    export let name = "Rishi";

    export let age = 23;

    export function display(): void {
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
    }

}

UserInfo.display();

console.log(UserInfo.name);*/
/*namespace Store {

    export class Product {

        constructor(
            public name: string,
            public price: number
        ) {}

        showProduct(): void {
            console.log(`${this.name} - ₹${this.price}`);
        }

    }

}

const phone = new Store.Product("Samsung S25", 80000);

phone.showProduct();*/
/*
namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

}

console.log(Calculator.add(10, 20));

console.log(Calculator.subtract(30, 10));
*/
/*
namespace Company {

    export namespace HR {

        export function welcome() {
            console.log("Welcome to HR Department");
        }

    }

}

Company.HR.welcome();
*/
/*
namespace VegRasoi {

    export class Food {

        constructor(
            public name: string,
            public price: number
        ) {}

        showFood(): void {
            console.log(`${this.name} - ₹${this.price}`);
        }

    }

    export function placeOrder(food: Food): void {
        console.log(`Order placed for ${food.name}`);
    }

}

const roti = new VegRasoi.Food("Roti Sabzi", 80);

roti.showFood();

VegRasoi.placeOrder(roti);
*/ 
