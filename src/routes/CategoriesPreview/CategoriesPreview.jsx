import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { selectCategoriesMap } from '../../store/categories/category.select';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const filteredMap = Object.keys(categoriesMap).filter((item) => {
    return !item.includes('_') && item !== 'metadata';
  });

  return (
    <>
      {filteredMap.map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
