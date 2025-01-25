import { gsap } from 'gsap';
import SplitType from 'split-type';
// import { debounce } from '@/utils/helpers';

function FnTextScrub() {
  const splitTypes = document.querySelectorAll(
    "[data-js-text-scrub-content]",
  ) as NodeListOf<HTMLElement>;

  splitTypes.forEach((paragraph, _) => {
    console.log(paragraph);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraph,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: true,
      },
    });

    const text = new SplitType(paragraph, {
      types: 'chars,words',
    });

    tl.from(text.chars, {
      opacity: 0,
      y: '-5%',
      skewY: -5,
      scale: 0.9,
      transformOrigin: 'top left',
      ease: 'power2.out',
      duration: 1.5,
      stagger: 0.1,
    });
  });
}

export default FnTextScrub;