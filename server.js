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
  res.send("Hello");
});

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("sever running on port");
});
