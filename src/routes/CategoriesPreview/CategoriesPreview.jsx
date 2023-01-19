import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.select';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const filteredMap = Object.keys(categoriesMap).filter((item) => {
    return !item.includes('_') && item !== 'metadata';
  });
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        filteredMap.map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
