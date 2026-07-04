const express = require('express');
const app  = express();


app.get("/" , (req,res)=>{
    res.send(
        `
        <html>
        <body>
        <form action = "submit" method = "GET">
        <h1> SUBMIT YOUR DETAILS </h1>
        <div>
        <lable>ENTER YOUR NAME</lable>
        <input type = "text" placeholder = "Enter your name" name = "name">
        </div>
        <div>
        <lable> Enter your age </lable>
        <input type = "Number" placeholder = "Enter your age" name = "age">
        </div>
        <button type = "submit"> Submit </button>
        </form>
        </body>
        </html>
        `
    )
})
app.get("/submit" , (req, res)=>{
    console.log(req.query);
    const name = req.query.name;
    const age = req.query.age;
    res.send(
        `
        <html>
        <body>
          <h1> HI ${name} WITH ${age} AGE</h1>

          <h4> <a href = "/" > GO BACK </a> </h4> 
        </body>
        </html>
        `
    )
})


app.listen(10000, ()=>{
    console.log("http://localhost:10000");
})