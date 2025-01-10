import gsap from 'gsap';
import Alpine from 'alpinejs';

function FnNavigation() {
  const navigationInner = document.querySelector(
    '[data-js-header-navigation-inner]',
  ) as HTMLElement;

  const navigationListSubmenu = document.querySelector(
    '[data-js-navigation-list-submenu]',
  ) as HTMLElement;

  let mm = gsap.matchMedia();

  const animateHeight = (state: boolean) => {
    mm.add('(max-width: 767px)', () => {
      if (state) {
        gsap.to(navigationInner, {
          height: navigationListSubmenu.offsetHeight + 3,
          duration: 0.5,
          ease: 'back.out(0.6)',
        });
      } else {
        gsap.to(navigationInner, {
          height: 'auto',
          duration: 0.5,
          ease: 'back.out(0.6)',
        });
      }
    });
  };

  Alpine.data('headerNavigation', () => ({
    init() {
      this.$watch('$store.navigation.isSubMenuOpen', value => {
        animateHeight(value);
      });
    },
  }));
}

FnNavigation();