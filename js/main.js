const menuBtn = document.querySelector(".menu-btn");
const hamBurger = document.querySelector(".menu-btn_burger");

// let showMenu = false;

menuBtn.addEventListener("click", ToggleMenu);

function ToggleMenu() {
  hamBurger.classList.toggle("open");
  // if (!showMenu) {
  // // } else {
  // //   hamBurger.classList.remove("open");
  //   showMenu = false;
  // }
}
