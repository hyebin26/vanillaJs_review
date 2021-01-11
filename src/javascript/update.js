const updateCommentContainer = document.querySelector(".comments");

const loadUpdate = async () => {
  const data = await fetch(location.href + "/json") //
    .then((result) => result.json());
  showUpdateData(data[0]);
};

const showUpdateData = (item) => {
  const updateTitle = document.querySelector(".update_title");
  const updateCategory = document.querySelector(".update_category");
  const updateSubTitle = document.querySelector(".update_sub_title");
  const updateDescription = document.querySelector(".update_description");

  updateTitle.innerText = item.title;
  updateCategory.innerText = "#" + item.category;
  updateSubTitle.innerText = "#" + item.sub_title;
  updateDescription.innerText = item.content;
};

const init = () => {
  loadUpdate();
};
init();
