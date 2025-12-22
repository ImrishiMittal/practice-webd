import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>FORM BACKEND</h1>");
});

app.post("/api/form", (req, res) => {
  console.log(req.body);
  res.json({ message: "Form data received successfully" });
});

// server
app.listen(5000, () => {
  console.log("Server started on http://localhost:5000/");
});
