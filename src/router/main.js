const conn = require("../server/mysql");
const bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get("/review", function (req, res) {
    conn.query("select * from review", (err, results) => {
      res.render(__dirname + "../../../views/index.html", { results: results });
    });
  });
  app.get("/review/new", function (req, res) {
    res.render(__dirname + "../../../views/review.html");
  });
  app.post("/review/new", (req, res) => {
    const title = req.body.title;
    const category = req.body.category;
    const subTitle = req.body.subTitle;
    const content = req.body.content;
    const userId = "Hyebin";
    const addSql =
      "insert into reviewData (title,content,category,sub_title,userId) values(?,?,?,?,?)";
    conn.query(
      addSql,
      [title, category, subTitle, content, userId],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          res.redirect("/review");
        }
      }
    );
  });
};
