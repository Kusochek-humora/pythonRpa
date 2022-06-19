document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const slider = new Swiper('.swiper', {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        effect: "fade",
        loop: true,
        allowTouchMove: false
    });
})