import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function insertOnCart(data) {
    const arrCart = [...cart];

    cart.find((el) => {
      if (el.name === data.name) {
        const indice = cart.indexOf(el);
        arrCart.splice(indice, 1);

        el.quantity = data.quantity;
      }
    });

    arrCart.push(data);

    setCart(arrCart);
  }

  function newCart() {
    setCart([]);
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ cart, insertOnCart, newCart }}>
      {children}
    </CartContext.Provider>
  );
}
