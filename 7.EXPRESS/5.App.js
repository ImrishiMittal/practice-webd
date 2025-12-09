const express = require('express');
const http = require('http');
const userRouter = require('./5.ExpressRouter');  // adjust path if needed

const app = express();

// Global middleware
app.use((req, res, next) => {
    console.log("Main middleware", req.url, req.method);
    next();
});

// Mount router
app.use('/user', userRouter);

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
