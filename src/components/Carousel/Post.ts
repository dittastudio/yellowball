import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

function FnPost() {
  const carousels = document.querySelectorAll(
    '[data-js=carousel-post]',
  ) as NodeListOf<HTMLElement>;

  carousels.forEach(carousel => {
    const swiperEl = carousel.querySelector('[data-js-swiper]') as HTMLElement;

    if (carousel && swiperEl) {
      const swiperParams: SwiperOptions = {
        speed: 500,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        centeredSlides: false,
        preventClicks: true,
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
        breakpoints: {
          390: {
            centeredSlides: true,
          },
          640: {
            centeredSlides: false,
          },
        },
        on: {
          init() {
            carousel.classList.add('is-first-slide');
          },

          slideChange({ isBeginning, isEnd }) {
            if (isBeginning) {
              carousel.classList.add('is-first-slide');
            } else {
              carousel.classList.remove('is-first-slide');
            }

            if (isEnd) {
              carousel.classList.add('is-last-slide');
            } else {
              carousel.classList.remove('is-last-slide');
            }
          },
        },
      };

      new Swiper(swiperEl, {
        modules: [Navigation, Pagination, Keyboard],
        ...swiperParams,
      });
    }
  });
}

FnPost();