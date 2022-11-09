import ProductCard from '../ProductCard/ProductCard';
import { Preview, PreviewContainer, Title } from './CategoryPreview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <PreviewContainer>
      <h2>
        <Title>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </PreviewContainer>
  );
};

export default CategoryPreview;
