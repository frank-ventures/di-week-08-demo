import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const myBooks = [
  "Atomic Habits",
  "The Hobbit",
  "Flat Stanley",
  "Slow Productivity",
];

app.get("", function (request, response) {
  response.json({ message: "Hello, World!" });
});

app.get("/books", function (request, response) {
  response.json(myBooks);
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080...");
});
