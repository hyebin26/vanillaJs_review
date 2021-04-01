const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/review/update/:id", (req, res) => {
  res.sendFile(__dirname + "/views/update.html");
});
app.get("/review", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
app.get("/review/new", function (req, res) {
  res.sendFile(__dirname + "/views/addReviewForm.html");
});
app.get("/review/signUp", (req, res) => {
  res.sendFile(__dirname + "/views/signup.html");
});
app.get("/review/profile", (req, res) => {
  res.sendFile(__dirname + "/views/profile.html");
});
app.get("/review/search", (req, res) => {
  res.sendFile(__dirname + "/views/search.html");
});
app.get("/review/update/:id/edit", (req, res) => {
  res.sendFile(__dirname + "/views/editReviewForm.html");
});
app.get("/review/movie", (req, res) => {
  res.sendFile(__dirname + "/views/movie.html");
});
app.get("/review/book", (req, res) => {
  res.sendFile(__dirname + "/views/book.html");
});
app.get("/review/album", (req, res) => {
  res.sendFile(__dirname + "/views/album.html");
});

app.listen(8000, (req, res) => {
  console.log("sever running on port");
  console.log(__dirname);
});
