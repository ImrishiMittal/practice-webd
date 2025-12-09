const express = require('express');
const userRouter = express.Router();

// Middleware
userRouter.use((req, res, next) => {
    console.log("Router middleware", req.url, req.method);
    next();
});

// Route
userRouter.get('/', (req, res) => {
    res.send(`<h1>HELLO FROM RISHI ROUTER</h1>`);
});

module.exports = userRouter;
