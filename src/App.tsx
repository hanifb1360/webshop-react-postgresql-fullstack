
import './styles/App.css';
import { Link } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Webshop</Link>
          <Link to="/cart" className="text-xl">Cart</Link>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <ProductList />
      </main>
    </div>
  );
}

export default App;

