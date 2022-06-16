import React, { useState, useMemo } from "react";
import { CartContext } from "./context";

const getRef = (product) => {
  return `${product.sku}${product.color !== undefined ? '-' + product.color : ''}${product.size !== undefined ? '-' + product.size : ''}`;
}

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, {
      ...product,
      ref: getRef(product),
    }]);
  }

  const removeFromCart = (product) => {
    const newCart = cart.filter(p => (p.ref !== product.ref));
    setCart(newCart);
  }

  const value = {
      cart,
      currentProduct,
      addToCart,
      removeFromCart,
      setCurrentProduct: setCurrentProduct,
    };

  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  )
};