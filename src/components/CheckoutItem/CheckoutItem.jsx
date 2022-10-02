import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './CheckoutItem.styles.scss';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { addItemToCart, removeItemFromCart, decreaseQuantity } =
    useContext(CartContext);

  const removeHandler = () => removeItemFromCart(item);
  const incrementHandler = () => addItemToCart(item);
  const decrementHandler = () => decreaseQuantity(item);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
