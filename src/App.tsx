import './App.css';
import Home from './pages/Home';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product.tsx';
import { ThemeContext, themes } from './context/themeContext';
import { useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch.tsx';
import { Theme } from './types/Theme';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';
import { ProductType } from './types/ProductType';

interface CartType {
  cart?: [ProductType]
}

function App() {
  const [theme, setTheme] = useState<Theme>(themes.dark);

  const cart:CartType = useSelector<CartType>(state => state.cart);

  const toggleTheme = () => {
    setTheme((prevValue) =>
      prevValue === themes.dark ? themes.light : themes.dark
    );
  };

  return (
    <ThemeContext.Provider value={{ theme: theme}}>
      <div className="App" id="app" style={{ backgroundColor: theme.background }}>

        <Link to="/" style={{ color: theme.foreground }}>Home</Link>
        <Link to="/products" style={{ color: theme.foreground }}>Products</Link>
        <Link to="/cart" style={{ color: theme.foreground }}>Cart ({cart.cart.length})</Link>
        <ToggleSwitch onToggle={toggleTheme} />

        <hr /> 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:productId" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
