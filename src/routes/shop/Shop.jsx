import Categories from '../../components/categories/categories.component';
import ProductsPage from './ProductsPage/ProductsPage';
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path="/:category" element={<ProductsPage />} />
    </Routes>
  );
};

export default Shop;
