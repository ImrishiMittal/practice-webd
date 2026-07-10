"use strict";
let studentData = "Anil";
studentData = 9999;
studentData = ["Apple", "Mango"];
function fruitsData() {
    let type = "fruit";
    if (type === "fruit") {
        return ["Apple", "Banana"];
    }
    else if (type === "name") {
        return "Rishi Mittal";
    }
    else {
        return 100;
    }
}
console.log(fruitsData());
