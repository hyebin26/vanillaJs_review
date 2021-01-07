const conn = require("../server/mysql");
const bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get("/json", (req, res) => {
    conn.query("select * from reviewData", (err, results) => {
      res.json(results);
    });
  });

  app.get("/review", function (req, res) {
    // conn.query("select * from review", (err, results) => {
    //   res.render(__dirname + "../../../views/index.html", { result: result });
    // });
    res.render(__dirname + "../../../views/index.html");
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

  app.get("/review/update/:id", (req, res) => {
    //클릭한거에 데이터를 받아와서 url에 쏴주기
    // mysql 에 카테고리랑 subtitle에 일치하는 것이 있으면 데이터 받아오기?
    let id = req.params.id;
    if (id) {
      const updateSql = "select * from reviewData where id=?";
      conn.query(updateSql, [id], (err, result) => {
        if (err) {
          console.log(err);
          throw new Error();
        } else {
          //결과를 보낸다 -> /reivew/update/:id/json
          res.render(__dirname + "../../../views/update.html", {
            result: result,
          });
        }
      });
    } else {
      res.send("There is no id!");
    }
  });
  app.get("/review/update/:id/json", (req, res) => {
    let index = req.params.id;
    if (index) {
      conn.query(
        "select * from reviewData where id=?",
        [index],
        (err, result) => {
          if (err) {
            console.log(err);
            throw new Error();
          }
          res.send(result);
        }
      );
    }
  });
};
