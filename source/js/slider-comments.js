import Swiper from './vendor/swiper';

export function initializeSwiperComments() {
  const swiperComments = new Swiper('.swiper-comments', {
    slidesPerView: 1,
    rtl: false,
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-comments__button-next',
      prevEl: '.swiper-comments__button-prev',
    },
  });
}
