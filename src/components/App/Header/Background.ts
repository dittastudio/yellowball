import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FnBackground() {
  const backgrounds = document.querySelectorAll(
    '[data-js="header-background"]',
  ) as NodeListOf<HTMLElement>;

  backgrounds.forEach(background => {
    const screenMd = 768;

    if (background) {
      const sections = document.querySelectorAll(
        '[data-js-theme]',
      ) as NodeListOf<HTMLElement>;

      const initThemeTrigger = (trigger: HTMLElement) => {
        const headerPro = document.querySelector(
          '[data-js="header"]',
        ) as HTMLElement;

        ScrollTrigger.create({
          markers: false,
          trigger: trigger,
          start: `top ${headerPro.offsetHeight / 2}px`,
          end: `bottom ${headerPro.offsetHeight / 2}px`,
          onToggle: ({ isActive }) => {
            const checkIfLightTheme =
              isActive && trigger.getAttribute('data-js-theme') === 'light';

            // Dark Theme
            background.classList[checkIfLightTheme ? 'remove' : 'add'](
              'is-dark',
            );

            // Light Theme
            background.classList[!checkIfLightTheme ? 'remove' : 'add'](
              'is-light',
            );
          },
          invalidateOnRefresh: true,
        });
      };

      sections.forEach(section => {
        let mm = gsap.matchMedia();

        mm.add(`(min-width: ${screenMd}px)`, () => {
          initThemeTrigger(section);
        });

        mm.add(`(max-width: ${screenMd - 1}px)`, () => {
          initThemeTrigger(section);
        });
      });
    }
  });

  const resizeObserver = new ResizeObserver(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  });

  const resizeTarget: HTMLBodyElement | any = document.querySelector('body');

  resizeObserver.observe(resizeTarget);
}

export default FnBackground;