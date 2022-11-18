import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './CartIcon.styles.jsx';

const CartIcon = () => {
  const { isOpened, setIsOpened, cartCount } = useContext(CartContext);

  const toggleDropdown = () => setIsOpened(!isOpened);
  return (
    <CartIconContainer onClick={toggleDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
