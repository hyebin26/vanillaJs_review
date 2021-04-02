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

/***/ "./src/javascript/edit_review.js":
/*!***************************************!*\
  !*** ./src/javascript/edit_review.js ***!
  \***************************************/
/***/ (() => {

eval("const fetchEditData = async () => {\r\n  const id_edit = location.href.split(\"update/\")[1];\r\n  const editData = await fetch(\r\n    `https://review-server.herokuapp.com/review/updateData/${id_edit}`\r\n  ) //\r\n    .then((data) => data.json())\r\n    .catch((err) => console.log(err));\r\n\r\n  showEditData(editData[0]);\r\n};\r\n\r\nconst handleClickEditBtn = async () => {\r\n  const id_edit = location.href.split(\"update/\")[1];\r\n\r\n  const titleValue = document.querySelector(\".edit_title\").value;\r\n  const subTitleValue = document.querySelector(\".edit_sub_title\").value;\r\n  const categoryValue = document.querySelector(\".edit_category\").value;\r\n  const contentValue = document.querySelector(\".edit_content\").value;\r\n  const editDataset = document.querySelector(\".edit_form\").dataset.edit_num;\r\n  const editImage = document.querySelector(\".image_span\").dataset.image;\r\n\r\n  const opt = {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n      title: titleValue,\r\n      sub_title: subTitleValue,\r\n      category: categoryValue,\r\n      content: contentValue,\r\n      image: editImage,\r\n    }),\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n  };\r\n  await fetch(\r\n    `https://review-server.herokuapp.com/review/updateData/${id_edit}/click`,\r\n    opt\r\n  );\r\n  location.href = `/vanillaJs_review/update/${editDataset}`;\r\n};\r\n\r\nconst showEditData = (review) => {\r\n  const editTitle = document.querySelector(\".edit_title\");\r\n  const editSubTitle = document.querySelector(\".edit_sub_title\");\r\n  const editContent = document.querySelector(\".edit_content\");\r\n  const editCategory = document.querySelector(\".edit_category\");\r\n  const editBtn = document.querySelector(\".review_btn\");\r\n  const editForm = document.querySelector(\".edit_form\");\r\n  const editImage = document.querySelector(\".image_span\");\r\n\r\n  editForm.dataset.edit_num = review.id;\r\n  editTitle.value = review.title;\r\n  editSubTitle.value = review.sub_title;\r\n  editContent.innerText = review.content;\r\n  editCategory.value = review.category;\r\n  editImage.dataset.image = review.image;\r\n  editImage.innerHTML = \"이미지 추가!\";\r\n\r\n  editBtn.addEventListener(\"click\", handleClickEditBtn);\r\n};\r\n\r\nconst editInit = () => {\r\n  fetchEditData();\r\n};\r\neditInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/edit_review.js?");

/***/ }),

/***/ "./src/javascript/image_uploader.js":
/*!******************************************!*\
  !*** ./src/javascript/image_uploader.js ***!
  \******************************************/
/***/ (() => {

eval("const imageLoader = async (file) => {\r\n  const url = \"https://api.cloudinary.com/v1_1/dcil8rawn/upload\";\r\n  const formData = new FormData();\r\n  const span = document.querySelector(\".image_span\");\r\n\r\n  formData.append(\"file\", file);\r\n  formData.append(\"upload_preset\", \"vnvxzryj\");\r\n\r\n  const imageFile = await fetch(url, {\r\n    method: \"POST\",\r\n    body: formData,\r\n  }) //\r\n    .then((res) => res.json());\r\n  span.innerText = imageFile.original_filename + \" 이미지 추가!\";\r\n  span.dataset.image = imageFile.secure_url;\r\n};\r\n\r\nconst imageUploaderInit = () => {\r\n  const uploadBtn = document.querySelector(\".add_image\");\r\n  uploadBtn.addEventListener(\"change\", (e) => {\r\n    imageLoader(e.target.files[0]);\r\n  });\r\n};\r\nimageUploaderInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/image_uploader.js?");

/***/ }),

/***/ "./src/javascript/user.js":
/*!********************************!*\
  !*** ./src/javascript/user.js ***!
  \********************************/
/***/ (() => {

eval("const clickLogoutBtn = (e) => {\r\n  e.preventDefault();\r\n  sessionStorage.removeItem(\"currentUser\");\r\n  location.replace(\"/vanillaJs_review\");\r\n};\r\n\r\nconst loadUser = () => {\r\n  const currentUser = sessionStorage.getItem(\"currentUser\");\r\n  const loginBtn = document.querySelector(\".search_loginBtn\");\r\n  const profileBtn = document.querySelector(\".search_profile\");\r\n\r\n  if (currentUser == null) {\r\n    profileBtn.setAttribute(\"href\", \"/vanillaJs_review/signUp\");\r\n    profileBtn.innerText = \"회원가입\";\r\n  } else {\r\n    loginBtn.innerText = \"로그아웃\";\r\n    loginBtn.addEventListener(\"click\", clickLogoutBtn);\r\n    profileBtn.setAttribute(\"href\", \"/vanillaJs_review/profile\");\r\n    profileBtn.innerText = currentUser;\r\n  }\r\n};\r\n\r\nconst userInit = () => {\r\n  loadUser();\r\n};\r\nuserInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/user.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/javascript/edit_review.js"]();
/******/ 	__webpack_modules__["./src/javascript/user.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/image_uploader.js"]();
/******/ 	
/******/ })()
;