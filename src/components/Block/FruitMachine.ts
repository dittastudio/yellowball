import JSConfetti from 'js-confetti'
import { sleep } from '@/utils/helpers';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function FnFruitMachine() {
  const machines = document.querySelectorAll(
    '[data-js="fruit-machine"]',
  ) as NodeListOf<HTMLElement>;

  machines.forEach(machine => {
    const confetti = new JSConfetti()

    const doSpin = async () => {
      machine.classList.add('spin');

      await sleep(3500);

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
  });
}

export default FnFruitMachine;