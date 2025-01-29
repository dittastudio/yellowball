import gsap from 'gsap';
// import Alpine from 'alpinejs';
// import type Alpine from 'alpinejs';

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

    if (hero) {
      const header = document.querySelector('[data-js="header"]') as HTMLElement;
      const heroLogo = hero.querySelector('[data-js-hero-logo]') as HTMLElement;
      const heroLogoSVG = heroLogo.querySelector('[data-js="ui-logo"]') as HTMLElement;
      const heroContent = hero.querySelector('[data-js-hero-content]') as HTMLElement;
      const tl = gsap.timeline();

      gsap.set(header, {
        opacity: 0,
        y: -100,
      });

      gsap.set(hero, {
        height: 'calc(100vh - var(--header-height))',
      });

      gsap.set(heroLogo, {
        y: window.innerHeight / 2 - (heroLogo.offsetHeight + header.offsetHeight),
        scale: 1.85,
      });

      gsap.set(heroContent, {
        opacity: 0,
      });

      const duration = 1.25;
      const easing = 'back.out(0.8)';
      const delay = 2.5;

      setTimeout(() => {
        heroLogoSVG.classList.add('has-animation');
      }, 1000);

      tl.to(header, {
        opacity: 1,
        y: 0,
        duration,
        ease: easing,
        delay,
      }).to(hero, {
        height: 'auto',
        duration,
        ease: easing,
      },
        '<',
      ).to(heroLogo, {
        y: 0,
        scale: 1,
        duration,
        ease: easing,
      },
        '<',
      ).to(heroContent, {
        opacity: 1,
        y: 0,
        duration,
        ease: easing,
      },
        '<',
      );
    }

    // Alpine.data('hero', () => ({
    //   init() {
    //     this.$watch('$store.navigation.isMenuOpen', value => {
    //       console.log(value);
    //     });
    //   },
    // }));
  });
}

export default FnHero;