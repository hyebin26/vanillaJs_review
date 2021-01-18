/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
(() => {
/*!********************************!*\
  !*** ./src/javascript/user.js ***!
  \********************************/
eval("const clickLogoutBtn = (e) => {\r\n  e.preventDefault();\r\n  sessionStorage.removeItem(\"currentUser\");\r\n  location.replace(\"/review\");\r\n};\r\n\r\nconst loadUser = () => {\r\n  const currentUser = sessionStorage.getItem(\"currentUser\");\r\n  const loginBtn = document.querySelector(\".search_loginBtn\");\r\n  const profileBtn = document.querySelector(\".search_profile\");\r\n\r\n  if (currentUser == null) {\r\n    profileBtn.setAttribute(\"href\", \"/review/signUp\");\r\n    profileBtn.innerText = \"회원가입\";\r\n  } else {\r\n    loginBtn.innerText = \"로그아웃\";\r\n    loginBtn.addEventListener(\"click\", clickLogoutBtn);\r\n    profileBtn.setAttribute(\"href\", \"/review/profile\");\r\n    profileBtn.innerText = currentUser;\r\n  }\r\n};\r\n\r\nconst userInit = () => {\r\n  loadUser();\r\n};\r\nuserInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/user.js?");
})();

(() => {
/*!************************************!*\
  !*** ./src/javascript/category.js ***!
  \************************************/
eval("const loadCategoryData = async () => {\r\n  const urlNum = location.href.indexOf(\"w\") + 2;\r\n  const category = location.href.substring(urlNum);\r\n  const movieData = await fetch(`/review/${category}/json`) //\r\n    .then((data) => data.json());\r\n  movieData.map((item) => showCategoryData(item));\r\n};\r\n\r\nconst showCategoryData = (item) => {\r\n  const container = document.querySelector(\".contents_container\");\r\n  const itemList = document.createElement(\"li\");\r\n  const itemLink = document.createElement(\"a\");\r\n  const itemTextDiv = document.createElement(\"div\");\r\n  const itemSubTextDiv = document.createElement(\"div\");\r\n  const itemImgDiv = document.createElement(\"div\");\r\n  const itemContentDiv = document.createElement(\"div\");\r\n  const itemTitle = document.createElement(\"p\");\r\n  const itemImg = document.createElement(\"img\");\r\n  const itemDes = document.createElement(\"p\");\r\n  const itemUser = document.createElement(\"span\");\r\n  const itemCategory = document.createElement(\"span\");\r\n  const itemSubTitle = document.createElement(\"span\");\r\n  //content > a > div(p,p,span,span) ,div img\r\n  itemList.classList.add(\"content\");\r\n  itemContentDiv.classList.add(\"content_box\");\r\n  itemTextDiv.classList.add(\"content_text_container\");\r\n  itemTitle.classList.add(\"content_title\");\r\n  itemDes.classList.add(\"content_description\");\r\n  itemImgDiv.classList.add(\"img_container\");\r\n  itemUser.classList.add(\"content_user\");\r\n  itemCategory.classList.add(\"content_category\");\r\n  itemSubTitle.classList.add(\"content_sub_title\");\r\n  itemSubTextDiv.classList.add(\"content_user_container\");\r\n\r\n  itemList.appendChild(itemLink);\r\n  itemImgDiv.appendChild(itemImg);\r\n  itemLink.appendChild(itemContentDiv);\r\n  itemContentDiv.appendChild(itemTextDiv);\r\n  itemContentDiv.appendChild(itemImgDiv);\r\n\r\n  itemTextDiv.appendChild(itemTitle);\r\n  itemTextDiv.appendChild(itemDes);\r\n  itemTextDiv.appendChild(itemSubTextDiv);\r\n\r\n  itemSubTextDiv.appendChild(itemUser);\r\n  itemSubTextDiv.appendChild(itemCategory);\r\n  itemSubTextDiv.appendChild(itemSubTitle);\r\n\r\n  itemTitle.innerText = item.title;\r\n  itemCategory.innerText = \"#\" + item.category;\r\n  itemUser.innerText = item.userId;\r\n  itemDes.innerText = item.content;\r\n  itemSubTitle.innerText = \"#\" + item.sub_title;\r\n\r\n  itemLink.setAttribute(\"href\", `/review/update/${item.id}`);\r\n  container.appendChild(itemList);\r\n};\r\n\r\nconst bookInit = () => {\r\n  loadCategoryData();\r\n};\r\nbookInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/category.js?");
})();

/******/ })()
;