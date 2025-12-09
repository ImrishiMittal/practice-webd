const http = require('http');
const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log("Came in first middleware", req.url, req.method);
    next();
});

app.use((req, res, next)=>{
    console.log("Came in second middleware", req.url, req.method);
    res.send("<H1>RISHI WELCOMES YOU</H1>");
})
/*
   //WE CAN PASS THE PATH TOO
   app.use("/", (req, res, next)=>{
       console.log("Came in second middleware", req.url, req.method);
       res.send("<H1>RISHI WELCOMES YOU</H1>");                                                        // SEND -> END
       /////////////////// GET OR POST MATCHES EXACT PATH
})*/

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log("Server running at http://localhost:3000")
})
//Changes