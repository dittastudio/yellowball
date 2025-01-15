import gsap from 'gsap';

function FnAvatars() {
  const cardAvatars = document.querySelectorAll(
    '[data-js="card-avatars"]',
  ) as NodeListOf<HTMLElement>;

  if (cardAvatars?.length) {
    cardAvatars.forEach(card => {
      const avatars = card.querySelector('[data-js-avatars]') as HTMLElement;

      if (avatars) {
        const images = avatars.querySelectorAll('img');

        if (images?.length) {
          gsap.fromTo(
            images,
            {
              yPercent: 50,
              opacity: 0,
              scale: 0.75,
            },
            {
              yPercent: 0,
              opacity: 1,
              scale: 1,
              stagger: 0.1,
              ease: 'power4.out',
              scrollTrigger: {
                markers: false,
                trigger: card,
                scrub: 1.5,
                start: 'bottom bottom',
                end: 'bottom center',
              },
            },
          );
        }
      }
    });
  }
}

export default FnAvatars;