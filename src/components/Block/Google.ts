import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FnGoogle() {
  const googles = document.querySelectorAll(
    '[data-js="google"]',
  ) as NodeListOf<HTMLElement>;

  if (googles?.length) {
    googles.forEach(google => {
      const items = google.querySelectorAll(
        '[data-js-item]',
      ) as NodeListOf<HTMLElement>;

      items.forEach(item => {
        gsap.fromTo(
          item,
          {
            x: 40,
            autoAlpha: 0,
            skewX: -3,
          },
          {
            x: 0,
            autoAlpha: 1,
            skewX: 0,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'center center',
              scrub: 1.5,
            },
          },
        );
      });
    });
  }
}

export default FnGoogle;