interface Window {
  scrollTimeout?: number;
}

interface ImageObject {
  src: string
  alt?: string
  width: number
  height: number
}

interface TagObject {
  title: string;
  color?: ColorTypes;
}

type ColorTypes = 'current' | 'transparent' | 'offblack' | 'black' | 'white' | 'yellow' | 'green' | 'blue' | 'blue-google' | 'purple' | 'navy' | 'navy-light' | 'navy-lighter' | 'navy-lightest' | 'cream' | 'grey' | 'grey-light'
type ShapeTypes = 'circle' | 'square' | 'triangle'
type ThemeTypes = 'light' | 'dark'