import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function FnCursors() {
  const sections = document.querySelectorAll(
    '[data-js="cursors"]',
  ) as NodeListOf<HTMLElement>;

  sections.forEach(section => {
    const cursors = section.querySelectorAll(
      ':scope > *',
    ) as NodeListOf<HTMLElement>;

    const getRandomDuration = () => gsap.utils.random(1, 3);
    const timelines: gsap.core.Timeline[] = [];

    let mouseTween: gsap.core.Tween | null = null;
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
          });
      };

      animate(Math.random() > 0.5 ? 1 : 0);

      return timeline;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canMoveX || !isPlaying) return;

      const x = e.clientX / window.innerWidth;
      const rangeX = gsap.utils.mapRange(0, 1, -100, 100, x);

      if (mouseTween) {
        mouseTween.kill();
      }

      mouseTween = gsap.to(cursors, {
        x: rangeX,
        duration: 1,
        ease: 'sine.out',
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    const runTrigger = () => {
      ScrollTrigger.refresh();

      const triggerAttr = section?.dataset.jsTriggerClosest;
      const triggerEl = triggerAttr ? section.closest(triggerAttr) : section;
      const triggerPoint = triggerEl ? triggerEl : section;

      let delayedCall: gsap.core.Tween | null = null;

      gsap
        .timeline({
          scrollTrigger: {
            markers: false,
            trigger: triggerPoint,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
            invalidateOnRefresh: true,
            onEnter: () => {
              mouseTween?.kill();
              mouseTween = null;
              canMoveX = false;

              timelines.forEach(timeline => timeline.pause());

              isPlaying = false;
            },
            onLeaveBack: () => {
              delayedCall?.kill();
              delayedCall = null;
              isPlaying = false;
              canMoveX = false;

              delayedCall = gsap.delayedCall(2.5, () => {
                ScrollTrigger.refresh();
                timelines.forEach(timeline => timeline.play());

                isPlaying = true;
                canMoveX = true;
              });
            },
            onLeave: () => {
              canMoveX = false;

              timelines.forEach(timeline => timeline.pause());

              isPlaying = false;
            },
          },
        })
        .to(cursors, {
          rotate: index => (index % 2 ? 30 : -30),
          x: (_index, target) => {
            const targetRect = target.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            const newX = centerX - (targetRect.x + targetRect.width / 2);

            return newX;
          },
          y: (_index, target) => {
            const targetRect = target.getBoundingClientRect();
            const sectionRect = section.getBoundingClientRect();
            const offset = sectionRect.y - (targetRect.y - sectionRect.y);

            return sectionRect.bottom - (targetRect.height - offset);
          },
        })
        .to(
          cursors,
          {
            opacity: 0,
          },
          '<50%',
        );
    }

    const run = () => {
      cursors.forEach(cursor => {
        const timeline = createTimeline(cursor);
        timelines.push(timeline);
      });

      if (section.hasAttribute('data-js-exit')) {
        const mm = gsap.matchMedia()

        mm.add({
          isMd: "screen and (min-width: 768px)"
        }, (context) => {
          const { conditions } = context;

          if (!conditions?.isMd) {
            timelines.forEach(timeline => timeline.play());

            isPlaying = true;
            canMoveX = true;

            return
          }

          runTrigger();
        });
      };
    }

    if (section && cursors.length) {
      run();
    }
  });
}

export default FnCursors;