import gsap from 'gsap';

function FnFauxGraph() {
  const graphs = document.querySelectorAll(
    '[data-js="faux-graph"]',
  ) as NodeListOf<HTMLElement>;

  graphs.forEach(graph => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     markers: false,
    //     trigger: footer,
    //     start: '80% bottom',
    //     end: 'bottom bottom',
    //     scrub: 0,
    //   },
    // });
    const shape = graph.querySelector(
      '[data-js="faux-graph-shape"]',
    ) as HTMLElement;
    const line = graph.querySelector(
      '[data-js="faux-graph-line"]',
    ) as HTMLElement;
    const dot = graph.querySelector(
      '[data-js="faux-graph-dot"]',
    ) as HTMLElement;
    const figure = graph.querySelector(
      '[data-js="faux-graph-figure"]',
    ) as HTMLElement;

    if (!shape || !line || !dot || !figure) {
      return;
    }

    const dLineFrom = 'M 0 300 C 300 300 500 300 700 300';
    const dLineTo = 'M 0 300 C 300 300 300 100 700 80';
    const dShapeFrom = `${dLineFrom} L 700 350 L 0 350 Z`;
    const dShapeTo = `${dLineTo} L 700 350 L 0 350 Z`;
    const duration = 2;
    const ease = 'expo.inOut';

    // function numberWithCommas(x: number) {
    //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    gsap
      .timeline({
        // repeat: -1,
        scrollTrigger: {
          scroller: '.modal',
          markers: false,
          trigger: graph,
          start: 'top center',
          // end: 'bottom bottom',
          scrub: false,
        },
      })
      .fromTo(
        line,
        {
          attr: {
            d: dLineFrom,
          },
        },
        {
          duration: duration,
          ease: ease,
          attr: {
            d: dLineTo,
          },
        },
      )
      .fromTo(
        shape,
        {
          attr: {
            d: dShapeFrom,
          },
        },
        {
          duration: duration,
          ease: ease,
          attr: {
            d: dShapeTo,
          },
        },
        '<',
      )
      .fromTo(
        dot,
        {
          attr: {
            cy: 300,
          },
        },
        {
          duration: duration,
          ease: ease,
          attr: {
            cy: 82,
          },
        },
        '<',
      )
      .from(
        figure,
        {
          textContent: 0,
          duration: duration,
          snap: { textContent: 1 },
          ease: ease,
          onUpdate: function () {
            if (figure.textContent) {
              console.log(figure.textContent);
              figure.textContent = parseInt(
                figure.textContent,
              ).toLocaleString();
            }
          },
        },
        '<',
      );
  });
}

export default FnFauxGraph;
