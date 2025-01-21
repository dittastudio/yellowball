function FnCardBackgroundGradientHoverEffect() {
  const cards = document.querySelectorAll(
    '[data-js="card-background-gradient-hover-effect"]',
  ) as NodeListOf<HTMLElement>;

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const { top, left, width } = card.getBoundingClientRect();
      const backgroundSize = width * 1.5;

      const cursPosX = e.clientX - left - backgroundSize / 2;
      const cursPosY = e.clientY - top - backgroundSize / 2;

      card.style.setProperty('--x', `${cursPosX}px`);
      card.style.setProperty('--y', `${cursPosY}px`);
    });
  });
}

export default FnCardBackgroundGradientHoverEffect;