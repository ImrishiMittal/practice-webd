const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// First middleware
app.use((req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
});

// Second middleware
app.use((req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  next();    // allow routes to run
});

app.use(bodyParser.urlencoded());

// Home route (GET)
app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method, req.body);

  res.send(`
    <h1>WELCOME TO OUR PAGE</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your details" />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Contact-us GET
app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send("<h1>Use the form to submit your details</h1>");
});

// Contact-us POST
app.post("/contact-us", (req, res, next) => {
  console.log("Handling POST to /contact-us");
  console.log("Form Data:", req.body);

  res.send(`
    <h1>Thank you, ${req.body.name}</h1>
    <p>Your details have been received.</p>
  `);
});

// Server
const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server running at http://localhost:3000");
});
