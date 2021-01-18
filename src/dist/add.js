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
/*!**************************************!*\
  !*** ./src/javascript/add_review.js ***!
  \**************************************/
eval("const clickAddReviewBtn = async (e) => {\r\n  const titleAdd = document.querySelector(\".add_title\").value;\r\n  const subTitleAdd = document.querySelector(\".add_subTitle\").value;\r\n  const contentAdd = document.querySelector(\".add_content\").value;\r\n  const categoryAdd = document.querySelector(\".add_category\").value;\r\n  const imageAdd = document.querySelector(\".image_span\").dataset.image;\r\n  const currentUser = sessionStorage.getItem(\"currentUser\");\r\n\r\n  const opt = {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n      userId: currentUser,\r\n      title: titleAdd,\r\n      content: contentAdd,\r\n      category: categoryAdd,\r\n      sub_title: subTitleAdd,\r\n      image: imageAdd,\r\n    }),\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n  };\r\n  location.replace(\"/review\");\r\n  await fetch(\"/review/new\", opt);\r\n};\r\n\r\nconst addReviewInit = () => {\r\n  const addReviewBtn = document.querySelector(\".review_btn\");\r\n  addReviewBtn.addEventListener(\"click\", clickAddReviewBtn);\r\n};\r\naddReviewInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/add_review.js?");
})();

(() => {
/*!********************************!*\
  !*** ./src/javascript/user.js ***!
  \********************************/
eval("const clickLogoutBtn = (e) => {\r\n  e.preventDefault();\r\n  sessionStorage.removeItem(\"currentUser\");\r\n  location.replace(\"/review\");\r\n};\r\n\r\nconst loadUser = () => {\r\n  const currentUser = sessionStorage.getItem(\"currentUser\");\r\n  const loginBtn = document.querySelector(\".search_loginBtn\");\r\n  const profileBtn = document.querySelector(\".search_profile\");\r\n\r\n  if (currentUser == null) {\r\n    profileBtn.setAttribute(\"href\", \"/review/signUp\");\r\n    profileBtn.innerText = \"회원가입\";\r\n  } else {\r\n    loginBtn.innerText = \"로그아웃\";\r\n    loginBtn.addEventListener(\"click\", clickLogoutBtn);\r\n    profileBtn.setAttribute(\"href\", \"/review/profile\");\r\n    profileBtn.innerText = currentUser;\r\n  }\r\n};\r\n\r\nconst userInit = () => {\r\n  loadUser();\r\n};\r\nuserInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/user.js?");
})();

(() => {
/*!******************************************!*\
  !*** ./src/javascript/image_uploader.js ***!
  \******************************************/
eval("// const imageUploader = async (file) => {\r\n//   const url = \"https://api.cloudinary.com/v1_1/dcil8rawn/upload\";\r\n//   const formData = new FormData();\r\n\r\n//   const textareaDiv = document.querySelector(\".add_content\");\r\n//   const img = document.createElement(\"img\");\r\n\r\n//   formData.append(\"file\", file);\r\n//   formData.append(\"upload_preset\", \"vnvxzryj\");\r\n\r\n//   const imageFile = await fetch(url, {\r\n//     method: \"POST\",\r\n//     body: formData,\r\n//   }) //\r\n//     .then((res) => res.json());\r\n\r\n//   img.setAttribute(\"src\", imageFile.url);\r\n//   img.setAttribute(\"art\", imageFile.original_filename + \" image\");\r\n//   textareaDiv.appendChild(img);\r\n// };\r\nconst imageLoader = async (file) => {\r\n  const url = \"https://api.cloudinary.com/v1_1/dcil8rawn/upload\";\r\n  const formData = new FormData();\r\n  const span = document.querySelector(\".image_span\");\r\n\r\n  formData.append(\"file\", file);\r\n  formData.append(\"upload_preset\", \"vnvxzryj\");\r\n\r\n  const imageFile = await fetch(url, {\r\n    method: \"POST\",\r\n    body: formData,\r\n  }) //\r\n    .then((res) => res.json());\r\n  span.innerText = imageFile.original_filename + \" 이미지 추가!\";\r\n  span.dataset.image = imageFile.url;\r\n};\r\n\r\nconst imageUploaderInit = () => {\r\n  const uploadBtn = document.querySelector(\".add_image\");\r\n  uploadBtn.addEventListener(\"change\", (e) => {\r\n    imageLoader(e.target.files[0]);\r\n  });\r\n};\r\nimageUploaderInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/image_uploader.js?");
})();

/******/ })()
;