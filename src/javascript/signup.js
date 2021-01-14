const focusoutId = (e) => {
  const input = e.target;
  const getUser = JSON.parse(localStorage.getItem("user"));
  const uid = getUser.map((user) => user.id);

  if (input.value === "") {
    input.nextElementSibling.innerHTML = "필수입력항목입니다.";
    input.classList.add("js_red");
  } else if (input.value >= 6) {
    input.nextElementSibling.innerHTML = "아이디는 6글자 이상이어야 합니다.";
    input.classList.add("js_red");
  } else if (uid.map((userId) => userId) == id.value) {
    input.nextElementSibling.innerHTML = "이미 존재하는 아이디입니다.";
    input.classList.add("js_red");
  } else {
    input.nextElementSibling.innerHTML = "";
    input.classList.remove("js_red");
  }
};

const focusoutFirstPassword = (e) => {
  const input = e.target;

  if (input.value === "") {
    input.nextElementSibling.innerHTML = "필수입력항목입니다.";
    input.classList.add("js_red");
  } else if (input.value.length < 8) {
    input.nextElementSibling.innerHTML = "8글자이상입력해주세요";
    input.classList.add("js_red");
  } else {
    input.classList.remove("js_red");
    input.nextElementSibling.innerHTML = "";
  }
  ///
};

const focusoutSecondPassword = (e) => {
  const password = document.querySelector(".input_password");
  const input = e.target;

  if (
    input.value == password.value &&
    input.value != "" &&
    input.value.length >= 8
  ) {
    input.nextElementSibling.innerHTML = "비밀번호가 설정되었습니다.";
    input.classList.remove("js_red");
  } else {
    input.nextElementSibling.innerHTML = "비밀번호가 일치하지 않습니다.";
    input.classList.add("js_red");
  }
};

const focusoutNickname = (e) => {
  const input = e.target;
  const getUser = JSON.parse(localStorage.getItem("user"));
  const userName = getUser.map((user) => user.nickname);
  console.log(userName.map((map) => map) == input.value);

  if (input.value.length < 2) {
    input.nextElementSibling.innerHTML = "필수입력항목입니다.";
    input.classList.add("js_red");
  } else if (input.value.length >= 15) {
    input.nextElementSibling.innerHTML = "초과되었습니다.";
    input.classList.add("js_red");
  } else if (userName.map((user) => user) == input.value) {
    input.nextElementSibling.innerHTML = "이미 존재합니다.";
    input.classList.add("js_red");
  } else {
    input.nextElementSibling.innerHTML = "";
    input.classList.remove("js_red");
  }
};

const clickSubmit = (e) => {
  e.preventDefault();
  const allInput = document.getElementsByTagName("input");
  const allInputArr = [...allInput];
  allInputArr.map((item) => console.log(item.value == ""));
  const idValue = document.querySelector(".input_id").value;
  const passwordValue = document.querySelector(".input_password").value;
  const password2Value = document.querySelector(".input_password2").value;
  const nicknameValue = document.querySelector(".input_nickname").value;

  const arrInputEvery = allInputArr.every(
    (item) => !item.classList.contains("js_red")
  );
  if (
    arrInputEvery &&
    !idValue == "" &&
    !nicknameValue == "" &&
    !password2Value == "" &&
    !passwordValue == ""
  ) {
    alert("회원가입성공!");
    localStorage.setItem(
      "user",
      JSON.stringify([
        {
          id: idValue,
          password: passwordValue,
          nickname: nicknameValue,
        },
      ])
    );
    location.href = "/review/login";
  } else {
    alert("다시해주세요!");
  }
};

const signUpInit = () => {
  const nickname = document.querySelector(".input_nickname");
  const password = document.querySelector(".input_password");
  const password2 = document.querySelector(".input_password2");
  const id = document.querySelector(".input_id");
  const signBtn = document.querySelector(".sign_in_btn");

  id.addEventListener("focusout", focusoutId);
  nickname.addEventListener("focusout", focusoutNickname);
  password.addEventListener("focusout", focusoutFirstPassword);
  password2.addEventListener("focusout", focusoutSecondPassword);
  signBtn.addEventListener("click", clickSubmit);
};
signUpInit();
