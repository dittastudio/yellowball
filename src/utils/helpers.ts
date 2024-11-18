const getRandomBetween = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const gsapEasings = [
  "power1.out",
  "power1.inOut",
  "power2.out",
  "power2.inOut",
  "power3.out",
  "power3.inOut",
  "power4.out",
  "power4.inOut",
  "slow(0.7,0.7,false)",
  "circ.out",
  "circ.inOut",
  "expo.out",
  "expo.inOut",
  "sine.out",
  "sine.inOut",
];

export { getRandomBetween, gsapEasings };