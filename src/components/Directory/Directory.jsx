import CategoryItem from '../CategoryItem/CategoryItem';
import { Categories } from './Directory.styles';

const Directory = ({ categories }) => {
  return (
    <Categories>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Categories>
  );
};

export default Directory;
