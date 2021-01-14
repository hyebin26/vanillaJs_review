const clickLogin = () => {
  const loginId = document.querySelector(".login_id");
  const loginPassword = document.querySelector(".login_password");
  let user = JSON.parse(localStorage.getItem("user"));
  user.map((uid) => {
    if (loginId.value === uid.id && loginPassword.value === uid.password) {
      location.href = "/review";
    } else {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
  });
};

const handleLogin = () => {
  const loginBtn = document.querySelector(".login_btn");
  loginBtn.addEventListener("click");
};

const Logininit = () => {
  handleLogin();
};
LoginInit();
