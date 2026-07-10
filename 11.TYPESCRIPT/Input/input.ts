const btn = document.getElementById("btn") as HTMLButtonElement;


btn.addEventListener("click", () => {

    const username = document.getElementById("username") as HTMLInputElement;

    const email = document.getElementById("email") as HTMLInputElement;

    const age = document.getElementById("age") as HTMLInputElement;


    const user = {
        username: username.value,
        email: email.value,
        age: Number(age.value)
    }


    console.log(user);

});