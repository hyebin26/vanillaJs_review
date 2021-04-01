const clickLogoutBtn = (e) => {
  e.preventDefault();
  sessionStorage.removeItem("currentUser");
  location.replace("/vanillaJs_review");
};

const loadUser = () => {
  const currentUser = sessionStorage.getItem("currentUser");
  const loginBtn = document.querySelector(".search_loginBtn");
  const profileBtn = document.querySelector(".search_profile");

  if (currentUser == null) {
    profileBtn.setAttribute("href", "/vanillaJs_review/signUp");
    profileBtn.innerText = "회원가입";
  } else {
    loginBtn.innerText = "로그아웃";
    loginBtn.addEventListener("click", clickLogoutBtn);
    profileBtn.setAttribute("href", "/vanillaJs_review/profile");
    profileBtn.innerText = currentUser;
  }
};

const userInit = () => {
  loadUser();
};
userInit();
