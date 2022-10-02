import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const addItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems, productToRemove) =>
  cartItems.filter((item) => item.id !== productToRemove.id);

const decrementItemCount = (cartItems, product) => {
  const productToDecrement = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (productToDecrement.quantity === 1)
    return cartItems.filter((item) => item.id !== product.id);

  if (productToDecrement) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToDecrement.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const CartContext = createContext({
  isOpen: false,
  cartCount: 0,

  cartItems: [],

  setIsOpen: () => {},
  addItemToCart: () => {},
  decreaseQuantity: () => {},
  removeItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) =>
    setCartItems(addItem(cartItems, productToAdd));

  const decreaseQuantity = (product) =>
    setCartItems(decrementItemCount(cartItems, product));

  const removeItemFromCart = (productToRemove) =>
    setCartItems(removeItem(cartItems, productToRemove));

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    cartCount,
    total,
    addItemToCart,
    decreaseQuantity,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
