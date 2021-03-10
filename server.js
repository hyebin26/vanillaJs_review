const express = require("express");
const app = express();
const conn = require("./mysql.js");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));



app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("sever running on port");
});
