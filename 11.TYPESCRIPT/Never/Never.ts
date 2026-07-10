// never returns anything

function throwError(): never {

    throw new Error("Something went wrong");

}


throwError();

console.log("Hello");