"use strict";
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const age = document.getElementById("age");
    const user = {
        username: username.value,
        email: email.value,
        age: Number(age.value)
    };
    console.log(user);
});
