const express = require('express');
const app = express();
const array = [];

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res)=>{
    res.send(
        `
        <html>
        <body>
        <form action = "submit" method = "POST">
        <div>
        <div>
           <lable>Name - </lable>
           <input type = "text" placeholder = "Enter your name" name = "name">
        </div>
        <div>
           <lable>Age - </lable>
           <input type = "number" placeholder = "Enter your age" name = "age">
        </div>
        <div>
        <button type = "Submit" > SUBMIT </button>
        </div>
        </div>
        </form>
        </body>
        </html>
        `
    )
})

app.post("/submit", (req, res)=>{
    let name = req.body.name;
    let age = req.body.age;
    array.push({name, age});
    res.redirect("/array");
});

app.get("/array", (req, res) => {
    let html = `
        <html>
        <body>
            <h1>All Submitted array</h1>
    `;

    array.forEach(user => {
        html += `<p>${user.name} - ${user.age}</p>`;
    });

    html += `
            <br>
            <a href="/">Go Back</a>
        </body>
        </html>
    `;

    res.send(html);
});

app.listen(10001, ()=>{
    console.log("http://localhost:10001")
})