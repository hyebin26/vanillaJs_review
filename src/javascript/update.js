const loadUpdate = async () => {
  const data = await fetch(location.href + "/json") //
    .then((result) => result.json());
  showUpdateData(data[0]);
};

const clickUpdateDelete = async (e) => {
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
    await fetch(location.href + "/json/edit", opt);
  } else {
    return false;
  }
};

const showUpdateData = (item) => {
  const updateDelte = document.querySelector(".update_edit_delete");
  const updateTitle = document.querySelector(".update_title");
  const updateCategory = document.querySelector(".update_category");
  const updateSubTitle = document.querySelector(".update_sub_title");
  const updateDescription = document.querySelector(".update_description");
  const updateContainer = document.querySelector(".update_content_container");

  updateContainer.dataset.contentId = item.id;
  updateTitle.innerText = item.title;
  updateCategory.innerText = "#" + item.category;
  updateSubTitle.innerText = "#" + item.sub_title;
  updateDescription.innerText = item.content;
  updateDelte.addEventListener("click", clickUpdateDelete);
};

const updateInit = () => {
  loadUpdate();
};
updateInit();
