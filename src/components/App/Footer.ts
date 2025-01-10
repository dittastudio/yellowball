import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FnFooter() {
  const footer = document.querySelector('[data-js="footer"]') as HTMLElement;

  if (footer) {
    const getDateTime = (date = new Date()) => ({
      year: String(date.getFullYear()),
      month: String(date.getMonth() + 1).padStart(2, '0'),
      day: String(date.getDate()).padStart(2, '0'),
      hours: String(date.getHours()).padStart(2, '0'),
      minutes: String(date.getMinutes()).padStart(2, '0'),
    });

    const { year, month, day, hours, minutes } = getDateTime();
    const datetime = `${year}-${month}-${day} ${hours}:${minutes}`;
    const years = footer.querySelectorAll(
      '[data-js-year]',
    ) as NodeListOf<HTMLElement>;

    years.forEach(y => {
      y.textContent = year;
      y.setAttribute('datetime', datetime);
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: footer,
        start: '80% bottom',
        end: 'bottom bottom',
        scrub: 0,
      },
    });

    const footerLogo = footer.querySelector(
      '[data-js-footer-logo]',
    ) as HTMLElement;

    if (footerLogo) {
      tl.from(
        footerLogo,
        {
          opacity: 0,
          y: '20%',
          duration: 1,
          ease: 'linear',
        },
        0,
      );
    }
  }
}

export default FnFooter;