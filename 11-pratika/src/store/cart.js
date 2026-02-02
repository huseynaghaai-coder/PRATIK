import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  addToCart: (product) => {
    const exists = get().items.find((item) => item.id === product.id);
    if (exists) {
      set({
        items: get().items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ items: [...get().items, { ...product, quantity: 1 }] });
    }
  },
  removeFromCart: (id) =>
    set({ items: get().items.filter((item) => item.id !== id) }),
}));
