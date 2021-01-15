const loadMovieData = async () => {
  const movieData = await fetch("/review/movie/json") //
    .then((data) => data.json());
  movieData.map((item) => showMovieData(item));
};

const showMovieData = (item) => {
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
};

const movieInit = () => {
  loadMovieData();
};
movieInit();
