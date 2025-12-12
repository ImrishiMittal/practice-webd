const express = require('express');
const http = require('http');
const path = require("path");

const userRouter = require("./7.EJS/userRouter");
const { hostRouter } = require("./7.EJS/hostRouter");
const errorControler = require("./8.Controllers/Error")

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", userRouter);
app.use("/", hostRouter);

// 404 Handler (Catch-all)
app.use(errorControler.pageNotFound);

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
