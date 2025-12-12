// const express = require('express');
// const hostRouter = express.Router();

// // GET form
// hostRouter.get("/add-home", (req, res) => {
//     res.send(`
//         <h1>Register your home</h1>
//         <form action="/add-home" method="POST">
//             <input type="text" name="houseName" placeholder="Enter house name" />
//             <input type="submit" />
//         </form>
//     `);
// });

// // POST handler
// hostRouter.post("/add-home", (req, res) => {
//     console.log("Received body:", req.body);

//     res.send(`
//         <h1>Registered your home successfully</h1>
//         <p>House name: ${req.body.houseName}</p>
//         <a href="/">Go to home</a>
//     `);
// });

// module.exports = hostRouter;
const express = require('express');
const hostRouter = express.Router();

const registeredHomes = [];

hostRouter.get("/add-home", )

hostRouter.post("/add-home", (req, res) => {
    registeredHomes.push({ houseName: req.body.houseName });
    res.redirect("/");
});

module.exports = { hostRouter, registeredHomes };



