import Button from '../Button/Button';

import CartItem from '../CartItem/CartItem';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartDropdownContainer, CartItems } from './CartDropdown.styles';

const CartDropdown = () => {
  const { setIsOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </CartItems>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
