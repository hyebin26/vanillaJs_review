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

/***/ "./src/javascript/signup.js":
/*!**********************************!*\
  !*** ./src/javascript/signup.js ***!
  \**********************************/
/***/ (() => {

eval("const doubleCheck = async (_inputValue, _info) => {\r\n  const url = `https://review-server.herokuapp.com/review/user/${_info}`;\r\n  const user = {};\r\n  user[_info] = _inputValue;\r\n  return await fetch(url, {\r\n    method: \"POST\",\r\n    body: JSON.stringify({ user }),\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n  })\r\n    .then((res) => res.json())\r\n    .catch((err) => console.log(err));\r\n};\r\n\r\nconst focusoutId = (e) => {\r\n  const input = e.target;\r\n  doubleCheck(input.value, \"id\").then((res) => {\r\n    console.log(res);\r\n    if (res === true) {\r\n      input.nextElementSibling.innerHTML = \"이미 존재하는 아이디입니다.\";\r\n      input.classList.add(\"js_red\");\r\n    }\r\n  });\r\n  if (input.value === \"\") {\r\n    input.nextElementSibling.innerHTML = \"필수입력항목입니다.\";\r\n    input.classList.add(\"js_red\");\r\n  } //\r\n  else if (input.value >= 6) {\r\n    input.nextElementSibling.innerHTML = \"아이디는 6글자 이상이어야 합니다.\";\r\n    input.classList.add(\"js_red\");\r\n  } //\r\n  else {\r\n    input.nextElementSibling.innerHTML = \"\";\r\n    input.classList.remove(\"js_red\");\r\n  }\r\n};\r\n\r\nconst focusoutFirstPassword = (e) => {\r\n  const input = e.target;\r\n\r\n  if (input.value === \"\") {\r\n    input.nextElementSibling.innerHTML = \"필수입력항목입니다.\";\r\n    input.classList.add(\"js_red\");\r\n  } else if (input.value.length < 8) {\r\n    input.nextElementSibling.innerHTML = \"8글자이상입력해주세요\";\r\n    input.classList.add(\"js_red\");\r\n  } else {\r\n    input.classList.remove(\"js_red\");\r\n    input.nextElementSibling.innerHTML = \"\";\r\n  }\r\n};\r\n\r\nconst focusoutSecondPassword = (e) => {\r\n  const password = document.querySelector(\".input_password\");\r\n  const input = e.target;\r\n\r\n  if (\r\n    input.value == password.value &&\r\n    input.value != \"\" &&\r\n    input.value.length >= 8\r\n  ) {\r\n    input.nextElementSibling.innerHTML = \"비밀번호가 설정되었습니다.\";\r\n    input.classList.remove(\"js_red\");\r\n  } else {\r\n    input.nextElementSibling.innerHTML = \"비밀번호가 일치하지 않습니다.\";\r\n    input.classList.add(\"js_red\");\r\n  }\r\n};\r\n\r\nconst focusoutNickname = (e) => {\r\n  const input = e.target;\r\n  doubleCheck(input.value, \"nickname\").then((res) => {\r\n    if (res === true) {\r\n      input.nextElementSibling.innerHTML = \"이미 존재합니다.\";\r\n      input.classList.add(\"js_red\");\r\n    }\r\n  });\r\n  if (input.value.length < 2) {\r\n    input.nextElementSibling.innerHTML = \"필수입력항목입니다.\";\r\n    input.classList.add(\"js_red\");\r\n  } //\r\n  else if (input.value.length >= 15) {\r\n    input.nextElementSibling.innerHTML = \"초과되었습니다.\";\r\n    input.classList.add(\"js_red\");\r\n  } //\r\n  else {\r\n    input.nextElementSibling.innerHTML = \"\";\r\n    input.classList.remove(\"js_red\");\r\n  }\r\n};\r\n\r\nconst insertUser = async (_id, _passowrd, _nickname) => {\r\n  const url = `https://review-server.herokuapp.com/review/user`;\r\n  await fetch(url, {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n      id: _id,\r\n      password: _passowrd,\r\n      nickname: _nickname,\r\n    }),\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n  });\r\n};\r\n\r\nconst clickSubmit = (e) => {\r\n  e.preventDefault();\r\n  const allInput = document.getElementsByTagName(\"input\");\r\n  const allInputArr = [...allInput];\r\n  const idValue = document.querySelector(\".input_id\").value;\r\n  const passwordValue = document.querySelector(\".input_password\").value;\r\n  const password2Value = document.querySelector(\".input_password2\").value;\r\n  const nicknameValue = document.querySelector(\".input_nickname\").value;\r\n\r\n  const arrInputEvery = allInputArr.every(\r\n    (item) => !item.classList.contains(\"js_red\")\r\n  );\r\n  if (\r\n    arrInputEvery &&\r\n    idValue !== \"\" &&\r\n    nicknameValue !== \"\" &&\r\n    password2Value !== \"\" &&\r\n    passwordValue !== \"\"\r\n  ) {\r\n    insertUser(idValue, passwordValue, nicknameValue);\r\n    alert(\"회원가입성공!\");\r\n    location.href = \"/review/login\";\r\n  } else {\r\n    alert(\"다시해주세요!\");\r\n  }\r\n};\r\n\r\nconst signUpInit = () => {\r\n  const nickname = document.querySelector(\".input_nickname\");\r\n  const password = document.querySelector(\".input_password\");\r\n  const password2 = document.querySelector(\".input_password2\");\r\n  const id = document.querySelector(\".input_id\");\r\n  const signBtn = document.querySelector(\".sign_in_btn\");\r\n\r\n  id.addEventListener(\"focusout\", focusoutId);\r\n  nickname.addEventListener(\"focusout\", focusoutNickname);\r\n  password.addEventListener(\"focusout\", focusoutFirstPassword);\r\n  password2.addEventListener(\"focusout\", focusoutSecondPassword);\r\n  signBtn.addEventListener(\"click\", clickSubmit);\r\n};\r\nsignUpInit();\r\n\n\n//# sourceURL=webpack://js_review/./src/javascript/signup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/signup.js"]();
/******/ 	
/******/ })()
;