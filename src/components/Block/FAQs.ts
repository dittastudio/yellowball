import gsap from 'gsap';

function FnFAQs() {
  const shapes = document.querySelectorAll(
    '[data-js="block-faqs"]',
  ) as NodeListOf<HTMLElement>;

  shapes.forEach(shape => {
    const icon = shape.querySelector(
      '[data-js-block-faqs-icon]',
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

export default FnFAQs;