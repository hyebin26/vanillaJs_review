const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/update/:id", (req, res) => {
  res.sendFile(__dirname + "/views/update.html");
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("vanillaJs_review/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
app.get("/new", function (req, res) {
  res.sendFile(__dirname + "/views/addReviewForm.html");
});
app.get("/vanillaJs_review/signup", (req, res) => {
  res.sendFile(__dirname + "/views/signup.html");
});
app.get("https://hyebin26.github.io/vanillaJs_review/profile", (req, res) => {
  res.sendFile(__dirname + "/views/profile.html");
});
app.get("/search", (req, res) => {
  res.sendFile(__dirname + "/views/search.html");
});
app.get("/update/:id/edit", (req, res) => {
  res.sendFile(__dirname + "/views/editReviewForm.html");
});
app.get("/movie", (req, res) => {
  res.sendFile(__dirname + "/views/movie.html");
});
app.get("/book", (req, res) => {
  res.sendFile(__dirname + "/views/book.html");
});
app.get("/album", (req, res) => {
  res.sendFile(__dirname + "/views/album.html");
});
