/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/javascript/login.js ***!
  \*********************************/
eval("const clickLogin = async (e) => {\r\n  e.preventDefault();\r\n  const loginForm = document.querySelector(\".login_form\");\r\n  const loginId = document.querySelector(\".login_id\").value;\r\n  const loginPassword = document.querySelector(\".login_password\").value;\r\n  const getUser = JSON.parse(localStorage.getItem(\"user\")).map((user) => user);\r\n  const user = getUser == null ? [] : getUser;\r\n\r\n  const uid = user.map((user) => user);\r\n\r\n  const checkUser = uid.map((user) => {\r\n    if (user.id == loginId && user.password == loginPassword) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  });\r\n  if (checkUser.every((user) => user == false)) {\r\n    alert(\"아이디 혹은 비밀번호가 틀렸습니다.\");\r\n  } else {\r\n    location.href = \"/review\";\r\n    sessionStorage.setItem(\"currentUser\", loginId);\r\n  }\r\n};\r\n\r\nconst LoginInit = () => {\r\n  const loginBtn = document.querySelector(\".login_btn\");\r\n  loginBtn.addEventListener(\"click\", clickLogin);\r\n};\r\nLoginInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/login.js?");
/******/ })()
;