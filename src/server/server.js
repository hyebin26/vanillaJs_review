const express = require("express");
const app = express();
const conn = require("./mysql");
const router = require("../router/main")(app);

app.use(express.static(__dirname + "../../../public"));
app.use(express.static(__dirname + "../../"));

// app.get("/review", function (req, res) {
//   res.sendFile(path.join(router));
//   //__dirname : It will resolve to your project folder.
// });

app.set("views", "../../views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
