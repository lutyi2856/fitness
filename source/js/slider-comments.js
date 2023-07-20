import Swiper from './vendor/swiper';

export function initializeSwiperComments() {
  const swiperComments = new Swiper('.swiper-comments', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-comments-button-next',
      prevEl: '.swiper-comments-button-prev',
    },
  });
}
