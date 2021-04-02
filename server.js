const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/update/:id", (req, res) => {
  res.sendFile(__dirname + "/update.html");
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});
app.get("/new", function (req, res) {
  res.sendFile(__dirname + "/addReviewForm.html");
});
app.get("/signUp", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});
app.get("/profile", (req, res) => {
  res.sendFile(__dirname + "/profile.html");
});
app.get("/search", (req, res) => {
  res.sendFile(__dirname + "/search.html");
});
app.get("/update/:id/edit", (req, res) => {
  res.sendFile(__dirname + "/editReviewForm.html");
});
app.get("/movie", (req, res) => {
  res.sendFile(__dirname + "/movie.html");
});
app.get("/book", (req, res) => {
  res.sendFile(__dirname + "/book.html");
});
app.get("/album", (req, res) => {
  res.sendFile(__dirname + "/album.html");
});

app.listen(8000, (err) => console.log("server 8000~"));
