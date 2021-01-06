const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "@@da8611zi",
  database: "review",
});

module.exports = conn;
