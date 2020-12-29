const id = document.querySelector(".inputId");
const password = document.querySelector(".inputPassword");
const password2 = document.querySelector(".inputPassword2");
const jsId = document.querySelector(".js_id");
const sumPassword = document.querySelectorAll(".password");
console.log(sumPassword);

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

const handlePassword = () => {
  sumPassword.forEach((item) => {
    console.log(item);
  });
  //   sumPassword.addEventListener("focusout", (e) => {
  //     //     if (e.target.value === "") {
  //     //       e.target.nextElementSibling.innerHTML = "필수항목입니다.";
  //     //     } else {
  //     //       e.target.nextElementSibling.innerHTML = "";
  //     //     }
  //     //   });
  //     console.log(e.target);
  //   });
};
const init = () => {
  handleId();
  handlePassword();
};
init();
