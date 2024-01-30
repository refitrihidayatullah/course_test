// scroll nav sticky first
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// scroll nav sticky end

// hamburger_navbar first

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
// hamburger_navbar end

// carousel hero first
// const carousel = document.querySelector(".carousel__hero");
// console.log(carousel);
// const dragging = (e) => {
//   carousel.scrollLeft = e.pageX;
// };
// if (carousel) {
//   carousel.addEventListener("mousemove", dragging);
// }
// carousel hero end

// swiper card hero first
let swiperCards = new Swiper(".content__hero", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 4,
    },
    925: {
      slidesPerView: 3.2,
    },
    1125: {
      slidesPerView: 4,
    },
  },
});

// swiper card hero end

// swiper testimoni card
let swiperTesti = new Swiper(".content__testimoni", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 4,
    },
    925: {
      slidesPerView: 5,
    },
    1125: {
      slidesPerView: 5,
    },
  },
});
// swiper testimoni card end

// swiper komunitas card
let swiperKomu = new Swiper(".content__komunitas", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    925: {
      slidesPerView: 5,
    },
    1125: {
      slidesPerView: 5,
    },
  },
});
// swiper komunitas card end

// swiper senior card
let swiperSenior = new Swiper(".content__senior", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  breakpoints: {
    700: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});
// swiper senior card end

// swiper investor card
let swiperInvestor = new Swiper(".content__investor", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  breakpoints: {
    700: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});
// swiper investor card end

// swiper featured card
let swiperFeatured = new Swiper(".content__featured", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  breakpoints: {
    700: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});
// swiper featured card end
let swiperCarouu = new Swiper(".content__carousel", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  //   Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 1,
    },
    925: {
      slidesPerView: 1.2,
    },
    1125: {
      slidesPerView: 1,
    },
  },
});

// accordion first
let accordions = document.querySelectorAll(".accordion-wrapper .accordion");

accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((subcontent) => {
      subcontent.classList.remove("active");
    });
    acco.classList.add("active");
  };
});
// accordion end
