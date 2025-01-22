import gsap from 'gsap';

function FnOverlaps() {
  const sections = document.querySelectorAll(
    '[data-js="overlaps"]',
  ) as NodeListOf<HTMLElement>;

  sections.forEach(section => {
    const items = section.querySelectorAll(':scope > li') as NodeListOf<HTMLElement>;

    items.forEach(item => {
      gsap
        .timeline({
          scrollTrigger: {
            markers: false,
            trigger: item,
            scrub: 1.5,
            start: 'top top',
          },
        })
        .fromTo(
          item,
          {
            rotateX: 0,
            scale: 1,
            filter: 'brightness(100%)',
          },
          {
            rotateX: -10,
            scale: 0.85,
            filter: 'brightness(50%)',
          },
          '<',
        );
    });
  });
}

export default FnOverlaps;