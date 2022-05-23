import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export default function useCart() {
  const cartContext = useContext(CartContext);

  return cartContext;
}
