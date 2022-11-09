import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from './CheckoutItem.styles';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { addItemToCart, removeItemFromCart, decreaseQuantity } =
    useContext(CartContext);

  const removeHandler = () => removeItemFromCart(item);
  const incrementHandler = () => addItemToCart(item);
  const decrementHandler = () => decreaseQuantity(item);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={decrementHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
