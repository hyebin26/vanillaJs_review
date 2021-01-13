const fetchEditData = async () => {
  const editData = await fetch(location.href + "/json") //
    .then((data) => data.json())
    .catch((err) => console.log(err));

  showEditData(editData[0]);
};

const handleReviewEdit = async () => {
  const titleValue = document.querySelector(".edit_title").value;
  const subTitleValue = document.querySelector(".edit_sub_title").value;
  const categoryValue = document.querySelector(".edit_category").value;
  const contentValue = document.querySelector(".edit_content").value;
  const editDataset = document.querySelector(".edit_form").dataset.edit_num;
  console.log(editDataset);
  const opt = {
    method: "POST",
    body: JSON.stringify({
      title: titleValue,
      sub_title: subTitleValue,
      category: categoryValue,
      content: contentValue,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  location.href = `/review/update/${editDataset}`;
  await fetch(location.href + "/json", opt);
};

const showEditData = (review) => {
  const editTitle = document.querySelector(".edit_title");
  const editSubTitle = document.querySelector(".edit_sub_title");
  const editContent = document.querySelector(".edit_content");
  const editCategory = document.querySelector(".edit_category");
  const editBtn = document.querySelector(".review_btn");
  const editForm = document.querySelector(".edit_form");

  editForm.dataset.edit_num = review.id;
  editTitle.value = review.title;
  editSubTitle.value = review.sub_title;
  editContent.innerText = review.content;
  editCategory.value = review.category;

  editBtn.addEventListener("click", handleReviewEdit);
};

const editInit = () => {
  fetchEditData();
};
editInit();
