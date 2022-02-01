let logo = document.querySelector(".logo");
let navlist = document.querySelector(".nav-list");
let searchbar = document.querySelector(".search-bar");
let burgur = document.querySelector(".burgur");
let navbar = document.querySelector(".navbar");

burgur.addEventListener("click", () => {
  navbar.classList.toggle("nav-height");
  setTimeout(() => {
    logo.classList.toggle("nav-visible");
    navlist.classList.toggle("nav-visible");
    searchbar.classList.toggle("nav-visible");
  }, 500);
});
