const commentContainer = document.querySelector(".comments");

const loadDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const ddate = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const time = `${year} : ${month + 1 >= 10 ? month : "0" + (month + 1)} : ${
    ddate >= 10 ? ddate : "0" + ddate
  }  ${hour >= 10 ? hour : "0" + hour}:${min >= 10 ? min : "0" + min}`;
  return time;
};

const handleRevise = (e) => {
  const reviseContent = e.target.parentNode.previousSibling;
  const reviseList = reviseContent.parentNode;
  const commentDate = document.createElement("p");

  const reviseSpan = document.createElement("span");
  reviseSpan.innerText = reviseContent.value;
  reviseSpan.classList.add("comments_feed_content");

  reviseList.replaceChild(reviseSpan, reviseContent);
  e.target.parentNode.removeChild(e.target);

  commentDate.innerText = loadDate();
};
const handleDelete = (e) => {
  e.preventDefault();

  const list = e.target.parentNode.parentNode;
  updateCommentContainer.removeChild(list);
};
const handleUpdate = (e) => {
  e.preventDefault();
  const content = e.target.parentNode.previousSibling;
  const feedList = content.parentNode;
  const newInput = document.createElement("input");
  const insertBtn = document.createElement("button");

  newInput.setAttribute("type", "text");
  newInput.setAttribute("value", content.innerText);
  insertBtn.innerText = "확인";

  feedList.replaceChild(newInput, content);
  e.target.parentNode.appendChild(insertBtn);

  insertBtn.addEventListener("click", handleRevise);
};

const showComment = (comment) => {
  const updateForm = document.querySelector(".comment_form");
  const commentList = document.createElement("li");
  const commentUserId = document.createElement("span");
  const commentContent = document.createElement("span");
  const commentFeedDiv = document.createElement("div");
  const commentFeedDeleteBtn = document.createElement("button");
  const commentFeedUpdateBtn = document.createElement("button");
  const commentDate = document.createElement("p");

  commentList.classList.add("comments_feed");
  commentUserId.classList.add("comments_feed_userId");
  commentContent.classList.add("comments_feed_content");
  commentFeedDiv.classList.add("comment_feed_div");
  commentFeedDeleteBtn.classList.add("comment_delete_btn");
  commentFeedUpdateBtn.classList.add("comment_update_btn");
  commentDate.classList.add("comment_date");

  updateCommentContainer.appendChild(commentList);
  commentList.appendChild(commentUserId);
  commentList.appendChild(commentContent);
  commentList.appendChild(commentFeedDiv);
  commentList.appendChild(commentDate);
  commentFeedDiv.appendChild(commentFeedUpdateBtn);
  commentFeedDiv.appendChild(commentFeedDeleteBtn);
  commentFeedUpdateBtn.innerText = "수정";
  commentFeedDeleteBtn.innerText = "삭제";
  commentDate.innerText = loadDate();
  commentUserId.innerText = comment.comment_id;
  commentContent.innerText = comment.comment_content;

  commentFeedDeleteBtn.addEventListener("click", handleDelete);
  commentFeedUpdateBtn.addEventListener("click", handleUpdate);
  updateForm.reset();
};

const clickCommentAddBtn = async (event) => {
  event.preventDefault();
  const updateCommentInput = document.querySelector(".update_comment_input");
  if (updateCommentInput.value === "") {
    return false;
  } else {
    const option = {
      method: "POST",
      body: JSON.stringify({
        comment_id: "hyebin",
        comment_content: updateCommentInput.value,
        create_time: loadDate(),
        update_time: "",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const addComment = await fetch(location.href + "/json/comment", option) //
      .then((data) => data.json())
      .then((comments) => comments.map((comment) => showComment(comment)));
  }
};

const fetchComment = async () => {
  let commentData = {};
  const commentForm = document.querySelector(".comment_form");
  const updateAddFormBtn = document.querySelector(".comment_add_btn");

  let fetchCommentData = await fetch(location.href + "/json/comment") //
    .then((res) => res.json()) //
    .then((data) => (commentData = data))
    .catch((err) => console.log(err));

  commentData.map((comment) => showComment(comment));
  updateAddFormBtn.addEventListener("click", clickCommentAddBtn);
};

const commentInit = () => {
  fetchComment();
};
commentInit();
