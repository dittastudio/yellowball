import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FnTicker() {
  const tickers = document.querySelectorAll(
    '[data-js="ticker"]',
  ) as NodeListOf<HTMLElement>;

  tickers.forEach(ticker => {
    const container = ticker.querySelector(
      '[data-js-container]',
    ) as HTMLElement;

    const wrappers = ticker.querySelectorAll(
      '[data-js-wrapper]',
    ) as NodeListOf<HTMLDivElement>;

    const lists = ticker.querySelectorAll(
      '[data-js-list]',
    ) as NodeListOf<HTMLDivElement>;

    if (container && wrappers && lists) {
      let lastProgress = 0;

      ScrollTrigger.create({
        markers: false,
        trigger: ticker,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
        onUpdate: self => {
          const progress = self.progress;

          if (progress < lastProgress) {
            wrappers.forEach(wrapper => {
              wrapper.style.animationPlayState = 'running';
            });

            lists.forEach(list => {
              list.style.animationPlayState = 'paused';
            });
          } else {
            wrappers.forEach(wrapper => {
              wrapper.style.animationPlayState = 'paused';
            });

            lists.forEach(list => {
              list.style.animationPlayState = 'running';
            });
          }

          lastProgress = progress;

          gsap.to(container, {
            x: -container.clientWidth * progress + 1,
          });
        },
      });
    }
  });
}

FnTicker();