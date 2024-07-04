import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchProducts } from '../features/products/productsSlice';
import ProductDetails from './ProductDetails';

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const productStatus = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  let content;

  if (productStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (productStatus === 'succeeded') {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <button onClick={() => setSelectedProduct(product.id)} className="text-xl font-bold">
              {product.name}
            </button>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    );
  } else if (productStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {content}
      {selectedProduct !== null && (
        <ProductDetails productId={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductList;


