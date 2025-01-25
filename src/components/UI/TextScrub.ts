import { gsap } from 'gsap';
import SplitType from 'split-type';
// import { debounce } from '@/utils/helpers';

function FnTextScrub() {
  const textScrubs = document.querySelectorAll('[data-js="text-scrub"]') as NodeListOf<HTMLElement>;

  textScrubs.forEach((textScrub) => {
    const splitTypes = textScrub.querySelectorAll(
      "[data-js-text-scrub-chars]",
    ) as NodeListOf<HTMLElement>;

    const charsArray: any[] = [];

    splitTypes.forEach((paragraph, _) => {
      const text = new SplitType(paragraph, {
        types: 'chars, words',
      });

      if (text.chars) {
        charsArray.push(...text.chars);
      }
    })

    console.log(charsArray);

    // splitTypes.forEach((paragraph, _) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textScrub,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: true,
      },
    });

    // const text = new SplitType(paragraph, {
    //   types: 'chars,words',
    // });

    tl.from(charsArray, {
      opacity: 0,
      y: '-5%',
      skewY: -5,
      scale: 0.9,
      transformOrigin: 'top left',
      ease: 'power2.out',
      duration: 1.5,
      stagger: 0.1,
    });
    // });
  });
}

export default FnTextScrub;