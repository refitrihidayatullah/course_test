// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const navList = document.querySelector("nav");

//   burger.addEventListener("click", () => {
//     navList.classList.toggle("nav__active");
//     burger.classList.toggle("toggle__burger");
//   });
// };
// navSlide();

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".main__menu");
  const closed = document.querySelector(".main__menu li a i");

  burger.addEventListener("click", () => {
    navList.classList.toggle("main__menu__active");
  });
  closed.addEventListener("click", () => {
    navList.classList.remove("main__menu__active");
  });
};
navSlide();
