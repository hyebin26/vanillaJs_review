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

/***/ "./src/javascript/login.js":
/*!*********************************!*\
  !*** ./src/javascript/login.js ***!
  \*********************************/
/***/ (() => {

eval("const fetchLogin = async (id, password) => {\r\n  return await fetch(`https://review-server.herokuapp.com/review/login`, {\r\n    method: \"POST\",\r\n    body: JSON.stringify({ id, password }),\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n  }) //\r\n    .then((res) => res.json())\r\n    .catch((err) => console.log(err));\r\n};\r\n\r\nconst clickLogin = (e) => {\r\n  e.preventDefault();\r\n  const loginId = document.querySelector(\".login_id\").value;\r\n  const loginPassword = document.querySelector(\".login_password\").value;\r\n\r\n  fetchLogin(loginId, loginPassword).then((res) => {\r\n    if (res) {\r\n      sessionStorage.setItem(\"currentUser\", res);\r\n      location.href = \"/vanillaJs_review\";\r\n    } else {\r\n      alert(\"아이디 혹은 비밀번호가 틀렸습니다.!\");\r\n    }\r\n  }); //\r\n};\r\n\r\nconst LoginInit = () => {\r\n  const loginBtn = document.querySelector(\".login_btn\");\r\n  loginBtn.addEventListener(\"click\", clickLogin);\r\n};\r\nLoginInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/login.js"]();
/******/ 	
/******/ })()
;