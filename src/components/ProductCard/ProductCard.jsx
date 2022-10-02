import './ProductCard.styles.scss';
import Button from '../Button/Button';
import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(DropdownContext);

  const addToCartHandler = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCartHandler}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
