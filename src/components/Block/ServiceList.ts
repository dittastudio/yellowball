import gsap from 'gsap';

function FnServiceList() {
  const sections = document.querySelectorAll(
    '[data-js="service-list"]',
  ) as NodeListOf<HTMLElement>;

  if (sections?.length) {
    sections.forEach(section => {
      const items = section.querySelectorAll(
        '[data-js-item]',
      ) as NodeListOf<HTMLElement>;

      items.forEach(item => {
        gsap.fromTo(
          item,
          {
            x: 40,
            autoAlpha: 0,
            skewX: -3,
          },
          {
            x: 0,
            autoAlpha: 1,
            skewX: 0,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'center center',
              scrub: 1.5,
            },
          },
        );
      });

      const stickyEl = section.querySelector(
        '[data-js-service-list-sticky]',
      ) as HTMLElement;

      const setStickyHeight = () => {
        const { height } = stickyEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const headerHeight =
          document.querySelector('[data-js="header"]')?.clientHeight;

        if (!headerHeight) return;

        if (windowHeight < height + headerHeight) {
          stickyEl.style.position = 'static';
        } else {
          stickyEl.style.position = 'sticky';
          stickyEl.style.setProperty(
            '--sticky-height',
            `calc((50vh - ${height / 2}px))`,
          );
        }
      };

      setStickyHeight();

      let ticking = false;

      const handleResize = () => {
        setStickyHeight();
        ticking = false;
      };

      window.addEventListener('resize', () => {
        if (!ticking) {
          window.requestAnimationFrame(handleResize);
          ticking = true;
        }
      });
    });
  }
}

export default FnServiceList;