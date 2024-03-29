## :memo:프로젝트 소개
- 바닐라 자바스크립트를 사용해서 만든 리뷰페이지입니다. 이 프로젝트는 영화를 보거나 독서를 한 후 기억에서 점차 사라지는 것이 아쉬워서 느낀점을 기록하기 위해 시작하게 되었습니다. 
- 회원가입 부분은 간단한 회원가입 폼을 만들어 입력한 정보를 Mysql DB에 저장을 하는 방식으로 구현했습니다. 댓글, 글 또한 마찬가지로 DB에 저장을 하였으며, 이러한 정보들은 서버와의 통신을 통해 저장하고 DB에서 정보를 받아와서 화면에 보여주는 형식으로 구현했습니다.
- 서버 또한 mysql과 express를 통해 직접 배포하였습니다.
- 웹팩으로 자바스크립트 파일을 번들링하고 서버와 앱 둘다 heroku에 배포하였습니다.

## :bell:사용한 기술 
- Vanilla Javascript 
- Cloudynary API
- Webpack
- Mysql
- Node js
- dotenv
- express

## :camera:주요 기능
1. 서버와의 통신을 통해 정보 전달받기
```jsx
const contents = await fetch(
    `https://review-server.herokuapp.com/review/reviewData`
  ) //
    .then((res) => res.json())
    .catch((err) => console.log(err));
contents.map(content => showMaindata(content));
const showMainData = (item) => {
		...받은 정보를 바탕으로 UI 출력
}
```
2. 글의 개수가 5개가 넘을 시 다음 페이지 동적으로 추가하기
```jsx
const contents = fetch(...);
const rows = 5;
let currentPage =
    currentUrl.get("page") === null ? 1 : currentUrl.get("page");
    
displayList(contents, rows, currentPage);
setupPagination(contents, rows, paginationWrapper, currentPage);

const displayList = (items, rows_per_page, page) => {
  page--;
  let start = page * rows_per_page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);
  paginatedItems.map((item) => showMainData(item));
};

const setupPagination = (items, rows_per_page, wrapper, currentPage) => {
  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = paginationButton(i, currentPage);
    wrapper.appendChild(btn);
  }
};

const paginationButton = (page, current_page) => {
  let link = document.createElement("a");
  let list = document.createElement("li");

  list.classList.add("pagigator_list");
  link.classList.add("pagigator_link");

  link.dataset.page_num = page;
  link.setAttribute("href", "/?page=" + page);
  list.appendChild(link);
  link.innerText = page;
  if (parseInt(current_page) === page) link.classList.add("active");

  link.addEventListener("click", () => {
    current_page = page;

    let current_btn = document.querySelector(".pagigator_link active");
    current_btn.classList.remove("active");

    link.classList.add("active");
  });
  return list;
};
```
3. 로그인 폼 
```jsx
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
  }); 
};
```
4. 업로드 이미지 추가하기
```jsx
const imageLoader = async (file) => {
  const url = "https://api.cloudinary.com/v1_1/dcil8rawn/upload";
  const formData = new FormData();
  const span = document.querySelector(".image_span");

  formData.append("file", file);
  formData.append("upload_preset", "vnvxzryj");

  const imageFile = await fetch(url, {
    method: "POST",
    body: formData,
  }) //
    .then((res) => res.json());
  span.innerText = imageFile.original_filename + " 이미지 추가!";
  span.dataset.image = imageFile.secure_url;
};
```
5. 서버 코드
```jsx
app.get("/review/reviewData", (req, res) => {
    conn.query("select * from reviewData order by id desc", (err, result) => {
      res.send(result);
    });
  });
```

## :exclamation:에러
1. CORS(Cross Origin-Resource Sharing)
- CORS는 한국어로 직역하면 교차 출처 리소스 공유라고 해석할 수 있습니다. 여기서 "교차 출처"라고 하는 것은 "다른 출처"를 의미합니다. 요청을 보내는 프론트 주소와 백엔드 주소가 다르면 CORS 에러가 발생합니다.
- 이번 프로젝트를 진행하면서, 프론트에서 서버와의 통신을 하면서 CORS 관련 에러를 겪었습니다. 관련 문제를 해결하기 위해 cors라는 패키지를 이용해서, 요청 응답 헤더에 Acess-Control-Allow-Origin을 설정해주었습니다.
2. 배포
- 이번 프로젝트를 진행하면서 처음으로, 서버와 웹을 둘 다 배포했습니다. Github는 nodejs를 지원하지 않고 AWS는 DB를 사용할 경우 비용이 발생해서 Heroku로 배포하였습니다.
- Heroku에 배포할 때 Github, AWS보다 정보가 적어서 많은 에러를 만났으나 구글에 검색을 하고 Heroku 공식문서를 참고해서 해결하였습니다.
## :thumbsup:느낀점 
- 이번 프로젝트를 할 때는 템플릿을 정하지 않고 만들었습니다. 이유는 성능이 중요하다고 생각해서 디자인 적인 면은 별로 중요하지 않다고 생각해서 입니다. 하지만 템플릿이 없이 만드니까 디자인도 너무 이상하고 프로젝트를 하면서 기능을 추가하는데 많은 어려움을 겪었습니다. 다음에 프로젝트를 할 때는 템플릿까지는 아니더라도 참고할 것을 정하고 디테일한 것까지 정하고 보수하기 편하도록 코드를 구성해야 한다고 생각했습니다.
- 이전에 커밋으로 돌아갈 상황을 대비해서 readme 혹은 커밋을 디테일하게 적어야 된다고 생각했습니다.
- 변수이름이 너무 규칙적이지 않고 코드를 직관적으로 확인할 수 있도록 해야 겠다고 느꼈습니다.
- 배포하는 것이 의도하지 않는 에러와 맞닥뜨리기도 하고, 정보도 부족한 편이므로, 서버는 미리 배포를 해서 천천히 에러를 해결해가면서 하는 것이 더 편할 것 같습니다.
## :link:링크
앱 링크 : <a href="https://review-vanillajs.herokuapp.com/">https://review-vanillajs.herokuapp.com/</a> *앱이 작동하지 않을 시 새로고침을 눌러주세요!

서버 소스 링크 :<a href="https://github.com/hyebin-Hwang/server_reviewJS">https://github.com/hyebin-Hwang/server_reviewJS</a>

