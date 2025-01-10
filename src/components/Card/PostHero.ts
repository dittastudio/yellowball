function FnPostHero() {
  const heros = document.querySelectorAll(
    '[data-js=card-post-hero]',
  ) as NodeListOf<HTMLElement>;

  heros.forEach(hero => {
    const imageBlur = hero.querySelector(
      '[data-js-card-post-hero-bg]',
    ) as HTMLElement;

    const cardMouseOver = (event: any) => {
      const { top, left, width, height } = imageBlur.getBoundingClientRect();

      hero.style.setProperty(
        '--x',
        String(event.clientX - (left + Math.floor(width / 2))),
      );
      hero.style.setProperty(
        '--y',
        String(event.clientY - (top + Math.floor(height / 2))),
      );
    };

    const cardMouseOut = () => {
      hero.style.setProperty('--x', '0');
      hero.style.setProperty('--y', '0');
    };

    hero.addEventListener('mousemove', cardMouseOver);
    hero.addEventListener('mouseout', cardMouseOut);
  });
}

export default FnPostHero;