"use strict";
function printDatgga(data) {
    if (typeof data === "string") {
        console.log("String:", data.toUpperCase());
    }
    else {
        console.log("Number:", data.toFixed(2));
    }
}
printDatgga("Rishi");
printDatgga(25);
