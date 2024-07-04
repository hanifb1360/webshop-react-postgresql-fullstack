import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchProducts } from '../features/products/productsSlice';

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const productStatus = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;

  if (productStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (productStatus === 'succeeded') {
    content = (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}: ${product.price}
          </li>
        ))}
      </ul>
    );
  } else if (productStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Products</h1>
      {content}
    </div>
  );
};

export default ProductList;
