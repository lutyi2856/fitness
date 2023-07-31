import Swiper from './vendor/swiper';

export function initializeSwiper() {
  const swiper = new Swiper('.swiper', {
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      767: {
        slidesPerView: 1,
        spaceBetween: 0,
      },

      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
