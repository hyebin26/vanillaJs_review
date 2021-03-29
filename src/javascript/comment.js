const localComment = "http://localhost:3500";

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

const clickCommentEdit = async (e) => {
  const editContent = e.target.parentNode.previousSibling;
  const id = location.href.split("update/")[1];
  const editList = editContent.parentNode;
  const editSpan = document.createElement("span");
  const editDate = e.target.parentNode.nextElementSibling;
  editSpan.innerText = editContent.value;
  editDate.innerText = loadDate();
  editSpan.classList.add("comments_feed_content");

  editList.replaceChild(editSpan, editContent);
  e.target.parentNode.removeChild(e.target);

  await fetch(`${localComment}/review/updateData/${id}/comment/edit`, {
    method: "POST",
    body: JSON.stringify({
      editDataset: editList.dataset.commentNum,
      editTime: loadDate(),
      editContent: editSpan.innerText,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const handleCommentDelete = async (e) => {
  e.preventDefault();
  const id = location.href.split("update/")[1];
  const list = e.target.parentNode.parentNode;
  const listContainer = list.parentNode;
  listContainer.removeChild(list);
  await fetch(`${localComment}/review/updateData/${id}/comment/delete`, {
    method: "POST",
    body: JSON.stringify({
      list_num: list.dataset,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const handleCommentUpdate = (e) => {
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

  insertBtn.addEventListener("click", clickCommentEdit);
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
  const updateCommentContainer = document.querySelector(".comments");
  const currentUser = sessionStorage.getItem("currentUser");

  commentList.dataset.commentNum = comment.comment_num;

  commentList.classList.add("comments_feed");
  commentUserId.classList.add("comments_feed_userId");
  commentContent.classList.add("comments_feed_content");
  commentFeedDiv.classList.add("comment_feed_div");

  commentDate.classList.add("comment_date");

  updateCommentContainer.appendChild(commentList);
  commentList.appendChild(commentUserId);
  commentList.appendChild(commentContent);
  commentList.appendChild(commentFeedDiv);
  commentList.appendChild(commentDate);

  commentDate.innerText = comment.update_time;
  commentUserId.innerText = comment.comment_id;
  commentContent.innerText = comment.comment_content;

  if (currentUser == comment.comment_id) {
    commentFeedDiv.appendChild(commentFeedUpdateBtn);
    commentFeedDiv.appendChild(commentFeedDeleteBtn);
    commentFeedDeleteBtn.classList.add("comment_delete_btn");
    commentFeedUpdateBtn.classList.add("comment_update_btn");
    commentFeedUpdateBtn.innerText = "수정";
    commentFeedDeleteBtn.innerText = "삭제";
    commentFeedDeleteBtn.addEventListener("click", handleCommentDelete);
    commentFeedUpdateBtn.addEventListener("click", handleCommentUpdate);
  }

  updateForm.reset();
};

const clickCommentAddBtn = async (event) => {
  event.preventDefault();

  const id = location.href.split("update/")[1];
  const currentUser = sessionStorage.getItem("currentUser");
  const updateCommentInput = document.querySelector(".update_comment_input");
  if (updateCommentInput.value === "") {
    return false;
  } else {
    const addComment = {
      comment_id: currentUser,
      comment_content: updateCommentInput.value,
      create_time: loadDate(),
      update_time: loadDate(),
    };
    const option = {
      method: "POST",
      body: JSON.stringify(addComment),
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(`${localComment}/review/updateData/${id}/comment`, option); //
    showComment(addComment);
  }
};

const fetchComment = async () => {
  let commentData = {};
  const updateAddFormBtn = document.querySelector(".comment_add_btn");
  const id = location.href.split("update/")[1];

  await fetch(`${localComment}/review/updateData/${id}/comment`) //
    .then((res) => res.json()) //
    .then((data) => (commentData = data))
    .catch((err) => new Error(err));
  commentData.map((comment) => showComment(comment));
  updateAddFormBtn.addEventListener("click", clickCommentAddBtn);
};

const commentInit = () => {
  fetchComment();
};
commentInit();
