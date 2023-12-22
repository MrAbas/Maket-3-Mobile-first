const burgerMenu = document.getElementById("burger__menu");
const burgerContent = document.getElementById("burger__content");

const buttonSearch = document.getElementById("button__search");
const containerSearch = document.getElementById("containerSearch");
const closedSearch = document.getElementById("closedSearch");

burgerMenu.onclick = function () {
  burgerContent.classList.toggle("burger__content");
  burgerMenu.classList.toggle("burger__menu__cross");
};

buttonSearch.onclick = function () {
  buttonSearch.style.display = "none";
  containerSearch.classList.add("container__search__show");
};

closedSearch.onclick = function () {
  buttonSearch.style.display = "block";
  containerSearch.classList.remove("container__search__show");
};
