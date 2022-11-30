import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const getAddedItemPayload = (cartItems, productToAdd) => {
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

const getDecrementedItemPayload = (cartItems, product) => {
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

const getRemoveItemPayload = (cartItems, productToRemove) =>
  cartItems.filter((item) => item.id !== productToRemove.id);

export const setIsOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_OPEN_CART, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = getAddedItemPayload(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decrementItem = (cartItems, item) => {
  const newCartItems = getDecrementedItemPayload(cartItems, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItem = (cartItems, item) => {
  const newCartItems = getRemoveItemPayload(cartItems, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
