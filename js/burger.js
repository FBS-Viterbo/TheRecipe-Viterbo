const toggleMenu = document.querySelector(".header__toggle-menu");
const nav = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  nav.classList.toggle("open"); // ← this makes left:0 work
});
