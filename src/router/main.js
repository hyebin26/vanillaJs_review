const conn = require("../server/mysql");

module.exports = function (app) {
  app.get("/", function (req, res) {
    conn.query("select * from review", (err, results) => {
      res.render(__dirname + "../../../views/index.html", { results: results });
    });
  });
  app.get("/review", function (req, res) {
    res.render(__dirname + "../../../views/review.html");
  });
};