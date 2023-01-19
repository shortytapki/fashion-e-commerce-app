import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.select';
import { CategoryView, Title } from './Category.styles.jsx';
import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../../components/Spinner/Spinner';

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryView>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryView>
      )}
    </>
  );
};

export default Category;
