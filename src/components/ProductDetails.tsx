import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import Modal from 'react-modal';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface ProductDetailsProps {
  productId: number;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId, onClose }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 }));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Product Details"
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
    >
      <div className="bg-white p-8 rounded shadow-lg max-w-md mx-auto">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 mb-4">
          Close
        </button>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Add to Cart
        </button>
      </div>
    </Modal>
  );
};

export default ProductDetails;




