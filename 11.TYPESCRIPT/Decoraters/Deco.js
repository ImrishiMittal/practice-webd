"use strict";
/*A Decorator is a special function that can add extra behavior to a class, method, property, or parameter without modifying its original code. */
/*function Logger(constructor: Function) {
    console.log("Class Created");
    console.log(constructor.name);
}

@Logger
class Product {

    constructor() {
        console.log("Product Constructor");
    }

}

const p = new Product();*/
/*function Message(msg: string) {

    return function (constructor: Function) {
        console.log(msg);
    };

}

@Message("Welcome to TypeScript")
class Student {

}*/
/*function LogMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {

    console.log("Method:", propertyKey);

}

class User {

    @LogMethod
    login() {
        console.log("User Logged In");
    }

}*/
/*function LogProperty(target: any, propertyKey: string) {

    console.log("Property:", propertyKey);

}

class Employee {

    @LogProperty
    name: string = "Rishi";

}*/ 
