const express = require("express");
const app = express();
const conn = require("./mysql.js");
//const router = require("./src/router/main")(app);

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));

// app.set("views", "./views");
// app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  conn.query("select * from reviewData", (err, result) => {
    res.send("hello");
    console.log(result);
  });
});

var port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log("sever running on port");
});
