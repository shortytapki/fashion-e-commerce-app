import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  Body,
  CategoryContainer,
} from './CategoryItem.styles';

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const navigateHandler = () => navigate(route);
  return (
    <CategoryContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;
