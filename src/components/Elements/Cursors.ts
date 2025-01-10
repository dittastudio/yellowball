import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FnCursors() {
  const sections = document.querySelectorAll(
    '[data-js="cursors"]',
  ) as NodeListOf<HTMLElement>;

  sections.forEach(section => {
    const cursors = section.querySelectorAll(
      ':scope > *',
    ) as NodeListOf<HTMLElement>;

    const timelines: gsap.core.Timeline[] = [];
    const getRandomDuration = () => gsap.utils.random(1, 3);

    let canMoveX = true;
    let isPlaying = true;

    const createTimeline = (cursor: HTMLElement) => {
      const timeline = gsap.timeline({ repeat: 0 });

      const animate = (direction: number) => {
        const duration = getRandomDuration();

        timeline.clear();

        timeline
          .to(cursor, {
            duration,
            y: direction ? 25 : -25,
            ease: 'sine.inOut',
            onComplete: () => animate(direction ? 0 : 1),
          })
          .to(cursor, {
            duration,
            y: 0,
            ease: 'sine.inOut',
          });
      };

      animate(Math.random() > 0.5 ? 1 : 0);

      return timeline;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canMoveX || !isPlaying) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const percentages = {
        x: mouseX / window.innerWidth,
        y: mouseY / window.innerHeight,
      };

      const rangeX = gsap.utils.mapRange(0, 1, -100, 100, percentages.x);

      cursors.forEach(cursor => {
        gsap.to(cursor, {
          x: `${rangeX}px`,
          duration: 1,
          ease: 'sine.out',
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    const run = () => {
      cursors.forEach(cursor => {
        const timeline = createTimeline(cursor);
        timelines.push(timeline);
      });

      if (section.hasAttribute('data-js-exit')) {
        let delayedCall: gsap.core.Tween | null = null;

        gsap
          .timeline({
            scrollTrigger: {
              markers: false,
              trigger: section,
              start: '-10% top',
              end: 'bottom top',
              scrub: 1.5,
              invalidateOnRefresh: true,
              onEnter: () => {
                canMoveX = false;

                if (isPlaying) {
                  timelines.forEach(timeline => timeline.pause());
                  isPlaying = false;
                }
              },
              onLeaveBack: () => {
                delayedCall?.kill();
                delayedCall = null;

                if (!isPlaying) {
                  delayedCall = gsap.delayedCall(3, () => {
                    ScrollTrigger.refresh();
                    timelines.forEach(timeline => timeline.play());
                    isPlaying = true;
                    canMoveX = true;
                  });
                }
              },
              onLeave: () => {
                canMoveX = false;

                if (isPlaying) {
                  timelines.forEach(timeline => timeline.pause());
                  isPlaying = false;
                }
              },
            },
          })
          .to(cursors, {
            x: (_index, target) => {
              const targetRect = target.getBoundingClientRect();
              const sectionRect = section.getBoundingClientRect();
              const offset = sectionRect.x - (targetRect.x - sectionRect.x);

              return sectionRect.width / 2 - (targetRect.width - offset);
            },
            y: (_index, target) => {
              const targetRect = target.getBoundingClientRect();
              const sectionRect = section.getBoundingClientRect();
              const offset = sectionRect.y - (targetRect.y - sectionRect.y);

              return (
                sectionRect.top +
                (sectionRect.height + sectionRect.height / 4) -
                (targetRect.height - offset)
              );
            },
          })
          .to(
            cursors,
            {
              rotate: index => (index % 2 ? 30 : -30),
              opacity: 0,
            },
            '<15%',
          );
      }
    };

    if (section && cursors.length) {
      run();
    }
  });
}

export default FnCursors;