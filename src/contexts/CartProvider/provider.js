import React, { useState, useMemo } from "react";
import { CartContext } from "./context";

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  const removeFromCart = (product) => {
    const newCart = cart.filter(p => (p.sku !== product.sku));
    setCart(newCart);
  }

  const value = useMemo(() => {
    return {
      cart,
      currentProduct,
      addToCart,
      removeFromCart,
      setCurrentProduct: setCurrentProduct,
    }
  });

  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  )
};