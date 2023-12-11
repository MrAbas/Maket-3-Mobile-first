const burgerMenu = document.getElementById("burger__menu");
const burgerContent = document.getElementById("burger__content");

burgerMenu.onclick = function () {
  burgerContent.classList.toggle("burger__content");
  burgerMenu.classList.toggle("burger__menu__cross");
};
