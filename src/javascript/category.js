const displayList = (items, rows_per_page, page) => {
  page--;

  let start = page * rows_per_page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);
  paginatedItems.map((item) => showCategoryData(item));
};

const setupPagination = (
  items,
  rows_per_page,
  wrapper,
  currentPage,
  category
) => {
  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = paginationButton(i, currentPage, category);
    wrapper.appendChild(btn);
  }
};

const paginationButton = (page, current_page, category) => {
  let link = document.createElement("a");
  let list = document.createElement("li");

  list.classList.add("pagigator_list");
  link.classList.add("pagigator_link");

  link.dataset.page_num = page;
  link.setAttribute("href", `/${category}?page=` + page);
  list.appendChild(link);
  link.innerText = page;
  if (parseInt(current_page) === page) link.classList.add("active");

  link.addEventListener("click", () => {
    current_page = page;

    let current_btn = document.querySelector(".pagigator_link active");
    current_btn.classList.remove("active");

    link.classList.add("active");
  });
  return list;
};
const loadCategoryData = async () => {
  const loadingContainer = document.querySelector(".contents_container");
  let isLoading = true;
  const loadingBox = document.createElement("div");
  if (isLoading) {
    loadingBox.classList.add("loading_container");
    loadingBox.innerText = "...로딩중입니다.";
    loadingContainer.appendChild(loadingBox);
  }
  const category = location.href.split("com/")[1];
  const contents = await fetch(
    `https://review-server.herokuapp.com/review/category/${category}`
  ) //
    .then((data) => data.json());
  const paginationWrapper = document.querySelector(".pagigator_container");

  const url = new URL(location.href);
  const currentUrl = new URLSearchParams(url.search);

  let currentPage =
    currentUrl.get("page") === null ? 1 : currentUrl.get("page");
  const rows = 5;

  isLoading = false;
  if (isLoading === false) loadingBox.classList.add("none");

  displayList(contents, rows, currentPage);
  setupPagination(contents, rows, paginationWrapper, currentPage, category);
};

const showCategoryData = (item) => {
  const container = document.querySelector(".contents_container");
  const itemList = document.createElement("li");
  const itemLink = document.createElement("a");
  const itemTextDiv = document.createElement("div");
  const itemSubTextDiv = document.createElement("div");
  const itemImgDiv = document.createElement("div");
  const itemContentDiv = document.createElement("div");
  const itemTitle = document.createElement("p");
  const itemImg = document.createElement("img");
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

  itemLink.setAttribute("href", `/update/${item.id}`);
  container.appendChild(itemList);

  if (item.image) {
    itemImg.setAttribute("src", item.image);
  }
};

const bookInit = () => {
  loadCategoryData();
};
bookInit();
