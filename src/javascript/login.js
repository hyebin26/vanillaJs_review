const clickLogin = () => {
  const loginId = document.querySelector(".login_id").value;
  const loginPassword = document.querySelector(".login_password").value;
  const getUser = JSON.parse(localStorage.getItem("user")).map((user) => user);
  const user = getUser == null ? [] : getUser;

  const uid = user.map((user) => user);

  const checkUser = uid.map((user) => {
    if (user.id == loginId && user.password == loginPassword) {
      return true;
    } else {
      return false;
    }
  });

  if (checkUser.every((user) => user == false)) {
    alert("아이디 혹은 비밀번호가 틀렸습니다.");
  } else {
    location.href("/review");
  }
};

const LoginInit = () => {
  const loginBtn = document.querySelector(".login_btn");
  loginBtn.addEventListener("click", clickLogin);
};
LoginInit();
