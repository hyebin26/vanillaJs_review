const path = require("path");
require("dotenv").config({ path: __dirname + "/../../.env" });
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "b6d626ddc66076",
  password: "d106fb8f",
  database: "review",
});

module.exports = conn;
