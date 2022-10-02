import Button from '../Button/Button';

import './CartDropdown.styles.scss';
import CartItem from '../CartItem/CartItem';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
  const { setIsOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
