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

    const heroLogoContainer = document.querySelector('[data-js-hero-logo-animated-container]') as HTMLElement;

    if (hero && heroLogoContainer && window.scrollY < 5) {
      const heroLogoBox = hero.querySelector('[data-js-hero-logo-animated-box]') as HTMLElement;
      const heroLogo = hero.querySelector('[data-js-hero-logo-animated-svg]') as HTMLElement;

      const header = document.querySelector('[data-js="header"]') as HTMLElement;
      const layoutLines = document.querySelector('[data-js="layout-lines"]') as HTMLElement;
      const heroContent = hero.querySelector('[data-js-hero-content]') as HTMLElement;
      const cursors = hero.querySelector('[data-js="cursors"]') as HTMLElement;

      const tl = gsap.timeline();

      gsap.set(heroLogo, {
        opacity: 0,
      });

      gsap.set(heroLogoBox, {
        y: window.innerHeight / 2 - ((heroLogoBox.offsetHeight * 1.5) + header.offsetHeight),
        scale: 1.85,
      });

      gsap.set(header, { y: '-100%' });
      gsap.set(layoutLines, { '--layout-line-top-opacity': 0 });
      gsap.set(hero, { height: 'calc(100vh - var(--header-height))' });
      gsap.set(heroContent, { opacity: 0 });
      gsap.set(cursors, { scale: 2 });

      const duration = 1.5;
      const ease = 'elastic.inOut(1, 1.5)';
      const delay = 1;

      tl
        .to(heroLogo, {
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
          onStart: () => {
            window.lenis.stop();
          },
          onComplete: () => {
            heroLogo.classList.add('has-animation');
          },
        })
        .to(heroLogoBox, {
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
            window.lenis.start();
          },
        }, '<')
    } else {
      const heroLogoStatic = document.querySelector('[data-js-hero-logo-static]') as HTMLElement;

      if (heroLogoStatic) {
        heroLogoContainer.classList.add('hidden');
        heroLogoStatic.classList.remove('hidden');
      }
    }
  });
}

export default FnHero;