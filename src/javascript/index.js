const localhost = "http://localhost:3500";

const paginationButton = (page, items, current_page) => {
  let link = document.createElement("a");
  let list = document.createElement("li");

  list.classList.add("pagigator_list");
  link.classList.add("pagigator_link");

  link.dataset.page_num = page;
  link.setAttribute("href", "/review?page=" + page);
  list.appendChild(link);
  link.innerText = page;

  if (current_page == page) link.classList.add("active");

  link.addEventListener("click", () => {
    current_page = page;

    let current_btn = document.querySelector(".pagigator_link active");
    current_btn.classList.remove("active");

    link.classList.add("active");
  });
  return list;
};

const displayList = (items, rows_per_page, page) => {
  page--;

  let start = page * rows_per_page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  paginatedItems.map((item) => showMainData(item));
};

const setupPagination = (items, rows_per_page, wrapper, currentPage) => {
  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = paginationButton(i, items, currentPage);
    wrapper.appendChild(btn);
  }
};

const loadReview = async () => {
  const contents = await fetch(`${localhost}/review/json`) //
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const paginationWrapper = document.querySelector(".pagigator_container");

  const url = new URL(location.href);
  const currentUrl = new URLSearchParams(url.search);

  let currentPage = currentUrl.get("page") == null ? 1 : currentUrl.get("page");
  const rows = 5;

  displayList(contents, rows, currentPage);
  setupPagination(contents, rows, paginationWrapper, currentPage);
};

const showMainData = (item) => {
  const container = document.querySelector(".contents_container");
  const itemList = document.createElement("li");
  const itemLink = document.createElement("a");
  const itemTextDiv = document.createElement("div");
  const itemSubTextDiv = document.createElement("div");
  const itemImgDiv = document.createElement("div");
  const itemImg = document.createElement("img");
  const itemContentDiv = document.createElement("div");
  const itemTitle = document.createElement("p");
  const itemDes = document.createElement("p");
  const itemUser = document.createElement("span");
  const itemCategory = document.createElement("span");
  const itemSubTitle = document.createElement("span");
  //content > a > div(p,p,span,span) ,div img
  itemList.classList.add("content");
  itemContentDiv.classList.add("content_box");
  itemTextDiv.classList.add("content_text_container");
  itemTitle.classList.add("content_title");
  itemDes.classList.add("content_description");
  itemImgDiv.classList.add("img_container");
  itemUser.classList.add("content_user");
  itemCategory.classList.add("content_category");
  itemSubTitle.classList.add("content_sub_title");
  itemSubTextDiv.classList.add("content_user_container");

  itemList.appendChild(itemLink);
  itemImgDiv.appendChild(itemImg);
  itemLink.appendChild(itemContentDiv);
  itemContentDiv.appendChild(itemTextDiv);
  itemContentDiv.appendChild(itemImgDiv);

  itemTextDiv.appendChild(itemTitle);
  itemTextDiv.appendChild(itemDes);
  itemTextDiv.appendChild(itemSubTextDiv);

  itemSubTextDiv.appendChild(itemUser);
  itemSubTextDiv.appendChild(itemCategory);
  itemSubTextDiv.appendChild(itemSubTitle);

  itemTitle.innerText = item.title;
  itemCategory.innerText = "#" + item.category;
  itemUser.innerText = item.userId;
  itemDes.innerText = item.content;
  itemSubTitle.innerText = "#" + item.sub_title;

  itemLink.setAttribute("href", `/review/update/${item.id}`);
  container.appendChild(itemList);

  if (item.image) {
    itemImg.setAttribute("src", item.image);
  }
};

const clickGoToReviewBtn = (e) => {
  e.preventDefault();
  const currentUser = sessionStorage.getItem("currentUser");
  if (currentUser == null) {
    alert("회원가입을 해주세요");
  } else {
    location.href = "/review/new";
  }
};

const init = () => {
  const goToReviewBtn = document.querySelector(".write_add_review");
  goToReviewBtn.addEventListener("click", clickGoToReviewBtn);
  loadReview();
};
init();
