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

    const heroLogoContainer = hero.querySelector('[data-js-hero-logo]') as HTMLElement;

    if (hero && heroLogoContainer) {
      const heroLogo = heroLogoContainer.querySelector('[data-js="ui-logo"]') as HTMLElement;

      const header = document.querySelector('[data-js="header"]') as HTMLElement;
      const layoutLines = document.querySelector('[data-js="layout-lines"]') as HTMLElement;
      const heroContent = hero.querySelector('[data-js-hero-content]') as HTMLElement;
      const cursors = hero.querySelector('[data-js="cursors"]') as HTMLElement;

      const tl = gsap.timeline();

      gsap.set(heroLogo, {
        opacity: 0,
      });

      gsap.set(heroLogoContainer, {
        y: window.innerHeight / 2 - ((heroLogoContainer.offsetHeight * 1.5) + header.offsetHeight),
        scale: 1.85,
      });

      gsap.set(header, {
        y: '-100%',
      });

      gsap.set(layoutLines, {
        '--layout-line-top-opacity': 0,
      });

      gsap.set(hero, {
        height: 'calc(100vh - var(--header-height))',
      });

      gsap.set(heroContent, {
        opacity: 0,
      });

      gsap.set(cursors, {
        scale: 2,
      });

      const duration = 1.5;
      const ease = 'elastic.inOut(1, 1.5)';
      const delay = 1;

      tl
        .to(heroLogo, {
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
          onComplete: () => {
            heroLogo.classList.add('has-animation');
          },
        })
        .to(heroLogoContainer, {
          y: 0,
          scale: 1,
          duration,
          ease,
          delay,
        })
        .to(header, {
          y: 0,
          duration,
          ease,
        }, '<')
        .to(hero, {
          height: 'auto',
          duration,
          ease,
        }, '<')
        .to(heroContent, {
          opacity: 1,
          y: 0,
          duration,
          ease,
        }, '<')
        .to(layoutLines, {
          '--layout-line-top-opacity': 1,
          duration,
          ease,
        }, '<')
        .to(cursors, {
          scale: 1,
          duration,
          ease,
          onComplete: () => {
            gsap.set(header, { clearProps: "all" });
          },
        }, '<')
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