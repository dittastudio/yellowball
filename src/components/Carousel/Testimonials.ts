import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import { Autoplay, Keyboard } from 'swiper/modules';

function FnTestimonials() {
  const carousels = [
    ...document.querySelectorAll('[data-js="carousel-testimonials"]'),
  ] as HTMLElement[];

  carousels.forEach(carousel => {
    const swiperParams: SwiperOptions = {
      speed: 1000,
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 1,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
      },
    };

    new Swiper(carousel, {
      modules: [Autoplay, Keyboard],
      ...swiperParams,
    });
  });
}

FnTestimonials();