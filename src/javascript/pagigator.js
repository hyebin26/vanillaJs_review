const clickLink = (e) => {
  console.log(e.target.dataset);
};

const handlePage = () => {
  const link = document.querySelectorAll(".pagigator_link");
  link.forEach((link) => {
    link.dataset.page_num = link.innerText;
    link.setAttribute("href", "/review?page=" + link.dataset.page_num);
    link.addEventListener("click", clickLink);
  });
};



const handlePagigator = (item, pageRow, page) => 
{};

const pagigatorInit = () => {
  handlePage();
};
pagigatorInit();
