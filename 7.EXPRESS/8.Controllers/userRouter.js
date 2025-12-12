// const path = require('path');
// const express = require('express');
// const userRouter = express.Router();

// userRouter.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, '../' , 'Views' , 'User.html'));
// });

// module.exports = userRouter;


const express = require('express');
const userRouter = express.Router();

const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res) => {
    res.render("User", { registeredHomes });
    res.render('home',{registeredHomes : registeredHomes,
    pageTitle : 'airbnb home'});
});

module.exports = userRouter;
