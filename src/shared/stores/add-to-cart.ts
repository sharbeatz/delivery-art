import { create } from "zustand";
import type { FoodMenuType } from "../types/food-types";
import type { FoodCartType } from "../types/food-types";

interface AddToCartStore {
  items: FoodCartType[];
  addItem: (item: FoodMenuType) => void;
  removeItem: (id: string) => void;
  decrementItem: (id: string) => void;
  incrementItem: (id: string) => void;
}
// ({ items: [...state.items, item] }));
// переименовать переменные
export const useAddToCartStore = create<AddToCartStore>((set) => ({
  items: [],
  addItem: (item: FoodMenuType) => {
    console.log("Добавление", item);
    set((state) => {
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        return {
          items: state.items.map((cartItem) =>
            cartItem.id === existingItem.id
              ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
              : cartItem,
          ),
        };
      } else {
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }
    });
  },

  decrementItem: (id: string) => {
    set((state) => {
      const existingItem = state.items.find((cartItem) => cartItem.id === id);
      if (existingItem && existingItem.quantity! > 1) {
        return {
          items: state.items.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity! - 1 }
              : cartItem,
          ),
        };
      } else {
        return {
          items: state.items.filter((item) => item.id !== id),
        };
      }
    });
  },
  incrementItem: (id: string) => {
    set((state) => {
      const item = state.items.find((item) => item.id === id);
      console.log(item);
      return {
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity! + 1 } : item,
        ),
      };
    });
  },

  removeItem: (id: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
}));
