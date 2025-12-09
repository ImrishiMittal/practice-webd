const express = require('express');
const http = require('http');
const path = require("path");

const userRouter = require("./7.EJS/userRouter");   // FIXED
const { hostRouter } = require("./7.EJS/hostRouter");


console.log("userRouter =", userRouter);
console.log("hostRouter =", hostRouter);
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded({ extended: false }));

app.use("/", userRouter);
app.use("/", hostRouter);

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

