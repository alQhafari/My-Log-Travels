$(document).ready(function () {
  $(".whenopen").addClass("active");
});

function navbarBtn() {
  let nav = document.getElementById("navbar");
  let mobileMenu = document.getElementById("navbarList");
  mobileMenu.classList.toggle("hidden");
  nav.classList.toggle("bg-black/75");
}

$(function () {
  var header = $("#navbar");
  var text = $(".navbarList");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("bg-black");
      text.addClass("lg:text-white");
    } else {
      header.removeClass("bg-black");
      text.removeClass("lg:text-white");
    }
  });
});
$(window).scroll(() => {
  var reveal = $(".reveal");

  for (let i = 0; i < reveal.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveal[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal[i].classList.add("active");
    } else {
      reveal[i].classList.remove("active");
    }
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 25,
  direction: "horizontal",
  centerSlide: "true",
  loop: true,
  fade: "true",
  grabCursur: "true",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
