const http = require('http');
const express = require('express');
const req = require('./1.User');
const app = express();
app.use((req,res,next)=>{
    console.log("Came in first middleware", req.url, req.method);
    next();
})
app.use((req,res,next)=>{
    console.log("Came in second middleware", req.url, req.method);
})
const server = http.createServer(app);
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});