import { gsap } from 'gsap';
import SplitType from 'split-type';
// import { debounce } from '@/utils/helpers';

function FnTextScrub() {
  const splitTypes = document.querySelectorAll(
    "[data-js-text-scrub-content]",
  ) as NodeListOf<HTMLElement>;

  splitTypes.forEach((char, index) => {
    const text = new SplitType(char, {
      types: 'chars,words',
    });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: true,
      },
      opacity: 0.1,
      ease: 'power2.out',
      stagger: 0.1,
    });

    console.log(text);
  });
}

export default FnTextScrub;