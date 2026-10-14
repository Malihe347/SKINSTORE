import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartProvider } from "./CartContext";
import CartPage from "./pages/CartPage"; 
import CheckoutPage from "./components/CheckoutPage";
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
             <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<div className="p-10 text-center text-gray-500">Page not found.</div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;