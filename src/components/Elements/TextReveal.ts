import { gsap } from 'gsap';
import SplitType from 'split-type';
import { debounce } from '@/utils/helpers';

function FnTextReveal() {
  const textReveal = document.querySelectorAll(
    "[data-js='text-reveal']",
  ) as NodeListOf<HTMLElement>;

  textReveal.forEach(reveal => {
    let masks: SplitType;
    let lines: SplitType;
    let tween: gsap.core.Tween;

    const hasOnEnter = reveal.hasAttribute('data-js-on-enter');

    const create = () => {
      masks = new SplitType(reveal, {
        types: 'lines',
        lineClass: 'mask',
        tagName: 'span',
      });

      gsap.set(masks.lines, {
        clipPath: `polygon(0 0, 100% 0, 100% 105%, 0% 105%)`,
      });

      const maskElements = reveal.querySelectorAll(
        ':scope .mask',
      ) as NodeListOf<HTMLElement>;

      lines = new SplitType(maskElements, {
        types: 'lines',
        tagName: 'span',
      });

      reveal.classList.remove('opacity-0');

      const from = { yPercent: 100 };
      const to = {
        duration: 1.5,
        yPercent: 0,
        ease: 'power4.out',
        stagger: 0.1,
        delay: hasOnEnter ? 0.25 : 0,
      };

      const toExtra = hasOnEnter
        ? {}
        : {
          scrollTrigger: {
            markers: false,
            scrub: 1.5,
            trigger: reveal,
            start: '20% 80%',
            end: 'bottom center',
          },
        };

      tween = gsap.fromTo(
        lines.lines,
        { ...from },
        {
          ...to,
          ...toExtra,
        },
      );
    };

    create();

    let currentWidth = Math.round(reveal.getBoundingClientRect().width);

    const handleResize = debounce(() => {
      const { width } = reveal.getBoundingClientRect();
      const newWidth = Math.round(width);

      if (currentWidth === newWidth) return;

      currentWidth = newWidth;

      tween.kill();
      masks.revert();
      lines.revert();

      create();
    }, 500);

    window.addEventListener('resize', handleResize);
  });
}

export default FnTextReveal;