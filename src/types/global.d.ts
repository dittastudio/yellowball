interface Window {
  lenis?: Lenis;
  scrollTimeout?: number;
  Alpine: import('alpinejs').Alpine;
}

type ColorTypes = 'current' | 'transparent' | 'offblack' | 'black' | 'white' | 'yellow' | 'green' | 'blue' | 'blue-google' | 'purple' | 'navy' | 'navy-light' | 'navy-lighter' | 'navy-lightest' | 'cream' | 'grey' | 'grey-light'
type ShapeTypes = 'circle' | 'square' | 'triangle' | 'pentagon'
type ThemeTypes = 'light' | 'dark'
type ColorMainTypes = 'yellow' | 'green' | 'blue' | 'purple'

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

interface HeaderNavigationSubMenuItem {
  text: string;
  url: string;
  color?: ColorTypes;
  shape?: ShapeTypes;
}

interface HeaderNavigationSubMenu {
  heading: string;
  subMenuItems: HeaderNavigationSubMenuItem[];
}

interface HeaderNavigationItem {
  text: string;
  url?: string;
  type?: 'transparent' | 'navy';
  subMenu?: HeaderNavigationSubMenu[];
}

interface HeaderNavigation {
  position: 'left' | 'right';
  menuItems: HeaderNavigationItem[];
}

type NavigationStore = {
  isMenuOpen: boolean;
  isSubMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  toggleSubMenu: () => void;
};
