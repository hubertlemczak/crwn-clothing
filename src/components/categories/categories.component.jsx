import './categories.styles.scss';

import CategoryItem from '../category-item/category-item.component';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl:
        'https://images.unsplash.com/photo-1566927467984-6332be7377d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl:
        'https://images.unsplash.com/photo-1637797124175-9e48c9112397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    },
    {
      id: 3,
      title: 'glasses',
      imageUrl:
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    },
    {
      id: 4,
      title: 'shoes',
      imageUrl:
        'https://images.unsplash.com/photo-1641788756481-f69c7bc4d9f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 5,
      title: 'munchies',
      imageUrl:
        'https://images.unsplash.com/photo-1577349516274-37ff88a53627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
