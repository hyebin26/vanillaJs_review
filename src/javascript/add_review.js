const clickAddReviewBtn = async (e) => {
  const titleAdd = document.querySelector(".add_title").value;
  const subTitleAdd = document.querySelector(".add_subTitle").value;
  const contentAdd = document.querySelector(".add_content").value;
  const categoryAdd = document.querySelector(".add_category").value;
  const imageAdd = document.querySelector(".image_span").dataset.image;
  const currentUser = sessionStorage.getItem("currentUser");

  const opt = {
    method: "POST",
    body: JSON.stringify({
      userId: currentUser,
      title: titleAdd,
      content: contentAdd,
      category: categoryAdd,
      sub_title: subTitleAdd,
      image: imageAdd,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  location.replace("/review");
  await fetch("/review/new", opt);
};

const addReviewInit = () => {
  const addReviewBtn = document.querySelector(".review_btn");
  addReviewBtn.addEventListener("click", clickAddReviewBtn);
};
addReviewInit();
