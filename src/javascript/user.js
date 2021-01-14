const clickLogoutBtn = (e) => {
  e.preventDefault();
  sessionStorage.removeItem("currentUser");
  location.replace("/review");
};

const loadUser = () => {
  const currentUser = sessionStorage.getItem("currentUser");
  const loginBtn = document.querySelector(".search_loginBtn");
  const profileBtn = document.querySelector(".search_profile");

  if (currentUser == null) {
    return false;
  } else {
    loginBtn.innerText = "로그아웃";
    loginBtn.addEventListener("click", clickLogoutBtn);
    profileBtn.innerText = currentUser;
  }
};

const userInit = () => {
  loadUser();
};
userInit();
