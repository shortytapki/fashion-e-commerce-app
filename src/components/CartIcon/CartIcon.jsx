import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './CartIcon.styles.jsx';

const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <CartIconContainer onClick={toggleDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
