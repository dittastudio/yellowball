import JSConfetti from 'js-confetti'
import { sleep } from '@/utils/helpers';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function FnFruitMachine() {
  const machines = document.querySelectorAll(
    '[data-js="fruit-machine"]',
  ) as NodeListOf<HTMLElement>;

  const setCanvasDimensions = (machine: HTMLElement, canvas: HTMLCanvasElement) => {
    const top = machine.offsetTop;
    const height = machine.offsetHeight
    const minHeight = window.innerHeight;

    canvas.style.top = `-${top}px`;
    canvas.style.height = `${height + (top * 2)}px`;
    canvas.style.minHeight = `${minHeight}px`;
  }

  machines.forEach(machine => {
    const canvas = machine.querySelector('canvas') as HTMLCanvasElement;

    if (canvas) {
      setCanvasDimensions(machine, canvas);

      window.addEventListener('resize', () => setCanvasDimensions(machine, canvas));

      const confetti = new JSConfetti({ canvas })

      const doSpin = async () => {
        // machine.classList.add('spin');

        const stripsLis = document.querySelectorAll('[data-js-fruit-machine-strip]');
        const strips = document.querySelectorAll('.fruit-machine__strip');

        const tl = gsap.timeline()

        tl.to(strips, {
          y: `${100 / 34 * -32}%`,
          duration: 2.5,
          ease: "power2.in",
          stagger: 0.3,
        }).fromTo(stripsLis, {
          y: `10%`,
        }, {
          y: `0%`,
          duration: 0.5,
          ease: "elastic.out(1.2,0.3)",
          stagger: 0.3,
        }, '<68%')

        await sleep(3800);

        machine.classList.add('spin-complete');

        await confetti.addConfetti({
          confettiColors: [
            "#FFFFFF",
            "#EAFF01",
            "#ADF454",
            "#51DBEA",
            "#A58EF7",
            "#1C1D2C",
            "#3E3E4E",
            "#F7F7F0"
          ]
        })

        confetti.clearCanvas()
      }

      ScrollTrigger.create({
        markers: false,
        trigger: machine,
        start: `top center`,
        once: true,
        onEnter: async () => {
          await sleep(500);

          doSpin();
        },
      });
    }
  });
}

export default FnFruitMachine;