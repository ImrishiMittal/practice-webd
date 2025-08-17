console.log("RISHI IS IN MANIPAL");
const fs = require('fs');
fs.writeFile("output.txt", "Writting File", (err) => {
    if(err) console.log("ERROR CAUGHT");
    else console.log("FILE CREATED");
})