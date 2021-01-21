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
    console.log(result);
    res.send(result);
  });
});

console.log();
const server = app.listen(process.env.DB_PORT || 3000, function () {
  console.log("Express server has started on port 3000");
});
