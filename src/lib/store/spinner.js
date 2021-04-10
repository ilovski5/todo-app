import vanillaStore from 'zustand/vanilla';
import create from 'zustand'

export const VanillaStore = vanillaStore((set) => ({
  open: false,
  show: () => set({ open: true }),
  hide: () => set({ open: false }),
}));

export const RequestsStore = create(VanillaStore);
