const fetchEditData = async () => {
  const id_edit = location.href.split("update/")[1];
  const editData = await fetch(
    `https://review-server.herokuapp.com/review/updateData/${id_edit}`
  ) //
    .then((data) => data.json())
    .catch((err) => console.log(err));

  showEditData(editData[0]);
};

const handleClickEditBtn = async () => {
  const id_edit = location.href.split("update/")[1];

  const titleValue = document.querySelector(".edit_title").value;
  const subTitleValue = document.querySelector(".edit_sub_title").value;
  const categoryValue = document.querySelector(".edit_category").value;
  const contentValue = document.querySelector(".edit_content").value;
  const editDataset = document.querySelector(".edit_form").dataset.edit_num;
  const editImage = document.querySelector(".image_span").dataset.image;

  const opt = {
    method: "POST",
    body: JSON.stringify({
      title: titleValue,
      sub_title: subTitleValue,
      category: categoryValue,
      content: contentValue,
      image: editImage,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  await fetch(
    `https://review-server.herokuapp.com/review/updateData/${id_edit}/click`,
    opt
  );
  location.href = `/vanillaJs_review/update/${editDataset}`;
};

const showEditData = (review) => {
  const editTitle = document.querySelector(".edit_title");
  const editSubTitle = document.querySelector(".edit_sub_title");
  const editContent = document.querySelector(".edit_content");
  const editCategory = document.querySelector(".edit_category");
  const editBtn = document.querySelector(".review_btn");
  const editForm = document.querySelector(".edit_form");
  const editImage = document.querySelector(".image_span");

  editForm.dataset.edit_num = review.id;
  editTitle.value = review.title;
  editSubTitle.value = review.sub_title;
  editContent.innerText = review.content;
  editCategory.value = review.category;
  editImage.dataset.image = review.image;
  editImage.innerHTML = "이미지 추가!";

  editBtn.addEventListener("click", handleClickEditBtn);
};

const editInit = () => {
  fetchEditData();
};
editInit();
