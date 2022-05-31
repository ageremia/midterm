import './App.css';
import Home from './pages/Home';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import { ThemeContext, themes } from './context/themeContext';
import { useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  const [theme, setTheme] = useState(themes.dark);

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
        <ToggleSwitch onToggle={toggleTheme} />

        <hr /> 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:product_id" element={<Product/>} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
