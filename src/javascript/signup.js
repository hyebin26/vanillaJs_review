const handleId = () => {
  const id = document.querySelector(".input_id");
  const jsId = document.querySelector(".js_id");

  id.addEventListener("focusout", () => {
    if (id.value === "") {
      jsId.innerHTML = "필수입력항목입니다.";
      id.classList.add("js_red");
    } else {
      jsId.innerHTML = "";
      if (id.classList.contains("js_red")) {
        id.classList.remove("js_red");
      } else {
        return;
      }
    }
  });
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

const handlePassword = () => {
  const password = document.querySelector(".input_password");
  const password2 = document.querySelector(".input_password2");

  password.addEventListener("focusout", focusoutFirstPassword);
  password2.addEventListener("focusout", focusoutSecondPassword);
};

const focusoutNickname = (e) => {
  const input = e.target;

  if (input.value.length < 2) {
    input.nextElementSibling.innerHTML = "필수입력항목입니다.";
    input.classList.add("js_red");
  } else if (input.value.length >= 15) {
    input.nextElementSibling.innerHTML = "초과되었습니다.";
    input.classList.add("js_red");
  } else {
    input.nextElementSibling.innerHTML = "";
    input.classList.remove("js_red");
  }
};

const handleNickname = () => {
  const nickname = document.querySelector(".input_nickname");
  nickname.addEventListener("focusout", focusoutNickname);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const allInput = document.getElementsByTagName("input");
  const allInputArr = [...allInput];
  const idValue = document.querySelector(".input_id").value;
  const passwordValue = document.querySelector(".input_password").value;
  const nicknameValue = document.querySelector(".input_nickname").value;

  allInputArr.every((item) => {
    if (
      !item.classList.contains("js_red") &&
      idValue == "" &&
      passwordValue == "" &&
      nicknameValue == ""
    ) {
      alert("다시해주세요!");
    } else {
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
    }
  });
};

const submitUser = () => {
  const signBtn = document.querySelector(".sign_in_btn");

  signBtn.addEventListener("click", handleSubmit);
};

const init = () => {
  handleId();
  handlePassword();
  handleNickname();
  submitUser();
};
init();
