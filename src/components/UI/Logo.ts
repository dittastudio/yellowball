function FnUILogo() {
  const logos = document.querySelectorAll(
    '[data-js="ui-logo"]',
  ) as NodeListOf<HTMLElement>;

  if (logos) {
    // logos.forEach(logo => {
    //   const container = logo.querySelector(
    //     '[data-js-ui-logo-container]',
    //   ) as HTMLElement;

    //   let timeout: NodeJS.Timeout;

    //   function handleMouseEnter() {
    //     clearTimeout(timeout);
    //     container.classList.add('has-hover');
    //   }

    //   function handleMouseLeave() {
    //     timeout = setTimeout(() => {
    //       container.classList.remove('has-hover');
    //     }, 500);
    //   }

    //   container.addEventListener('mouseenter', handleMouseEnter);
    //   container.addEventListener('mouseleave', handleMouseLeave);
    // });
  }
}

export default FnUILogo;