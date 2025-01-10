import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FnSplitRichText() {
  const shapes = document.querySelectorAll(
    '[data-js="block-split-rich-text"]',
  ) as NodeListOf<HTMLElement>;

  shapes.forEach(shape => {
    const icon = shape.querySelector(
      '[data-js-block-split-rich-text-icon]',
    ) as HTMLElement;

    if (icon) {
      const tl = gsap.timeline({
        scrollTrigger: {
          markers: false,
          trigger: icon,
          start: 'top center',
          end: 'top 25%',
          scrub: 1.5,
        },
      });

      tl.from(icon, {
        opacity: 0,
        y: '10%',
        scale: 0.95,
        ease: 'linear',
      });
    }
  });
}

export default FnSplitRichText;