import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <header className="navbar bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Webshop</Link>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </div>
          <div className={`menu ${isOpen ? 'slide-in' : 'slide-out'} lg:flex lg:items-center lg:w-auto`}>
            <button onClick={toggleMenu} className="close-btn text-white">&times;</button>
            <div className="text-sm lg:flex-grow">
              <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/cart" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white" onClick={toggleMenu}>
                Cart
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Navbar;

