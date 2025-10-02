import { create } from 'zustand';
import { hitboxData } from '../utils/menuContent';

const useUIStore = create((set, get) => ({
  // 👈 Use 'get' to access current state

  isMenuOpen: false,
  menuContent: null,

  // 1. New Toggle Function (simplest implementation)
  toggleMenu: () => {
    // We use the 'get' function provided by Zustand to read the current state.
    const currentStatus = get().isMenuOpen;
    set({
      isMenuOpen: !currentStatus,
      // Clear content when closing, or keep it when opening/closing the same content
      menuContent: currentStatus ? null : get().menuContent,
    });
  },

  // 2. Modified Open function (Optional: use the toggle function if no key is provided)
  openMenu: (sectionKey) =>
    set({
      isMenuOpen: true,
      menuContent: hitboxData[sectionKey],
    }),

  // 3. Removed closeMenu entirely.
}));

export default useUIStore;
