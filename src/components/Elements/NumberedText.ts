import gsap from 'gsap';

function FnNumberedText() {
  const numbereds = document.querySelectorAll(
    '[data-js="numbered-text"]',
  ) as NodeListOf<HTMLElement>;

  if (numbereds?.length) {
    numbereds.forEach(numbered => {
      const number = numbered.querySelector('[data-js-number]') as HTMLElement;
      const text = numbered.querySelector('[data-js-text]') as HTMLElement;

      if (number && text) {
        gsap.fromTo(
          number,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 0.15,
            ease: 'power4.out',
            scrollTrigger: {
              markers: false,
              trigger: numbered,
              scrub: 1.5,
              start: 'top bottom',
              end: 'bottom center',
            },
          },
        );

        gsap.fromTo(
          text,
          {
            yPercent: 200,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            ease: 'power4.out',
            scrollTrigger: {
              markers: false,
              trigger: numbered,
              scrub: 1.5,
              start: 'top bottom',
              end: 'bottom center',
            },
          },
        );
      }
    });
  }
}

export default FnNumberedText;