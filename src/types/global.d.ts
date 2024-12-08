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

type ColorTypes = 'green' | 'blue' | 'yellow' | 'purple' | 'white' | 'navy'
type ShapeTypes = 'circle' | 'square' | 'triangle'