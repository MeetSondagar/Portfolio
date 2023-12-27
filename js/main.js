const menuBtn = document.querySelector(".menu-btn");
const hamBurger = document.querySelector(".menu-btn_burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav_item");

// let showMenu = false;

menuBtn.addEventListener("click", ToggleMenu);

function ToggleMenu() {
  hamBurger.classList.toggle("open");
  menuNav.classList.toggle("open");
  nav.classList.toggle("open");
  navItems.forEach((item) => item.classList.toggle("open"));
  // if (!showMenu) {
  // } else {
  //   showMenu = false;
  // }
}
