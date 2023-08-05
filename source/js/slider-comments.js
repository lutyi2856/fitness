import Swiper from './vendor/swiper';

export function initializeSwiperComments() {
  const swiperComments = new Swiper('.swiper-comments', {
    slidesPerView: 1,
    rtl: false,
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-comments-button-next',
      prevEl: '.swiper-comments-button-prev',
    },
  });
}
