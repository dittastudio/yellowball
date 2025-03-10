import gsap from 'gsap';

function FnButtonScrollToTop() {
  const buttons = document.querySelectorAll(
    '[data-js="scroll-to-top"]',
  ) as NodeListOf<HTMLButtonElement>;

  buttons.forEach(button => {
    const scrollToTop = () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: 0,
        ease: 'power3.inOut',
      });
    };

    button.addEventListener('click', scrollToTop);
  });
}

export default FnButtonScrollToTop;
