import gsap from 'gsap';

function FnStickyMap() {
  const maps = document.querySelectorAll(
    '[data-js="sticky-map"]',
  ) as NodeListOf<HTMLElement>;

  maps.forEach(map => {
    const mapImage = map.querySelector('[data-js-sticky-map-image]') as HTMLImageElement;
    const maskSouthAfrica = map.querySelector("#mask-south-africa-path") as SVGPathElement;
    const maskIndia = map.querySelector("#mask-india-path") as SVGPathElement;
    const maskUsaPath = map.querySelector("#mask-usa-path") as SVGPathElement;
    const markerLondon = map.querySelector("[data-map-london]") as SVGCircleElement;
    const markerSouthAfrica = map.querySelector("[data-map-south-africa]") as SVGCircleElement;
    const markerIndia = map.querySelector("[data-map-india]") as SVGCircleElement;
    const markerUsa = map.querySelector("[data-map-usa]") as SVGCircleElement;

    if (
      maskSouthAfrica &&
      maskIndia &&
      maskUsaPath &&
      markerLondon &&
      markerSouthAfrica &&
      markerIndia &&
      markerUsa
    ) {
      const lengthSouthAfrica = maskSouthAfrica.getTotalLength();
      const lengthIndia = maskIndia.getTotalLength();
      const lengthUsa = maskUsaPath.getTotalLength();

      gsap.set(maskSouthAfrica, {
        strokeDasharray: lengthSouthAfrica,
        strokeDashoffset: lengthSouthAfrica,
      });

      gsap.set(maskIndia, {
        strokeDasharray: lengthIndia,
        strokeDashoffset: lengthIndia,
      });

      gsap.set(maskUsaPath, {
        strokeDasharray: lengthUsa,
        strokeDashoffset: lengthUsa,
      });

      gsap.set([markerLondon, markerSouthAfrica, markerIndia, markerUsa], {
        transformOrigin: `center center`,
        scale: 5,
        opacity: 0,
      });

      gsap.timeline({
        scrollTrigger: {
          markers: false,
          trigger: mapImage,
          endTrigger: map,
          start: 'center bottom',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      })
        .to(markerLondon, {
          scale: 1,
          opacity: 1,
        })
        .to(maskSouthAfrica, {
          strokeDashoffset: 0,
        }, "<")
        .to(markerSouthAfrica, {
          scale: 1,
          opacity: 1,
        })
        .to(maskIndia, {
          strokeDashoffset: 0,
        })
        .to(markerIndia, {
          scale: 1,
          opacity: 1,
        })
        .to(maskUsaPath, {
          strokeDashoffset: 0,
        })
        .to(markerUsa, {
          scale: 1,
          opacity: 1,
        });
    }
  });
}

export default FnStickyMap;