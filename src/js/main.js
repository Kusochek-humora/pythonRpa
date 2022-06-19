document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const slider = new Swiper('.welcome__slider', {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        effect: "fade",
        loop: true,
        allowTouchMove: false
    });
    const resourcesSlider = new Swiper('.resources__slider', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
})