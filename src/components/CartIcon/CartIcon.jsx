import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { setIsOpen } from '../../store/cart/cart.action';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.select';
import { CartIconContainer, ItemCount } from './CartIcon.styles.jsx';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleDropdown = () => dispatch(setIsOpen(!isOpened));
  return (
    <CartIconContainer onClick={toggleDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
