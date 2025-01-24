import gsap from 'gsap';

function FnValues() {
  const values = document.querySelectorAll(
    '[data-js="block-values"]',
  ) as NodeListOf<HTMLElement>;

  values.forEach(value => {
    const sections = value.querySelectorAll(
      '[data-js-block-values-section]',
    ) as NodeListOf<HTMLElement>;

    sections.forEach(section => {
      const yellowDots = section.querySelectorAll(
        '[data-js-block-values-yellow-dot]',
      ) as NodeListOf<HTMLElement>;

      const blueCircle = section.querySelector(
        '[data-js-block-values-blue-circle]',
      ) as HTMLElement;

      const yellowTriangle = section.querySelector(
        '[data-js-block-values-yellow-triangle]',
      ) as HTMLElement;

      const purplePentagon = section.querySelector(
        '[data-js-block-values-purple-pentagon]',
      ) as HTMLElement;

      const greenSquare = section.querySelector(
        '[data-js-block-values-green-square]',
      ) as HTMLElement;

      if (blueCircle) {
        gsap.fromTo(blueCircle, {
          y: '150%',
        }, {
          y: '-150%',
          ease: 'linear',
          scrollTrigger: {
            markers: false,
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      if (yellowTriangle) {
        gsap.fromTo(yellowTriangle, {
          y: '50%',
          rotate: '0deg',
        }, {
          y: '-150%',
          rotate: '-45deg',
          ease: 'linear',
          scrollTrigger: {
            markers: false,
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      if (purplePentagon) {
        gsap.fromTo(purplePentagon, {
          y: '100%',
          rotate: '0deg',
        }, {
          y: '-100%',
          rotate: '45deg',
          ease: 'linear',
          scrollTrigger: {
            markers: false,
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      if (greenSquare) {
        gsap.fromTo(greenSquare, {
          y: '100%',
          rotate: '-45deg',
        }, {
          y: '-100%',
          rotate: '0deg',
          ease: 'linear',
          scrollTrigger: {
            markers: false,
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      yellowDots.forEach(yellowDot => {
        if (yellowDot) {
          gsap.fromTo(yellowDot, {
            y: '300%',
          }, {
            y: '-300%',
            ease: 'linear',
            scrollTrigger: {
              markers: false,
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }
      });

      const images = section.querySelectorAll(
        '[data-js-block-values-image]',
      ) as NodeListOf<HTMLElement>;

      images.forEach(image => {
        if (image) {
          gsap.fromTo(image, {
            y: '0%',
          }, {
            y: '-20%',
            ease: 'linear',
            scrollTrigger: {
              markers: false,
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });

      const medias = section.querySelectorAll(
        '[data-js-block-values-media]',
      ) as NodeListOf<HTMLElement>;

      medias.forEach(media => {
        if (media) {
          gsap.fromTo(media, {
            y: '25%',
          }, {
            y: '-25%',
            ease: 'linear',
            scrollTrigger: {
              markers: false,
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }
      });
    });
  });
}

export default FnValues;