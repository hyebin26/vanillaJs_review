const id = document.querySelector(".inputId");
const password = document.querySelector(".inputPassword");
const password2 = document.querySelector(".inputPassword2");
const nickname = document.querySelector(".input_nickname");

const jsId = document.querySelector(".js_id");
const signBtn = document.querySelector(".sign_in_btn");

const sumPassword = document.querySelectorAll(".password");
const sumDocument = document.getElementsByTagName("input");
const sumDocumentArr = [...sumDocument];

const handleId = () => {
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

const focusoutPassword = (e) => {
  const tar = e.target;
  if (tar.value === "") {
    tar.nextElementSibling.innerHTML = "필수입력항목입니다.";
    tar.classList.add("js_red");
  } else if (tar.value.length < 8) {
    tar.nextElementSibling.innerHTML = "8글자이상입력해주세요";
    tar.classList.add("js_red");
  } else {
    tar.classList.remove("js_red");
    tar.nextElementSibling.innerHTML = "";
  }
  ///
};

const focusPassword2 = (e) => {
  const tar = e.target;
  if (tar.value == password.value && tar.value != "" && tar.value.length > 7) {
    tar.nextElementSibling.innerHTML = "비밀번호가 설정되었습니다.";
    tar.classList.remove("js_red");
  } else {
    tar.nextElementSibling.innerHTML = "비밀번호가 일치하지 않습니다.";
    tar.classList.add("js_red");
  }
};

const handlePassword = () => {
  sumPassword.forEach((item) => {
    item.addEventListener("focusout", (e) => focusoutPassword(e));
  });
  password2.addEventListener("focusout", (e) => focusPassword2(e));
};

const focusoutNickname = (e) => {
  if (e.target.value.length < 2) {
    e.target.nextElementSibling.innerHTML = "필수입력항목입니다.";
    e.target.classList.add("js_red");
  } else if (e.target.value.length > 15) {
    e.target.nextElementSibling.innerHTML = "초과되었습니다.";
    e.target.classList.add("js_red");
  } else {
    e.target.nextElementSibling.innerHTML = "";
    e.target.classList.remove("js_red");
  }
};

const handleNickname = () => {
  nickname.addEventListener("focusout", (e) => focusoutNickname(e));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const containArray = sumDocumentArr.map((item) =>
    item.classList.contains("js_red")
  );
  if (containArray.every((item) => item == false)) {
    alert("회원가입성공!");
    localStorage.setItem(
      "user",
      JSON.stringify([
        {
          id: id.value,
          password: password.value,
          nickname: nickname.value,
        },
      ])
    );
    location.href = "login.html";
  } else {
    alert("다시해주세요!");
  }
};

const submitUser = () => {
  signBtn.addEventListener("click", (e) => handleSubmit(e));
};

const init = () => {
  handleId();
  handlePassword();
  handleNickname();
  submitUser();
};
init();
