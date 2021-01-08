const updateCommentContainer = document.querySelector(".comments");

const loadUpdate = async () => {
  const data = await fetch(location.href + "/json").then((result) =>
    result.json()
  );
  showUpdateData(data[0]);
};

const showUpdateData = (item) => {
  const updateTitle = document.querySelector(".update_title");
  console.log(updateTitle);
  const updateCategory = document.querySelector(".update_category");
  const updateSubTitle = document.querySelector(".update_sub_title");
  const updateDescription = document.querySelector(".update_description");

  updateTitle.innerText = item.title;
  updateCategory.innerText = "#" + item.category;
  updateSubTitle.innerText = "#" + item.sub_title;
  updateDescription.innerText = item.content;
};

const handleRevise = (e) => {
  const reviseContent = e.target.parentNode.previousSibling;
  const reviseList = reviseContent.parentNode;

  const reviseSpan = document.createElement("span");
  reviseSpan.innerText = reviseContent.value;
  reviseSpan.classList.add("comments_feed_content");

  reviseList.replaceChild(reviseSpan, reviseContent);
  e.target.parentNode.removeChild(e.target);
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

const clickCommentBtn = (e) => {
  e.preventDefault();
  const updateForm = document.querySelector(".comment_form");
  const updateCommentInput = document.querySelector(".update_comment_input");
  const commentList = document.createElement("li");
  const commentUserId = document.createElement("span");
  const commentContent = document.createElement("span");
  const commentFeedDiv = document.createElement("div");
  const commentFeedDeleteBtn = document.createElement("button");
  const commentFeedUpdateBtn = document.createElement("button");

  commentList.classList.add("comments_feed");
  commentUserId.classList.add("comments_feed_userId");
  commentContent.classList.add("comments_feed_content");
  commentFeedDiv.classList.add("comment_feed_div");
  commentFeedDeleteBtn.classList.add("comment_delete_btn");
  commentFeedUpdateBtn.classList.add("comment_update_btn");

  commentList.appendChild(commentUserId);
  commentList.appendChild(commentContent);
  commentList.appendChild(commentFeedDiv);
  commentFeedDiv.appendChild(commentFeedUpdateBtn);
  commentFeedDiv.appendChild(commentFeedDeleteBtn);
  updateCommentContainer.appendChild(commentList);

  commentFeedUpdateBtn.innerText = "수정";
  commentFeedDeleteBtn.innerText = "삭제";
  commentContent.innerText = updateCommentInput.value;
  commentUserId.innerText = "손님1279";

  commentFeedDeleteBtn.addEventListener("click", handleDelete);
  commentFeedUpdateBtn.addEventListener("click", handleUpdate);
  updateForm.reset();
};

const updateComment = async () => {
  // updateForm.setAttribute("action", location.href + "/json");
  // const fetchComment = await fetch(location.href + "/json") //
  //   .then((result) => result.json());

  const updateAddFormBtn = document.querySelector(".comment_add_btn");
  const updateUpdateBtn = document.querySelector(".comment_update_btn");

  updateAddFormBtn.addEventListener("click", clickCommentBtn);
};

const init = () => {
  loadUpdate();
  updateComment();
};
init();
