import gsap from 'gsap';

function FnCardEffect() {
  const perspective = '1000px';
  const delta = 90;
  const cards = document.querySelectorAll(
    '[data-js-effect]',
  ) as NodeListOf<HTMLElement>;

  cards.forEach(card => {
    const effects = card.dataset.jsEffect?.split('|').filter(Boolean) || [];

    if (effects.length) {
      const { width, height } = card.getBoundingClientRect();

      if (effects.includes('glow') || effects.includes('tilt')) {
        const inner = card.firstElementChild as HTMLElement;
        const midWidth = width / 2;
        const midHeight = height / 2;

        card.addEventListener('mousemove', e => {
          const cursPosX = e.pageX - card.offsetLeft;
          const cursPosY = e.pageY - card.offsetTop;
          const cursCenterX = midWidth - cursPosX;
          const cursCenterY = midHeight - cursPosY;

          if (effects.includes('glow')) {
            // Used for glow.
            card.style.setProperty('--x', `${cursPosX}px`);
            card.style.setProperty('--y', `${cursPosY}px`);
          }

          // Used for tilt and skew.
          if (effects.includes('tilt')) {
            inner.style.transform = `perspective(${perspective}) rotateX(${cursCenterY / delta}deg) rotateY(${-cursCenterX / delta}deg)`;
            inner.classList.remove('transition-transform');
          }
        });

        card.addEventListener('mouseleave', () => {
          inner.style.transform = `perspective(${perspective}) rotateX(0deg) rotateY(0deg)`;
          inner.classList.add('transition-transform');
        });
      }

      const shape = card?.querySelector('[data-js="shape"]') as HTMLElement;

      if (card && shape && effects.includes('shape')) {
        const shapeRect = shape.getBoundingClientRect();
        const shapeWidth = shapeRect.width;
        const shapeHeight = shapeRect.height;
        const give = shapeWidth / 2;

        let posX = gsap.utils.random(0, width / 2 - shapeWidth);
        let posY = gsap.utils.random(0, height / 2);
        let speedX = Math.random() >= 0.5 ? 0.2 : -0.2;
        let speedY = Math.random() >= 0.5 ? 0.2 : -0.2;

        function animate() {
          posX += speedX;
          posY += speedY;

          if (posX <= -give || posX + shapeWidth / 2 >= width) {
            speedX *= -1;
          }
          if (posY <= -give || posY + shapeHeight / 2 >= height) {
            speedY *= -1;
          }

          shape.style.transform = `translate(${posX}px, ${posY}px)`;

          requestAnimationFrame(animate);
        }

        animate();
      }
    }
  });
}

export default FnCardEffect;
