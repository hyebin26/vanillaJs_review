const conn = require("../server/mysql");
const bodyParser = require("body-parser");
const express = require("express");

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json({ limit: "1mb" }));

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
      [title, content, category, subTitle, userId],
      (error, results) => {
        if (error) {
          console.log(error);
          throw new Error();
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
          res.render(__dirname + "../../../views/update.html");
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
  app.post("/review/update/:id/json", (req, res) => {
    index = req.params.id;
    if (index) {
      res.redirect(`/review/update/${index}`);
    }
  });

  app.post("/review/update/:id/json/comment", (req, res) => {
    console.log("I got a request!");
    const commentId = req.body.comment_id;
    const commentContent = req.body.comment_content;
    const boardNum = req.params.id;
    const createTime = req.body.create_time;
    const updateTime = req.body.update_time;

    let commentQuery =
      "insert into commentData (comment_id,comment_content,board_num,create_time,update_time) values(?,?,?,?,?)";
    conn.query(
      commentQuery,
      [commentId, commentContent, boardNum, createTime, updateTime],
      (err, results) => {
        if (err) {
          console.log(err);
          throw new Error();
        } else {
          conn.query("select * from commentData", (errs, result) => {
            if (errs) {
              console.log(errs);
              throw new Error();
            } else {
              res.send(result);
            }
          });
        }
      }
    );
  });
  app.get("/review/update/:id/json/comment", (req, res) => {
    let commentIndex = req.params.id;
    let commentQuery = "select * from commentData where board_num=?";
    conn.query(commentQuery, [commentIndex], (err, result) => {
      if (err) {
        console.log(err);
        throw new Error();
      } else {
        res.send(result);
      }
    });
  });
  app.post("/review/update/:id/json/comment/delete", (req, res) => {
    let commentNum = req.body.list_num.commentNum;
    const commentDeleteSql = "delete from commentData where comment_num=?";
    conn.query(commentDeleteSql, [commentNum], (err, result) => {
      if (err) {
        console.log(err);
        throw new Error();
      } else {
        console.log("Delete");
      }
    });
  });

  app.post("/review/update/:id/json/comment/edit", (req, res) => {
    let editContent = req.body.editContent;
    let editTime = req.body.editTime;
    let editNum = req.body.editDataset;
    console.log(editContent, editTime, editNum);
    const editSql =
      "update commentData set comment_content=?,update_time=? where comment_num=?";
    conn.query(editSql, [editContent, editTime, editNum], (err, result) => {
      if (err) {
        console.log(err);
        throw new Error();
      } else {
        console.log("Edit!!");
      }
    });
  });

  app.post("/review/update/:id/json/edit", (req, res) => {
    let content_id = req.body.contentId;
    let contentDeleteSql = "delete from reviewData where id=?";
    conn.query(contentDeleteSql, [content_id], (err, result) => {
      if (err) {
        console.log(err);
        throw new Error();
      }
    });
  });
};
