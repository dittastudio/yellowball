import gsap from 'gsap';

function FnHero() {
  const heros = document.querySelectorAll(
    '[data-js="hero"]',
  ) as NodeListOf<HTMLElement>;

  const html = document.documentElement as HTMLElement;

  heros.forEach(hero => {
    const icon = hero.querySelector('[data-js-hero-icon]') as HTMLElement;
    const iconInner = hero.querySelector(
      '[data-js-hero-icon-inner]',
    ) as HTMLElement;

    if (icon && iconInner && html) {
      const tl1 = gsap.timeline();

      tl1.to(icon, {
        opacity: 1,
        y: '0%',
        scale: 1,
        duration: 1.5,
        delay: 0.5,
        ease: 'power4.out',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          markers: false,
          trigger: html,
          endTrigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      tl.to(iconInner, {
        opacity: 0,
        y: '-30%',
        scale: 0.75,
        ease: 'linear',
      });
    }
  });
}

export default FnHero;