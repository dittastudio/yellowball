import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FnFigure() {
  const cards = document.querySelectorAll(
    '[data-js="card-figure"]',
  ) as NodeListOf<HTMLElement>;

  cards.forEach(card => {
    const figure = card.querySelector('[data-js-figure]') as HTMLElement;

    if (figure) {
      gsap.from(figure, {
        textContent: 0,
        duration: 2,
        snap: { textContent: 1 },
        ease: 'power4.inOut',
        scrollTrigger: {
          markers: false,
          trigger: figure,
          start: 'top bottom',
        },
      });
    }

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

export default FnFigure;