import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FnPrompt() {
  const cards = document.querySelectorAll(
    '[data-js="card-prompt"]',
  ) as NodeListOf<HTMLElement>;

  cards.forEach(card => {
    const shape = card.querySelector('[data-js-shape]') as HTMLElement;

    if (shape) {
      const { height: cardHeight } = card.getBoundingClientRect();
      const { height: shapeHeight } = shape.getBoundingClientRect();

      gsap.to(shape, {
        y: `-${cardHeight - shapeHeight / 2}`,
        scrollTrigger: {
          markers: false,
          trigger: card,
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top',
        },
      });
    }
  });
}

export default FnPrompt;