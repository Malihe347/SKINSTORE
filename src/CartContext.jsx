import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    alert(`Product "${product.name}" has been added to your cart! 🛒`);
  };

  // این تابع جدید را اضافه کردیم
  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const cartCount = cartItems.length;

  // حتماً removeFromCart را اینجا داخل value قرار بده تا در دسترس باشد
  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

