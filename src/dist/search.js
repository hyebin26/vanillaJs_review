/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/search.js":
/*!**********************************!*\
  !*** ./src/javascript/search.js ***!
  \**********************************/
/***/ (() => {

eval("const localSearch = \"http://localhost:3500\";\r\n\r\nconst displayList = (items, rows_per_page, page) => {\r\n  page--;\r\n\r\n  let start = page * rows_per_page;\r\n  let end = start + rows_per_page;\r\n  let paginatedItems = items.slice(start, end);\r\n  paginatedItems.map((item) => showSearchData(item));\r\n};\r\n\r\nconst setupPagination = (items, rows_per_page, wrapper, currentPage) => {\r\n  let page_count = Math.ceil(items.length / rows_per_page);\r\n  for (let i = 1; i < page_count + 1; i++) {\r\n    let btn = paginationButton(i, currentPage);\r\n    wrapper.appendChild(btn);\r\n  }\r\n};\r\n\r\nconst paginationButton = (page, current_page) => {\r\n  let link = document.createElement(\"a\");\r\n  let list = document.createElement(\"li\");\r\n\r\n  list.classList.add(\"pagigator_list\");\r\n  link.classList.add(\"pagigator_link\");\r\n\r\n  link.dataset.page_num = page;\r\n  link.setAttribute(\"href\", \"/review?page=\" + page);\r\n  list.appendChild(link);\r\n  link.innerText = page;\r\n  if (parseInt(current_page) === page) link.classList.add(\"active\");\r\n\r\n  link.addEventListener(\"click\", () => {\r\n    current_page = page;\r\n\r\n    let current_btn = document.querySelector(\".pagigator_link active\");\r\n    current_btn.classList.remove(\"active\");\r\n\r\n    link.classList.add(\"active\");\r\n  });\r\n  return list;\r\n};\r\n\r\nconst loadSearchData = async (e) => {\r\n  const currentURL = new URL(location.href);\r\n  const url = new URLSearchParams(currentURL.search);\r\n  const query = url.get(\"query\");\r\n  const opt = {\r\n    method: \"POST\",\r\n    body: JSON.stringify({ query: query }),\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n  };\r\n  const fetchSearch = await fetch(`${localSearch}/review/search`, opt) //\r\n    .then((res) => res.json())\r\n    .catch((err) => console.log(err));\r\n  const paginationWrapper = document.querySelector(\".pagigator_container\");\r\n\r\n  if (fetchSearch.length === 0 ) {\r\n    const container = document.querySelector(\".contents_container\");\r\n    const cleanData = document.createElement(\"h2\");\r\n    cleanData.classList.add(\"clean_h2\");\r\n    cleanData.innerText = \"정보가 없습니다 !\";\r\n    container.appendChild(cleanData);\r\n  } //\r\n  else {\r\n    let currentPage = url.get(\"page\") === null ? 1 : url.get(\"page\");\r\n    const rows = 5;\r\n\r\n    displayList(fetchSearch, rows, currentPage);\r\n    setupPagination(fetchSearch, rows, paginationWrapper, currentPage);\r\n  }\r\n};\r\n\r\nconst showSearchData = (item) => {\r\n  if (item == false) {\r\n    const cleanData = document.createElement(\"h2\");\r\n    container.appendChild(cleanData);\r\n    h2.innerText = \"정보가 없습니다 !\";\r\n  } else {\r\n    const container = document.querySelector(\".contents_container\");\r\n    const itemList = document.createElement(\"li\");\r\n    const itemLink = document.createElement(\"a\");\r\n    const itemTextDiv = document.createElement(\"div\");\r\n    const itemSubTextDiv = document.createElement(\"div\");\r\n    const itemImgDiv = document.createElement(\"div\");\r\n    const itemImg = document.createElement(\"img\");\r\n    const itemContentDiv = document.createElement(\"div\");\r\n    const itemTitle = document.createElement(\"p\");\r\n    const itemDes = document.createElement(\"p\");\r\n    const itemUser = document.createElement(\"span\");\r\n    const itemCategory = document.createElement(\"span\");\r\n    const itemSubTitle = document.createElement(\"span\");\r\n    //content > a > div(p,p,span,span) ,div img\r\n    itemList.classList.add(\"content\");\r\n    itemContentDiv.classList.add(\"content_box\");\r\n    itemTextDiv.classList.add(\"content_text_container\");\r\n    itemTitle.classList.add(\"content_title\");\r\n    itemDes.classList.add(\"content_description\");\r\n    itemImgDiv.classList.add(\"img_container\");\r\n    itemUser.classList.add(\"content_user\");\r\n    itemCategory.classList.add(\"content_category\");\r\n    itemSubTitle.classList.add(\"content_sub_title\");\r\n    itemSubTextDiv.classList.add(\"content_user_container\");\r\n\r\n    itemList.appendChild(itemLink);\r\n    itemImgDiv.appendChild(itemImg);\r\n    itemLink.appendChild(itemContentDiv);\r\n    itemContentDiv.appendChild(itemTextDiv);\r\n    itemContentDiv.appendChild(itemImgDiv);\r\n\r\n    itemTextDiv.appendChild(itemTitle);\r\n    itemTextDiv.appendChild(itemDes);\r\n    itemTextDiv.appendChild(itemSubTextDiv);\r\n\r\n    itemSubTextDiv.appendChild(itemUser);\r\n    itemSubTextDiv.appendChild(itemCategory);\r\n    itemSubTextDiv.appendChild(itemSubTitle);\r\n\r\n    itemTitle.innerText = item.title;\r\n    itemCategory.innerText = \"#\" + item.category;\r\n    itemUser.innerText = item.userId;\r\n    itemDes.innerText = item.content;\r\n    itemSubTitle.innerText = \"#\" + item.sub_title;\r\n\r\n    itemLink.setAttribute(\"href\", `/review/update/${item.id}`);\r\n    container.appendChild(itemList);\r\n\r\n    if (item.image) {\r\n      itemImg.setAttribute(\"src\", item.image);\r\n    } else {\r\n      return;\r\n    }\r\n  }\r\n};\r\n\r\nconst searchInit = () => {\r\n  window.addEventListener(\"DOMContentLoaded\", loadSearchData);\r\n};\r\nsearchInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/search.js?");

/***/ }),

/***/ "./src/javascript/user.js":
/*!********************************!*\
  !*** ./src/javascript/user.js ***!
  \********************************/
/***/ (() => {

eval("const clickLogoutBtn = (e) => {\r\n  e.preventDefault();\r\n  sessionStorage.removeItem(\"currentUser\");\r\n  location.replace(\"/review\");\r\n};\r\n\r\nconst loadUser = () => {\r\n  const currentUser = sessionStorage.getItem(\"currentUser\");\r\n  const loginBtn = document.querySelector(\".search_loginBtn\");\r\n  const profileBtn = document.querySelector(\".search_profile\");\r\n\r\n  if (currentUser == null) {\r\n    profileBtn.setAttribute(\"href\", \"/review/signUp\");\r\n    profileBtn.innerText = \"회원가입\";\r\n  } else {\r\n    loginBtn.innerText = \"로그아웃\";\r\n    loginBtn.addEventListener(\"click\", clickLogoutBtn);\r\n    profileBtn.setAttribute(\"href\", \"/review/profile\");\r\n    profileBtn.innerText = currentUser;\r\n  }\r\n};\r\n\r\nconst userInit = () => {\r\n  loadUser();\r\n};\r\nuserInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/user.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/javascript/user.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/search.js"]();
/******/ 	
/******/ })()
;