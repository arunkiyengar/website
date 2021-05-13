const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav_main");
const main = document.getElementsByTagName("main")[0];
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.style.display = "block";
    main.style.display = "none";
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.style.display = "none";
    main.style.display = "block";
    menuOpen = false;
  }
});


