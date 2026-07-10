"use strict";
/*class Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(): void {
        console.log(`${this.name} is eating.`);
    }

}

class Dog extends Animal {

    bark(): void {
        console.log(`${this.name} is barking.`);
    }

}

const dog = new Dog("Tommy");

dog.eat();
dog.bark(); */
//USING SUPER KEYWORD
/*class Person {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    displayName(): void {
        console.log(`Name: ${this.name}`);
    }

}

class Student extends Person {

    rollNo: number;

    constructor(name: string, rollNo: number) {

        super(name); // Calls Person constructor

        this.rollNo = rollNo;
    }

    displayStudent(): void {
        console.log(`Roll No: ${this.rollNo}`);
    }

}

const student = new Student("Rishi", 101);

student.displayName();
student.displayStudent();*/
/*class Product {

    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    showProduct(): void {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ₹${this.price}`);
    }

}

class Mobile extends Product {

    brand: string;

    constructor(name: string, price: number, brand: string) {

        super(name, price);

        this.brand = brand;
    }

    showBrand(): void {
        console.log(`Brand: ${this.brand}`);
    }

}

const phone = new Mobile(
    "Galaxy S25",
    80000,
    "Samsung"
);

phone.showProduct();
phone.showBrand(); */
