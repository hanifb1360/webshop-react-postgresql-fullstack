import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const ProductDetailsWrapper: React.FC = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <ProductDetails 
      productId={Number(params.id)} 
      onClose={() => navigate('/')} 
    />
  );
};

export default ProductDetailsWrapper;

