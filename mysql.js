const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "@@da8611zi",
  database: "review",
});

connection.connect();

connection.query("select * from review", function (err, result, fields) {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

connection.end();
