/*interface User {
    name: string;
    age: number;
    email: string;
}

const user: Partial<User> = {
    name: "Rishi"
};

console.log(user);*/




/*
interface User {
    name?: string;
    age?: number;
}

const user: Required<User> = {
    name: "Rishi",
    age: 23
};
*/




/*
interface Product {
    id: number;
    name: string;
}

const phone: Readonly<Product> = {
    id: 101,
    name: "Samsung"
};

phone.name = "iPhone"; // ❌ Error
*/



/*
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

type UserBasic = Pick<User, "name" | "email">;

const user: UserBasic = {
    name: "Rishi",
    email: "rishi@gmail.com"
};
*/



/*
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type PublicUser = Omit<User, "password">;

const user: PublicUser = {
    id: 1,
    name: "Rishi",
    email: "rishi@gmail.com"
};
*/


/*

type Data = string | number | boolean;

type Result = Exclude<Data, boolean>;

let value: Result;

value = "Hello";
value = 100;

// value = true; ❌ Error
*/

/*
type Data = string | number | boolean;

type Result = Extract<Data, string | boolean>;

let value: Result;

value = "Rishi";
value = true;

// value = 100; ❌ Error
*/

/*type User = string | null | undefined;

type ValidUser = NonNullable<User>;

let name: ValidUser;

name = "Rishi";

// name = null; ❌
// name = undefined; ❌*/