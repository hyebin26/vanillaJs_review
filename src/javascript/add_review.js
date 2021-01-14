const clickAddReviewBtn = async (e) => {
  e.preventDefault();
  const titleAdd = document.querySelector(".add_title").value;
  const subTitleAdd = document.querySelector(".add_subTitle").value;
  const contentAdd = document.querySelector(".add_content").value;
  const categoryAdd = document.querySelector(".add_category").value;
  const currentUser = sessionStorage.getItem("currentUser");

  const opt = {
    method: "POST",
    body: JSON.stringify({
      userId: currentUser,
      title: titleAdd,
      content: contentAdd,
      category: categoryAdd,
      sub_title: subTitleAdd,
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
