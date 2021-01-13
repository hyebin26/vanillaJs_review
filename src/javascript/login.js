const handleLogin = () => {
  const loginBtn = document.querySelector(".login_btn");
  const loginId = document.querySelector(".login_id");
  const loginPassword = document.querySelector(".login_password");

  loginBtn.addEventListener("click", () => {
    let user = JSON.parse(localStorage.getItem("user"));
    user.map((uid) => {
      if (loginId.value === uid.id && loginPassword.value === uid.password) {
        location.href = "/review";
      } else {
        alert("이메일이나 주소가 틀렸습니다.");
      }
    });
  });
};

const Logininit = () => {
  handleLogin();
};
Logininit();
