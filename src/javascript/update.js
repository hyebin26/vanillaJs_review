const loadUpdate = async () => {
  const data = await fetch(location.href + "/json") //
    .then((result) => result.json());
  showUpdateData(data[0]);
};

const clickUpdateDelete = async (e) => {
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
      location.href = "/review";
      await fetch(location.href + "/json/delete", opt);
    } else {
      return false;
    }
  } else {
    alert("권한이 없습니다.");
    return false;
  }
};

const clickUpdateEdit = async (e) => {
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
    await fetch(location.href + "/json/edit", opt);
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
  const currentUser = sessionStorage.getItem("currentUser");

  updateCurrentUser.innerText = item.userId;
  updateContainer.dataset.contentId = item.id;
  updateTitle.innerText = item.title;
  updateCategory.innerText = "#" + item.category;
  updateSubTitle.innerText = "#" + item.sub_title;
  updateDescription.innerText = item.content;

  updateEdit.addEventListener("click", clickUpdateEdit);
  updateDelete.addEventListener("click", clickUpdateDelete);
};

const updateInit = () => {
  loadUpdate();
};
updateInit();
