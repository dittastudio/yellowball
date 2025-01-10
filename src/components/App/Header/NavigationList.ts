import gsap from 'gsap';

function FnNavigationList() {
  const navs = document.querySelectorAll(
    '[data-js=navigation-list]',
  ) as NodeListOf<HTMLElement>;

  navs.forEach(nav => {
    const navLogo = nav.querySelector('[data-js-navigation-list-logo]');
    const navList = nav.querySelector('[data-js-navigation-list-list]');
    const navItems = nav.querySelectorAll('[data-js-navigation-list-item]');
    const navSubMenu = nav.querySelector('[data-js-navigation-list-submenu]');
    const pill = nav.querySelector('[data-js-navigation-list-pill]');

    let pillActive = false;

    const duration = 0.3;
    const ease = 'back.out(0.6)';

    const updatePill = (target: any) => {
      const { offsetWidth, offsetLeft } = target.querySelector(
        '[data-js=navigation-list-button]',
      );

      if (pillActive) {
        gsap.to(pill, {
          opacity: 1,
          width: offsetWidth,
          x: offsetLeft,
          duration,
          ease,
        });
      } else {
        pillActive = false;

        gsap.set(pill, {
          width: offsetWidth,
          x: offsetLeft,
        });

        gsap.to(pill, {
          opacity: 1,
          duration,
          ease,
          onStart: () => {
            pillActive = true;
          },
        });
      }
    };

    const hidePill = () => {
      gsap.to(pill, {
        opacity: 0,
        duration,
        ease,
      });
    };

    navList?.addEventListener('mouseleave', () => (pillActive = false));

    navSubMenu?.addEventListener('mouseenter', () => {
      pillActive = false;
      hidePill();
    });

    navItems?.forEach(item => {
      item.addEventListener('mouseenter', event => {
        const target = (event.target as Element).querySelector(
          '[data-js-navigation-pill-hover-item]',
        ) as HTMLElement;

        if (target) updatePill(target);
      });

      item.addEventListener('mouseleave', hidePill);
    });

    let timeout: NodeJS.Timeout;

    navLogo?.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      navList?.classList.add('lg:pointer-events-none');
    });

    navLogo?.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        navList?.classList.remove('lg:pointer-events-none');
      }, 500);
    });
  });
}

FnNavigationList();