const displayList = (items, rows_per_page, page) => {
  page--;

  let start = page * rows_per_page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);
  paginatedItems.map((item) => showProfileData(item));
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
  link.setAttribute("href", "/review?page=" + page);
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
const loadProfileData = async () => {
  const currentUser = sessionStorage.getItem("currentUser");

  const loadingContainer = document.querySelector(".contents_container");
  let isLoading = true;
  const loadingBox = document.createElement("div");
  if (isLoading) {
    loadingBox.classList.add("loading_container");
    loadingBox.innerText = "...로딩중입니다.";
    loadingContainer.appendChild(loadingBox);
  }

  if (currentUser === null) {
    return false;
  } else {
    const opt = {
      method: "POST",
      body: JSON.stringify({
        userId: currentUser,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const profileDatas = await fetch(
      `https://review-server.herokuapp.com/review/profile`,
      opt
    ) //
      .then((response) => response.json());
    const contentLength = document.querySelector(".profile_content_length");
    contentLength.innerText = "나의 글 " + profileDatas.length;

    if (profileDatas === undefined) {
      loadingContainer.innerHTML = "데이터가 없습니다.";
    } //
    else {
      const paginationWrapper = document.querySelector(".pagigator_container");
      const url = new URL(location.href);
      const currentUrl = new URLSearchParams(url.search);
      let currentPage =
        currentUrl.get("page") === null ? 1 : currentUrl.get("page");
      const rows = 5;

      isLoading = false;
      if (isLoading === false) loadingBox.classList.add("none");

      displayList(profileDatas, rows, currentPage);
      setupPagination(profileDatas, rows, paginationWrapper, currentPage);
    }
  }
};

const showProfileData = (item) => {
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

  itemLink.setAttribute("href", `/review/update/${item.id}`);
  container.appendChild(itemList);

  if (item.image) {
    itemImg.setAttribute("src", item.image);
  }
};

const profileInit = () => {
  loadProfileData();
};
profileInit();
