import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import { Pagination, Keyboard } from 'swiper/modules';

function FnProfile() {
  const carousels = document.querySelectorAll(
    '[data-js=carousel-profile]',
  ) as NodeListOf<HTMLElement>;

  carousels.forEach(carousel => {
    const swiperEl = carousel.querySelector('[data-js-swiper]') as HTMLElement;

    if (carousel && swiperEl) {
      const swiperParams: SwiperOptions = {
        speed: 500,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        preventClicks: true,
        keyboard: {
          enabled: true,
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
        modules: [Pagination, Keyboard],
        ...swiperParams,
      });
    }
  });
}

export default FnProfile;