import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FnHeadingBanner() {
  const section = document.querySelector(
    '[data-js="heading-banner"]',
  ) as HTMLElement;

  if (section) {
    const shapes = section.querySelectorAll(
      '.shape',
    ) as NodeListOf<HTMLElement>;

    const tl = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: section,
        start: 'top center',
        end: 'center center',
        scrub: 1.5,
      },
    });

    shapes.forEach((shape, index) => {
      const x = [0, -40, 40];

      tl.from(
        shape,
        {
          opacity: 0,
          x: x[index] ?? 0,
          y: index === 0 ? -40 : 40,
          rotate: index % 2 ? -90 : 90,
        },
        0,
      );
    });
  }
}

export default FnHeadingBanner;