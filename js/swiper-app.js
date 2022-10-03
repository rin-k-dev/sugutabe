import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    960: {
      autoplay: false,
      slidesPerView: 2
    }
  }
});