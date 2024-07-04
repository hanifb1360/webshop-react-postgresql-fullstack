import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import axios from 'axios';
import Modal from 'react-modal';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 }));
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Product Details"
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
    >
      <div className="bg-white p-8 rounded shadow-lg max-w-md mx-auto">
        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
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



