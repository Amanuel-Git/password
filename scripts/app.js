const hamburgerMenu = document.getElementsByClassName("hamburger")[0];
const mobileNav = document.getElementsByClassName("nav-links")[0];

hamburgerMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("nav-links-open");
});
