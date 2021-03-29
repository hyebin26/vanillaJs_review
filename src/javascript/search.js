const localSearch = "http://localhost:3500";

const loadSearchData = async (e) => {
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
  const fetchSearch = await fetch(`${localSearch}/review/search`, opt) //
    .then((res) => res.json());
  if (fetchSearch === false) {
    const container = document.querySelector(".contents_container");
    const cleanData = document.createElement("h2");
    cleanData.classList.add("clean_h2");
    cleanData.innerText = "정보가 없습니다 !";
    container.appendChild(cleanData);
  }
  fetchSearch.map((data) => {
    return showSearchData(data);
  });
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

    itemLink.setAttribute("href", `/review/update/${item.id}`);
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
