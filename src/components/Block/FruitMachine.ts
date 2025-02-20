import confetti from 'canvas-confetti';
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

  const triangle = confetti.shapeFromPath({
    path: 'M1.50815 70.7666C-0.8649 74.8682 2.09484 80 6.83342 80H85.1666C89.9052 80 92.8649 74.8682 90.4918 70.7666L51.3253 3.0713C50.1406 1.02377 48.0703 0 46 0C43.9297 0 41.8594 1.02377 40.6747 3.0713L1.50815 70.7666ZM46 18.4376L74.4991 67.6953H17.5009L46 18.4376Z',
  });

  const square = confetti.shapeFromPath({
    path: 'M5.52002 5.32373H27.52V27.3237H5.52002V5.32373ZM3.02002 0.32373C1.63931 0.32373 0.52002 1.44302 0.52002 2.82373V29.8237C0.52002 31.2044 1.63931 32.3237 3.02002 32.3237H30.02C31.4007 32.3237 32.52 31.2044 32.52 29.8237V2.82373C32.52 1.44302 31.4007 0.32373 30.02 0.32373H3.02002Z',
  });

  const circle = confetti.shapeFromPath({
    path: 'M16.5 27C10.4249 27 5.5 22.0751 5.5 16C5.5 9.92487 10.4249 5 16.5 5C22.5751 5 27.5 9.92487 27.5 16C27.5 22.0751 22.5751 27 16.5 27ZM16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 0 16.5 0C7.66344 0 0.5 7.16344 0.5 16C0.5 24.8366 7.66344 32 16.5 32Z',
  });

  const pentagon = confetti.shapeFromPath({
    path: 'M17.0001 5.58654L5.69281 13.7739L10.0049 27H23.9953L28.3074 13.7739L17.0001 5.58654ZM18.4663 0.475082L32.715 10.7922C33.5942 11.4288 33.9622 12.56 33.6257 13.5921L28.1866 30.2749C27.8512 31.3038 26.8919 32 25.8098 32H8.19046C7.10832 32 6.14903 31.3038 5.8136 30.2749L0.374527 13.5921C0.0380617 12.56 0.406002 11.4288 1.2852 10.7922L15.5339 0.475082C16.4087 -0.158361 17.5915 -0.158361 18.4663 0.475082Z',
  });

  machines.forEach(machine => {
    const canvas = machine.querySelector('canvas') as HTMLCanvasElement;
    const container = machine.querySelector('[data-js-fruit-machine-container]') as HTMLElement;
    const scrollButton = machine.querySelector('[data-js-fruit-machine-scroll]') as HTMLButtonElement;

    if (scrollButton) {
      scrollButton.addEventListener('click', () => {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: container.offsetTop + container.offsetHeight,
            offsetY: window?.innerHeight / 2
          },
          ease: 'power3.inOut',
        });
      });
    }

    if (canvas) {
      setCanvasDimensions(machine, canvas);

      window.addEventListener('resize', () => setCanvasDimensions(machine, canvas));

      const myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true
      });

      const realisticBurst = (particleRatio: number, direction: 'left' | 'right', opts: any) => {
        myConfetti({
          ...opts,
          origin: { x: direction === 'left' ? -0.1 : 1.1, y: 0.6 },
          angle: direction === 'left' ? 30 : 150,
          particleCount: Math.floor(200 * particleRatio),
          scalar: 1.25,
        })
      }

      const burst = (direction: 'left' | 'right') => {
        realisticBurst(0.25, direction, {
          spread: 86,
          startVelocity: 75,
          shapes: [triangle],
          colors: ['#EAFF01']
        });
        realisticBurst(0.2, direction, {
          spread: 60,
          shapes: [square],
          colors: ['#ADF454']
        });
        realisticBurst(0.35, direction, {
          spread: 100,
          decay: 0.91,
          shapes: [circle],
          colors: ['#51DBEA']
        });
        realisticBurst(0.1, direction, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          shapes: [pentagon],
          colors: ['#A58EF7']
        });
      }

      const stripItems = machine.querySelectorAll('li');
      const stripImages = machine.querySelectorAll('li img');
      const startDepths = Array.from(stripImages).map(img => Number(getComputedStyle(img).getPropertyValue('--fruit-strip-depth')));
      const endDepth = -31.45;

      let isSpinning = false;
      let isSpinningDown = true;

      const doSpin = async () => {
        isSpinning = true;
        const tl = gsap.timeline()

        tl
          .to(stripImages, {
            '--fruit-strip-depth': (index: number) => isSpinningDown ? endDepth : startDepths[index],
            duration: 2.5,
            ease: "power2.in",
            stagger: 0.2,
          })
          .to(stripItems, {
            y: '2%',
            duration: 0,
          }, '<75%')
          .to(stripItems, {
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
            stagger: 0.2,
          }, '<')
          .add(() => {
            burst('left')
            burst('right')
          }, '-=0.25');

        await sleep(tl.duration() * 1000 + 500);

        isSpinning = false;
        isSpinningDown = !isSpinningDown;
      }

      machine.addEventListener('click', () => {
        if (isSpinning) return;

        doSpin();
      });

      ScrollTrigger.create({
        markers: false,
        trigger: machine,
        start: `-10% top`,
        onEnter: async () => {
          if (isSpinning) return;

          doSpin();
        },
        onEnterBack: async () => {
          if (isSpinning) return;

          doSpin();
        }
      });
    }
  });
}

export default FnFruitMachine;