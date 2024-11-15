const getRandomBetween = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const easingsAsBezier = {
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  easeInSine: 'cubic-bezier(0.47, 0.0, 0.745, 0.715)',
  easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
  easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1.0)',
  easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1.0)',
  easeOutQuint: 'cubic-bezier(0.23, 1.0, 0.32, 1.0)',
  easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1.0)',
  easeOutExpo: 'cubic-bezier(0.19, 1.0, 0.22, 1.0)',
  easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1.0)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1.0)',
  easeInOutQuart: 'cubic-bezier(0.77, 0.0, 0.175, 1.0)',
  easeInOutQuint: 'cubic-bezier(0.86, 0.0, 0.07, 1.0)',
  easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  easeInOutExpo: 'cubic-bezier(1.0, 0.0, 0.0, 1.0)',
  easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  easeInBounce: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  easeOutBounce: 'cubic-bezier(0.215, 0.61, 0.355, 1.0)',
  easeInOutBounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

export { getRandomBetween, easingsAsBezier };