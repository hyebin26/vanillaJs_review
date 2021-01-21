const path = require("path");
//require("dotenv").config({ path: __dirname + "/../../.env" });
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "be2ff3ee163c4b",
  password: "9fc623be",
  database: "heroku_244241f777f7f13",
});

module.exports = conn;
