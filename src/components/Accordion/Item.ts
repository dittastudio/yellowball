import gsap from 'gsap';

function FnItem() {
  const accordions = document.querySelectorAll(
    '[data-js="accordion-item"]',
  ) as NodeListOf<HTMLElement>;

  const tl = gsap.timeline({ paused: true });

  const close = (item: HTMLElement) => {
    const body = item.querySelector('[data-js-accordion-body]') as HTMLElement;
    const bodyInner = item.querySelector(
      '[data-js-accordion-body-inner]',
    ) as HTMLElement;

    tl.to(bodyInner, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.inOut',
    }).to(
      body,
      {
        height: 0,
        duration: 0.5,
        ease: 'power4.inOut',
      },
      '<',
    );

    item.classList.remove('is-open');
    body.setAttribute('aria-label', 'Open Item');
    body.setAttribute('aria-hidden', 'true');
  };

  const open = (item: HTMLElement) => {
    const body = item.querySelector('[data-js-accordion-body]') as HTMLElement;
    const bodyInner = item.querySelector(
      '[data-js-accordion-body-inner]',
    ) as HTMLElement;

    tl.to(
      body,
      {
        height: 'auto',
        duration: 0.5,
        ease: 'power4.inOut',
        onComplete: () => {
          gsap.set(body, { height: 'auto' }); // Set to auto for flexible height
        },
      },
      '<',
    ).to(
      bodyInner,
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      },
      '<50%',
    );

    item.classList.add('is-open');
    body.setAttribute('aria-label', 'Close Item');
    body.setAttribute('aria-hidden', 'false');
  };

  const toggleAccordion = (accordion: HTMLElement) => {
    tl.clear();

    Array.from(accordions)
      .filter(item => item !== accordion && item.classList.contains('is-open'))
      .forEach(item => close(item));

    const isOpen = accordion.classList.contains('is-open');
    isOpen ? close(accordion) : open(accordion);

    tl.play();
  };

  accordions.forEach(accordion => {
    const header = accordion.querySelector(
      '[data-js-accordion-header]',
    ) as HTMLElement;

    if (header) {
      header.addEventListener('click', () => toggleAccordion(accordion));
    }
  });
}

export default FnItem;