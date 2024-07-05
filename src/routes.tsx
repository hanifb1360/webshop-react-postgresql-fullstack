import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import App from './App';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';

const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetailsWrapper />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

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

export default RoutesComponent;

