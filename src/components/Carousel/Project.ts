import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';

function FnProject() {
  const carousels = document.querySelectorAll(
    '[data-js="carousel-project"]',
  ) as NodeListOf<HTMLElement>;

  carousels.forEach(carousel => {
    const swiperEl = carousel.querySelector('[data-js-swiper]') as HTMLElement;

    if (swiperEl) {
      const swiperParams: SwiperOptions = {
        speed: 1000,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        slideToClickedSlide: true,
        preventClicks: true,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `
          <button type="button" class="${className}">
            <span class="swiper-pagination-bullet__pill">
              <span class="sr-only">Go to slide ${index + 1}</span>
            </span>
          </button>
        `;
          },
        },
      };

      new Swiper(swiperEl, {
        modules: [Autoplay, Navigation, Pagination, Keyboard],
        ...swiperParams,
      });
    }
  });
}

FnProject();