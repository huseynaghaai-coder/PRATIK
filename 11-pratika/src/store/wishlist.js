import { create } from "zustand";

export const useWishlistStore = create((set, get) => ({
  items: [],
  toggleWishlist: (product) => {
    const exists = get().items.find((item) => item.id === product.id);
    if (exists) {
      set({ items: get().items.filter((item) => item.id !== product.id) });
    } else {
      set({ items: [...get().items, product] });
    }
  },
  isInWishlist: (id) => !!get().items.find((item) => item.id === id),
}));
