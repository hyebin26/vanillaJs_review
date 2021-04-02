const fetchLogin = async (id, password) => {
  return await fetch(`https://review-server.herokuapp.com/review/login`, {
    method: "POST",
    body: JSON.stringify({ id, password }),
    headers: {
      "Content-Type": "application/json",
    },
  }) //
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const clickLogin = (e) => {
  e.preventDefault();
  const loginId = document.querySelector(".login_id").value;
  const loginPassword = document.querySelector(".login_password").value;

  fetchLogin(loginId, loginPassword).then((res) => {
    if (res) {
      sessionStorage.setItem("currentUser", res);
      location.href = "/";
    } else {
      alert("아이디 혹은 비밀번호가 틀렸습니다.!");
    }
  }); //
};

const LoginInit = () => {
  const loginBtn = document.querySelector(".login_btn");
  loginBtn.addEventListener("click", clickLogin);
};
LoginInit();
