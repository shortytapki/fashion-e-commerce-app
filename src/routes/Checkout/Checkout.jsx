import { useContext } from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { CartContext } from '../../contexts/cart.context';

import './Checkout.styles.scss';

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </header>
      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <span className="total">Total: ${total}</span>
    </div>
  );
};

export default Checkout;
