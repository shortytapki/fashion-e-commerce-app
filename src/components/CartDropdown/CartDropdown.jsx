import Button from '../Button/Button';
import './CartDropdown.styles.scss';
import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';

const CartDropdown = () => {
  const { cartItems } = useContext(DropdownContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
