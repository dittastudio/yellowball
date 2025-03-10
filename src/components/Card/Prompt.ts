import gsap from 'gsap';

function FnPrompt() {
  const cards = document.querySelectorAll(
    '[data-js="card-prompt"]',
  ) as NodeListOf<HTMLElement>;

  const mm = gsap.matchMedia()

  mm.add({
    isSm: "screen and (min-width: 640px)"
  }, (context) => {
    const { conditions } = context;

    if (!conditions?.isSm) {
      return
    }

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
  });
}

export default FnPrompt;