import { CategoriesContext } from '../../contexts/categories.context';
import { useContext } from 'react';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const filteredMap = Object.keys(categoriesMap).filter(
    (item) => !item.includes('_') && item !== 'metadata'
  );

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
