const dataLoad = async () => {
  const contents = await fetch("http://localhost:3000/json") //
    .then((result) => result.json());
  contents.map((item) => uploadContent(item));
  console.log(contents);
};

const uploadContent = async (item) => {
  const container = document.querySelector(".contents_container");
  const itemList = document.createElement("li");
  const itemLink = document.createElement("a");
  const itemDiv = document.createElement("div");
  const itemP = document.createElement("p");
  const itemImg = document.createElement("img");
  container.appendChild(itemList);
  itemList.classList.add("content");
  itemDiv.appendChild(itemImg);
  itemLink.appendChild(itemDiv);
  itemLink.appendChild(itemP);
  itemP.innerText = item.postingname;
  itemList.appendChild(itemLink);
};

const init = () => {
  uploadContent();
  dataLoad();
};
init();
