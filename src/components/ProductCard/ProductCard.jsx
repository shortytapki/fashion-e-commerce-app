import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from './ProductCard.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addToCartHandler}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
