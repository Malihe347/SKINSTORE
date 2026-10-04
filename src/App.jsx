import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import 'tailwindcss/theme.css'
import { CartProvider } from "./CartContext";
import CartPage from "./pages/CartPage"; 
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;