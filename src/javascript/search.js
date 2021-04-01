const displayList = (items, rows_per_page, page) => {
  page--;

  let start = page * rows_per_page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);
  paginatedItems.map((item) => showSearchData(item));
};

const setupPagination = (items, rows_per_page, wrapper, currentPage) => {
  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = paginationButton(i, currentPage);
    wrapper.appendChild(btn);
  }
};

const paginationButton = (page, current_page) => {
  let link = document.createElement("a");
  let list = document.createElement("li");

  list.classList.add("pagigator_list");
  link.classList.add("pagigator_link");

  link.dataset.page_num = page;
  link.setAttribute("href", "/vanillaJs_review?page=" + page);
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

const loadSearchData = async (e) => {
  const loadingContainer = document.querySelector(".contents_container");
  let isLoading = true;
  const loadingBox = document.createElement("div");
  if (isLoading) {
    loadingBox.classList.add("loading_container");
    loadingBox.innerText = "...로딩중입니다.";
    loadingContainer.appendChild(loadingBox);
  }

  const currentURL = new URL(location.href);
  const url = new URLSearchParams(currentURL.search);
  const query = url.get("query");
  const opt = {
    method: "POST",
    body: JSON.stringify({ query: query }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const fetchSearch = await fetch(
    `https://review-server.herokuapp.com/review/search`,
    opt
  ) //
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const paginationWrapper = document.querySelector(".pagigator_container");

  isLoading = false;
  if (isLoading === false) loadingBox.classList.add("none");

  if (fetchSearch.length === 0) {
    const container = document.querySelector(".contents_container");
    const cleanData = document.createElement("h2");
    cleanData.classList.add("clean_h2");
    cleanData.innerText = "정보가 없습니다 !";
    container.appendChild(cleanData);
  } //
  else {
    let currentPage = url.get("page") === null ? 1 : url.get("page");
    const rows = 5;

    displayList(fetchSearch, rows, currentPage);
    setupPagination(fetchSearch, rows, paginationWrapper, currentPage);
  }
};

const showSearchData = (item) => {
  if (item == false) {
    const cleanData = document.createElement("h2");
    container.appendChild(cleanData);
    h2.innerText = "정보가 없습니다 !";
  } else {
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

    itemLink.setAttribute("href", `/vanillaJs_review/update/${item.id}`);
    container.appendChild(itemList);

    if (item.image) {
      itemImg.setAttribute("src", item.image);
    } else {
      return;
    }
  }
};

const searchInit = () => {
  window.addEventListener("DOMContentLoaded", loadSearchData);
};
searchInit();
