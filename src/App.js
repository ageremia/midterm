import './App.css';
import Home from './pages/Home';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
//import { Navbar, NavbarHeader, NavbarItems, NavItem } from 'react-bootstrap-navbar';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <hr /> 
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:product_id" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
