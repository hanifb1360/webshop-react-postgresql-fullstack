import React from 'react';
import './styles/App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <main className="container mx-auto p-4">
        <ProductList />
      </main>
    </div>
  );
}

export default App;



