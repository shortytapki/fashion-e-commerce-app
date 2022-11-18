import { createContext, useReducer } from 'react';

export const CART_ACTIONS_TYPES = {
  OPEN_CART: 'OPEN_CART',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  DECREMENT_ITEM_COUNT: 'DECREMENT_ITEM_COUNT',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

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

  const removeItem = (cartItems, productToRemove) =>
    cartItems.filter((item) => item.id !== productToRemove.id);

  const countTotal = (cartItems) =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0);

  switch (type) {
    case CART_ACTIONS_TYPES.OPEN_CART:
      return {
        ...state,
        isOpened: payload,
      };

    case CART_ACTIONS_TYPES.ADD_ITEM:
      const cartItemAdded = addItem(state.cartItems, payload);
      return {
        ...state,
        cartCount: state.cartCount + 1,
        cartItems: cartItemAdded,
        total: countTotal(cartItemAdded),
      };

    case CART_ACTIONS_TYPES.DECREMENT_ITEM_COUNT:
      const cartItemDecremented = decrementItemCount(state.cartItems, payload);
      return {
        ...state,
        cartCount: state.cartCount - 1,
        cartItems: cartItemDecremented,
        total: countTotal(cartItemDecremented),
      };

    case CART_ACTIONS_TYPES.REMOVE_ITEM:
      const cartItemRemoved = removeItem(state.cartItems, payload);
      return {
        ...state,
        cartCount: state.cartCount - payload.quantity,
        cartItems: cartItemRemoved,
        total: countTotal(cartItemRemoved),
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer.`);
  }
};

export const CartContext = createContext({
  isOpened: false,
  cartCount: 0,
  cartItems: [],
  setIsOpened: () => {},
  addItemToCart: () => {},
  decreaseQuantity: () => {},
  removeItem: () => {},
  total: 0,
});

const INITIAL_STATE = {
  isOpened: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

export const CartProvider = ({ children }) => {
  const [{ isOpened, cartItems, cartCount, total }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setIsOpened = (isOpened) =>
    dispatch({ type: CART_ACTIONS_TYPES.OPEN_CART, payload: isOpened });

  const addItemToCart = (item) =>
    dispatch({ type: CART_ACTIONS_TYPES.ADD_ITEM, payload: item });

  const decreaseQuantity = (item) =>
    dispatch({ type: CART_ACTIONS_TYPES.DECREMENT_ITEM_COUNT, payload: item });

  const removeItemFromCart = (item) =>
    dispatch({ type: CART_ACTIONS_TYPES.REMOVE_ITEM, payload: item });

  const value = {
    isOpened,
    setIsOpened,
    cartCount,
    cartItems,
    addItemToCart,
    decreaseQuantity,
    removeItemFromCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
