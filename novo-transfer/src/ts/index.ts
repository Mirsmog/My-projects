export {};

import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper from "swiper";
import "../../node_modules/swiper/swiper.css";

Swiper.use([Navigation, Pagination])

let init = false;

function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      const swiper = new Swiper(".swiper", {
        direction: "horizontal",
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: ".pagination",
          clickable: true,
          renderBullet: function () {
            return `<span class="dot swiper-pagination-bullet"></span>`;
          },
        },
      });
    }
  } else if (init) {
    Swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

// const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100,
// });
