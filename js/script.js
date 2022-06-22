// const elHamburgerBtn = document.querySelector(".header__menu")

// const elHeader = document.querySelector(".header")

// elHamburgerBtn.addEventListener("click", () => {
//   elHeader.classList.toggle(".header--open")
// })

const elHamburgerBtn = document.querySelector(".header__menu");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', ()=> {
  elHeader.classList.toggle('header--open');
})