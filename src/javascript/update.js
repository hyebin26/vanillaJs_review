const loadUpdate = async () => {
  const id = location.href.split("update/")[1];
  const data = await fetch(
    `https://review-server.herokuapp.com/review/updateData/${id}`
  ) //
    .then((result) => result.json());
  showUpdateData(data[0]);
};

const clickUpdateDelete = async (e) => {
  const id = location.href.split("update/")[1];
  const currentUser = sessionStorage.getItem("currentUser");
  const userValue = document.querySelector(".user_name").innerText;
  if (currentUser == userValue) {
    const contentDataset = e.target.parentNode.parentNode.dataset.contentId;
    const opt = {
      method: "POST",
      body: JSON.stringify({
        contentId: contentDataset,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (confirm("삭제하시겠습니까?")) {
      await fetch(
        `https://review-server.herokuapp.com/review/updateData/${id}/delete`,
        opt
      );
      location.href = "/";
    } else {
      return false;
    }
  } else {
    e.preventDefault();
    alert("권한이 없습니다.");
    return false;
  }
};

const clickUpdateEdit = async (e) => {
  e.preventDefault();
  const id = location.href.split("update/")[1];
  const currentUser = sessionStorage.getItem("currentUser");
  const userValue = document.querySelector(".user_name").innerText;
  if (currentUser == userValue) {
    const dataset = document.querySelector(".update_content_container").dataset
      .contentId;
    const opt = {
      method: "POST",
      body: JSON.stringify({
        contentId: dataset,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    location.href = location.href + "/edit";
    await fetch(
      `https://review-server.herokuapp.com/review/updateData/${id}/edit`,
      opt
    );
  } else {
    e.preventDefault();
    alert("권한이 없습니다.");
    return false;
  }
};

const showUpdateData = (item) => {
  const updateDelete = document.querySelector(".update_edit_delete");
  const updateEdit = document.querySelector(".update_edit_edit");

  const updateTitle = document.querySelector(".update_title");
  const updateCategory = document.querySelector(".update_category");
  const updateSubTitle = document.querySelector(".update_sub_title");
  const updateDescription = document.querySelector(".update_description");
  const updateContainer = document.querySelector(".update_content_container");
  const updateCurrentUser = document.querySelector(".user_name");

  updateCurrentUser.innerText = item.userId;
  updateContainer.dataset.contentId = item.id;
  updateTitle.innerText = item.title;
  updateCategory.innerText = "#" + item.category;
  updateSubTitle.innerText = "#" + item.sub_title;
  updateDescription.innerText = item.content;

  updateEdit.setAttribute("href", location.href + "/edit");
  updateEdit.addEventListener("click", clickUpdateEdit);
  updateDelete.addEventListener("click", clickUpdateDelete);
};

const updateInit = () => {
  loadUpdate();
};
updateInit();
