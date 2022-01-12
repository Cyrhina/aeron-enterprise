const btnBurger = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".navigation");

btnBurger.addEventListener("click", () => {
  //console.log("I am Click");
  navMenu.classList.toggle("d-block");
});
