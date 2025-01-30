function FnUILogo() {
  const logos = document.querySelectorAll(
    '[data-js="ui-logo"]',
  ) as NodeListOf<HTMLElement>;

  if (logos) {
    logos.forEach(logo => {
      let timeout: NodeJS.Timeout;

      function handleMouseEnter() {
        clearTimeout(timeout);
        logo.classList.add('has-hover');
      }

      function handleMouseLeave() {
        timeout = setTimeout(() => {
          logo.classList.remove('has-hover');
        }, 500);
      }

      logo.addEventListener('mouseenter', handleMouseEnter);
      logo.addEventListener('mouseleave', handleMouseLeave);
    });
  }
}

export default FnUILogo;