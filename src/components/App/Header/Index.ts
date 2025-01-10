import Alpine from 'alpinejs';

function FnIndex() {
  Alpine.store('navigation', {
    isMenuOpen: false,
    isSubMenuOpen: false,

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    closeMenu() {
      this.isMenuOpen = false;
      this.isSubMenuOpen = false;
    },

    toggleSubMenu() {
      this.isMenuOpen = true;
      this.isSubMenuOpen = !this.isSubMenuOpen;
    },
  } as NavigationStore);
}

FnIndex();