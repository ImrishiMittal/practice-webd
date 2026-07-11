"use strict";
/*async function getUsers(): Promise<void> {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);

}

getUsers();*/
/*
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

async function getUsers(): Promise<void> {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users: User[] = await response.json();

    console.log(users);

}

getUsers();
*/
/*
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

async function getUsers(): Promise<void> {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users: User[] = await response.json();

    users.forEach((user) => {

        console.log(user.id);
        console.log(user.name);
        console.log(user.email);

        console.log("----------------");

    });

}

getUsers();
 */
/*
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

async function getUser(id: number): Promise<void> {

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const user: User = await response.json();

    console.log(user);

}

getUser(1);
*/ 
