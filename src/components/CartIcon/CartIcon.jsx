import './CartIcon.styles.scss';
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="cart-icon-container" onClick={toggleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
