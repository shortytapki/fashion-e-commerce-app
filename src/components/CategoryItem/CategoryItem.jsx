import {
  BackgroundImage,
  Body,
  CategoryContainer,
} from './CategoryItem.styles';

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;
