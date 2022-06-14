import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
  currentProduct: {},
  addToCart: () => null,
  removeFromCart: () => null,
  setCurrentProduct: () => null,
});